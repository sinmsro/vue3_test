import axios from "axios";

export const login = () => {
    // 返回的数据格式可以和服务端约定
    return axios.get('login');
}
