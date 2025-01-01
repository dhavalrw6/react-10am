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
            <th scope="col">Action</th>
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
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                </td>
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
