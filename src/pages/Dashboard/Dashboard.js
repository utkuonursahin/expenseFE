import ASide from "../../components/A-Side/A-Side";
import DashboardNav from "../../components/DashboardNav/DashboardNav";
import DashboardList from "../../components/DashboardList/DashboardList";
import DashboardForm from "../../components/DashboardForm/DashboardForm";
import Overlay from "../../components/Overlay/Overlay";
import { useEffect } from 'react';
import { useExpenses } from '../../context/ExpensesContext';
import { useCategory } from '../../context/CategoryContext';

const Dashboard = () => {
  const { refreshExpenses } = useExpenses()
  const { fetchCategories } = useCategory();
  useEffect(() => {
    refreshExpenses();
    fetchCategories();
  }, [])
  return (
    <section className="dashboard">
      <ASide />
      <DashboardNav />
      <DashboardList />
      {/* {isFormClicked && (
        <> */}
      <DashboardForm />
      <Overlay />
      {/* </> )} */}
    </section>
  );
};

export default Dashboard;