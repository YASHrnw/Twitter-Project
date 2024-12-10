import React, { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

function Login() {
  const [IsLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submithandler = async (e) => {
    e.preventDefault();
    if (IsLogin) {
      //login
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log("API Response:", res.data);

        if (res.data.success) {
          dispatch(getUser(res.data.user))
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    } else {
      //signup
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/register`,
          { name, username, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        if (res.data.success) {
          setIsLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
  };

  const loginSignupHandler = () => {
    setIsLogin(!IsLogin);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-4"
            width={"300px"}
            src="https://img.freepik.com/premium-vector/twitter-new-x-logo-design-vector_1340851-70.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl">Happeing now.</h1>
          </div>
          <h1 className="my-4 text-2lg font-bold">
            {IsLogin ? "Login" : "Signup"}
          </h1>
          <form className="flex flex-col w-[60%]" onSubmit={submithandler}>
            {!IsLogin && (
              <>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="outline-blue-500 border border-gray-800 px-3 py-2  rounded-full my-1 font-semibold"
                />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-2  rounded-full my-1 font-semibold"
                />
              </>
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="outline-blue-500 border border-gray-800 px-3 py-2  rounded-full my-1 font-semibold"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="outline-blue-500 border border-gray-800 px-3 py-2  rounded-full my-1 font-semibold"
            />
            <button className="bg-[#1D9BF0] border-none  py-2 my-2 rounded-full text-lg text-white">
              {IsLogin ? "Login" : "Create Account"}
            </button>
            <h1>
              {IsLogin ? "Do not have an Account ?" : "Already have account ?"}
              <span
                onClick={loginSignupHandler}
                className="text-bold text-blue-600 cursor-pointer"
              >
                {IsLogin ? "Signup" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
