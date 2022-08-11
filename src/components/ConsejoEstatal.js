import styled from "styled-components";
import Estados from "../data/Estados.json";
import { FaFilePdf } from "react-icons/fa";

const Main = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
const Header = styled.div`
  width: 100%;
  height: 15%;
`;

const HeaderTitle = styled.h1`
  color: var(--green);
`;

const Year = styled.h1`
  color: #000;
`;

const ConsejoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const Anchor = styled.a`
  color: var(--red);
  cursor: pointer;
`;

const Text = styled.p``;

const ConsejoEstatal = ({ clave }) => {
  const estado = Estados.find((estado) => estado.shortname === clave);

  return (
    <>
      {estado !== undefined && (
        <Main>
          <Header>
            <HeaderTitle>{estado.estado}</HeaderTitle>
          </Header>
          {estado.actas2022 && <Year>2022</Year>}
          <ConsejoContainer>
            {estado.actas2022?.map((acta) => (
              <>
                <Text>{acta.nombre}</Text>
                <Text>{acta.fecha}</Text>
                {acta.path !== "En proceso" ? (
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(acta.path)}`}
                    download={`${acta.nombre} del estado de ${estado.estado}`}
                  >
                    <FaFilePdf></FaFilePdf>
                  </Anchor>
                ) : (
                  <Text>{acta.path}</Text>
                )}
              </>
            ))}
          </ConsejoContainer>
          {estado.actas2021 && <Year>2021</Year>}
          <ConsejoContainer>
            {estado.actas2021?.map((acta) => (
              <>
                <Text>{acta.nombre}</Text>
                <Text>{acta.fecha}</Text>
                {acta.path !== "En proceso" ? (
                  <Anchor
                    href={`${process.env.PUBLIC_URL.concat(acta.path)}`}
                    download={`${acta.nombre} del estado de ${estado.estado}`}
                  >
                    <FaFilePdf></FaFilePdf>
                  </Anchor>
                ) : (
                  <Text>{acta.path}</Text>
                )}
              </>
            ))}
          </ConsejoContainer>
          {(estado.actas2021 === undefined) &
          (estado.actas2022 === undefined) ? (
            <Year>Sin datos.</Year>
          ) : null}
        </Main>
      )}
    </>
  );
};

export default ConsejoEstatal;
