import axios from "axios";

const instance = axios.create({
	baseURL: "http://49.165.177.17:3055",
});
export default instance;
