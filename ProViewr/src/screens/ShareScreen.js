import React, { useState } from 'react';
import { Dimensions, Text, View, StyleSheet, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { styles } from '../styles';

const { screenStyles } = styles;

export default function Share() {
	const [ remoteConnectionId, setRemoteConnectionId ] = useState('');

	const onRemoteConnectionIdChange = (value) => {
		// TODO: this needs to be fixed. It does not work
		if (value.length == 3 || value.length == 7){
			value += "-"
		}
		setRemoteConnectionId(value);
		// enable connect button
	};
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
					onChangeText={(text) => onRemoteConnectionIdChange(text)}
					style={screenStyles.textInput}
					keyboardType="decimal-pad"
					placeholder="Enter remote Connection ID"
					placeholderTextColor="#004646"
					textContentType="telephoneNumber"
					maxLength={12}
					value={remoteConnectionId}
					returnKeyType="done"
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
