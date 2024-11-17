import { useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

import loginCss from "./Login.module.css";

let Login = ({ setAuth, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let loginDiv = (
    <div className={loginCss.outerDiv}>
      <div className={loginCss.modal}>
        <div className={loginCss.header}>
          <span className={loginCss.ttl}>Login</span>
          <span
            className={loginCss.closeBtn}
            onClick={() =>
              setAuth({ closed: true, login: false, signup: false })
            }
          >
            <IoMdClose className={loginCss.closeBtnImg} />
          </span>
        </div>
        <div className={loginCss.lgBox}>
          <input
            className={loginCss.formInput}
            type="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <hr />
          <input
            className={loginCss.formInput}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={
              email?.length === 10
                ? [loginCss.btn, loginCss.Sbtn].join(" ")
                : loginCss.btn
            }
            onClick={() => email?.length === 10}
          >
            Login
          </button>
        </div>
        <hr className={loginCss.break} />
        <div className={loginCss.newToZomato}>
          New to Zomato?{" "}
          <div
            className={loginCss.createAcc}
            onClick={() =>
              setAuth({ closed: false, login: false, signup: true })
            }
          >
            Create Account
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(loginDiv, document.getElementById("modal"));
};

export default Login;
