import { createContext, useContext, useEffect, useState } from "react";
import { getCategories } from '../api';

const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async () => {
            if (localStorage.getItem("user")) {
                try {
                    const fetchCategories = await getCategories();
                    setCategories(fetchCategories)
                } catch (e) {
                    console.log(e.response.data);
                }
            }
        })()
    }, [])

    const values = { categories, setCategories }
    return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
}
const useCategory = () => useContext(CategoryContext)
export { CategoryProvider, useCategory }