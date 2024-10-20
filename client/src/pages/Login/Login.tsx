import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { login } = useAccountContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogin = async () => {
    try {
      const message = await login(email, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="Login"></div>

      <div className="Login__panel">
        <div className="Login__panel__content">
          <img src="/hog-rider.png"></img>
          <div className="Login__panel__content__message">
            <div>Welcome to the HOG RIDER!!! Federated Portal.</div>
            <div>
              Enter your{" "}
              <a href="https://myone.carleton.ca" target="blank">
                Hog Rider
              </a>{" "}
              username and password.
            </div>
          </div>
          {message && <p>{message}</p>}
          <div className="Login__panel__content__input">
            <input type="text" placeholder="Hod Rider Username" 
                  value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Password"               
            value={password}
              onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="Login__panel__content__checkbox">
            <input type="checkbox"></input>
            <label>Keep me signed in</label>
          </div>
          <button
            className="Login__panel__button"
            onClick={() => attemptLogin()}
          >
            Sign In
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;