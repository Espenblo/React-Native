import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Badge from './components/Badge';


export default function App() {
  const [counter, setCounter] = useState(0);
 
  const increase = () => {
    setCounter(cur => cur +1);
  };

  return (
    <View style={styles.button} >
      
      <Button title="Push" onPress={increase}/>
      <Badge counted={counter} req={3}/>
      <Badge counted={counter} req={5}/>
      <Badge counted={counter} req={7}/>

    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});
