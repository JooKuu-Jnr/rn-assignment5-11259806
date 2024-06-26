import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity, Switch } from 'react-native'
import { useTheme } from '../ThemeContext'

const Settings = () => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkTheme ? '#161622' : '#fff' }]}>
        <View style={styles.overview}>

          <View style={styles.options}>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={[styles.t1, { color: isDarkTheme ? 'white' : 'black' }]}>Language</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={[styles.t1, { color: isDarkTheme ? 'white' : 'black' }]}>My Profile</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={[styles.t1, { color: isDarkTheme ? 'white' : 'black' }]}>Contact Us</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={[styles.t1, { color: isDarkTheme ? 'white' : 'black' }]}>Change Password</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.option}>
                <Text style={[styles.t1, { color: isDarkTheme ? 'white' : 'black' }]}>Privacy Policy</Text>
                <Text style={styles.t2}>{'>'}</Text>

            </View>
            </TouchableOpacity>

            <View style={styles.theme}>
          <Text style={[styles.theme1, { color: isDarkTheme ? 'white' : 'black' }]}>Theme</Text>
          <Switch
            trackColor={{ false: "#767577", true: "green" }}
            thumbColor={isDarkTheme ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleTheme}
            value={isDarkTheme}
            style={[styles.switch, { color: isDarkTheme ? 'green' : 'green' }]}
          />
        </View>


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

    },
    theme:{
        height: 50,
        alignItems:'center',
        flexDirection: 'row',
        marginTop: 30
    },
    theme1:{
        fontSize: 23,
        fontWeight: 'bold'

    },
    switch: {
        marginLeft: "auto"
    }
})