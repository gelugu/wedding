import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

export const Parallax = ({
  children,
  img,
  startPosition = 0,
  scrollSpeed = 100,
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const mainElement = document.querySelector(".main");

    mainElement.addEventListener("scroll", scrollOnTop);
    return () => {
      mainElement.removeEventListener("scroll", scrollOnTop);
    };
    // eslint-disable-next-line
  }, []);

  const setBackgroundPosition = (y) => {
    wrapperRef.current.style.backgroundPositionY = `${y}%`;
  };

  const scrollOnTop = () => {
    const mainScrollTop = document.querySelector(".main").scrollTop;
    const wrapperScrollTop =
      mainScrollTop - wrapperRef.current.offsetTop + startPosition;

    if (wrapperScrollTop <= startPosition) {
      setBackgroundPosition(startPosition);
      return;
    }
    if (wrapperScrollTop > wrapperRef.current.offsetHeight) {
      setBackgroundPosition(100);
      return;
    }

    setBackgroundPosition(
      startPosition +
        (wrapperScrollTop / wrapperRef.current.offsetHeight) * scrollSpeed
    );
  };

  return (
    <Wrapper img={img} ref={wrapperRef}>
      <ParallaxContent>{children}</ParallaxContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  ${(props) => css`
    background-image: url(${process.env.PUBLIC_URL + props.img});
  `}
`;

const ParallaxContent = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;

`
