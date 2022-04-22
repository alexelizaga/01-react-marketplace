import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import '../App.css';

export const ProductCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='ProductCard__img' variant="top" src="./assets/beats.jpeg" />
      <Card.Body>
        <Card.Title>Beats solo pro</Card.Title>
        <Card.Text>
          Beats solo pro auriculares supraaurales inalámbricos 
          con cancelación de Ruido y 22 Horas de Sonido ininterrumpido. 
        </Card.Text>
        <Link className='ProductCard__btn'  to="/product">Comprar</Link>
      </Card.Body>
    </Card>
  )
}
