import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

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
      <Row>
        <Col>
          <Button onClick={handleClick}>Play again</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GameOver;
