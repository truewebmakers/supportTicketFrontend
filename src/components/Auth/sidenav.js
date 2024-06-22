export const Sidenav = (props) => {
  return (
    <div className="sidenav">
      <div className="login-main-text">
        <h2>
          Application <br /> {props.page} Page
        </h2>
        <p>Login or register from here to access.</p>
      </div>
    </div>
  );
};
