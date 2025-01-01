import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function Comments() {
  let [star, setStar] = useState(null);

  const handleStar = (star) => {
    setStar(star);
  };

  return (
    <form method="post">
      <label htmlFor="start">start:</label>
      {[...Array(5).keys()].map((val, idx) => (
        <FaStar
          onMouseOver={() => handleStar(val + 1)}
          key={idx}
          color={val == star ? "yello" : "gray"}
        />
      ))}{" "}
      <br />
      <label htmlFor="comment">comment:</label>
      <textarea
        name="comment"
        rows="4"
        cols="50"
        placeholder="Type your comment"
        id="comment"
      />
    </form>
  );
}

export default Comments;
