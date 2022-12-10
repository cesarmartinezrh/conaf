import { useField } from "formik";
import styled from "styled-components";

const RadioOption = styled.input`
  margin-right: 5px;
  font-size: 16px;
  transform: scale(1.2);
  filter: hue-rotate(190deg);
`;


const RadioInput = ({ label, options, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
      <label>
        <RadioOption type={"radio"} {...field} />
        {label}
      </label>
  );
};

export default RadioInput;
