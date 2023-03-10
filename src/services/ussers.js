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

export const patchUsser = async (id, obj) => {
  try {
    const { data } = await axios.patch(`${URL_USERS}/${id}`, obj);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
export const getUser = async (user) => {
    try {
        const { data } = await axios.get(`${endpoints.ussers}?usser_like=${user}`);
        return data
    } catch (error) {
        console.log(error);
        return {}
    }
}

// export const getUser = async () => {
//   try {
//     const { data } = await axios.get(endpoints.ussers);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return {};
//   }
// };

export const postUser = async (obj) => {
  try {
    const { data } = await axios.post(endpoints.ussers, obj);
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
