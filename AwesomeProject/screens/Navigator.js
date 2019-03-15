import React from 'react'
import { 
    createBottomTabNavigator,
    createSwitchNavigator } from 'react-navigation'
import App from '../App'
import HomeScreen from './HomeScreen'


const StackNavigator = createStackNavigator({
  Login: App,
  Home: HomeScreen,
});


export default { StackNavigator };
//import Icon from 'react-native-vector-icons/FontAwesome'

// import Feed from './screens/Login'

// const MenuRoutes = {
//     Login: {
//         name: 'Login',
//         screen: Login,
//         navigationOptions: {
//             title: 'Login',
//             tabBarIcon: ({ tintColor }) =>
//                 <Icon name='home' size={30} color={tintColor} />
//         }
//     },

//     Profile: {
//         name: 'Profile',
//         screen: Profile,
//         navigationOptions: {
//             title: 'Profile',
//             tabBarIcon: ({ tintColor: color }) =>
//                 <Icon name='user' size={30} color={color} />
//         }
//     }
// }

// const MenuConfig = {
//     initialRouteName: 'Login',
//     tabBarOptions: {
//         showLabel: false,
//     }
// }

// const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
// export default MenuNavigator