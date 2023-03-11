import axios from "axios";
import endpoints from "./endpoints";

export const postOrder = async (obj) => {
    try {
        const response = await axios.post(endpoints.orders, obj);
        console.log(response);
        return ((response.status>= 200)&&(response.status<=299)) ? true : false;
    } catch (error) {
        console.log(error);
        return false
    }
}
