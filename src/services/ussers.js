import axios from "axios";
import endpoints from "./endpoints";

export const getUser = async () => {
    try {
        const { data } = await axios.get(endpoints.ussers);
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}

export const postUser = async (obj) => {
    try {
        const { data } = await axios.post(endpoints.ussers, obj)
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}