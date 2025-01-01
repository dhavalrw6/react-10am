import React, { useState } from 'react'
import User from './components/User';

function App() {
  const [user,setUser] = useState({
    username : 'Raj',
    age : 25,
    email : 'raj@gmail.com'
  });

  const updateHeandler=()=>{
    setUser({
      username : 'Rajat',
      age : 26,
      email : 'rajat@gmail.com'
    })
  }

  return (
    <>
      <User user={user} updateHeandler={updateHeandler} />
    </>
  );
}

export default App
