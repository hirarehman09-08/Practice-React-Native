import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>YOu Clicked {count} times!</Text>
      <Button onPress={() => setCount(count + 1)} title="Click-Me" />
    </View>
  );
};
export default Counter;
