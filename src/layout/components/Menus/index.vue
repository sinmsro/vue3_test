<template>
    <el-menu >
        <MenuItem :menus="menus"></MenuItem>
    </el-menu>

  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useMenus } from '@/store/menus';
  import { storeToRefs } from 'pinia';
  import MenuItem from './MenuItem.vue';



  const {menus} = storeToRefs(useMenus())

  
  const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
  const tableData = ref(Array.from({ length: 20 }).fill(item))
  </script>
  
  <style scoped>
  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
  </style>