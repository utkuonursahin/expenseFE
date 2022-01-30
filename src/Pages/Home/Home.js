import {Link} from "react-router-dom";

const Home = () => {
  return (
      <section className="home">
        <h1 className="heading-1">
          Invoice App!
          <span>Welcome! Track your invoices all-in one platform.</span>
        </h1>
        <div className="home__container">
          <Link to="/sign-up">
            <button className="btn btn-sign-up">Sign Up</button>
          </Link>

          <span>or</span>
          <Link to="/login">
            <button className="btn btn-login">Login</button>
          </Link>

        </div>
      </section>
  );
};

export default Home;
