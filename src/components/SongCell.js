import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Header, Image, InputGroup, Button, Input, TouchableHighlight,
    View, NativeModules, Navigator, NavigationBar
} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';


class SongCell extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <View>
                <Card>
                    <CardItem>
                        <Text style={styles.textStyle}>{this.props.song.trackName}</Text>
                        <Text style={styles.textStyle}>{this.props.song.artistName}</Text>
                    </CardItem>

                    <CardItem>
                        <Text style={styles.textStyle}>{this.props.song.country}</Text>
                        <Image style={{width: 100, height: 100}}
                                         source={{ uri : this.props.song.image}}/>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle : {
        fontFamily : 'sofia' || 'Sofia-Regular'
    }
});

export default SongCell;