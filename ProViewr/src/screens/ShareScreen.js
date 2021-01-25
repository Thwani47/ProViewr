import React from 'react';
import { Dimensions, Text, View, StyleSheet, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { styles } from '../styles';

const { screenStyles } = styles;

export default function Share() {
	return (
		<View style={screenStyles.container}>
			<Card containerStyle={screenStyles.card}>
				<Text>Allow remote host to connect</Text>
				<Text>Your ID: 123 123 123</Text>
				<Text>Connection Password: 98547513 </Text>
			</Card>

			<Card>
				<Text>Connect to remote host</Text>
				<TextInput
					style={screenStyles.textInput}
					placeholder="Enter remote Connection ID"
					placeholderTextColor="#004646"
					textContentType="username"
					returnKeyType="next"
				/>
				<Button title="Connect" />
			</Card>
		</View>
	);
}

const customStyles = StyleSheet.create({
	container: {
		minHeight: Math.round(Dimensions.get('window').height)
	}
});
