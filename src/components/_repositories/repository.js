import axios from "axios";

const baseDomain = "http://localhost:8000";
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL
});