import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledFrame = styled.iframe`
  width: 100%;
  border: none;
  height: 2826px;

  @media screen and (max-width: 766px) {
  height: 3400px;
  }
`;

const Survey = () => {
  return (
    <>
      <h1>Survey</h1>
      <Container>
        <StyledFrame
          src="https://docs.google.com/forms/d/e/1FAIpQLSeTikjzIkmr2YZJOJq6qwRp-s1TDe-RbolbbPfSgqHqhS6V7Q/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Cargando…
        </StyledFrame>
      </Container>
    </>
  );
};

export default Survey;
