import {
  setFocus,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect, useRef, useState } from "react";

type InputFormType = {
  inputType: HTMLInputElement["type"];
  name: HTMLInputElement["name"];
  label: string;
};
function InputForm({ inputType, name, label }: InputFormType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setinputValue] = useState<string>("");
  const { ref, focused, focusKey } = useFocusable();

  useEffect(() => {
    if (focused) inputRef.current?.focus();
  }, [focused]);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div
        className={`input-container ${focused ? "input-active" : ""}`}
        ref={ref}
        onClick={() => setFocus(focusKey)}
      >
        {inputValue == "" ? (
          <span className="placeholder"> {focused ? "|" : label}</span>
        ) : (
          <span className="value">
            {inputType == "password"
              ? "*".repeat(inputValue.length)
              : inputValue}
            {focused ? "|" : ""}
          </span>
        )}
      </div>
      <input
        onChange={(e) => setinputValue(e.target.value)}
        id={name}
        type={inputType}
        name={name}
        value={inputValue}
        ref={inputRef}
      />
    </>
  );
}

export default InputForm;
