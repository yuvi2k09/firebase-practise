import logo from "../Assets/logo.png";
import fbIcon from "../Assets/fbIcon.png";
import microsoftIcon from "../Assets/microsoftLogo.png";
import googlePlayIcon from "../Assets/googlePlayIcon.png";
import "../Components/App.css";
function App() {
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
            width: "55%",
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
            >
              Log in
            </button>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", margin: "10px 0" }}
          >
            &nbsp;&nbsp;OR&nbsp;&nbsp;
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
              href="www.google.com"
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
              <img src={fbIcon} height="20px" alt="facebookIcon" />
              &nbsp;Log in with Facebook
            </a>
            <a
              href="www.google.com"
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
            width: "55%",
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
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D079821F4-B1C5-4D37-8B35-175A10BB5E17%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps://www.google.com/&pli=1"
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
              GET IT FROm <br />
              <h2 style={{ padding: "0", margin: "0" }}>Microsoft</h2>
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
export default App;
