import Mock from 'mockjs'
import { getUserInfo,authorization } from './response/user'
Mock.mock('http://localhost:3000/users/userinfo','post',getUserInfo)
Mock.mock(/\/users\/authorization/,'get',authorization)
export default Mock
