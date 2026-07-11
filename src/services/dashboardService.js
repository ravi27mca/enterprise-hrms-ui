import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const dashboardService = {

    getUsers() {
        return axios.get(`${BASE_URL}/users`);
    },

};

export default dashboardService;