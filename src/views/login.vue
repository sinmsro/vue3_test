<template>
  <div style="display: flex;justify-content: center;align-items: center;height: 100vh">  
     <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="username" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="passwd" prop="passwd">
        <el-input v-model="ruleForm.passwd" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
  </template>
  
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@/api/user';
  
  interface RuleForm {
    username: string
    passwd: string
  }
  
  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive<RuleForm>({
    username: 'admin',
    passwd:'123456'

  })
  
  const rules = reactive<FormRules<RuleForm>>({
    username: [
      { required: true, message: 'Please input  name', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    passwd: [
      { required: true, message: 'Please input passwd', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
  })
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        
        const res = login()
        console.log(res,'submit!')
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  
  const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }))
  </script>
  