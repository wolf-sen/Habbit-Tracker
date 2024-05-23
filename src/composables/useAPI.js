import axios from "axios";
import { apiBaseURL } from "../configs/env.config.js"

//create axios instance
const useAPI = axios.create({
    baseURL: apiBaseURL,
    headers: {

    },
  });

export default useAPI;