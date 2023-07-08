<template>
    <div class="container">
      <div class="login-container">
        <div class="login-left">
          <div class="top">
            <div class="title">
              <span>欢迎使用</span>
            </div>
            <div class="desc">
              <span>Vite2.x + ElementPlus + Vue3.x + TypeScript</span>
            </div>
          </div>
          <div class="bottom">
            <img :src="working" />
          </div>
        </div>
        <div class="login-right">
          <Login></Login>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import working from '@/assets/logo.png'
  import Login from './login.vue'
  

  </script>
  
  <style scoped lang="scss">
  .container{
  
      position: relative;
      background-image:linear-gradient(90deg, #ebebeb, #f5f7f6);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
  
      .login-container{
          width:60%;
          min-width: 874px;
          height: 78%;
          min-height: 600px;
          flex-direction: row;
          display: flex;
          justify-content: space-evenly;
          border-radius: 10px;
          overflow: hidden;
          background-color :white;
          box-shadow:0 0 20px 5px rgba(34,84,142,.26);
  
          .login-left{
              width:50%;
          padding:47px 54px;
          img{
             width: 100%;
             height: auto;
             margin: 0px 20px;
          }
          .top{
              display:flex;
              flex-direction:column;
              justify-content :flex-start;
              align-items :flex-start;
              margin:40px 0px;
              .title{
                  font-size: 32px;
                  margin-bottom: 16px;
  
              }
              .desc{
                  font-size: 28px;
                  text-align: left;
                  color: rgb(166,175,188);
              }
          }
  
          }
          .login-right{
              width:50%;
              display:flex;
              flex-direction:column ;
              justify-content: center;
              align-items :center;
              padding:10px;
  
          }
      }
  
  }
  </style>
  