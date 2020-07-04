import React, { useState } from 'react';
import Icon from './components/Icon';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

import { Button, Card, CardBody, Container, Col, Row } from 'reactstrap';

const itemArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemArray.fill('empty', 0, 9);
  };

  const checkIsWinner = (itemNumber) => {
    //
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] != 'empty'
    ) {
      setWinMessage(`${itemArray[itemNumber]} is the winner!`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: 'success' });
    }

    if (itemArray[itemNumber] === 'empty') {
      console.log({ itemNumber });
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return toast('Already Filled', { type: 'error' });
    }

    checkIsWinner(itemNumber);
  };

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center'></ToastContainer>
      <Row>
        <Col md={6} className='offset-md-3'>
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button color='success' block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className='text-center text-warning'>
              {isCross ? 'X turn' : 'O turn'}
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)} color='warning'>
                <CardBody className='box'>
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
