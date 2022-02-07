import ASide from "../../components/A-Side/A-Side";

const Profile = () => {
  return (
      <section className="profile">
        <ASide/>
        <div className="profile__card">

          <img src="/assets/image-avatar.jpg" alt="Profile pic"/>
          <div className="input__group">
            <input id='name' type="text" placeholder="Name"/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="input__group">
            <input id='lastname' type="text" placeholder="Last name"/>
            <label htmlFor="lastname">Last name</label>
          </div>

          <div className="input__group">
            <input id='email' type="email" placeholder="E-mail"/>
            <label htmlFor="email">E-mail</label>
          </div>

        </div>
      </section>
  );
};

export default Profile;
