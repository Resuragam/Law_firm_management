import request from '../utils/request'

// 查找所有律师
export function findAllLawyer() {
  return request({
    method: 'get',
    url: '/infoservice/lawyerTeacher/selectAllLawyer',
  })
}

// 修改律师
export function modifyLawyer(data: any) {
  return request({
    method: 'post',
    url: '/infoservice/lawyerTeacher/updateLawyer',
    data,
  })
}

// 增加律师
export function addLawyer(data: any) {
  return request({
    method: 'post',
    url: '/infoservice/lawyerTeacher/addLawyer',
    data,
  })
}

// 删除律师
export function removeLawyer(teacherId: any) {
  return request({
    method: 'get',
    url: `/infoservice/lawyerTeacher/removeLawyerById/${teacherId}`,
  })
}
