import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    let obj = {
      ...data,
    };
    dispatch({ type: "log", data: obj, navigate });
    reset();
  };
  return (
    <div className="signinBG">
      <div className=" signin w-25 mx-auto p-3 border bg-light">
        <h3>Sign in</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-2"></div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            {...register("username", { required: true })}
          />
          {errors.title && <span>This field must be filled</span>}

          <div className="form-group mb-2"></div>
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.title && <span>This field must be filled</span>}

          <br />
          <button className="butt">
            <span className="text">Enter</span>
            <i className="ri-check-line icon"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
