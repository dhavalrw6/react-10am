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
            <th scope="col">phone</th>
            <th scope="col">Gender</th>
            <th scope="col">address</th>
            <th scope="col">city</th>
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
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
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
