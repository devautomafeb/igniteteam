import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import { useEffect, useState } from 'react';
import { Groups } from './src/screens/Groups';
import { Loading } from './src/components/Loading';
import { NewGroup } from './src/screens/NewGroup';
import { Players } from './src/screens/Players';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';



export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={'light-content'}
        translucent />
      {fontsLoaded? <Groups /> : <Loading />}

    </ThemeProvider>)
}


