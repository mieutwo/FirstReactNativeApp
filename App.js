import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName] = useState("Mandy")

  const clickMe = () => {
    setName("Mieu")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
      <Text style={styles.textStyle}>This is react native</Text>
      <Button title='Click Me' color='red' onPress={()=>alert("Welcome to my app")} disabled={false}></Button>
      <View style={styles.button}>
        <Button title='Change' color='black' onPress={clickMe}></Button>
      </View>
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
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    margin: 20
  }
});
