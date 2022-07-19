import styled from "styled-components";

const Frame = styled.iframe`
  width: 100%;
`;

const Video = () => {
  return (
    <>
      <Frame
        height="315"
        src="https://www.youtube.com/embed/Hfs6bTKe_-o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Frame>
    </>
  );
};

export default Video;
