import React from "react";

function View({ list, handleDelete, handleEdit }) {
  return (
    <>
      <table className="table w-50 mx-auto caption-top table-bordered">
        <caption>
          <h2>User Data</h2>
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
<<<<<<< HEAD
            <th scope="col">Action</th>
=======
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
>>>>>>> ac0dde8 (update)
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
<<<<<<< HEAD
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                </td>
=======
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
>>>>>>> ac0dde8 (update)
              </tr>
            ))
          ) : (
            <tr>
              <th scope="row" colSpan="4" className="text-center">
                Data Not Found.
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default View;
