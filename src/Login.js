import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { login } from "./features/userSlice";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const register = async (e) => {
    if (name.length === 0) {
      alert("name cannot be empty");
    } else {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      await updateProfile(user, {
        displayName: name,
        photoUrl: profilePic,
      });
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: name,
          photoUrl: profilePic,
        })
      );
      console.log("User profile updated");
    }
  };
  const loginApp = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          profileUrl: user.profileUrl,
        })
      );
    } catch (error) {
      console.log("Error signing in: ", error.message);
    }
  };
  return (
    <div className="login">
      <img
        src="https://www.business2community.com/wp-content/uploads/2020/04/linkedin_1587065153-900x561.png"
        alt=""
      />
      <form>
        <input
          placeholder="Full name (required)"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Profile Pic URL"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member ?
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
