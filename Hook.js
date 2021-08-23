import React, {useState} from 'react';
import {Text, View, Button, StyleSheet, ScrollView} from 'react-native';

const Hungry = props => {
  const [isHungry, notHungry] = useState(true);
  return (
    <View style={styles.container}>
      <Text>
        I am {props.name} and I am {isHungry ? 'Hungry' : 'Full'} !
      </Text>
      <Button
        style={styles.button}
        onPress={() => {
          notHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Please Feed me some milk !' : 'Thank you'}
      />
    </View>
  );
};

const Hook = () => {
  return (
    <ScrollView>
      <Hungry name="Asma" />
      <Hungry name="Sumbal" />
      <Hungry name="Hira" />
      <Hungry name="Ashar" />
      <Hungry name="umer" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
export default Hook;
