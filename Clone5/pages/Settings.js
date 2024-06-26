import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.overview}>

          <View style={styles.options}>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={styles.t1}>Language</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={styles.t1}>My Profile</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={styles.t1}>Contact Us</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={styles.t1}>Change Password</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={styles.t1}>Privacy Policy</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

           </View>

        </View>
      
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',    
    },
    overview:{
        margin: 18
    },

    option:{
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        alignItems:'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    t1:{
        fontSize: 17,
        fontWeight: '600'
    },
    t2:{
        marginLeft: 'auto',
        fontSize: 17,
        color: 'grey'

    }
})