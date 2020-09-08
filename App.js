import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LatestSeeAll from './components/Explore/LatestSeeAll';
import TopImages from './components/Explore/TopImage';

export default function App() {
  return (
    <View style={styles.fullScreen}>
      
      <View style={styles.yellowTopScreen}>
      <View>
      <TopImages imageUri={require('./assets/guitar.jpg')} name="placeHolder number 1" />

      </View>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({

  yellowTopScreen : { flex: 0.45,
     backgroundColor: '#FCB614',
     borderBottomLeftRadius:24},
     
  fullScreen : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor:'black'},
});
