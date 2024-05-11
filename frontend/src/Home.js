import { useState, React, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Home() {
  const EURL = "http://localhost:8080";
  const DURL = "http://127.0.0.1:8000/";

  const [expressStatus, setExpressStatus] = useState("Trying to Connect");
  const [djangoStatus, setDjangoStatus] = useState("Trying to Connect");

  async function checkExpress() {
    const response = await axios
      .post(EURL + "/checkConnection")
      .then((res) => {
        console.log(res.data);
        setExpressStatus(res.data);
      })
      .catch((err) => {
        console.log(err);
        setExpressStatus("Connection Failed");
      });
  }

  async function checkDjango() {
    const response = await axios
      .post(DURL + "checkConnection/")
      .then((res) => {
        console.log(res);
        setDjangoStatus(res.data);
      })
      .catch((err) => {
        console.log(err);
        setDjangoStatus("Connection Failed");
      });
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "xx-large", fontWeight: "700" }}>
        Backend Server Check for Express and Django
      </h1>
      <br />
      <br />
      <h3>
        <span style={{ fontWeight: "bold", fontSize: "large" }}>
          Express Status :
        </span>{" "}
        {expressStatus}
      </h3>
      <button
        style={{ border: "2px solid black", padding: "2%" }}
        onClick={() => checkExpress()}
      >
        Check Connection
      </button>
      <br />
      <h3>
        <span style={{ fontWeight: "bold", fontSize: "large" }}>
          Django Status :
        </span>{" "}
        {djangoStatus}
      </h3>
      <button
        style={{ border: "2px solid black", padding: "2%" }}
        onClick={() => checkDjango()}
      >
        Check Connection
      </button>
    </div>
  );
}

export default Home;
