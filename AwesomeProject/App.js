import React, { Component } from 'react';
import { Alert, Button, TextInput, View, 
        StyleSheet, TouchableOpacity,
        Text,Dimensions, Image, AsyncStorage, Share
 } from 'react-native';
import styled from "styled-components/native"; // 3.1.6
import Carousel from 'react-native-snap-carousel'; // 3.6.0
//import Menu, {MenuItem} from "react-native-material-menu";
import {} from "react-native";
import { Header, Avatar, Icon } from 'react-native-elements';
import { SafeAreaView } from "react-navigation";


export default class App extends Component {
 
  constructor(props){
    super();
    this.state = {
      errors: []
    }
    this.props = props;
    this._carousel = {};
    this.init();
  }


  init(){
    this.state = {
      videos: [
        {
          id: "0",
          thumbnail: "https://images.pexels.com/photos/1804035/pexels-photo-1804035.jpeg?cs=srgb&dl=beverage-blue-sky-blur-1804035.jpg&fm=jpg",
          title: "0kkkkkkkkkkk"
        }, {
          id: "1",
          thumbnail: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?cs=srgb&dl=clean-clear-cold-416528.jpg&fm=jpg",
          title: "1"
        }, {
          id: "2",
          thumbnail: "https://images.pexels.com/photos/103567/pexels-photo-103567.jpeg?cs=srgb&dl=beach-cc0-coast-103567.jpg&fm=jpg",
          title: "2"
        }
      ],
        videos2: [
        {
          id: "0",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRXe9h1avtMKqOdfvAleUgTF6sYdDGokPhySHbSMhiE-NZ6jX",
          title: "0kkkkkkkkkkk"
        }, {
          id: "1",
          thumbnail: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?cs=srgb&dl=clean-clear-cold-416528.jpg&fm=jpg",
          title: "1"
        }, {
          id: "2",
          thumbnail: "https://images.pexels.com/photos/103567/pexels-photo-103567.jpeg?cs=srgb&dl=beach-cc0-coast-103567.jpg&fm=jpg",
          title: "2"
        }
      ]
    };

    console.log("ThumbnailCarousel Props: ", this.props)
  }

  handleSnapToItem(index){
    console.log("snapped to ", index)
  }

  _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
        <ThumbnailBackgroundView>
          <CurrentVideoTO
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
              }}
          >
            <CurrentVideoImage source={{ uri: item.thumbnail }} />
          </CurrentVideoTO>
            {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            <VideoTitleText>{item.title}</VideoTitleText>
        </ThumbnailBackgroundView>
    );
  }

  render = () => {

    console.log("videos: updating")

    return (
        <View style={styles.container}>
        <Header 
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Blu', style: { color: '#fff' } }}
            rightComponent={{ icon: '', color: '#fff' }}
            outerContainerStyle={{
            backgroundColor: '#354c8b',
            justifyContent: 'space-around',
            height:0,
            marginTop:0
  }}
            containerStyle={{
            backgroundColor: '#354c8b',
            justifyContent: 'space-around',
            height:56,
            marginTop:0
  }}
        />
            <View>
                <Text>Produtos</Text>
            </View>
            <CarouselBackgroundView>
                <Carousel
                  ref={ (c) => { this._carousel = c; } }
                  data={this.state.videos}
                  renderItem={this._renderItem.bind(this)}
                  onSnapToItem={this.handleSnapToItem.bind(this)}
                  sliderWidth={360}
                  itemWidth={256}
                  layout={'default'}
                  firstItem={0}
                />
            </CarouselBackgroundView>
            <CarouselBackgroundView>
                <Carousel
                  ref={ (c) => { this._carousel = c; } }
                  data={this.state.videos2}
                  renderItem={this._renderItem.bind(this)}
                  onSnapToItem={this.handleSnapToItem.bind(this)}
                  sliderWidth={360}
                  itemWidth={256}
                  layout={'default'}
                  firstItem={0}
                />
            </CarouselBackgroundView>
        </View>
    );
  }
}




