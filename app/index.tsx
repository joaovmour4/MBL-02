import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Input from "./components/Input";
import Button from "./components/Button";
import Info from "./components/Info";

interface responseData{
  weather: Array<arrayWheater>
  main: {
    temp: number
    humidity: number
  }
}
interface arrayWheater {
  description: string
}

const { width } = Dimensions.get('window')

export default function Index() {
  const [latitude, setLatitude] = React.useState('0')
  const [longitude, setLongitude] = React.useState('0')
  const [responseData, setResponseData] = React.useState<responseData>()

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Consulta de Clima</Text>
      <View style={styles.view}>
        <Input 
          placeholder="Latitude"
          value={latitude}
          setValue={setLatitude}
        />
        <Input 
          placeholder="Longitude"
          value={longitude}
          setValue={setLongitude}
        />
        <Button 
          latitude={latitude}
          longitude={longitude}
          setResponseData={setResponseData}
        />
        <Info 
          responseData={responseData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    rowGap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  view: {
    width: width * 0.9,
    flex: 1,
    rowGap: 10,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold'
  }
})

export type { responseData }
