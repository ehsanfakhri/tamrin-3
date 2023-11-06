import React, { useState } from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  max-width: 300px;
  max-height: 150px;
`;

const MaxLengthTextarea = ({ maxLen, style }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxLen) {
      setValue(inputValue);
    }
  };

  return (
    <div>
      <TextArea style={style} value={value} onChange={handleChange} />
      <p>
        {value.length}/{maxLen}
      </p>
    </div>
  );
};

export default MaxLengthTextarea;
