import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Input from "./components/Input";
import Button from "./components/Button";
import Info from "./components/Info";

interface responseData{
  wheater: {
    description: string
  }[]
  main: {
    temp: number
    humidity: number
  }
}

const { width } = Dimensions.get('window')

export default function Index() {
  const [latitude, setLatitude] = React.useState('0')
  const [longitude, setLongitude] = React.useState('0')
  const [responseData, setResponseData] = React.useState<responseData>()

  return (
    <View style={styles.mainView}>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  view: {
    width: width * 0.9,
    flex: 1,
    rowGap: 10,
    backgroundColor: 'white'
  }
})

export type { responseData }
