import Mock from 'mockjs'
import { getUserInfo } from './response/user'
Mock.mock('http://localhost:3000/users/userinfo','post',getUserInfo)
export default Mock
