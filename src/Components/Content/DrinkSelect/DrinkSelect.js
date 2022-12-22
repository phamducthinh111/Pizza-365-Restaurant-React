import React, { useEffect, useState } from 'react'
import { Container, Input, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {orderUpdateDrink} from "../../../Action/order.Action"

export default function DrinkSelect() {
  // call API load danh sách nước uống
  const [drinkList,setdrinkList] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/devcamp-pizza365/drink")
      .then(res => res.json())
      .then((result) => {
        setdrinkList(result.data);
        })
        .catch((error) => {
            console.log(error.message);
        })
  },[])
  
  const dispatch = useDispatch()
  // nhận data
  const {order} = useSelector((reduxData ) => {
    return reduxData.orderReducers
  })
  
  // xuất data
  const onChaneDrinkHander = (drink) => {
    dispatch(orderUpdateDrink(drink.target.value))
  }


  
  return (
    <Container className='mt-3'>
      <Row className='text-center p-4'>
        <h2><b className="p-2 border-bottom border-warning text-warning">Chọn đồ uống</b></h2>
      </Row>
      <Row>
        <Input type={"select"} onChange={onChaneDrinkHander}>
          <option value="N"> Tất cả các loại nước uống</option>
          {drinkList.map((element) => {
            return (
              <option key={element._id} value={element.maNuocUong}> {element.tenNuocUong} </option>
            )
          })}
        </Input>
      </Row>
    </Container>
  )
}
