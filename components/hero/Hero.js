import styled from "styled-components";

const Hero = ({children}) => {
  return (
    <>
      <HeroStyles>
        <h1>
          Good day if you have seen one!
        </h1>
        {children}
      </HeroStyles>
    </>
  )
}

export default Hero;

const HeroStyles = styled.div`
background-color: magenta;

`
