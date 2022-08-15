import styled from "styled-components";
import React from "react";
import Estados from "../data/Estados.json";
import { FaFilePdf } from "react-icons/fa";

const Main = styled.div`
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  width: 100%;
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
  gap: 5px 0;
`;

const Anchor = styled.a`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #cdcbcb;
  color: var(--red);
  cursor: pointer;
  padding: 2px 0;
`;

const Text = styled.p`
  font-size: 9px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #cdcbcb;
  padding: 2px 0;

  @media screen and (min-width: 767px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;
const HeadText = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid var(--dark-grey);
  border-top: 1px solid var(--dark-grey);
`;

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
            {estado.actas2022 && (
              <>
                <HeadText>Sesión</HeadText>
                <HeadText>Fecha</HeadText>
                <HeadText>Acta PDF</HeadText>
              </>
            )}
            {estado.actas2022?.map((acta) => (
              <React.Fragment key={acta.path}>
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
              </React.Fragment>
            ))}
          </ConsejoContainer>
          {estado.actas2021 && <Year>2021</Year>}
          <ConsejoContainer>
            {estado.actas2021 && (
              <>
                <HeadText>Sesión</HeadText>
                <HeadText>Fecha</HeadText>
                <HeadText>Acta PDF</HeadText>
              </>
            )}
            {estado.actas2021?.map((acta) => (
              <React.Fragment key={acta.path}>
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
              </React.Fragment>
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
