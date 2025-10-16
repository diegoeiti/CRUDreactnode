import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form.js";
import "react-toastify/ReactToastify.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle/>
    </>
  );
}

export default App;
