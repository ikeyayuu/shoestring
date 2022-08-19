import React, { useEffect } from 'react'
import { Text, View, StyleSheet, Button , Image} from 'react-native'
import { Constants } from 'expo-constants'
import { useNavigation } from '@react-navigation/native'

export function Splash () {
  const navigation = useNavigation()

  useEffect( () => {
    const timer = setTimeout( () => navigation.navigate('LandingPage'), 3000 )
  })

  return (
    <View style={styles.container}>
      <Image source ={require("../images/shoestring_logo.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f08f11',
    minHeight: 150,
  },
})