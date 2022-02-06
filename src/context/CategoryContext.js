import { createContext, useContext, useEffect, useState } from "react";
import { getCategories } from '../api';

const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState(null)

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
    const values = { categories, setCategories, currentCategory, setCurrentCategory }
    return <CategoryContext.Provider value={values}>{children}</CategoryContext.Provider>
}
const useCategory = () => useContext(CategoryContext)
export { CategoryProvider, useCategory }