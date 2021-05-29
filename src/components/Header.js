import React,{useContext} from "react";
import { NavLink, useHistory } from "react-router-dom";
import firebase from '../config/firebase';
import AppContext from "../store/AppContext";

export default function Header() {
  const [IsLoggedIn,User] = useContext(AppContext);
  const history = useHistory();

  function logout(e){
    firebase.auth().signOut()
    .then((res) => {
      history.replace('/login');
    })
    .catch((e) => {
      console.log(e.response.data);
    });
  }

  return (
    <nav className="py-5 bg-gray-900 text-white flex justify-between">
      <ul className="flex justify-between px-10">
          <li className="mr-5">
            <NavLink to="/" exact={true} activeClassName="underline text-blue-200">Home</NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/about" activeClassName="underline text-blue-200">About</NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/gallary" activeClassName="underline text-blue-200">Gallary</NavLink>
          </li>
          <li className="mr-5">
            <NavLink to="/tensorflow" activeClassName="underline text-blue-200">TensorFlow</NavLink>
          </li>
        </ul>
        <ul className="flex justify-between px-10">
        <li className="mr-5">
        {IsLoggedIn ? (<button onClick={logout}>Logout</button>) : ( <NavLink to="/login" activeClassName="underline text-blue-200">Login</NavLink>)}
        </li>
        {!IsLoggedIn && (<li className="mr-5"> <NavLink to="/signup" activeClassName="underline text-blue-200">Signup</NavLink></li>)}
      </ul>
    </nav>
  );
}
