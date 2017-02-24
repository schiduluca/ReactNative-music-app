import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class CardItem extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor : '#ffffff',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#dddddd',
        position : 'relative'
    }
});

export default CardItem;