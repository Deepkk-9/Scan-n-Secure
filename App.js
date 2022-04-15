import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './routes/AuthStack';
import { AuthStackT } from './routes/AppStackT';
import { AuthStackS } from './routes/AppStackS';
import { useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";


export default function App() {
  const [isSignIn, setIsSignedIn] = useState(null);


  onAuthStateChanged(auth, user => {

    let getDomain = (user.email);
    let checkDomain = getDomain.substring(getDomain.indexOf("@"));

    console.log(checkDomain);


    if (checkDomain === "@student.mes.ac.in") {
      setIsSignedIn(true);
    }
    else if (checkDomain === "@mes.ac.in") {
      setIsSignedIn(false);
    }
    else {
      setIsSignedIn(null);
    }
  });


  return (
    <NavigationContainer>
      {isSignIn == null ? <AuthStack /> : isSignIn ? <AuthStackS /> : <AuthStackT />}
    </NavigationContainer>
  );
}








    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen options={{ headerShown: false }} name='Splash' component={SplashScreen} /> */}
    //     {
    //       globalThis.loginC == "T" ?
    //         <>
    //           {/* <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} /> */}
    //           <Stack.Screen options={{ headerShown: false }} name='IBScreenT' component={InfoBtnScreen} />
    //           <Stack.Screen options={{ headerShown: false }} name='Scan' component={ScanningScreen} />
    //           <Stack.Screen options={{ headerShown: false }} name='Details' component={StudentDataOnScannedScreen} />
    //         </>
    //         :
    //         globalThis.loginC == "S" ?
    //           <>
    //             <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
    //             {/* <Stack.Screen name='IBScreenF' component={<InfoBtnScreen title="Verify a Student" btnDesc="Scan QR Code" />} /> */}
    //             <Stack.Screen options={{ headerShown: false }} name="QRCode" component={QRCodeScreen} />
    //           </> :

    //           <>
    //             <Stack.Screen options={{ headerShown: false }} name='Login' component={LoginScreen} />
    //           </>
    //     }

    //   </Stack.Navigator>
    // </NavigationContainer>