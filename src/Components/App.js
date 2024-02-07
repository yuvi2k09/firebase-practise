import logo from "../logo.png";
function App() {
  return (
    <>
      <div
        style={{ border: "solid", display: "flex", flexDirection: "column" }}
      >
        <div style={{ padding: "8px" }}>
          <img
            src={logo}
            style={{ border: "solid" }}
            height="51px"
            width="200px"
            alt="logo"
          ></img>
        </div>

        <div style={{ padding: "5px" }}>
          <input
            placeholder="Phone number,username, or email"
            style={{ width: "210px" }}
          />
        </div>
        <div style={{ padding: "5px" }}>
          <input
            type="password"
            placeholder="Password"
            style={{ width: "210px" }}
          />
        </div>
        <div style={{ padding: "8px" }}>
          <button
            style={{
              borderRadius: "5px",
              width: "218px",
              backgroundColor: "#47C2F0",
              height: "30px",
              fontWeight: "bold",
            }}
          >
            Log in
          </button>
        </div>
        <div>
          <hr style={{ width: "90px" }} />
          OR
          <hr />
        </div>
      </div>
    </>
  );
}

export default App;
