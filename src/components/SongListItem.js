import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet, Dimensions,
    Text, Header, Image, InputGroup, Button, Input, TouchableHighlight,
    View, NativeModules, Navigator, NavigationBar
} from 'react-native';

import {Actions} from 'react-native-router-flux';


class SongCell extends Component {
    constructor(props) {
        super(props);
    }

    handleOnPress() {
        Actions.details(this.props);
    }

    render() {
        return(
                <View style={styles.container}>
                    <Image source={{ uri: this.props.song.image}} style={styles.photo} />
                    <Text style={styles.text}>
                        {`${this.props.song.artistName} ${this.props.song.trackName}`}
                    </Text>
                    <Button title="Press me" onPress={this.handleOnPress.bind(this)}></Button>
                </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth : 1,
        borderRadius : 2,
        borderColor :'#dddddd',
        borderBottomWidth : 0,
        shadowColor : '#000000',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.1,
        shadowRadius : 2,
        elevation : 1,
        marginLeft : 5,
        marginRight : 5,
        marginTop : 10

    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
});

export default SongCell;