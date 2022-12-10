import axios from "axios";
const authAPI = {
    async loginAPI(data:any) {
        const url = `/auth/login`;
        const resp = await axios.post(url, data);
        return resp;
    },

 
    async updateProfileAPI(data:any) {
        const url = `/user/profile`;
        const resp = await axios.put(url, data);
        return resp;
    },
 
};

export default authAPI;
