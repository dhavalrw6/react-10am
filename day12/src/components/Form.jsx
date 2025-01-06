import React, { useState } from "react";
import View from "./View";

function Form() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [hobby, setHobby] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    let newHobby = [];
    if (name == "hobby") {
      if (!user.hobby.includes(value)) {
        newHobby = [...hobby];
        setHobby(newHobby);
        console.log(newHobby);
      } else if (user.hobby) {
        newHobby = [...hobby, value];
        console.log(newHobby);
        setHobby(newHobby);
      }
      value = hobby;
    }
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setList([...list, user]);
    setUser({});
  };

  console.log(list);

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
          <label htmlFor="exampleInputPassword1" className="form-label">
            Phone
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            name="phone"
            value={user.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Hobby
          </label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleInputPassword1"
              name="hobby"
              value="dance"
              onChange={handleChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Dance
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleInputPassword1"
              name="hobby"
              value="reading"
              onChange={handleChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Reading
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Gender
          </label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="exampleInputPassword1"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="exampleInputPassword1"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="exampleInputPassword1"
            name="address"
            value={user.address || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            City
          </label>
          <select
            name="city"
            class="form-select"
            aria-label="Default select example"
            onChange={handleChange}
            value={user.city || ""}
          >
            <option selected disabled>
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
              <option key={index} value={city}>
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
