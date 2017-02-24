import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, Header, Icon, InputGroup, Button, Input, TouchableHighlight,
    View, NativeModules, Navigator, NavigationBar
} from 'react-native';


export default  class HeaderApp extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return(
            <View style={styles.header}>
                <Text style={styles.textSyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header : {
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        shadowColor : '#000000',
        shadowOffset : {width : 0, height : 2},
        shadowOpacity : 0.2,
        elevation : 2,
        position : 'relative'

    },

    textSyle : {
        fontSize : 20,
    }
});
