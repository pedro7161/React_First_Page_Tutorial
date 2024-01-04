import React from 'react';
import logo from './logo.svg';
import Navbar from './Navbar/Navbar';
import List from './List/List';
import './App.css';
import { read } from 'fs';

type User = {
  name: string;
  email: string;
}

const TodoList = ({text}: any) => {
  return (
    <>
    
   <List items={[text]} />
   
    </>
  )
}
const App = () => {
  const [text, setText] = React.useState("React Typescript");
  const [user, setUser] = React.useState<User[]>();

  const getUsers = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await result.json() as User[];
    setUser(data);
  }
  React.useEffect(() => {
    if (text === "Load Users") {
      getUsers()
    }
    if (text !== "Load Users") {
      setUser([])
    }
    if (text === "List") {
      TodoList(["List",true,()=>{}])
    }
  }, [text])
  return (
    <>
      <Navbar items={[
        {
          text: "Home", action: () => (
            setText("Home")
          
          )
        },
        {
          text: "Load Users", action: () => (
            setText("Load Users"),
            getUsers()
          )
        },
        {
          text: "To Do List", action: () => (
            setText("List")
          
          )
        },

      ]}
      />
      <div className="App">
        <h1>{text}</h1>
      </div>

      <>

        {user && user?.length > 0 && (
          <>
            <h2>user info</h2>
            <div style={{ padding: 20, display: "flex", flex: 1, flexDirection: "column" }}>


              {user.map(elem => (
                <div key={elem.name}>


                  <span>name: {elem.name}</span>
                  <span>email: {elem.email}</span>
                </div>
              ))}
            </div>
          </>
        )}
        {text === "List" && (
          <>
            <TodoList text={text} />  
            </>)}
      </>
    </>
  );
}

export default App;
