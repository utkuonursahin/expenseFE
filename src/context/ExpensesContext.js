import { createContext, useContext, useEffect, useState } from "react";
import { getUserExpenses } from '../api';

const ExpensesContext = createContext()

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [isFormClicked, setIsFormClicked] = useState(false)
  const [isDetailsClicked, setIsDetailsClicked] = useState(false)

  useEffect(() => {
    refreshExpenses()
  }, [])

  const refreshExpenses = async () => {
    if (localStorage.getItem("user")) {
      try {
        const fetchExpenses = await getUserExpenses();
        setExpenses(fetchExpenses)
      } catch (e) {
        console.log(e.response.data);
      }
    }
  }

  const values = { expenses, setExpenses, isFormClicked, setIsFormClicked, isDetailsClicked, setIsDetailsClicked, refreshExpenses }
  return <ExpensesContext.Provider value={values}>{children}</ExpensesContext.Provider>
}
const useExpenses = () => useContext(ExpensesContext)
export { ExpensesProvider, useExpenses }