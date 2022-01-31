const DashboardList = () => {

  return (
      <ul className="dashboard__list">
        <li className="dashboard__list-item">
          <span>#FFR5T</span>
          <span>31/01/22</span>
          <span>Apple Watch</span>
          <span>$340</span>
          <button className="btn btn-paid">
            <span/>
            Paid
          </button>
        </li>

        <li className="dashboard__list-item">
          <span>#QP9OI</span>
          <span>31/01/22</span>
          <span>Starbucks Coffee</span>
          <span>$3</span>
          <button className="btn btn-pending">
            <span/>
            Pending
          </button>
        </li>

        <li className="dashboard__list-item">
          <span>#QP9OI</span>
          <span>31/01/22</span>
          <span>Network.net SEO Agency</span>
          <span>$250</span>
          <button className="btn btn-draft">
            <span/>
            Draft
          </button>
        </li>

      </ul>
  );
};

export default DashboardList;
