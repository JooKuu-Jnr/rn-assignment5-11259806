import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './ThemeContext';
import Homepage from './pages/Homepage'
import Settings from './pages/Settings';
import MyCard from './pages/MyCard';
import Statistics from './pages/Statistics';
import Card from './components/Card'


const Tab = createBottomTabNavigator();
const MyTabs = () => {
  const { isDarkTheme } = useTheme();

  const screenOptions = () => ({
    tabBarStyle: {
      backgroundColor: isDarkTheme ? '#27273A' : '#fff',
      borderTopColor: 'transparent',
    },
    tabBarActiveTintColor: isDarkTheme ? '#fff' : '#000',
    tabBarInactiveTintColor: isDarkTheme ? '#888' : '#ccc',
    headerStyle: {
      backgroundColor: isDarkTheme ? '#161622' : '#fff',
      shadowOpacity: 0,
      elevation: 0,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: isDarkTheme ? '#fff' : '#161622',
      fontSize: 22,
      paddingTop: 15,
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" 
        component={Homepage} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/home.png")} style={{ tintColor: color, width: size, height: size }}/>
          )
        }} 
      />
      <Tab.Screen name="My Cards" 
        component={MyCard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/myCards.png")} style={{ tintColor: color, width: size, height: size }}/>
          )
        }}  
      />
      <Tab.Screen name="Statistics" 
        component={Statistics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/statictics.png")} style={{ tintColor: color, width: size, height: size }}/>
          )
        }}  
      />
      <Tab.Screen name="Settings" 
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/settings.png")} style={{ tintColor: color, width: size, height: size }}/>
          )
        }}  
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
    <MyTabs />
    </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
