import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

class TopImages extends Component {
    render() {
        return (
            <View style={{height : 309,width :180,top : 12,marginLeft:30}}>
                  <View style={{flex:2}}>
                    <Image source={this.props.imageUri}
                    style={styles.topImage} />
                    </View>
                  <View style={{flex:1, paddingTop:10,paddingLeft:10,position:'absolute'}}>
                    <Text style={styles.setColorWhite}>{this.props.name}
                    </Text>

                  </View>

                </View>
        )
    }
}

export default TopImages;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    setColorWhite : {
      color: '#FFFFFF'
    },
    topImage : {flex:1,width: null, height : null, resizeMode:'cover',borderBottomLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24

    },
  });
