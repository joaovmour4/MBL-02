import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responseData } from '..'

interface props{
  responseData?: responseData
}

export default function Info(props: props) {
  console.log(props.responseData)
  return (
    <View>
      <Text style={styles.text}>Temperatura: {props.responseData?.main?.temp.toFixed(2)}</Text>
      <Text style={styles.text}>Umidade: {props.responseData?.main?.humidity}%</Text>
      <Text style={styles.text}>Descrição: {props.responseData?.wheater[0].description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})