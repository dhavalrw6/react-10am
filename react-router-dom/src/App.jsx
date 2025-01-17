import React, { useState } from "react";
import Form from "./components/Form";
import View from "./components/View";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const navigetor = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(editId);

    let newList = [...list];
    if (editId == null) {
      // setList([...list, { ...user, id: Date.now() }]);
      newList = [...newList, { ...user, id: Date.now() }];
    } else {
      newList = newList.map((val) => {
        if (editId === val.id) {
          val = user;
        }
        return val;
      });
      setEditId(null);
    }
    setList(newList);
    setUser({});
    navigetor("/view");
  };

  const handleDelete = (id) => {
    let newList = [...list];
    newList = newList.filter((val) => val.id != id);
    setList(newList);
  };

  const handleEdit = (id) => {
    console.log("log from edit");

    let newList = [...list];
    let userData = newList.filter((val) => val.id == id)[0];
    setUser(userData);
    setEditId(id);
    navigetor("/");
  };

  console.log(list);
  return (
    <>
      {/* <Form
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <View list={list} /> */}

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              user={user}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/view"
          element={
            <View
              list={list}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
