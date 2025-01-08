import React, { useEffect, useState } from "react";
import View from "./View";

function Form() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [hobby, setHobby] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("list")) || [];
    setList(oldList);
  }, []);

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
    if (!validation()) return;
    let newList = [...list, user];
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
    setUser({});
    setHobby([]);
  };

  const validation = () => {
    let tempError = {};
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!user.username) tempError.username = "username is required";
    if (!user.email) tempError.email = "email is required";
    if (!user.password) tempError.password = "password is required";
    if (user.password && !pattern.test(user.password))
      tempError.password =
        "Password is invalid. It must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.";
    if (!user.phone) tempError.phone = "phone is required";
    if (!user.hobby) tempError.hobby = "hobby is required";
    if (!user.gender) tempError.gender = "gender is required";
    if (!user.address) tempError.address = "address is required";
    if (!user.city) tempError.city = "city is required";

    setError(tempError);
    return Object.keys(tempError).length === 0;
  };

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
          {error.username && (
            <div className="text-danger">{error.username}</div>
          )}
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
          {error.email && <div className="text-danger">{error.email}</div>}
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
          {error.password && (
            <div className="text-danger">{error.password}</div>
          )}
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
          {error.phone && <div className="text-danger">{error.phone}</div>}
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
          {error.hobby && <div className="text-danger">{error.hobby}</div>}
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
          {error.gender && <div className="text-danger">{error.gender}</div>}
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
          {error.address && <div className="text-danger">{error.address}</div>}
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
          {error.city && <div className="text-danger">{error.city}</div>}
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
