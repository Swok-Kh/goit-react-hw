import { useState } from "react";

export const useFormInput = init => {
  const [input, setInput] = useState(init);
  const [isInputError, setIsInputError] = useState(false);

  function handleInput(value) {
    setInput(value);
    setIsInputError(false);
  }

  return [input, handleInput, isInputError, setIsInputError];
};