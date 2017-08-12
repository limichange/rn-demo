import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { goBack } = this.props.navigation

    return (
      <View style={styles.container}>
        <Image source={require('./home.png')} />
        <Text style={styles.title}>登录</Text>
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
