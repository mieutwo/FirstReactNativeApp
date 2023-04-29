import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Mandy Mieu</Text>
      <Text style={styles.textStyle}>This is react native</Text>
      <Button title='Click Me' color='red' onPress={()=>alert("Welcome to my app")} disabled={false}></Button>
      <Button title='OK' color='white' onPress={()=>alert('More button stuff')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: "white"
  }
});
