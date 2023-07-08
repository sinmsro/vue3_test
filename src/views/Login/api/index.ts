import request from '@/utils/request'

const loginApi = {
  userLogin: '/api/login',
  userInfo: '/api/auth/user/userInfo'
}

class Service {
  /**
   * @description POST 用户登录接口
   */
  static  postLogin = (data: any)=> {
    return request({
      url: loginApi.userLogin,
      method: 'POST',
      data:data
    })
  }

 
}

export default Service
