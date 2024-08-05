import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
// import {  } from 'react-native'

const CustomInput = (style, placeholder, keyboardType, value, onChange) => {
    return (
        <View>

            <TextInput
                style={[styles.input, style]}
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={onChange}
                value={value}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({})