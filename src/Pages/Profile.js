import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const { login } = useSelector((state) => state.logState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(login);
  useEffect(() => {
    dispatch({ type: "userInfo", navigate });
  }, []);
  return (
    <div className="profileBG">
      <div className="profile">
        <h3>
          {login.name} {login.surname} {login.age}
        </h3>
        <p>
          __________________________________________________________________
        </p>
        <h4>{login.email}</h4>
       
        <button
          className="butt"
          onClick={() => {
            navigate("/signin");
          }}
        >
          <span className="text">Logout</span>
          <i className="ri-check-line icon"></i>
        </button>
      </div>
    </div>
  );
}

export default Profile;
