import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { useState } from 'react';
import Groups from './src/screens/Groups';
import Loading from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor= 'transparent'
        barStyle={'light-content'}
        translucent />

      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}


