import React from "react";

function View({ list }) {
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
