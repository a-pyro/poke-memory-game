import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
interface Props {
  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
}

const StartingPage: React.FC<Props> = ({ setDifficulty }) => {
  const history = useHistory();
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Button
            variant='success'
            className='rounded-pill'
            onClick={() => {
              setDifficulty(8 / 2);
              history.push('/board');
            }}
          >
            Easy
          </Button>
          <Button
            variant='warning'
            className='rounded-pill'
            onClick={() => {
              setDifficulty(16 / 2);
              history.push('/board');
            }}
          >
            Regular
          </Button>
          <Button
            variant='danger'
            className='rounded-pill'
            onClick={() => {
              setDifficulty(32 / 2);
              history.push('/board');
            }}
          >
            Hard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StartingPage;
