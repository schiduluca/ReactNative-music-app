import {Navigator, View, Text} from 'react-native';
import React , {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import SongList from './SongList';
import SongDetails from './SongDetails';



class NavigatorApp extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Router style={{paddingTop : 65}}>
                <Scene key="list" component={SongList} title="Home page"/>
                <Scene key="details" component={SongDetails} title="Details"/>
            </Router>
        );
    }

}


export default NavigatorApp;