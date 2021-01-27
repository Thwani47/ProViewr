import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import store from './redux/store';

// Screens
import Home from './screens/HomeScreen';
import Settings from './screens/SettingsScreen';
import Share from './screens/ShareScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = Tab.Navigator;
const TabScreen = Tab.Screen;

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<TabNavigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;

							switch (route.name) {
								case 'Call':
									iconName = 'call';
									break;
								case 'Settings':
									iconName = 'settings';
									break;
								case 'Share':
									iconName = 'share-outline';
									break;
								default:
									iconName = 'ios-information-circle';
							}

							return <Ionicons name={iconName} size={size} color={color} />;
						}
					})}
					tabBarOptions={{
						activeTintColor: 'red',
						inactiveTintColor: 'gray'
					}}
				>
					<TabScreen name="Call" component={Home} />
					<TabScreen name="Share" component={Share} />
					<TabScreen name="Settings" component={Settings} />
				</TabNavigator>
			</NavigationContainer>
		</Provider>
	);
}
