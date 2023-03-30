import { useSelector, useDispatch } from "react-redux";
import { changeUsersFirstName } from "./redux/actions/changeUsersFirstName";
import { changeUsersLastName } from "./redux/actions/changeUsersLastName";
import { changeUsersAge } from "./redux/actions/changeUsersAge";
import { changeUsersEmail } from "./redux/actions/changeUsersEmail";
import "./App.css";
import { useState } from "react";

function App() {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [age, setAge] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <div className="App">
      <h3> User details (input/change/delete) -- simple React with Redux example  </h3>
      <a align={"left"}>First name: {user.firstname}</a><br/>
      <a align={"left"}> Last name: {user.lastname}</a><br/>
      <a align={"left"}>Age: {user.age}</a><br/>
      <a align={"left"}>E-mail: {user.email}</a>
      <br/><br/><hr></hr>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeUsersFirstName(firstname));
          dispatch(changeUsersLastName(lastname));
          dispatch(changeUsersAge(age));
          dispatch(changeUsersEmail(email));
        }}
      >
        <input
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Change firstname"
        ></input>
        <input
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Change last name"
        ></input>
        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Change age"
        ></input>
        <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Change email"
      ></input><br/>
        <input type="submit" value="Change user details (first name, last name, age, e-mail or all together)" />
      </form>
    </div>
  );
}

export default App;
