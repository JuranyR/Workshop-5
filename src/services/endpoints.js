const BASE_URL_API = process.env.REACT_APP_URL_API;

const endpoints = {
    ussers: `${BASE_URL_API}ussers`,
    pizzas: `${BASE_URL_API}pizzas`,
    orders: `${BASE_URL_API}orders`
};

export default endpoints;