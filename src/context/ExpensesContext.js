import { createContext, useContext, useState } from "react";
import { getUserExpenses } from '../api';

const ExpensesContext = createContext()

const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [isFormClicked, setIsFormClicked] = useState(false)
  const [detailsExpense, setDetailsExpense] = useState(null)


  const refreshExpenses = async (page, limit) => {
    if (localStorage.getItem("user")) {
      try {
        const fetchExpenses = await getUserExpenses({ page, limit });
        setExpenses(fetchExpenses)
      } catch (e) {
        console.log(e.response.data);
      }
    }
  }

  const values = { expenses, setExpenses, isFormClicked, setIsFormClicked, detailsExpense, setDetailsExpense, refreshExpenses }
  return <ExpensesContext.Provider value={values}>{children}</ExpensesContext.Provider>
}
const useExpenses = () => useContext(ExpensesContext)
export { ExpensesProvider, useExpenses }