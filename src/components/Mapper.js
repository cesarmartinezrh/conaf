import ImageMapper from 'react-img-mapper';
import coords from '../data/Coords.json'
import styled from 'styled-components'
import map from '../assets/images/mapa.webp'

const Container = styled.div`
    width: 100%;
    height: auto;
  `

const Mapper = () => {

    return (
      <Container>
        <ImageMapper
          src={map}
          map={coords}
        />
        </Container>
    )
}

export default Mapper