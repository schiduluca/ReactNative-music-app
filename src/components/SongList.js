import React, { Component } from 'react';
import {
    AppRegistry, NativeModules,
    StyleSheet, ScrollView,
    Text, Header, Button, Dimensions,
    View, TextInput, ListView
} from 'react-native';
import * as Progress from 'react-native-progress';

import SongModel from '../models/SongModel';
import SongListItem from './SongListItem';
import searchSongs from '../redux/actions/fetchSongs';
import HeaderApp from './HeaderApp';
import {connect} from 'react-redux';
let ScreenHeight = Dimensions.get("window").height;




class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {songs: null, dataSource : []};

    }

    componentDidMount() {
        this.props.dispatch(searchSongs('beatles'));
    }

    componentWillReceiveProps(props) {
        this.state.songs = props.songs.songs;
        this.state.downloadedSongs = props.songs.downloadedSongs;
        this.state.showDownloaded = props.songs.showDownloaded;

    }

    render() {

        this.list = null;
        if(this.state.songs && this.props.songs.fetching == false) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state.dataSource = ds.cloneWithRows(this.state.songs.map((song) => {
                return new SongModel(song)}));
            this.list = <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <SongListItem song={rowData}/>}
            />;
        } else {
            this.list = <Progress.Circle size={100} indeterminate={true} />
        }

        if(this.state.showDownloaded === true) {
            console.log("IT IS TRUE");
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            let list = [];
            for(var i = 0; i < this.state.downloadedSongs.length; i++) {
                list.push(new SongModel(this.state.downloadedSongs.item(i)));
            }
            this.state.dataSource = ds.cloneWithRows(list);
            this.list = <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <SongListItem song={rowData}/>}
            />;
        }

        return(
            <View style={styles.header}>
                <HeaderApp/>
                {this.list}
            </View>


        );
    }
}

const styles = StyleSheet.create({
    header: {
        height : ScreenHeight - 65,
    }
});

const mapStateToProps = state => {
    return {
        songs : state.songs,
        downloadedSongs : state.downloadedSongs,
        showDownloaded : state.showDownloaded,

    }
};



export default connect(mapStateToProps)(SongList);