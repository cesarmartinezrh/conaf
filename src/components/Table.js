import styled from "styled-components";
import Video from "../components/Video";
import Data from "../data/Sesiones.json";
import { FaFilePdf } from "react-icons/fa";
import Acuerdos from "../data/Acuerdos.json";
import Separator from "./Separator";

const Tabla = styled.table`
  width: 100%;
  margin: 25px 0;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  text-indent: initial;
  border-color: grey;
`;

const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  background-color: ${(props) => (props.odd ? "#eee" : null)};

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

const Th = styled.th`
  display: table-cell;
  font-weight: bold;
  vertical-align: center;
  border-bottom: 2px solid #ddd;
  height: 100%;
  padding: 0 5px;
  text-align: left;

  &:nth-last-child(-n + 3) {
    width: 20%;
    text-align: center;
  }

  @media screen and (max-width: 766px) {
    font-size:10px;
  }

  @media screen and (min-width: 767px) {
    font-size:12px;
  }

  @media screen and (min-width: 1024px) {
    font-size:18px};
  }
`;

const ThProcess = styled(Th)`
  border: 2px solid #ddd;

  &:first-child {
    width: 15%;
  }

  &:nth-child(2) {
    width: 55%;
  }

  &:nth-last-child(-n + 2) {
    width: 15%;
  }
`;

const ThConcluded = styled(Th)`
  border: 2px solid #ddd;

  &:first-child {
    width: 15%;
  }

  &:nth-child(2) {
    width: 45%;
  }
`;

