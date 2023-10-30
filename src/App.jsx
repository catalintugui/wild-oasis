import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  color: red;
  background-color: yellow;
`;

const StyledApp = styled.div`
  padding: 20px;
  background-color: grey;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>wild oasis</H1>
        <Button>this is my button</Button>

        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
