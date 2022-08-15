import Separator from "../components/Separator";
import Title from "../components/Title";
import ConsejoView from "../components/ConsejoView";
import styled from "styled-components";

const Reference = styled.p`
  display: block;
  width: 100%;
  font-size: 12px;
  color: var(--dark-grey);
  text-decoration: none;
  font-style: italic;

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const ConsejosEstatales = () => {

  return (
    <>
      <Title isHeader>Consejos Estatales Forestales</Title>
      <Separator />
      <Reference>
        Seleccione el estado del que desee visualizar información.
      </Reference>
      <ConsejoView />
    </>
  );
};

export default ConsejosEstatales;
