import ASide from "../../components/A-Side/A-Side";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardList from "../../components/DashboardList/DashboardList";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import Overlay from "../../components/Overlay/Overlay";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <ASide />
      <DashboardNav />
      <DashboardList />
      <DashboardForm />
      <Overlay />
    </section>
  );
};

export default Dashboard;