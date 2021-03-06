import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { goBack } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text style={styles.title}>关于</Text>
        <Button
          onPress={() => goBack()}
          title="Go to Brent's profile"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120
  }
});
