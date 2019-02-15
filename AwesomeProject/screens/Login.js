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