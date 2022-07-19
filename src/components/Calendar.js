import styled from "styled-components";
import Separator from "./Separator";

const Wrapper = styled.div`
  border-top: 6px outset #000;
  border-bottom: 6px outset #000;
`;

const H4 = styled.h4`
  font-size: 22px;
  font-weight: 400;
`

const Cite = styled.p`
  font-size: 12px;
  font-style: italic;
  margin: 10px 0;
`
const Calendar = () => {
  return (
    <>
      <h1>Calendario de Sesiones</h1>
      <Separator />
      <h3>Calendario de Sesiones Ordinarias 2022 - Consejo Nacional Forestal</h3>
      <Wrapper>
        <H4>60ª Sesión Ordinaria - Jueves 17 de Febrero</H4>
        <H4>61ª Sesión Ordinaria - Jueves 26 de Mayo</H4>
        <H4>62ª Sesión Ordinaria - Jueves 18 de Agosto</H4>
        <H4>63ª Sesión Ordinaria - Jueves 24 de Noviembre</H4>
      </Wrapper>
      <Cite>Calendario aprobado por el Pleno del CONAF, en la 59a Sesión Ordinaria, del 25 de noviembre de 2021.</Cite>
      <hr />
    </>
  );
};

export default Calendar;
