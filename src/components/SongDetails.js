import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet, Dimensions,
    Text, Header, Image, InputGroup, Button, Input, TouchableHighlight,
    View, NativeModules, Navigator, NavigationBar
} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import SQLDatabaseUtils from '../utils/SQLDatabaseUtils';
import {connect} from 'react-redux';
import downloadSong from '../redux/actions/downloadSong';
import SQLScripts from '../utils/SQLScripts';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


class SongCell extends Component {
    constructor(props) {
        super(props);
        this.state = {title : "Download"};
        var sqlUtils = new SQLDatabaseUtils();
        console.log("Id", this.props.song.trackId);
        sqlUtils.getDB().transaction((tx) => {
            tx.executeSql(SQLScripts.SELECT_BY_ID.replace(":trackId", this.props.song.trackId), [], (tx, results) => {
                if(results.rows.length == 1) {
                    this.setState({title : "Downloaded"});
                }
            });
        });


    }


    handleOnPress() {
        this.props.dispatch(downloadSong(this.props.song));
        this.setState({title : "Downloaded"});
    }

    render() {
        return(
            <View style={styles.container}>
                <Card>
                    <CardItem>
                        <Text style={styles.textStyle}>{this.props.song.trackName}</Text>
                        <Text style={styles.textStyle}>{this.props.song.artistName}</Text>
                    </CardItem>

                    <CardItem>
                        <Text style={styles.textStyle}>{this.props.song.country}</Text>
                    </CardItem>
                    <CardItem>
                        <Image style={{width: deviceWidth - 23, height: deviceWidth - 23}}
                               source={{ uri : this.props.song.image}}/>
                    </CardItem>
                    <CardItem>
                        <Button onPress={this.handleOnPress.bind(this)} title={this.state.title}/>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle : {
        fontFamily : 'ubuntu' || 'Ubuntu-Medium',
        margin : 3
    },
    container : {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#fff'
    }
});

const mapStateToProps = state => {
    return {
        songs : state.songs,
    }
};



export default connect(mapStateToProps)(SongCell);