const VideoTitleText = styled.Text`
  color: white;
  top: 28;
  justify-content: center;
`
const CurrentVideoImage = styled.Image`
  top: 30;
  box-shadow: 5px 10px;
  width: 256;
  height: 144;
  border-radius: 10;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 256; 
`;

const CurrentVideoTO = styled.TouchableOpacity`
`
const CarouselBackgroundView = styled.View`
  color: red;
  height: 200;
  width: 100%;
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding:0,
    marginTop: 0
    }
  })







// import React, { Component } from 'react';
// import { Alert, Button, TextInput, View, 
//         StyleSheet, TouchableOpacity,
//         Text,Dimensions, Image
//  } from 'react-native';
// import { CheckBox } from 'react-native-elements';
// const { width } = Dimensions.get('window');
// import { createBottomTabNavigator, 
//           createAppContainer, 
//           createStackNavigator } from 'react-navigation';


// export default class App extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }
  
//   onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }

//   render() {
//     return (
//       <View style={styles.container}>

//         <Image
//           source={require('./assets/logo.png')}
//           style={ { width:150, height:97, marginBottom:50  } }
//         />
//         <TextInput
//           value={this.state.username}
//           onChangeText={(username) => this.setState({ username })}
//           placeholder={'E-mail'}
//           style={styles.input}
//         />
//         <TextInput
//           value={this.state.password}
//           onChangeText={(password) => this.setState({ password })}
//           placeholder={'Senha'}
//           secureTextEntry={true}
//           style={styles.input}
//         />

//         <TouchableOpacity onPress={this.onLogin.bind(this)} style={styles.forgotPass}>
//             <Text style={styles.buttomTextF}>Esqueceu a senha?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this.onLogin.bind(this)} style={styles.buttom}>
//             <Text style={styles.buttomTextEntrar}>Entrar</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={this.onLogin.bind(this)} style={styles.buttom}>
//             <Text style={styles.buttomTextCriar}>Criar nova conta</Text>
//         </TouchableOpacity>

//       </View>
//     );
//   }
// }

// const ELEMENT_WIDTH = width - 60;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   input: {
//     width: ELEMENT_WIDTH,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#3b444b',
//     marginBottom: 10,
//     //fontSize:25
//     //borderRadius:40
//   },
//     buttom: {
//         marginTop:10,
//         marginBottom:5,
//         padding:10,
//         alignItems: 'center',
//         backgroundColor:'#354c8b',
//         width: ELEMENT_WIDTH,
//         borderRadius:40,
//         //borderWidth: 1
//     },

//     forgotPass: {
//     alignItems: 'flex-start',
//     //backgroundColor: '#354c8b',
//     width: ELEMENT_WIDTH,
//     //marginTop:10,
//     padding:5,
//     //marginLeft:4,
//     marginBottom:5,
//     height: 20
//     },
//     buttomTextEntrar: {
//         fontSize:20,
//         color:'#FFF',
//         alignItems: 'center'
//     },
//     buttomTextF: {
//         fontSize:13,
//         //color:'#232b2b',
//         color:'#232b2b'

//     },
//     buttomTextCriar: {
//         fontSize:17,
//         color:'#FFF',
//         alignItems: 'center'
//     },
// });





























































































































































































// import React from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import Simples from './components/Simples'
// import ParImpar from './components/ParImpar'
// import { Inverter, MegaSena } from './components/Mult'
// import Menu from './Menu'

// export default class App extends React.Component {
//   render() {

//     return (
//       <View style={styles.container}>
//         <Simples texto='flexx'/>
//         <ParImpar numero={31}/>
//         <Inverter texto='React Nativo'/>
//         <MegaSena numeros={6} />
//       </View>
//     );
//   }
// }




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   f20: {
//     fontSize: 40
//   }
// });

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

