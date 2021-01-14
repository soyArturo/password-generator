import React, { useState, useRef } from "react";
import Button from "../container/button/Button";
import "./Display.css";

const Display = () => {
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  let pwdDescription = "";
  const setBackgroundColor = (password) => {
    if (password && password.length === 1 && password.length <= 5) {
      pwdDescription = "Bad password";
      return "#cb473e";
    } else if (password && password.length >= 6 && password.length <= 10) {
      pwdDescription = "Weak password";
      return "#f07d58";
    } else if (password && password.length > 10) {
      pwdDescription = "Strong password";
      return "#55a95d";
    } else {
      pwdDescription = "Bad password";
      return "#cb473e";
    }
  };
  const generateNewPassword = () => {};

  const copyClipBoard = () => {};
  return (
    <>
      <div className="row">
        <div
          className="col-12 password-display-container"
          style={{ backgroundColor: setBackgroundColor(password) }}>
          <div style={{ width: "100%" }}>
            <div className="password-display">
              <input
                ref={passwordRef}
                type="text"
                value={password}
                className="password-display-input"
                readOnly
              />
            </div>
            <div className="password-description">
              {password && password.length > 10 ? (
                <>
                  <i className="fas fa-check-circle"></i> {pwdDescription}
                </>
              ) : (
                <>
                  <i className="fas fa-exclamation-circle"></i> {pwdDescription}
                </>
              )}
            </div>
          </div>
          <div className="password-display-icons">
            <Button
              className="copy-btn"
              iconClass="far fa-copy"
              handleClick={copyClipBoard}
            />

            <Button
              className="generate-btn"
              iconClass="fas fa-sync-alt"
              handleClick={generateNewPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Display;
