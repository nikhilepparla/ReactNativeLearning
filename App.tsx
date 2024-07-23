/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MyText from './Components/MyText/MyText';
const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello Ji</Text>
      <MyText name={'Nikhil'} age={25} />
      <MyText />
    </SafeAreaView>
  );
};

export default App;
