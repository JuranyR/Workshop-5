import axios from "axios";
import endpoints from "./endpoints";

export const postOrder = async (obj) => {
    try {
        const { data } = await axios.post(endpoints.orders, obj)
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}