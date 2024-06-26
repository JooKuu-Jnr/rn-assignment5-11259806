import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { FlatList } from 'react-native';
import Card from '../components/Card';
import Data from '../Data.json'

const Homepage = () => {
    const [data, setData] = useState(Data); 
    const { isDarkTheme } = useTheme();

    const getLogoSource = (App) => {
        switch (App) {
          case 'Apple Store':
            return require('../assets/apple.png');
          case 'Spotify':
            return require('../assets/spotify.png');
            case 'Money Transfer':
            return require('../assets/moneyTransfer.png');
            case 'Grocery':
            return require('../assets/grocery.png');
          
          default:
            return require('../assets/apple.png'); // A default logo if no match is found
        }
    };
      const imageStyle = {
        filter: isDarkTheme ? 'invert(1)' : 'none'
    };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkTheme ? '#161622' : 'white' }]}>
      <View style={styles.overview}>
        <View style={styles.userInfo}>
            <View style={styles.profile}>
                <Image source={require("../assets/profile.png")}/>
            </View>

            <View style={styles.profileText}>
                <Text style={[styles.h1, { color: isDarkTheme ? 'white' : 'black' }]}>Welcome Back</Text>
                <Text style={[styles.h2, { color: isDarkTheme ? 'white' : 'black' }]}>Eric Atsu</Text>

            </View>
            <View style={[styles.profileSearch, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8' }]}>
            <Image  source={require("../assets/search.png")}/>
         
            </View>

        </View>

        <View style={styles.masterCard}>
             <Image style={styles.masterCardImage} source={require("../assets/Card.png")}/>
        </View>

        <View style={styles.iconRow}>
            <View style={[styles.icons, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8' }]}>
            <Image source={require("../assets/send.png")}/>
            </View>
            <View style={[styles.icons, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8' }]}>
            <Image source={require("../assets/recieve.png")}/>
         
            </View>
            <View style={[styles.icons, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8' }]}>
            <Image source={require("../assets/loan.png")}/>
         
            </View>
            <View style={[styles.icons, { backgroundColor: isDarkTheme ? '#27273A' : '#E8E8E8' }]}>
            <Image source={require("../assets/topUp.png")}/>
         
            </View>
        </View>

        <View style={styles.text}>
            <Text  style={[{ color: isDarkTheme ? 'white' : 'black' }]}>       Sent   </Text>
            <Text style={[{ color: isDarkTheme ? 'white' : 'black' }]}>         Receive </Text>
            <Text style={[{ color: isDarkTheme ? 'white' : 'black' }]}>           Loan</Text>
            <Text style={[{ color: isDarkTheme ? 'white' : 'black' }]}>             Topup</Text>

        </View>

        <View style={styles.transactionSection}>
            <View style={styles.headerRow}>
                <Text style={[styles.t1, { color: isDarkTheme ? 'white' : 'black' }]}>Transactions</Text>
                <Text style={styles.t2}>Sell All</Text>
            </View>

            
            <FlatList
          data={data}
          renderItem={({ item }) => (
            <Card 
              App={item.App}
              Logo={getLogoSource(item.App)}
              Classification={item.Classification} 
              Cost={item.Cost}
            />
          )}
          keyExtractor={item => item.id.toString()} 
          
          showsVerticalScrollIndicator={false}
       
        />

        </View>

    
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  overview:{
    margin: 18
  },
  userInfo: {
    flexDirection: 'row',
  },
  profile:{
    

  },
  profileText:{
    paddingLeft:15
  },
  h1:{
    paddingBottom: 3,
    paddingTop:7
    
  },
  h2:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileSearch:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    width: 35,
    height: 35,
    borderRadius: 30,
    marginLeft: 'auto',
    marginTop:7

  },
  masterCard:{
    marginTop: 25,   
  },
  masterCardImage:{
    width: 'auto',
    borderRadius: 30
  },
  iconRow:{
    flexDirection: 'row',
    marginTop: 20,

  },
  icons:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    width: 50,
    height: 50,
    borderRadius: 30,
    margin: 'auto',
    marginTop:7

  },
  text:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2
  },
  transactionSection:{
    marginTop: 20,
  },
  headerRow:{
    flexDirection: 'row'
  },
  t1:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  t2:{
    marginLeft: 'auto',
    color: '#5e9eff'
  }
  


});


export default Homepage