<template>
  <div class="form-container">  
     <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
      class="login-form"
      :size="formSize"
      status-icon>
      <el-form-item label="用户"   prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码"    prop="passwd">
        <el-input v-model="ruleForm.passwd" type="password" autocomplete="off" placeholder="请输入密码"/>
      </el-form-item>
      <el-form-item>
        <div class="btn-container">
        <el-button type="primary" style="width: 100%;" @click="submitForm(ruleFormRef)">登录</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
  </template>
  
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import  Service  from './api/index'
  import { useUser } from '@/store/user'

import {useRoute,useRouter} from "vue-router"
 
const route = useRoute()
const router = useRouter()
const user = useUser()
  
  interface RuleForm {
    username: string
    passwd: string
  }
  
  const formSize = ref('large')
  console.log(formSize);
  
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive<RuleForm>({
    username: '',
    passwd:''

  })
  
  const rules = reactive<FormRules<RuleForm>>({
    username: [
      { required: true, message: 'Please input  name', trigger: 'blur' },
      { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' },
    ],
    passwd: [
      { required: true, message: 'Please input passwd', trigger: 'blur' },
      { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' },
    ]
  })
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        
        const res = Service.postLogin(ruleForm)
        console.log(res,'submit!')
        //保存数据到pinia
        user.setUserInfo({username:"Green"})
        router.push(route.query.redirect as string || "/");
 
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>

<style lang="scss" scoped>
.form-container {
  width: 80%;

  .login-form{
    width:100%;
    margin: 0 auto;
  }
:deep(.el-form-item__label){
  font-size: 18px;
  font-weight: bolder;
}
.btn-container{
        width:100%;
        display :flex;
        flex-direction:row;
        justify-content :flex-start;
        align-items :center;
    }
}


</style>