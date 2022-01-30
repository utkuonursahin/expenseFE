import ASide from "../../components/A-Side/A-Side";
import DashboardList from "../../components/DashboardList/DashboardList";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import {ExpensesProvider} from "../../context/ExpensesContext";

const Dashboard = () => {
  return (
      <section className="dashboard">
        <ASide/>
        <ExpenseForm/>
        <ExpensesProvider>
          <DashboardNav/>
          <DashboardList/>
        </ExpensesProvider>
      </section>
  );
};

export default Dashboard;