<template>

    <template v-for="menu in menus" :key="menu.path">


    <el-sub-menu v-if="menu.children && menu.children.length >1" :index="menu.path">
    <template #title>
        <el-icon> 
        <component :is="menu.meta?.icon"></component>
        </el-icon>
        <span>{{ menu.meta?.title }}</span>
    </template>

    <MenuItem :menus="menu.children"></MenuItem>
    </el-sub-menu>

    <el-menu-item v-else :index="menu.path" @click="toPath(menu.name)">
        <el-icon>
        <component :is="menu.meta?.icon"></component>
        </el-icon>
        <span>{{ menu.meta?.title }}</span>

    </el-menu-item>


    </template>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

defineProps(['menus'])

const router=useRouter()
const toPath = (menuName:string)=>{
    router.push({name:menuName})
}




</script>