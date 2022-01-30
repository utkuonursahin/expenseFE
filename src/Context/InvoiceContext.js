import {createContext, useContext, useState} from "react";
import data from '../data.json';

const InvoiceContext = createContext()

const InvoiceProvider = ({children}) => {
  const [invoices, setInvoices] = useState(data)

  const values = {invoices, setInvoices}
  return <InvoiceContext.Provider value={values}>{children}</InvoiceContext.Provider>
}
const useInvoice = () => useContext(InvoiceContext)
export {InvoiceProvider, useInvoice}