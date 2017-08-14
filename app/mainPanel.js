import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>主面板</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120
  }
})
