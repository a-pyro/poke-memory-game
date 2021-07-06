import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
interface Props {
  setDifficulty: React.Dispatch<React.SetStateAction<number>>;
}

const StartingPage: React.FC<Props> = ({ setDifficulty }) => {
  const history = useHistory();

  return (
    <StyledContainer fluid>
      <Row className='min-vh-100 justify-content-center align-items-center'>
        <Col sm={4} className='d-flex flex-column'>
          <h1 className='text-center'>Pokémon memory game! Catch'em all!</h1>
          <div
            className='box d-flex align-items-center justify-content-center'
            onClick={() => {
              setDifficulty(8 / 2);
              history.push('/board');
            }}
          >
            <Button variant='success' className='rounded mb-3 easy'>
              Easy
            </Button>
            <Image
              alt='charmander'
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'
            />
          </div>
          <div
            className='box d-flex align-items-center justify-content-center'
            onClick={() => {
              setDifficulty(16 / 2);
              history.push('/board');
            }}
          >
            <Image
              alt='charmeleon'
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg'
            />
            <Button variant='warning' className='rounded mb-3 medium'>
              Regular
            </Button>
          </div>
          <div
            className='box d-flex align-items-center justify-content-center'
            onClick={() => {
              setDifficulty(32 / 2);
              history.push('/board');
            }}
          >
            <Button variant='danger' className='rounded mb-3 me-3 hard'>
              Hard
            </Button>
            <Image
              alt='charizard'
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'
            />
          </div>
        </Col>
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  .box:hover {
    transition: 0.2s all ease;
    transform: scale(1.1);
  }

  img {
    width: 150px;
    height: 150px;
    cursor: pointer;
  }

  button {
    &.easy {
      background-color: #92d1b3;
      &:hover {
        background-color: #49896f;
      }
    }

    &.medium {
      background-color: #6096aa;
      border-color: #2f596d;
      color: #fff;
      &:hover {
        background-color: #29738f;
      }
    }
  }
`;

export default StartingPage;
