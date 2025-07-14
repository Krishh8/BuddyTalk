import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import OTPScreen from '../screens/Auth/OTPScreen';
import PhoneNumberScreen from '../screens/Auth/PhoneNumberScreen';
import ProfileInputScreen from '../screens/Auth/ProfileInputScreen';
const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name='PhoneNumberScreen' component={PhoneNumberScreen} />
            <AuthStack.Screen name='OTPScreen' component={OTPScreen} />
            <AuthStack.Screen name='ProfileInputScreen' component={ProfileInputScreen} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator