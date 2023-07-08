<template>

<h1>111</h1>

</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

defineProps(['menus'])

const router=useRouter()
const toPath = (menuName:string)=>{
    router.push({name:menuName})
}




</script>