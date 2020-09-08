import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

class LatestSeeAll extends Component {
    render() {
        return (
            <View>
                <Text style={styles.LeftText}>{this.props.leftText}
                </Text>
                <Text style={styles.RightText}>{this.props.rightText}
                </Text>


            </View>
        )
    }
}

export default LatestSeeAll;

const styles = StyleSheet.create({
    RightText :{
        position: 'absolute',
        width: 200,
        height: 36,
        left: 24,
        top: 39,
        color:'#FFFFFF'

    },
    LeftText:{
        position: 'absolute',
left: '0%',
right: '0%',
top: '0%',
bottom: '0%',
textAlign: 'right',

color:'#FFFFFF'
    }





});