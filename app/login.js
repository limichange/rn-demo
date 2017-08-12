import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native';
import Button from './components/button'

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
          style={styles.input}
          placeholder="用户名"
          onChangeText={(username) => this.setState({ username })}
          onSubmitEditing={(event) => {
            this.refs.passwordInput.focus();
          }}
        />

        <TextInput
          returnKeyType={'done'}
          ref='passwordInput'
          style={styles.input}
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
  },
  title: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '200',
    fontSize: 50,
    marginBottom: 30
  },
  input: {
    fontFamily: 'PingFang SC',
    fontWeight: '200',
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    fontSize: 25,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    paddingLeft: 10
  }
});
