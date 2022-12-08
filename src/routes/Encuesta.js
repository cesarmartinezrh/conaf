import styled from "styled-components";
import Title from "../components/Title";
import Separator from "../components/Separator";
import { TextField } from "../components/TextField";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
  border: 1px solid #eee;
  border-radius: 5px;
  border-top: 5px solid var(--green);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

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

const Button = styled.button`
  border: 2px solid #9d2449;
  background-color: transparent;
  box-shadow: 0 0 0 0 #9d2449;
  font-size: 18px;
  cursor: pointer;
  color: #9d2449;
  border-radius: 3px;
  padding: 10px 25px;
  margin: 10px 0 0;
  float: right;
  &:hover {
    background: #9d2449;
    color: #fff;
  }
`;

const Encuesta = () => {
  return (
    <>
      <Title isHeader>Encuesta para el mecanismo Consejos Consultivos</Title>
      <Separator />
      <Container>
        <Formik
          initialValues={{
            id: "",
            lastname: "",
            email: "",
            prueba: ""
          }}
          validate={""}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <FormGroup>
              <TextField label={'Prueba'} type={'text'} name={'prueba'}/>
              <Label>
                ID
                <Input name="id" type="text" />
                <ErrorMessage name="id" />
              </Label>
              <Label>
                Sexo
                <Input name="sexo" as="select">
                  <option value="">Seleccione</option>
                  <option value="mujer">Mujer</option>
                  <option value="hombre">Hombre</option>
                  <option value="otro">Otro</option>
                </Input>
                <ErrorMessage name="id" />
              </Label>
              <Label>
                LastName
                <Input name="lastname" type="text" />
                <ErrorMessage name="lastname" />
              </Label>
              <Label>
                E-mail
                <Input name="email" type="email" />
                <ErrorMessage name="email" />
              </Label>
            </FormGroup>
            <Button type="submit">Send</Button>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Encuesta;
