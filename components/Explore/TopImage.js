import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground,Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
const {height, width } = Dimensions.get('window');
class TopImages extends Component {
    render() {
        return (
            <View style={{width: width-40,height:200,marginTop:20}}>
                  <View >
                    <Image source={this.props.imageUri}
                    style={styles.topImage} />
                    </View>
                  <View style={{flex:1, paddingTop:10,paddingLeft:10,position:'absolute'}}>
                    <Text style={styles.setColorWhite}>{this.props.name}
                    </Text>
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
    topImage : {flex:1,width: null, height : null, resizeMode:'cover',borderRadius:6
    },
  });