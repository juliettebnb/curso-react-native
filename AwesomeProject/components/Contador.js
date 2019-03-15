import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

export default class Contador extends Component {
	reder(){
		return(
			<View>
				<Text>{this.props.numero}</Text>
			</View>

			)
	}
}