import React, { useEffect, useState } from "react"

import axios from "axios"

import * as Styled from './CheckoutPage.styled'
import Header from "../../components/Header"

const CheckoutPage = () => {
  const [customerName, setCustomerName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderNumber, setOrderNumber] = useState()

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value)
  }

  const handleOnSubmit = async (e) => {
    setIsSubmitting(true)
    const { data } = await axios.post('http://localhost:8080/submitOrder', { customerName }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    setOrderNumber(data.orderNumber)
    setIsSubmitting(false)
  }

  return (
    <>
      <Header>Checkout</Header>
      {orderNumber ?
        <Styled.OrderComplete>
          <div>We recieve your order.</div>
          <Styled.OrderNumber>{`Order Number: ${orderNumber}`}</Styled.OrderNumber>
        </Styled.OrderComplete>
        :
        <Styled.Form>
          <div>
            <Styled.Label>Name</Styled.Label>
            <Styled.Input onChange={handleCustomerNameChange}></Styled.Input>
          </div>
          <div>
            <Styled.Button type="submit" onClick={handleOnSubmit} disabled={isSubmitting | !customerName}>
              Submit Order
            </Styled.Button>
          </div>
        </Styled.Form>
      }
    </>
  )
}

export default CheckoutPage
