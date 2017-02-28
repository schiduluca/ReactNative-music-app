import React, { Component } from 'react';
import {
    AppRegistry, NativeModules,
    StyleSheet, ScrollView,
    Text, Header, Button,
    View
} from 'react-native';

import axios from 'axios';
import SongModel from '../models/SongModel';
import SongCell from './SongCell';
import localStorageUtils from '../utils/LocalStorageUtils';


class SongList extends Component {
    constructor() {
        super();
        this.state = {songs: null};
        axios.get("https://itunes.apple.com/search?term=beatles")
            .then((result) => {
                return result.data.results;
            })
            .then((res) => {
                this.setState({songs: res});
            });


        console.log(localStorageUtils.readFromFile());
    }


    render() {

        this.list = null;

        if(this.state.songs) {
            this.list = this.state.songs.map((song, i) => {
                return <SongCell key={i} song={new SongModel(song)}/>
            })
        }

        return(
           <ScrollView>
               {this.list}
           </ScrollView>

        );
    }
}


export default SongList;