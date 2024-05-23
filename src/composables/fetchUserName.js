import { defaultUserID } from "@/configs/defaults.config";
import useAPI from "./useAPI";

function fetchUserName(arg) {
  useAPI
    .get(`/user?id=${arg}`)
    .then((response) => (userName.value = response.data[0].name));
}

export default fetchUserName;
