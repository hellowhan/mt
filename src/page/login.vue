<template>
  <div class="page-login">
       <div class="login-header">
          <a class="logo site-logo" href="http://www.meituan.com"></a>
       </div>
       <div class="login-panel">
             <div class="banner">
               <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
             </div>
            <div class="form">
                <!-- 这是不输入账号时出现的提示 -->
                <h4 v-if="error" class="tips">{{error}}</h4>
                <p>
                    <span>账号登录</span>
                </p>
                <!-- 利用绑定样式来设置出现错误的条件 -->
                <el-input :class="{error:error&&!userName}" v-model="userName" placeholder="手机号/用户名/邮箱"  prefix-icon="profile"></el-input>
                <el-input :class="{error:error&&!password}" v-model="password" placeholder="密码" type="password" prefix-icon="password"></el-input>
                <div class="foot">
                    <a href="#">忘记密码?</a>
                   
                </div>
               <el-button type="success" class="btn-login" @click="submit">登录</el-button>
                <p class="signup-guide">还没有账号？   <router-link  class="register" :to="{name:'register'}">
               免费注册
           </router-link></p>
                <div class="oauth-wrapper">
                    <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
                    <div class="oauth cf">
                        <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
                        <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
                    </div>
                </div>
            </div>
       </div>
       <div class="footer">
             <ul>
                 <li><a href="#">关于美团</a></li>
                 <li><a href="#">加入我们</a></li>
                 <li><a href="#">商家入驻</a></li>
                 <li><a href="#">帮助中心</a></li>
                 <li><a href="#">美团手机版</a></li>
             </ul>
       </div>
  </div>
</template>

<script>
import api from'@/api/index.js'
export default {
 data(){
     return {
     userName:'',
     password:'',
     error:'',
     }

 },
 methods:{
     submit(){
         if(!this.userName){
             this.error="请输入账号";

             return false
         }
         if(!this.password){
             this.error = "请输入密码"

             return false
         }
         api.login({
             params:{
                 userName:this.userName,
                 password:this.password
             }
         }).then((res)=>{
             console.log(res);
             if(res.data.status == 'success'){
                 this.$router.push({
                     name:'index'
                 })
                 this.$store.commit('setUserName',this.userName)
             }else {
                 this.error = res.data.msg
             }
         })
     }
 }
}
</script>

<style lang="scss">
 @import "@/assets/css/login/index.scss";
</style>