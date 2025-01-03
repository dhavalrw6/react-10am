import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Feedback() {
  const [feedback, setFeedback] = useState({});
  const [hover, setHover] = useState(null);
  const [star, setStar] = useState(null);
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !(feedback.feedback && feedback.star && feedback.feedback.trim() != "")
    ) {
      alert("Enter filds..");
      return;
    }
    setList([...list, feedback]);
    setFeedback({});
    setStar(null);
  };

  const handleOver = (index) => {
    setHover(index + 1);
  };

  const handleLeave = () => {
    setHover(null);
  };

  const handleStar = (star) => {
    setStar(star + 1);
    setFeedback({ ...feedback, star: star + 1 });
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            color={(hover || star) > index ? "gold" : "gray"}
            onMouseOver={() => handleOver(index)}
            onMouseLeave={() => handleLeave()}
            onClick={() => handleStar(index)}
          />
        ))}
        <br />
        <textarea
          value={feedback.feedback || ""}
          name="feedback"
          id=""
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>feedback</td>
            <td>star</td>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((val, idx) => (
              <tr key={idx}>
                <td>{val.feedback}</td>
                <td>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={idx} color={val.star > i ? "gold" : "gray"} />
                  ))}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>no feedback</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Feedback;
