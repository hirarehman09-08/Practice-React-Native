import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

class CounterClass extends Component {
  state = {
    count: 0,
  };
  OnPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} OnPress={this.OnPress} title="click me" />
        <View>
          <Text>You clicked {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}
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
export default CounterClass;
