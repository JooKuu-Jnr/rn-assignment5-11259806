import { View, Text, StyleSheet,SafeAreaView, Image } from 'react-native'
import React from 'react'

const Card = ( {Logo,App, Classification,Cost}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardDesign}>

      <View style={styles.logo}>
      <Image source={Logo}/>

      </View>

      <View style={styles.cardText}>
        <Text style={styles.ct1}>{App}</Text>
        <Text style={styles.ct2}>{Classification}</Text>

      </View>
      
      <View style={styles.cardCost}>
        <Text style={styles.ct1}>
          {Cost}
        </Text>

      </View>

      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardDesign: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    width: 'auto',
    height: 70
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: '#E8E8E8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardText:{
    marginLeft: 15

  },
  ct1:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  ct2:{
    color:'grey'
  },
  cardCost:{
    marginLeft: 'auto',
  }

});
export default Card