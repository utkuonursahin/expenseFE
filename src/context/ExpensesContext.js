import { createContext, useContext, useEffect, useState } from "react";
import { getUserExpenses } from '../api';

const ExpensesContext = createContext()

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("user")) {
        try {
          const fetchExpenses = await getUserExpenses();
          setExpenses(fetchExpenses)
        } catch (e) {
          console.log(e.response.data);
        }
      }
    })()
  }, [])

  const values = { expenses, setExpenses, isClicked, setIsClicked }
  return <ExpensesContext.Provider value={values}>{children}</ExpensesContext.Provider>
}
const useExpenses = () => useContext(ExpensesContext)
export { ExpensesProvider, useExpenses }