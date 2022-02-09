import axios from "axios";

axios.interceptors.request.use(
    config => {

        config.baseURL = "http://18.192.215.189"
        if (localStorage.getItem('user')) {
            config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).tokens.access_token}`;
        }
        config.headers["Content-Type"] = "application/json";
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
export const getUserList = async () => {
    const { data } = await axios.get("/users");
    return data;
}
export const getUserExpenses = async (filter) => {
    const { data } = await axios.get(`/users/expenses?page=${filter?.page || ""}&limit=${filter?.limit || ""}&category=${filter?.category || ""}&title=${filter?.title || ""}&description=${filter?.description || ""}&expense_date=${filter?.expense_date || ""}`);
    return data;
}
export const createUser = async (user) => {
    const { data } = await axios.post("/users", user);
    return data;
}
export const userLogin = async (user) => {
    const { data } = await axios.post("/users/login", user);
    return data;
}
export const resetPassword = async (email) => {
    const { data } = await axios.post("/users/reset-password", email);
    return data;
}
export const changePassword = async (password) => {
    const { data } = await axios.post("/users/change-password", password);
    return data;
}
export const updateProfileImage = async (profile_image) => {
    let uploadImage = new FormData();
    uploadImage.append('profile_image', profile_image);
    const { data } = await axios.post("/users/update-profile-image", uploadImage, {
        'Content-Type': 'multipart/form-data'
    });
    return data;
}
export const userUpdate = async (user) => {
    const { data } = await axios.patch("/users", user);
    return data;
}
export const deleteUser = async (id) => {
    const { data } = await axios.delete(`/users/${id}`);
    return data;
}
export const getExpenses = async () => {
    const { data } = await axios.get("/expenses");
    return data;
}
export const createExpense = async (expense) => {
    const { data } = await axios.post("/expenses", expense);
    return data;
}
export const updateExpense = async (id, expense) => {
    const { data } = await axios.patch(`/expenses/${id}`, expense);
    return data;
}
export const deleteExpense = async (id) => {
    const { data } = await axios.delete(`/expenses/${id}`);
    return data;
}
export const getCategories = async () => {
    const { data } = await axios.get("/categories");
    return data;
}
export const createCategory = async (category) => {
    const { data } = await axios.post("/categories", category);
    return data;
}
export const updateCategory = async (id, category) => {
    const { data } = await axios.patch(`/categories/${id}`, category);
    return data;
}
export const deleteCategory = async (id) => {
    const { data } = await axios.delete(`/categories/${id}`);
    return data;
}