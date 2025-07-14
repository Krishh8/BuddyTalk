import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput, useTheme } from 'react-native-paper'

const PhoneNumberScreen = () => {
    const theme = useTheme()
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[styles.container, { backgroundColor: theme.colors.background }]} >
                <TextInput label="Phone Number" value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                >

                </TextInput>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PhoneNumberScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})