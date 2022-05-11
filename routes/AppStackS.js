import { createStackNavigator } from '@react-navigation/stack';
import InfoBtnScreen from '../Screens/InfoBtnScreen';
import QRCodeScreen from '../Screens/QRCodeScreen';


const Stack = createStackNavigator();

export const AuthStackS = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='IBS' component={InfoBtnScreen} options={{ headerShown: false }} initialParams={{ title: "Generate QR Code", btnDesc: "Show QR Code", type: "S" }} />
            <Stack.Screen name='QRCode' component={QRCodeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}