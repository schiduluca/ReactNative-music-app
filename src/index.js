import React, {Component} from 'react'
import {View, Text, ScrollView, NativeModules } from 'react-native';
import Header from './components/HeaderApp';
import SongModel from './models/SongModel';
import axios from 'axios';
import SongList from './components/SongList';
import SongCell from './components/SongCell';


class Main extends Component {
    constructor() {
        super();
        this.state = {songs : null};
        axios.get("https://itunes.apple.com/search?term=beatles")
            .then((result) => {
                return result.data.results;
            })
            .then((res) => {
                this.setState({songs : res});
            });


        var LocalStorage = NativeModules.LocalStorage;
        LocalStorage.addNumber(10, (error, number) => {
            console.log( "Hello " , number);
            console.log("Error", error);
            this.setState({number : number})
        })

        LocalStorage.show("dsadasd",LocalStorage.Toast);

    }

    render() {
        this.list = null;

        if(this.state.songs) {
            this.list = this.state.songs.map((song, i) => {
                return <SongCell key={i} song={new SongModel(song)}/>
            })
        }

        return (
            <ScrollView>
                <Text>{this.state.number}</Text>
                <Header headerText="Music App" />

                {this.list}
            </ScrollView>
        )
    }

};

export default Main