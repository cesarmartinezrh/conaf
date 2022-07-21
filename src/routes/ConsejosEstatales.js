import styled from "styled-components";
import Estados from "../data/Estados.json";
import Collapsible from "../components/Collapsible";
import Separator from "../components/Separator";
import Title from "../components/Title";
import { FaFilePdf } from "react-icons/fa";

const Anchor = styled.a`
  color: var(--red);
  font-size: 150%;
  text-decoration: none;

  &:hover {
    color: var(--dark-red);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Year = styled.h1`
  text-align: left;
  margin: ${({ first }) => (first ? "0px 0px 10px" : "15px")};
`;

const ActaContain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  color: var(--grey);
  font-weight: 600;
`;

const NoDisp = styled.p`
  font-size: 1rem;
  color: var(--dark-grey);
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #000;
`;

const ConsejosEstatales = () => {
  return (
    <>
      <Title isHeader>Consejos Estatales Forestales</Title>
      <Separator />
      {Estados.filter((x) => x.actas2021 || x.actas2022).map(
        ({ id, estado, shortname, actas2022, actas2021 }) => (
          <Collapsible key={id} title={estado}>
            <Content>
              {actas2022 !== undefined && (
                <Header>
                  <Year first>Sesiones 2022</Year>
                  <Subtitle>Actas</Subtitle>
                </Header>
              )}
              {actas2022 !== undefined &&
                actas2022.map(({ nombre, path, fecha }) => (
                  <ActaContain>
                    <Text>{`${nombre} realizada el ${fecha}`}</Text>

                    {path !== "" ? (
                      <Anchor
                        href={`${process.env.PUBLIC_URL.concat(path)}`}
                        download={`${shortname} Acta de la ${nombre} realizada el ${fecha.concat(
                          ".pdf"
                        )}`}
                      >
                        <FaFilePdf />{" "}
                      </Anchor>
                    ) : (
                      <NoDisp>No disponible</NoDisp>
                    )}
                  </ActaContain>
                ))}
              {actas2021 !== undefined && (
                <Header>
                  <Year first>Sesiones 2022</Year>
                  <Subtitle>Actas</Subtitle>
                </Header>
              )}
              {actas2021 !== undefined &&
                actas2021.map(({ nombre, path, fecha }) => (
                  <ActaContain>
                    <Text>{`${nombre} realizada el ${fecha}`}</Text>
                    <Anchor
                      href={`${process.env.PUBLIC_URL.concat(path)}`}
                      download={`${shortname} Acta de la ${nombre} realizada el ${fecha.concat(
                        ".pdf"
                      )}`}
                    >
                      {<FaFilePdf />}
                    </Anchor>
                  </ActaContain>
                ))}
            </Content>
          </Collapsible>
        )
      )}
    </>
  );
};

export default ConsejosEstatales;
