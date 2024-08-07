import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useRef, useState } from "react";

type InputFormType = {
    inputType: HTMLInputElement["type"]
    name: HTMLInputElement["name"]
    label: string

}
function InputForm({ inputType, name, label }: InputFormType) {

    const labelRef = useRef<HTMLLabelElement>(null)
    const [inputValue, setinputValue] = useState<string>("");

    const onEnterPress = () => {
        labelRef.current?.click()
        if (!focused) setFocus(focusKey)

    }

    const { ref, focused, focusKey } = useFocusable({ onEnterPress });


    return (
        <>
            <label htmlFor={name} ref={labelRef}>{label}</label>
            <div
                className={`input-container ${focused ? "input-active" : ""}`}
                ref={ref}
                onClick={() => onEnterPress()

                }
            >
                {
                    inputValue == "" ?
                        <span className="placeholder"> {focused ? "|" : label}</span>
                        :
                        <span className="value">
                            {
                                inputType == "password"
                                    ?
                                    "*".repeat(inputValue.length)
                                    :
                                    inputValue
                            }
                            {
                                focused ? "|" : ""
                            }
                        </span>
                }


            </div>
            <input
                onChange={(e) => setinputValue(e.target.value)}
                id={name}
                type={inputType}
                name={name}
                value={inputValue}
            />
        </>
    );
}

export default InputForm;