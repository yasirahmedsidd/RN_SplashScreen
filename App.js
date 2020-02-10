import React, {useEffect} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {console.log('App Started')}
      <Text style={{color: 'black'}}>App</Text>
      <Text style={{color: 'black'}}>Started</Text>
      <Text style={{color: 'black'}}>Splash</Text>
      <Text style={{color: 'black'}}>Screen</Text>

      <Button title="Press" onPress={() => alert('pressed')} />
      <TextInput style={{backgroundColor: 'white'}} />
    </View>
  );
};

export default App;
