import ASide from "../../components/A-Side/A-Side";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardList from "../../components/DashboardList/DashboardList";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import Overlay from "../../components/Overlay/Overlay";
import { useEffect } from 'react';
import { useExpenses } from '../../context/ExpensesContext';

const Dashboard = () => {
  const { isFormClicked, refreshExpenses } = useExpenses()

  useEffect(() => {
    refreshExpenses();
  }, [])
  return (
    <section className="dashboard">
      <ASide />
      <DashboardNav />
      <DashboardList />
      {isFormClicked && (
        <>
          <DashboardForm />
          <Overlay />
        </>
      )}
    </section>
  );
};

export default Dashboard;