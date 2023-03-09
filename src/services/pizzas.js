import axios from "axios";
import endpoints from "./endpoints";

export const getPizzas = async () => {
    try {
        const { data } = await axios.get(endpoints.pizzas)
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}

export const getPizza = async (idPizza) => {
    try {
        const { data } = await axios.get(`${endpoints.pizzas}/${idPizza}`)
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}