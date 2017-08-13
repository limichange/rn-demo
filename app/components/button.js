import React from 'react'
import Button from 'react-native-button';
import { StyleSheet } from 'react-native'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { component, type, size, plain, className, children, style, containerStyle, ...others } = this.props;

    console.log(this.props)

    return (
      <Button
        { ...others }
        style={[type === 'normal' ? styles.normalBtnText : styles.signUpBtnText, style]}
        containerStyle={[type === 'normal' ? styles.normalBtn : styles.signUpBtn, containerStyle]}>
        {children}
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  normalBtnText: {
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
  normalBtn: {
    backgroundColor: '#666',
    borderColor: '#666',
    borderWidth: 2
  },
  signUpBtn: {
    borderColor: '#666',
    borderWidth: 2
  }
});
