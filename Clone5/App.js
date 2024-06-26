import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './pages/Homepage'
import Settings from './pages/Settings';
import MyCard from './pages/MyCard';
import Statistics from './pages/Statistics';
import Card from './components/Card'


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" 
      component={Homepage} 
       options={{
        tabBarIcon: () => (
          <Image source={require("./assets/home.png")}/>
        )
      }} 
      />
      <Tab.Screen name="My Cards" 
      component={MyCard}
      options={{
        tabBarIcon: () => (
          <Image source={require("./assets/myCards.png")}/>
        )
      }}  />
      <Tab.Screen name="Statistics" 
      component={Statistics}
      options={{
        tabBarIcon: () => (
          <Image source={require("./assets/statictics.png")}/>
        )
      }}  />
      <Tab.Screen name="Settings" 
      component={Settings}
      options={{
        tabBarIcon: () => (
          <Image source={require("./assets/settings.png")}/>
        )
      }}  
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    // <Homepage/>
    <NavigationContainer>
    <MyTabs />
    </NavigationContainer>

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
