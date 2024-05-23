import { defaultUserID } from "@/configs/defaults.config";
import useAPI from "./useAPI";

fetchUserName(arg){
    useAPI.get(`/user?id=${arg}`)
    .then(response => userName.value = (response.data[0].name));
};

export default fetchUserName;