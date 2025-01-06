import React from "react";

function CheckBox() {
  return (
    <>
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
    </>
  );
}

export default CheckBox;
