import { View, Text, StyleSheet,SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../ThemeContext'; 

const Card = ( {Logo,App, Classification,Cost}) => {
  const { isDarkTheme } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardDesign}>

      <View style={[styles.logo, { backgroundColor: isDarkTheme ? '#252839' : '#E8E8E8' }]}>
      <Image source={Logo} />

      </View>

      <View style={styles.cardText}>
        <Text style={[styles.ct1, { color: isDarkTheme ? 'white' : 'black' }]}>{App}</Text>
        <Text style={[styles.ct2, { color: isDarkTheme ? 'lightgrey' : 'grey' }]}>{Classification}</Text>

      </View>
      
      <View style={styles.cardCost}>
        <Text style={[styles.ct1, { color: isDarkTheme ? 'white' : 'black' }]}>
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