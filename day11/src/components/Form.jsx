import { useState } from "react";

function Form() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...list, user];
    setList(newList);
    setUser({});
    console.log(newList);
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-controler">
          <label for="username">username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-controler">
          <label for="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-controler">
          <label for="password">password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={user.password || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <table>
        <caption>
          <h2>User Data</h2>
        </caption>
        <thead>
          <tr>
            <th>Username</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((val, idx) => (
              <tr key={idx}>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td>{val.password}</td>
              </tr>
            ))
          ) : (
            <tr>No data found.</tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Form;
