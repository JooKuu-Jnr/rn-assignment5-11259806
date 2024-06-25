import { View, Text, StyleSheet,SafeAreaView, Image } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardDesign}>

      <View style={styles.logo}>
      <Image source={require("../assets/apple.png")}/>

      </View>

      <View style={styles.cardText}>

      </View>
      
      <View style={styles.cardCost}>

      </View>

      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
  cardDesign: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'grey',
    width: 'auto',
    height: 70
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardText:{

  },
  cardCost:{
  }

});
export default Card