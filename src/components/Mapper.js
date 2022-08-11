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

  @media screen and (min-width: 1024px){
    height: ${({map}) => map ? '500px' : '700px'};
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
  const ref = useRef(null);

  const [state, setState] = useState("");
  const [hover, setHover] = useState("Coloque el cursor en el mapa");


  const handlerClick = (e) => {
    setState(e.clave);
  };

  const handleMouseEnter = (e) => {
    setHover(e.name);
  };

  return (
    <>
      <TitleContainer>
        <TitleMap>{hover}</TitleMap>
      </TitleContainer>
        <Container map ref={ref}>
          <Link smooth offset={-50} to={"container"}>
          <ImageMapper
            map={coords}
            src={map}
            fillColor={"rgba(35,91,78)"}
            strokeColor={"rgba(0,0,0)"}
            onClick={handlerClick}
            onMouseEnter={handleMouseEnter}
          />
          </Link>
        </Container>

      <Container id={"container"}>
        <ConsejoEstatal clave={state} />
      </Container>
    </>
  );
};

export default Mapper;
