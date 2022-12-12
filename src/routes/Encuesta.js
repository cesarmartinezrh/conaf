import styled from "styled-components";
import * as Yup from "yup";
import Title from "../components/Title";
import Separator from "../components/Separator";
import { TextField } from "../components/TextField";
import { Formik, Form } from "formik";
import CheckboxInput from "../components/CheckboxInput";
import RadioInput from "../components/RadioInput";
import Questions from "../data/Questions.json";

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
  :first-child {
    border-bottom: 2px solid #eee;
    padding-bottom: 20px;
  }
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

const RadioQuestion = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Label = styled.label`
  margin: 30px 0 10px;
  font-weight: 500;
  max-width: 100%;
  cursor: default;
  font-size: 18px;
  align-text: justify;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Ingresar un nombre correcto")
    .max(50, "Ingrese un nombre correcto"),
});

const Encuesta = () => {
  return (
    <>
      <Title isHeader>Encuesta para el mecanismo Consejos Consultivos</Title>
      <Separator />
      <Container>
        <Formik
          initialValues={{
            nombre: "",
            edad: "",
            terminos: "",
            sexo: "",
          }}
          validationSchema={FormSchema}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            resetForm()
          }}
        >
            <Form>
              <FormGroup>
                <Title>Datos personales</Title>
                <TextField
                  label={"Nombre (Opcional)"}
                  type={"text"}
                  name={"nombre"}
                />
                <TextField label={"Edad"} type={"text"} name={"edad"} />
                <Label>Sexo</Label>
                <RadioQuestion>
                  <RadioInput name={"sexo"} value={"hombre"} label={"Hombre"} />
                  <RadioInput name={"sexo"} value={"mujer"} label={"Mujer"} />
                  <RadioInput name={"sexo"} value={"otro"} label={"Otro"} />
                </RadioQuestion>
              </FormGroup>
              <FormGroup>
                <Title>Reactivos</Title>
                {Questions.map((question) => (
                  <QuestionContainer key={question.id}>
                    <Label>
                      {`${question.id}. `}
                      {question.question}
                    </Label>
                    <RadioQuestion>
                      <RadioInput
                        name={question.id}
                        value={"si"}
                        label={"Si"}
                      />
                      <RadioInput
                        name={question.id}
                        value={"no"}
                        label={"No"}
                      />
                    </RadioQuestion>
                  </QuestionContainer>
                ))}
                <CheckboxInput
                  name={"terminos"}
                  label={"Terminos y condiciones"}
                />
              </FormGroup>
              <Button type="submit">Terminar</Button>
            </Form>
        </Formik>
      </Container>
    </>
  );
};

export default Encuesta;
