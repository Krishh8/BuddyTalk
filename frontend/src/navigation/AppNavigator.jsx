import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ChatsScreen from '../screens/ChatsScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import AuthNavigator from './AuthNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='AuthStack' component={AuthNavigator} />
                <Stack.Screen name='ChatsScreen' component={ChatsScreen} />
                <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator