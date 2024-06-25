import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.userInfo}>
            <View style={styles.profile}>
                <Image source={require("../assets/profile.png")}/>
            </View>

            <View style={styles.profileText}>
                <Text style={styles.h1}>Welcome Back</Text>
                <Text style={styles.h2}>Eric Atsu</Text>

            </View>
            <View style={styles.profileSearch}>
            <Image source={require("../assets/search.png")}/>
         
            </View>

        </View>

        <View style={styles.masterCard}>
             <Image style={styles.masterCardImage} source={require("../assets/Card.png")}/>
        </View>

        <View style={styles.iconRow}>
            <View style={styles.icons}>
            <Image source={require("../assets/send.png")}/>
            </View>
            <View style={styles.icons}>
            <Image source={require("../assets/recieve.png")}/>
         
            </View>
            <View style={styles.icons}>
            <Image source={require("../assets/loan.png")}/>
         
            </View>
            <View style={styles.icons}>
            <Image source={require("../assets/topUp.png")}/>
         
            </View>
        </View>

        <View style={styles.text}>
            <Text>       Sent   </Text>
            <Text>          Receive </Text>
            <Text>           Loan</Text>
            <Text>             Topup</Text>

        </View>

        <View style={styles.transactionSection}>
            <View style={styles.headerRow}>
                <Text style={styles.t1}>Transactions</Text>
                <Text style={styles.t2}>Sell All</Text>
            </View>

            <Card/>
            <Card/>
            <Card/>
            <Card/>

        </View>

    
        
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    
    // alignItems: 'center',
    // justifyContent: 'center',
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