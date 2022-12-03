import request from '../utils/request'

// 登录
export function login(userName: string, password: string) {
  return request({
    method: 'post',
    url: '/infoservice/lawyerUser/login',
    data: {
      username: userName,
      password,
    },
  })
}

// 注册
export function register(userName: string, mobile: string, password: string) {
  return request({
    method: 'post',
    url: '/infoservice/lawyerUser/register',
    data: {
      username: userName,
      mobile,
      password,
      roleId: 0,
    },
  })
}
