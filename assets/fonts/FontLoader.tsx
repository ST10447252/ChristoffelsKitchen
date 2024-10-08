import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const FontContext = createContext(false);

export const useFonts = () => {
  return useContext(FontContext);
};

export const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Baithe': require('../fonts/baithe.otf'),
        'Helvetica-LightOblique': require('../fonts/Helvetica-LightOblique.ttf'),
      });

      setFontsLoaded(true);
      SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  return (
    <FontContext.Provider value={fontsLoaded}>
      {fontsLoaded ? children : null}
    </FontContext.Provider>
  );
};