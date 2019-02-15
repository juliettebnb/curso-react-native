import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './components/Simples'
import ParImpar from './components/ParImpar'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='flexx'/>
        <ParImpar numero={31}/>
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
  f20: {
    fontSize: 40
  }
});

