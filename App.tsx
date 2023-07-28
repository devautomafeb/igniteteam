import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

import { useState } from 'react';
import { Groups } from './src/screens/Groups';
import { Loading } from './src/components/Loading';
import { NewGroup } from './src/screens/NewGroup';
import { Players } from './src/screens/Players';

export default function App() {


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={'light-content'}
        translucent />
      <Players /> 
      {/* {fontsLoaded ? <Players />: <Loading />}*/}
    </ThemeProvider>
  );
}


