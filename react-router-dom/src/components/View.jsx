import React from "react";

function View({ list, handleDelete, handleEdit }) {
  console.log(list);

  return (
    <>
      <table className="table w-50 mx-auto caption-top mt-5">
        <caption>
          <h2>User Data</h2>
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button className="btn " onClick={() => handleEdit(user.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="text-center">
              <td colSpan={4}>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default View;
