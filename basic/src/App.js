import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

const Button = styled.button`
  background: transparent;
  color: #b9eaff;
`

export default function App() {
  return (
    <>
      <Container>
        <Button></Button>
      </Container>
    </>
  )
}