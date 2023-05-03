import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState("Mandy")
  const [person,setPerson] = useState({name: 'bob',age: 30})
  const [age,setAge] = useState(22)

  const clickMe = () => {
    setName("Mieu")
    setPerson({name: 'Mandy Mieu', age: 22})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Enter your name: </Text>
      <TextInput style={styles.input} onChangeText={(typedName)=>setName(typedName)} placeholder="Enter your name"/> 
      <Text style={styles.textStyle}>Enter your name: </Text>
      <TextInput style={styles.input} onChangeText={(typedAge)=>setAge(typedAge)} placeholder="Enter your age" keyboardType="numeric"/> 
      <Text>My name is {name} and my age is {age} years.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
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
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 150
  }
});
