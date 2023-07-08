import axios from "@/utils/request";

export const loadMenu=()=>{
    return axios.get('/api/memus')
}