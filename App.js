import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './routes/AuthStack';
import { AuthStackT } from './routes/AppStackT';
import { AuthStackS } from './routes/AppStackS';
import { useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();


export default function App() {
  const [isSignIn, setIsSignedIn] = useState(null);


  onAuthStateChanged(auth, user => {

    if (user != null) {
      let getDomain = (user.email);
      let checkDomain = getDomain.substring(getDomain.indexOf("@"));
      console.log(checkDomain);
      // deepkika2019@student.mes.ac.in

      if (checkDomain === "@student.mes.ac.in") {
        setIsSignedIn(true);
      }
      else if (checkDomain === "@mes.ac.in") {
        setIsSignedIn(false);
      }
      else {
        setIsSignedIn(null);
      }
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

