import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = props => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreeting = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Hira" />
      <Greeting name="Sumbal" />
      <Greeting name="Asma" />
    </View>
  );
};

export default LotsOfGreeting;
