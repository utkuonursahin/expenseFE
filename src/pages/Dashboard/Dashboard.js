import ASide from "../../components/A-Side/A-Side";
import { ExpensesProvider } from "../../context/ExpensesContext";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardList from "../../components/DashboardList/DashboardList";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import Overlay from "../../components/Overlay/Overlay";
import {ProfileProvider} from "../../context/ProfileContext";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <ProfileProvider>
        <ASide/>
      </ProfileProvider>
      <ExpensesProvider>
        <DashboardNav />
        <DashboardList />
        <DashboardForm />
        <Overlay />
      </ExpensesProvider>
    </section>
  );
};

export default Dashboard;