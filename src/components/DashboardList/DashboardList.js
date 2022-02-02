const DashboardList = () => {

  return (
      <ul className="dashboard__list">
        <li className="dashboard__list-item">
          <span>31/01/22</span>
          <span>Apple Watch</span>
          <span>Electronics</span>
          <span>$340</span>
          <button className="btn btn-show-more">Show more</button>
        </li>

        <li className="dashboard__list-item">
          <span>31/01/22</span>
          <span>Network.net SEO Agency</span>
          <span>Service</span>
          <span>$250</span>
          <button className="btn btn-show-more">Show more</button>
        </li>

        <li className="dashboard__list-item">
          <span>31/01/22</span>
          <span>Starbucks Coffee</span>
          <span>Drink</span>
          <span>$3</span>
          <button className="btn btn-show-more">Show more</button>
        </li>

      </ul>
  );
};

export default DashboardList;
