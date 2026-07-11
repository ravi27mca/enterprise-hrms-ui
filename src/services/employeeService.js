import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const employeeService = {

    getEmployees() {
        return axios.get(`${BASE_URL}/users`);
    },

};

export default employeeService;