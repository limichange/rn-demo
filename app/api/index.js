export default {
  user: {
    login () {
      return fetch('http://qq.com')
        .then((res) => {
          alert(JSON.stringify(Object.keys(res)))
          // alert(JSON.stringify(res._bodyText))
        })
    }
  }
}
