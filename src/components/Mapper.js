import { useRef, useEffect, useState } from "react";
import ImageMapper from "react-img-mapper";
import coords from "../data/Coords.json";
import styled from "styled-components";
import map from "../assets/images/mapa.webp";
import ConsejoEstatal from "./ConsejoEstatal";
import { Link } from "react-scroll";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: center;
  position: sticky;
  border-radius: 4px;

  @media screen and (min-width: 1024px) {
    height: ${({ map }) => (map ? "600px" : "500px")};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const TitleMap = styled.span`
  font-size: 24px;
  color: var(--wine);
  font-weight: 600;
`;

const Mapper = () => {
  const [state, setState] = useState("");
  const [hover, setHover] = useState("Coloque el cursor en el mapa");

  const handlerClick = ({ clave }) => {
    setState(clave);
  };

  const handleMouseEnter = ({ name }) => {
    setHover(name);
  };

  function calculateWidth(width) {
    switch (width) {
      case 320:
        width = width * 0.85;
        break;
      case 360:
        width = width * 0.85;
        break;
      case 375:
        width = width * 0.85;
        break;
      case 411:
        width = width * 0.85;
        break;
      case 414:
        width = width * 0.85;
        break;
      case 540:
        width = width * 0.85;
        break;
      default:
        width = (width / 2) * 0.9;
        break;
    }
    return width;
  }

  return (
    <>
      <TitleContainer>
        <TitleMap>{hover}</TitleMap>
      </TitleContainer>
      <Container map>
        <Link smooth offset={-250} to={"container"}>
          <ImageMapper
            map={coords}
            src={map}
            fillColor={"rgba(35,91,78)"}
            strokeColor={"rgba(0,0,0)"}
            onClick={handlerClick}
            onMouseEnter={handleMouseEnter}
            imgWidth={663}
            width={calculateWidth(window.screen.width)}
          />
        </Link>
      </Container>

      {state ? (
        <Container id={"container"}>
          <ConsejoEstatal clave={state} />
        </Container>
      ) : null}
    </>
  );
};

export default Mapper;
