import { Link } from "react-router-dom";
import { Back } from "./Header";
import { Title } from "./Header";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Signup({ user, setUser, session, setSession }) {
  const [show, setShow] = useState(true);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user && session) {
    return <Navigate to="/Home" />;
  }

  return (
    <main className=" flex flex-col bg-[url('/src/images/WallpaperDog-20493501.jpg')] bg-no-repeat bg-cover min-h-screen min-w-full font-semibold font-serif ">
      <header className=" h-20 w-full bg-[#333] flex items-center justify-center ">
        <div className="relative flex items-center justify-star w-[50%] ml-3 ">
          <img
            className=" absolute w-4 left-2.5"
            src="/src/images/back.png"
            alt=""
          />
          <Back to="/" />
        </div>
        <div className="w-[50%] flex items-center justify-end mr-3">
          <Title />
        </div>
      </header>
      <article
        className=" flex flex-col items-center justify-center m-auto w-2/5 h-[600px] rounded-3xl overflow-hidden bg-transparent relative before:bg-gradient-to-r from-[#333e] via-yellow-400 to-yellow-400 before:absolute 
           before:w-[60%]  before:h-[600px]  before:top-[-50%] before:left-[-50%]   
             before:animate-spin before:origin-bottom-right"
      >
        <div className="flex flex-col w-[99%] h-[99%] items-center absolute bg-[#333] rounded-[20px]">
          <div className=" h-[15%] flex flex-col w-full justify-around items-center ">
            <h1 className=" font-bold text-[32px] bg-gradient-to-bl from-black to-yellow-500 text-transparent bg-clip-text ">
              Welcome To MoviesNetWork
            </h1>
            <p className="text-[22px] mb-[-35px] text-white">
              Create New Account
            </p>
          </div>
          <div className=" h-[75%] flex items-center w-full justify-center">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                console.log("submit");

                const res = await fetch("http://localhost:3000/signup", {
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({
                    username,
                    email,
                    password,
                  }),
                  method: "POST",
                });

                const json = await res.json();

                setUser(json.user);
                setSession(json.session);
              }}
              className="flex flex-col w-[96%] items-center"
            >
              <label className=" self-start px-8 flex gap-1  text-white">
                <img
                  className="h-[18px]"
                  src="/src/images/userName.png"
                  alt=""
                />{" "}
                UserName
              </label>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={username}
                className="w-[94%] bg-slate-200 h-10 rounded-3xl px-10 mb-3 shadow shadow-gray-200 "
                type="text"
                placeholder="Enter Your Name"
              />
              <label className=" self-start px-8 flex gap-1  text-white">
                <img className="h-[18px]" src="/src/images/email.png" alt="" />
                E-mail
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                className="w-[94%] bg-slate-200 h-10 rounded-3xl px-8 mb-3  shadow shadow-gray-200 "
                type="email"
                placeholder="Enter Your Email"
              />

              <label className=" self-start px-8 flex gap-1  text-white">
                <img
                  className="h-[18px]"
                  src="/src/images/padlock.png"
                  alt=""
                />
                Password
              </label>
              <div className="relative w-full flex items-center justify-center">
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  className="w-[94%] bg-slate-200 h-10 rounded-3xl px-10 mb-3  shadow shadow-gray-200 "
                  type={show ? "password" : "text"}
                  placeholder="password"
                />
                <img
                  onClick={() => {
                    setShow(!show);
                  }}
                  src={show ? "/src/images/view.png" : "/src/images/hidden.png"}
                  alt=""
                  className=" absolute w-5 cursor-pointer right-8 top-3"
                />
              </div>
              <button
                className=" w-[94%] py-2 m-5 rounded-3xl text-gray-400 font-bold bg-gradient-to-r from-black to-yellow-500 bg-[length:200%] hover:bg-[length:100%] transition-all hover:text-white"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div className="h-[10%] flex items-center w-full justify-center  text-white gap-1">
            <p>Have An Account? </p>
            <Link className="text-yellow-500 hover:underline " to="/Login">
              Log in
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
export default Signup;
