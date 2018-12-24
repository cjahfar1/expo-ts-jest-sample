import * as React from 'react';
import { Text, View } from 'react-native';
import { MyAPI } from './lib/myAPI'
export default () => {
    const lat = MyAPI.getCityLatLong('riyadh').then((d)=>
    {
        console.log(d);
    });
    console.log(lat);
    return (
    
  <View style={{ marginTop: 50 }}>
    <Text>Hello Expo!</Text>
  </View>
)};
