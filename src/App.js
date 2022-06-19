import React, {useState, useRef} from 'react';


function App() {
  const [user, setUser] = useState();
  let userName = useRef();

  const showUserName = () => {
    if (userName != null && userName !== "") {
      setUser(userName.current.value);
    } else {
      setUser(userName.current.value);
    }
    
  }

  return (
    <div>
      <p>User Name: {user}</p>
      <input type="text" ref={userName}></input>
      <button onClick={showUserName}> Show User Name</button>
    </div>
  );
}

export default App;
