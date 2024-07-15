import React from 'react';
import {StyleSheet, View} from 'react-native';
import Stacknavigation from './src/navigation/Stacknavigation';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <View style={styles.container}>
      <Stacknavigation />
      <Toast/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
