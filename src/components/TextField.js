import { useField, Field } from "formik";
import styled from "styled-components";

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
  max-width: 100%;
  cursor: default;
  font-size: 18px;
`;

const Input = styled(Field)`
  width: 100%;
  height: 39px;
  font-size: 18px;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
`;

export const TextField = ({ label,...props }) => {
  const [field, meta] = useField(props);
  console.log({field, meta});
  return (
    <div>
      <Label>
        {label}
        <Input {...field} />
      </Label>
    </div>
  );
};
