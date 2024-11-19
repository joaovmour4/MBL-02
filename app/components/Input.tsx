import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

interface props{
    placeholder: string
    value: string
    setValue: Function
}

export default function Input(props: props) {
  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={text => props.setValue(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        fontSize: 18,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'black'
    }
})