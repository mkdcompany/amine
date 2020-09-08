import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { render } from 'react-dom';
import TopImages from './components/Explore/TopImages';
import BottomImages from './components/Explore/BottomImages';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

export default class App extends React.Component {
  render(){
  return (
     <View style={styles.fullScreen}>

      <View style={styles.yellowTopScreen}>
      <Feather style={{position: 'absolute',width: 20,height: 13.89,left: 33,top: 38.17,borderRadius:1}} name="menu" size={24} color="white" />
      <AntDesign style={{position: 'absolute',width: 20,height: 20.46,left: 315,top: 37
}} name="search1" size={24} color="white" />
        <ScrollView
        scrollEventThrottle={16}>
          <View style={{ flex : 1 , paddingTop: 74}}>
            <Text style={{fontSize:24,fontStyle:'normal',fontWeight:'900',textAlign:'center',}} >
              Hello Alex!
            </Text>
            <View style={{ height :130, marginTop:20}}>
              <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>
                <TopImages imageUri={require('./assets/5.jpg')} name="About flow and our motivations" />
                <TopImages imageUri={require('./assets/7.jpg')} name="placeHolder number 1" />
                <TopImages imageUri={require('./assets/8.jpg')} name="placeHolder number 2" />
                
              </ScrollView>
            </View>
            
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, backgroundColor: 'black',borderBottomLeftRadius:45}}>
        <ScrollView
        scrollEventThrottle={16}>
          <View style={{ flex : 1 , paddingTop: 74}}>
           
            <View style={{ height :130, marginTop:20}}>
              <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}>
                <BottomImages imageUri={require('./assets/1.jpg')} name="Is still Tunisia a good place to live in?" />
                <BottomImages imageUri={require('./assets/2.jpg')} name="Does university really increases our creativity?" />
                <BottomImages imageUri={require('./assets/3.jpg')} name="Massa turpis eget habitant sed sed at." />
                <BottomImages imageUri={require('./assets/6.jpg')} name="this is a placeholder" />
                
              </ScrollView>
            </View> 
            <View>
              <Text style={styles.latestPodcast}>this is a test</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      </View>
  );
}
}

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
  fullScreen : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor:'black'},
      
  yellowTopScreen : { width:'100%',height:'44.33%', backgroundColor: '#FCB614',borderBottomLeftRadius:24},
  latestPodcast:{position: 'absolute',
    width: 201.11,
    height: 36,
    left: 24,
    top: 396,
    color: '#fff',
    flex:1
  }
});
