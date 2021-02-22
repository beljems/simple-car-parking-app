import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Overview from './pages/Overview';
import UserMenu from './pages/UserMenu';
import Notifications from './pages/Notifications';
import Message from './pages/Message';
import Search from './pages/Search';

import './assets/css/settings.css';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
        <Stack.Screen name="UserMenu" component={UserMenu} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
