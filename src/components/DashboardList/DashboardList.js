import { useExpenses } from '../../context/ExpensesContext';
import ItemDetails from "../ItemDetails/ItemDetails";
import { useEffect, useState } from "react";
import { useCategory } from '../../context/CategoryContext';
import { getUserExpenses } from '../../api';
import Pagination from './Pagination';
import ExpenseItem from './ExpenseItem';

const DashboardList = () => {
  const { expenses, isFormClicked, setExpenses } = useExpenses()
  const { currentCategory } = useCategory();
  const [detailedExpense, setDetailedExpense] = useState()
  const [isDetailsClicked, setIsDetailsClicked] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [expensesPerPage] = useState(5);

  // Get current posts
  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = expenses.slice(indexOfFirstExpense, indexOfLastExpense);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    (async () => {
      if (!isFormClicked) {
        setExpenses(await getUserExpenses({ category: currentCategory?._id }))
      }
    })()
  }, [currentCategory])


  return (
    <div className="dashboard__list">
      {expenses.length > expensesPerPage && (
        <Pagination postsPerPage={expensesPerPage}
          totalPosts={expenses.length}
          paginate={paginate}
          currentPage={currentPage} />
      )}
      <ExpenseItem expenses={currentExpenses} setDetailedExpense={setDetailedExpense} setIsDetailsClicked={setIsDetailsClicked} />
      {isDetailsClicked && <ItemDetails detailedExpense={detailedExpense} setIsDetailsClicked={setIsDetailsClicked} />}
    </div>
  );
};

export default DashboardList;
