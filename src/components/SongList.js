import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Header, Icon, InputGroup, Button, Input, TouchableHighlight,
    View
} from 'react-native';

import Card from './Card';
import CardItem from './CardItem';


class SongList extends Component {
    constructor() {
        super();
    }


    render() {
        return(
            <Card>
                <CardItem>
                    <Text>Hello from the other side</Text>
                    <Text>FSdfsdfsdf</Text>
                </CardItem>

                <CardItem>
                    <Text>Adele</Text>
                </CardItem>
            </Card>


        );
    }
}


export default SongList;