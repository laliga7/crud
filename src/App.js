import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [listofUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() =>{
    Axios.get("https://rococo-dango-d1c66a.netlify.app/getUsers").then((response) =>{
      setListOfUsers(response.data);
    });
  }, []); 

const createUser =  () => {
  Axios.post("https://rococo-dango-d1c66a.netlify.app/createUser" ,{
    name: name, 
    age: age,
    username: username,}).then((response)=>{
    // alert("USER CREATED");
    setListOfUsers([...listofUsers, 
    {
      name: name, 
      age: age,
      username: username,
    },
  ]);
  });
};

  return (
    <div className="App">
      <div className="usersDisplay">
        {listofUsers.map((user) =>{
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input type="text" placeholder='Name...' onChange={(event) =>{
          setName(event.target.value);
        }}></input>
        <input type="Number" placeholder='Age...' onChange={(event) =>{
          setAge(event.target.value);
        }}></input>
        <input type="text" placeholder='Username...' onChange={(event) =>{
          setUsername(event.target.value);
        }}></input>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
