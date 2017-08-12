import React from 'react'
import Button from 'react-native-button';
import { StyleSheet } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { component, type, size, plain, className, children, ...others } = this.props;

    return (
      <Button
        { ...others }
        style={[styles.signUpBtnText]}
        containerStyle={[styles.signUpBtn]}>
        {children}
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  loginBtnText: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 40,
    color: 'white'
  },
  signUpBtnText: {
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 40,
    color: '#666'
  },
  loginBtn: {
    marginTop: 80,
    marginLeft: 85,
    marginRight: 85,
    backgroundColor: '#666',
    borderColor: '#666',
    borderWidth: 2
  },
  signUpBtn: {
    marginTop: 30,
    marginLeft: 85,
    marginRight: 85,
    borderColor: '#666',
    borderWidth: 2
  }
});
