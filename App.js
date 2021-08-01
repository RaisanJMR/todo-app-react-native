import React, { useState } from 'react';
import * as Font from 'expo-font';
import Home from './screens/Home';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/HomeStack';
// import About from './screens/About';
// import ReviewDetails from './screens/ReviewDetails';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={(error) => console.warn(error)}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
