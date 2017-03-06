import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Header,InputGroup, Button, TouchableHighlight,
    View, NativeModules, Navigator, NavigationBar, TextInput
} from 'react-native';
import LocalStorageUtils from '../utils/LocalStorageUtils';
import {connect} from 'react-redux';
import searchSongs from '../redux/actions/fetchSongs';
import getDownLoadedSongsSuccess from '../redux/actions/getDownloadedSongsSuccess';
import SQLDatabaseUtils from '../utils/SQLDatabaseUtils';






class HeaderApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle : "",
            textToSearch : ""
        };
        this.fetchTitle();

    }

    fetchTitle() {
        LocalStorageUtils.asyncRead().then((result) => {
            this.setState({headerTitle: result})
        });
    }



    search() {
        this.props.dispatch(searchSongs(this.state.textToSearch));
    }

    getDownloads() {
        var sqlite = new SQLDatabaseUtils();

        sqlite.getDB().transaction((tx) => {
            tx.executeSql(SQLScripts.SELECT_ALL, [], (tx, results) => {
                this.props.dispatch(getDownLoadedSongsSuccess(results.rows))
            });
        });
    }



    render() {

        return(
            <View style={styles.header}>
                <TextInput style={styles.textInputStyle} value={this.state.textToSearch}
                    onChangeText={(text) => this.setState({textToSearch : text})}/>
                <Button title="Search"  onPress={this.search.bind(this)}/>
                <Button title="GetDownloaded" onPress={this.getDownloads.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'flex-start',
        flexDirection : 'row',
        paddingTop : 2,
        shadowColor : '#000000',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.2,
        elevation : 2,

    },
    textInputStyle: {
        margin : 5,
        backgroundColor: '#fff',
        height : 30,
        flex : 2,
        borderWidth : 1,
        borderColor : '#aaa',
        borderRadius : 5,
    },
});

const mapStateToProps = state => {
    return {
        state : state
    }
};

export default connect(mapStateToProps)(HeaderApp);