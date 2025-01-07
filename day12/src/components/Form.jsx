import React, { useEffect, useState } from "react";
import View from "./View";

function Form() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [hobby, setHobby] = useState([]);

  useEffect(()=>{
    let oldList = JSON.parse(localStorage.getItem("list")) || [];
    setList(oldList);
  })

  const handleChange = (e) => {
    let { name, value, checked } = e.target;
    // console.log(e);

    if (name == "hobby") {
      let newHobby = [...hobby];
      if (checked) {
        newHobby.push(value);
      } else {
        newHobby = newHobby.filter((val) => val != value);
      }
      console.log(newHobby);
      setHobby(newHobby);
      value = newHobby;
    }
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list, user];
    setList(newList);
    localStorage.setItem('list',JSON.stringify(newList));
    setUser({});
    setHobby([]);
  };

  // console.log(list);

  return (
    <>
      <form className="w-50 mx-auto" method="post" onSubmit={handleSubmit}>
        <h2 className="mt-3">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername1"
            name="username"
            value={user.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={user.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPhone"
            name="phone"
            value={user.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputHobby" className="form-label">
            Hobby
          </label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleInputHobby"
              name="hobby"
              value="dance"
              checked={hobby.includes("dance") ? true : false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Dance
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleInputDance"
              name="hobby"
              value="reading"
              checked={hobby.includes("reading") ? true : false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Reading
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputGender" className="form-label">
            Gender
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="exampleInputMale"
              name="gender"
              value="male"
              checked={user.gender === "male" ? true : false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="exampleInputFemale"
              name="gender"
              value="female"
              checked={user.gender === "female" ? true : false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="exampleInputAddress"
            name="address"
            value={user.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputCity" className="form-label">
            City
          </label>
          <select
            name="city"
            id="exampleInputCity"
            className="form-select"
            onChange={handleChange}
          >
            <option selected disabled value="">
              --Select-City--
            </option>
            {[
              "New York",
              "Los Angeles",
              "Chicago",
              "Houston",
              "Phoenix",
              "Philadelphia",
              "San Antonio",
              "San Diego",
              "Dallas",
              "San Jose",
            ].map((city, index) => (
              <option
                selected={user.city == city ? true : false}
                key={index}
                value={city}
              >
                {" "}
                {city}{" "}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <View list={list} />
    </>
  );
}

export default Form;
