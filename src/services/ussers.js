import axios from "axios";
import endpoints from "./endpoints";
const URL_USERS =
  "https://mini-back-workshop5-production.up.railway.app/ussers";

export const getUssers = async () => {
  try {
    // const { data } = await axios.get(`${endpoints.ussers}`);
    const { data } = await axios.get(URL_USERS);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const getLoginUsser = async (usser, password) => {
  try {
    const { data } = await axios.get(
      `${URL_USERS}?usser=${usser}&password=${password}`
    );
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const postUsser = async (dataUsser) => {
  try {
    const { data } = await axios.post(URL_USERS, dataUsser);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const patchUsser = async (id, usser) => {
  try {
    const { data } = await axios.patch(`${URL_USERS}/${id}`, usser);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
