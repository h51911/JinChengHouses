import axios from 'axios';
const My = axios.create({
    baseURL:'http://localhost:1912'
})
export const get =  async (url,params,config={})=>{
    let {data} = await My.get(url,{
        ...config,
        params
    })
    return data;
}

export const post = async(url,datas,config={})=>{
    let {data} = await My.post(url,{
        // ...config,
        datas,
    })
    return data;
}

export default {
    get,
    post
}