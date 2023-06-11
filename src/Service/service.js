import api from './request';

export const fetchCapsule = (reqData)=>{
    return api.get('capsules'+reqData)
}
export default api