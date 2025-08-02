import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RecoilRoot } from 'recoil';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName = 'home-outline';
                if (route.name === 'Home') iconName = 'home-outline';
                else if (route.name === 'History') iconName = 'time-outline';
                else if (route.name === 'Settings') iconName = 'settings-outline';
                return <Ionicons name={iconName as any} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'ホーム' }} />
            <Tab.Screen name="History" component={HistoryScreen} options={{ title: '履歴' }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: '設定' }} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
}
