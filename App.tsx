import React from 'react';
import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Rates from './src/Screens/Rates';
import StackNavigation from './src/Navigation/stackNavigation';

const App = () => {
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
