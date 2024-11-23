import React, { useState } from "react";
export default function Label(props) {
  const { value } = props; //Destructuring props
  const [text, setText] = useState("Enter any text to convert into upper case");
  const [state, setState] = useState("Uppercase");//UseState for state whether it is uppercase or lowercase
//note that the default value above is Uppercase
  const handleOnChange = (event) => {
    setText(event.target.value);//Listening the event cuz I want to record evry input that the user has entered and storing it into the text variable using the setText
  };

  const handleOnClick = () => {
   
    console.log(state);
    switch (state) {
        case 'Uppercase':                      //Supppose if it is a uppercase it will convert it into the Uppercase
            setText(text.toUpperCase());
            setState('Lowercase')
            break;
        case 'Lowercase':                      //Vice versa
            setText(text.toLowerCase());
            setState('Uppercase')
        default:
            break;
    }
  };

  return (
    <>
      <div className="mb-3"></div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Conversion From Upper Case To Lower Case
        </label>
        <textarea
          className="form-control"
          value={text}//Setting the useState variable as a value
          onChange={handleOnChange}//This is required for recording the input of the user in order to chnage it into uppercase or the other..
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
        <button type="button" onClick={handleOnClick} class="btn btn-dark">
          {state == 'Uppercase' ? 'Convert to Upper Case' : "Convert to Lower Case" } {/*Dynamic value for the button*/}
        </button>
      </div>
    </>
  );
}
