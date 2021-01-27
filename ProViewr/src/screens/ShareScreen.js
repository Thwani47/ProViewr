import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dimensions, Text, View, StyleSheet, TextInput } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { styles } from '../styles';
import {startPresentingScreen} from '../redux/appSlice'

const { screenStyles } = styles;

export default function Share() {
	const disatch = useDispatch();
	const { appState, isPresenting } = useSelector((state) => state.app);
	const [ remoteConnectionId, setRemoteConnectionId ] = useState({
		remoteConnectionIdValue: '',
		remoteConnectionIdOuputValue: ''
	});

	const onRemoteConnectionIdChange = (value) => {
		// TODO: this needs to be fixed. It does not work
		var outputValue = value;
		if (
			remoteConnectionId.remoteConnectionIdValue.length == 2 ||
			remoteConnectionId.remoteConnectionIdValue.length == 6
		) {
			outputValue += '-';
		}

		setRemoteConnectionId({
			...remoteConnectionId,
			remoteConnectionIdOuputValue: outputValue,
			remoteConnectionIdValue: value
		});
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
					value={remoteConnectionId.remoteConnectionIdOuputValue}
					returnKeyType="done"
				/>
				<Button title="Connect" onPress={() => disatch(startPresentingScreen())} />
			</Card>
		</View>
	);
}

const customStyles = StyleSheet.create({
	container: {
		minHeight: Math.round(Dimensions.get('window').height)
	}
});
