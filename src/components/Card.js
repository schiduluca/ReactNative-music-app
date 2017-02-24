import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';


class Card extends Component {
    render() {
        return(
            <View style={styles.cardStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle : {
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
    }
});

export default Card;