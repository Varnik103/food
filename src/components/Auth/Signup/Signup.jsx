import { useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

import signupCss from "./Signup.module.css";

let Signup = ({ setAuth }) => {
  let loginDiv = (
    <div className={signupCss.outerDiv}>
      <div className={signupCss.modal}>
        <div className={signupCss.header}>
          <span className={signupCss.ttl}>Signup</span>
          <span
            className={signupCss.closeBtn}
            onClick={() =>
              setAuth({ closed: true, login: false, signup: false })
            }
          >
            <IoMdClose className={signupCss.closeBtnImg} />
          </span>
        </div>
        <div className={signupCss.lgBox}>
          <input
            className={signupCss.inpBox}
            type="text"
            placeholder="Full Name"
          />
          <input
            className={signupCss.inpBox}
            type="email"
            placeholder="Email"
          />
          <span className={signupCss.termsTxt}>
            <input
              type="checkbox"
              name="accpect"
              id="accpect"
              className={signupCss.checkBox}
            />
            <span>
              I agree to Zomato's{" "}
              <a href="" className={signupCss.termaAnchor}>
                Terms of Service, Privacy Policy
              </a>{" "}
              and{" "}
              <a href="" className={signupCss.termaAnchor}>
                Content Policies
              </a>
            </span>
          </span>
          <button className={signupCss.btn}>Create Account</button>
        </div>
        <hr className={signupCss.break} />
        <div className={signupCss.newToZomato}>
          Already have an account?{" "}
          <div
            className={signupCss.createAcc}
            onClick={() =>
              setAuth({ closed: false, login: true, signup: false })
            }
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
  return createPortal(loginDiv, document.getElementById("modal"));
};

export default Signup;
