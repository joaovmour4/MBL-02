import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useCallback } from 'react'

interface props{
  latitude: string
  longitude: string
  setResponseData: Function
}

export default function Button(props: props) {
  const handler = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=86d0f675808c3f60ec30d348724c6d58`)
    .then(response => response.json())
      .then(data => {
        props.setResponseData(data)
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error)
      });
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={handler}>
        <Text style={styles.textButton}>BUSCAR CLIMA</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white'
  }
})