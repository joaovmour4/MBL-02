import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responseData } from '..'

interface props{
  responseData?: responseData
}

export default function Info(props: props) {
  return (
    <View>
      <Text style={styles.text}>Temperatura: {props.responseData?.main?.temp.toFixed(2)} ºC</Text>
      <Text style={styles.text}>Umidade: {props.responseData?.main?.humidity}%</Text>
      <Text style={styles.text}>Descrição: {props.responseData?.weather[0]?.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})