import axios from 'axios';

export const getShopperData = () => {
    return axios.get("http://localhost:8080/shopper/get");
}

export const getItemsData = () => {
    return axios.get("http://localhost:8080/items/get");
}

export const postShoppingListData = (data: any) => {
    return axios.post("http://localhost:8080/shopping-list/add", data);
}

export const getShoppingListData = () => {
    return axios.get("http://localhost:8080/shopping-list/get");
}

export const deleteShoppingListsData = () => {
    return axios.delete(`http://localhost:8080/shopping-list/delete`);
}