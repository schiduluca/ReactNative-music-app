import React, {Component} from 'react'
import {View, Text, ScrollView, NativeModules, TouchableOpacity } from 'react-native';
import Header from './components/HeaderApp';
import SongList from './components/SongList';
import action from './redux/SongStore';
import ActionTypes from './constants/ActionTypes';

class Main extends Component {
    constructor() {
        super();

    }



    render() {
        return (
            <View>
                <TouchableOpacity onClick={() => action(ActionTypes.FETCH_SONGS)}>
                    <Header headerText="Music App" />
                </TouchableOpacity>
                <SongList />
            </View>
        )
    }
}

export default Main