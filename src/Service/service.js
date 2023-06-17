import api from "./request";

export const fetchCapsule = (reqData) => {
  return api.get("capsules" + reqData);
};

export const fetchRockets = () => {
  return api.get("rockets");
};
export default api;
