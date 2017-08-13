const URL = 'http://192.168.0.5:3000/api/'

import axios from 'axios'

export default {
  user: {
    login ({ username, password }) {
      return axios({
        url: URL + 'account/login',
        method: 'post',
        data: {
          username, password
        }
      })
    }
  }
}
