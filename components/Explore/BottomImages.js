import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class BottomImages extends Component {
    render() {
        return (
            <View style={{height : 147,width :136,marginLeft:20}}>
                  <View style={{flex:2}}>
                    <Image source={this.props.imageUri}
                    style={{flex:1,width: null, height : null, resizeMode:'cover',borderBottomLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderTopLeftRadius: 16}} />

                  </View>
                  <View style={{flex:1, paddingTop:10,paddingLeft:10}}>
                    <Text style={styles.setColorWhite} >{this.props.name}
                      
                    </Text>

                  </View>

                </View>
        )
    }
}

export default BottomImages;

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
  });
