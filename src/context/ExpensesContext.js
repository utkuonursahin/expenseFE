import {createContext, useContext, useState} from "react";

const ExpensesContext = createContext()

const ExpensesProvider = ({children}) => {
  const [invoices, setInvoices] = useState()

  const values = {invoices, setInvoices}
  return <ExpensesContext.Provider value={values}>{children}</ExpensesContext.Provider>
}
const useInvoice = () => useContext(ExpensesContext)
export {ExpensesProvider, useInvoice}