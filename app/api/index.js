const URL = 'http://192.168.0.5:3000/api/'

import axios from 'axios'

export default {
  user: {
    signIn ({ phone, password }) {
      return axios({
        url: URL + 'account/signIn',
        method: 'post',
        data: {
          phone, password
        }
      })
    },
    signup({ phone, password }) {
      return axios({
        url: URL + 'account/signUp',
        method: 'post',
        data: {
          phone, password
        }
      })
    }
  }
}
