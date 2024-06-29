import { SetStateAction, useState } from "react";

export const NewLetter = () => {
  const [enteredBody, setEnteredBody] = useState("");

  const changeBodyHandler = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setEnteredBody(event.target.value);
  };
  console.log(enteredBody); // just console logging the entered Body

  return (
    <form>
      <p>
        <label style={{ display: "block" }} htmlFor="body">
          Compose your letter below:
        </label>
        <textarea
          style={{
            width: "500px",
            minWidth: "500px",
            minHeight: "300px",
            padding: "15px",
            fontSize: "1rem",
            lineHeight: "1.5",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
            resize: "vertical",
            outline: "none",
            transition: "border-color 0.3s",
            fontFamily: "'Inter",
          }}
          id="body"
          required
          rows={50}
          onChange={changeBodyHandler}
        />
      </p>
      <button>Post This Letter</button>
    </form>
  );
};
