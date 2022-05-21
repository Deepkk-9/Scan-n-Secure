import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';


const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}