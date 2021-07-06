import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
}

const GameOver: React.FC<Props> = ({ setDifficulty }) => {
  const history = useHistory();
  const handleClick = () => {
    setDifficulty(0);
    history.push('/');
  };
  return (
    <Container>
      <StyledRow className='justify-content-center align-items-center min-vh-100'>
        <Col className='endgame' onClick={handleClick} sm={3}>
          <Image alt='pokemon_trainer' src='/assets/ash.png' fluid />
          <Button className='w-100'>Play again</Button>
        </Col>
      </StyledRow>
    </Container>
  );
};

const StyledRow = styled(Row)`
  .endgame {
    cursor: pointer;
    transition: 0.2 all ease;
    &:hover {
      transition: 0.2 all ease;
      transform: scale(1.1);
    }
  }
`;

export default GameOver;
