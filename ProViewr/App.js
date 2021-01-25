import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
		</View>
	);
}

function ShareScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Share Screen!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();
const TabNavigator = Tab.Navigator;
const TabScreen = Tab.Screen;

export default function App() {
	return (
		<NavigationContainer>
			<TabNavigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						switch (route.name) {
							case 'Home':
								iconName = 'call';
								break;
							case 'Settings':
								iconName = 'settings';
								break;
							case 'ScreenShare':
								iconName = 'share-outline';
								break;
							default:
								iconName = 'ios-information-circle';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray'
				}}
			>
				<TabScreen name="Home" component={HomeScreen} />
				<TabScreen name="ScreenShare" component={ShareScreen} />
				<TabScreen name="Settings" component={SettingsScreen} />
			</TabNavigator>
		</NavigationContainer>
	);
}
