import React from 'react'

import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'

import * as Styled from './HomePage.styled'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <>
    <Header>Welcome to Caffè</Header>
    <Styled.Container>
      <Styled.Link onClick={() => navigate('/checkout')}>Checkout</Styled.Link>
      <Styled.Link onClick={() => navigate('/tasks')}>Tasks</Styled.Link>
    </Styled.Container>
  </>
  )
}

export default HomePage;