const Title = styled.th`
  display: table-cell;
  font-weight: bold;
  vertical-align: center;
  border-bottom: 2px solid #ddd;
  height: 100%;
  padding: 0 5px;
  text-align: left;

  @media screen and (max-width: 766px) {
    font-size: 16px;
  }

  @media screen and (min-width: 767px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const Td = styled.td`
  line-height: 1.4285;
  vertical-align: top;
  border-top: 1px solid #ddd;
  text-align: center;
  padding: 5px;

  &:first-child,
  &:nth-child(2) {
    text-align: left;
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }

  @media screen and (min-width: 767px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const TD = styled(Td)`
  font-size: 12px;

  &:nth-child(2) {
    text-align: justify;
  }
`;

const Anchor = styled.a`
  color: var(--red);
  font-size: 120%;

  &:hover {
    color: var(--dark-red);
  }
`;

const Table = () => {
  return (
    <>
      {Data.filter((tab) => tab.id === 0).map((table) => (
        <Tabla key={table.id}>
          <Thead>
            <Tr>
              <Title colSpan={5}>{table.title}</Title>
            </Tr>
            <Tr>
              <Th>Número</Th>
              <Th>Fecha</Th>
            </Tr>
          </Thead>
          <Tbody style={{ backgroundColor: "#f2f2f2" }}>
            {table.sesions.map((data) => (
              <Tr>
                <Td style={{ textAlign: "center" }}>{data.name}</Td>
                <Td style={{ textAlign: "center" }}>{data.date}</Td>
              </Tr>
            ))}
          </Tbody>
        </Tabla>
      ))}
      {Data.filter((tab) => tab.id === 1).map((table) => (
        <Tabla key={table.id}>
          <Thead>
            <Tr>
              <Title colSpan={5}>{table.title}</Title>
            </Tr>
            <Tr>
              <Th>Número</Th>
              <Th>Fecha</Th>
              <Th>Convocatoria</Th>
              <Th>Información de los asuntos tratados</Th>
              <Th>Acta de Acuerdos</Th>
            </Tr>
          </Thead>
          <Tbody>
            {table.sesions.map((data) => (
              <Tr key={data.id}>
                <Td>{data.name}</Td>
                <Td>{data.date}</Td>
                {data.convocatory ? (
                  <Td>
                    <Anchor
                      href={`${process.env.PUBLIC_URL.concat(
                        data.convocatory
                      )}`}
                      download={`Convocatoria de la ${data.name.concat(
                        ".pdf"
                      )}`}
                    >
                      {<FaFilePdf />}
                    </Anchor>
                  </Td>
                ) : (
                  <Td>Pendiente de aprobación en próxima sesión</Td>
                )}
                {data.folder ? (
                  <Td>
                    <Anchor
                      href={`${process.env.PUBLIC_URL.concat(data.folder)}`}
                      download={`Carpeta de referencia de la ${data.name.concat(
                        ".pdf"
                      )}`}
                    >
                      {<FaFilePdf />}
                    </Anchor>
                  </Td>
                ) : (
                  <Td>Pendiente de aprobación en próxima sesión</Td>
                )}
                {data.certificate ? (
                  <Td>
                    <Anchor
                      href={`${process.env.PUBLIC_URL.concat(
                        data.certificate
                      )}`}
                      download={`Acta de la ${data.name.concat(".pdf")}`}
                    >
                      {<FaFilePdf />}
                    </Anchor>
                  </Td>
                ) : (
                  <Td style={{ fontSize: "12px" }}>
                    <p> Pendiente de aprobación</p> <p> en próxima sesión</p>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Tabla>
      ))}
      <Video />
      {Data.filter((tab) => tab.id !== 0 && tab.id !== 1).map((table) => (
        <Tabla key={table.id}>
          <Thead>
            <Tr>
              <Title colSpan={5}>{table.title}</Title>
            </Tr>
            <Tr>
              <Th>Número</Th>
              <Th>Fecha</Th>
              <Th>Convocatoria</Th>
              <Th>Información de los asuntos tratados</Th>
              <Th>Acta de Acuerdos</Th>
            </Tr>
          </Thead>
          <Tbody>
            {table.sesions.map((data) => (
              <Tr key={data.id}>
                <Td>{data.name}</Td>
                <Td>{data.date}</Td>
                {data.convocatory ? (
                  <Td>
                    <Anchor
                      href={`${process.env.PUBLIC_URL.concat(
                        data.convocatory
                      )}`}
                      download={`Convocatoria de la ${data.name.concat(
                        ".pdf"
                      )}`}
                    >
                      {<FaFilePdf />}
                    </Anchor>
                  </Td>
                ) : (
                  <Td>Pendiente de aprobación en próxima sesión</Td>
                )}
                {data.folder ? (
                  <Td>
                    <Anchor
                      href={`${process.env.PUBLIC_URL.concat(data.folder)}`}
                      download={`Carpeta de referencia de la ${data.name.concat(
                        ".pdf"
                      )}`}
                    >
                      {<FaFilePdf />}
                    </Anchor>
                  </Td>
                ) : (
                  <Td>Próximamente</Td>
                )}
                {data.certificate ? (
                  <Td>
                    <Anchor
                      href={`${process.env.PUBLIC_URL.concat(
                        data.certificate
                      )}`}
                      download={`Acta de la ${data.name.concat(".pdf")}`}
                    >
                      {<FaFilePdf />}
                    </Anchor>
                  </Td>
                ) : (
                  <Td>Pendiente de aprobación en próxima sesión</Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Tabla>
      ))}
      <Title style={{ border: "none" }}>
        Acuerdos del Consejo Nacional Forestal
      </Title>
      <Separator />
      <Tabla>
        <Thead>
          <Tr>
            <Title style={{ color: "var(--dark-yellow)" }} colSpan={4}>
              En proceso
            </Title>
          </Tr>
          <Tr>
            <ThProcess>No. ID</ThProcess>
            <ThProcess>Acuerdo</ThProcess>
            <ThProcess>Toma del acuerdo</ThProcess>
            <ThProcess colSpan={2}>Último avance</ThProcess>
          </Tr>
        </Thead>
        <Tbody>
          {Acuerdos.filter((x) => x.estatus !== "Concluido")
            .reverse()
            .map((acuerdo) => (
              <Tr key={acuerdo.id}>
                <TD>{acuerdo.id}</TD>
                <TD>{acuerdo.acuerdo}</TD>
                <TD>
                  <p>{acuerdo.sesionini}</p>
                  <p>{acuerdo.fechaini}</p>
                </TD>
                <TD>Avance</TD>
              </Tr>
            ))}
        </Tbody>
      </Tabla>
      <Tabla>
        <Thead>
          <Tr>
            <Title style={{ color: "var(--green)" }} colSpan={5}>
              Concluidos
            </Title>
          </Tr>
          <Tr>
            <ThConcluded>No. ID</ThConcluded>
            <ThConcluded>Acuerdo</ThConcluded>
            <ThConcluded>Toma del acuerdo</ThConcluded>
            <ThConcluded>Conclusión del acuerdo</ThConcluded>
            <ThConcluded>Evidencia</ThConcluded>
          </Tr>
        </Thead>
        <Tbody>
          {Acuerdos.filter((x) => x.estatus === "Concluido")
            .reverse()
            .map((acuerdo) => (
              <Tr key={acuerdo.id}>
                <TD>{acuerdo.id}</TD>
                <TD>{acuerdo.acuerdo}</TD>
                <TD>
                  <p>{acuerdo.sesionini}</p>
                  <p>{acuerdo.fechaini}</p>
                </TD>
                <TD>
                  <p>{acuerdo.sesionfin}</p>
                  <p>{acuerdo.fechafin}</p>
                </TD>
                <TD>
                  {/* <a href="https://www.youtube.com">{acuerdo.id}</a>*/} En
                  proceso.
                </TD>
              </Tr>
            ))}
        </Tbody>
      </Tabla>
    </>
  );
};

export default Table;
