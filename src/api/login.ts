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
