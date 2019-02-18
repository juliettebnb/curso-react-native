import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});





























































































































































































// import React from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import Simples from './components/Simples'
// import ParImpar from './components/ParImpar'
// import { Inverter, MegaSena } from './components/Mult'
// import createDrawerNavigator from './Menu'

// export default class App extends React.Component {
//   render() {

    // return (
    //   <View style={styles.container}>
    //     <Simples texto='flexx'/>
    //     <ParImpar numero={31}/>
    //     <Inverter texto='React Nativo'/>
    //     <MegaSena numeros={6} />
    //   </View>
    // );
//   }
// }




// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// //   f20: {
// //     fontSize: 40
// //   }
// // });

// import React, { Component } from 'react';
// import { 
//     StyleSheet,
//     Text,
//     View,
//     TouchableOpacity,
//     TextInput
//      } from 'react-native'

// class Login extends {
//     state = {
//         email: '',
//         password: ''
//     }

//     login = () => {
//         this.props.navegation.navigate('Main')

//     }
//     render(){
//         return (
//             <View style={StyleSheet.container}>
//                 <TextInput placeholder='Email' style={styles.input}
//                     autoFocus={true} keyboardType='email-address'
//                     value={this.state.email}
//                     onChangeText={email => this.setState({ email })} />
//                 <TextInput placeholder='Senha' style={styles.input} 
//                 secureTextEntry={true} value={this.state.password}
//                 onChangeText={password => this.setState({ password })}/>
//                 <TouchableOpacity onPress={this.login} style={styles.buttom}>
//                     <Text style={styles.buttomText}>Login</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => {}} style={styles.buttom}>
//                     <Text style={styles.buttomText}>Criar nova conta...</Text>
//                 </TouchableOpacity>
//             </View>
//         )

//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       //backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     buttom: {
//       marginTop:30,
//       padding:10,
//       backgroundColor:'#4286f4'
//     },
//     buttomText: {
//         fontSize:20,
//         color:'#FFF',
//     },
//     input:{
//         marginTop:20,
//         width:'90%',
//         backgroundColor:'#EEE',
//         height:40,
//         boderWidth:1,
//         borderColor:'#333',

//     }
//   })

//   export default Login

