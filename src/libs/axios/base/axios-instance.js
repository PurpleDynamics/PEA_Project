import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.response.use(undefined, (error) => {
	const config = error.config;
	return axios.request(config);
});

axiosInstance.defaults.paramsSerializer = (paramObj) => {
	const params = new URLSearchParams();
	for (const key in paramObj) {
		params.append(key, paramObj[key]);
	}
	return params.toString();
};
