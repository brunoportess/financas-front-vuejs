import axios from "axios";

const baseDomain = "http://localhost:8000";
const baseURL = `${baseDomain}`;
/*
// create a new axios instance
const instance = axios.create({
    baseURL
  })
  
  // before a request is made start the nprogress
  instance.interceptors.request.use(config => {
    NProgress.start()
    return config
  })
  
  // before a response is returned stop nprogress
  instance.interceptors.response.use(response => {
    NProgress.done()
    return response
  })
  
  export default instance*/
export default axios.create({
    baseURL
});