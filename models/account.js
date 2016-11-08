import {Schema} from 'mongoose'

//账户
export default new Schema({
   //姓名
   username:String,
   //密码
   password:String,
   //头像
   userimg:String,
   //学校
   school:String,
   //专业
   major:String,
   //学号
   studentid:String,
   //手机
   phone:String,
   //邮箱
   email:String,
   //微信
   webchat:String
});