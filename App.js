import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';

import rocket from './animation.json';

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie source={rocket} autoSize resizeMode="contain" autoPlay loop />
    </SafeAreaView>
  );
}
