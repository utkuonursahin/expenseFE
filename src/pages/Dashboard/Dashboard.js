import ASide from "../../components/A-Side/A-Side";
import DashboardList from "../../components/DashboardList/DashboardList";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import {ExpensesProvider} from "../../context/ExpensesContext";

const Dashboard = () => {
  return (
      <section className="dashboard">
        <ASide/>
        <ExpensesProvider>
          <DashboardNav/>
          <DashboardList/>
          <DashboardForm/>
        </ExpensesProvider>
      </section>
  );
};

export default Dashboard;