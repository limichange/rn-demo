import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Keyboard } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: ''
    };
  }
  render() {
    const { goBack } = this.props.navigation
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>登录</Text>
        <TextInput
          returnKeyType={'next'}
          style={{ height: 40 }}
          placeholder="用户名"
          onChangeText={(username) => this.setState({ username })}
          onSubmitEditing={(event) => {
            this.refs.passwordInput.focus();
          }}
        />
        <TextInput
          returnKeyType={'done'}
          ref='passwordInput'
          style={{ height: 40 }}
          placeholder="密码"
          onChangeText={(password) => this.setState({ password })}
          onSubmitEditing={(event) => {
            Keyboard.dismiss()
          }}
        />
        <Button
          onPress={() => goBack()}
          title="取消"
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