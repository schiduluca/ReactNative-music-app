import React, {Component} from 'react'
import {View, Text, ScrollView, NativeModules, TextInput } from 'react-native';
import configureStore from './redux/SongStore';
import {Provider} from 'react-redux';
import NavigatorApp from './components/NavigatorApp';

const songStore = configureStore();

class Main extends Component {
    constructor() {
        super();

    }



    componentDidMount() {
    }


    render() {
        return (
            <Provider store={songStore}>
                <View>
                    <NavigatorApp/>
                </View>
            </Provider>

        )
    }
}

export default Main