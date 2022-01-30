import {useInvoice} from "../../context/ExpensesContext";
const DashboardList = () => {
  const {invoices} = useInvoice()
  return (
      <ul className="home__invoice-list">
        {invoices.map((invoice,i)=> <li key={i}>
          <span>{new Intl.DateTimeFormat('en-GB',{dateStyle:'medium'}).format(new Date(invoice.from.createdAt))}</span>
          <h3>{invoice.receiver.name}</h3>
          <span>{invoice.items.price}</span>
          <div>{invoice.status}</div>
        </li>)}
      </ul>
  );
};

export default DashboardList;
