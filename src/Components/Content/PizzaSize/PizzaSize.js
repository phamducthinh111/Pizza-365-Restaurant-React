import React from 'react'
import { Button, Card, CardFooter, CardHeader, Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import {orderUpdateSize} from "../../../Action/order.Action"

export default function PizzaSize() {
    const dispatch = useDispatch()

    const {order} = useSelector((reduxData ) => {
        return reduxData.orderReducers
    })
    
    const onBtnClickChonSizePizza = (size) => {
        dispatch(orderUpdateSize(size))
    }
  return (
      <Container className='mt-3' id='pizzaSize'>
          <Row className=" text-center p-4 text-warning ">
              <h2><b className="p-2 border-bottom border-warning ">Chọn size pizza</b></h2>
              <p className='pt-2'>Chọn combo pizza phù hợp với nhu cầu của bạn</p>
          </Row>
          <Row>
              <Col sm={4}>
                  <Card>
                      <CardHeader className='bg-warning text-center' tag={"h3"}>S (small)</CardHeader>
                      <ListGroup flush className='text-center'>
                          <ListGroupItem>
                              Đường kính: <b>20cm</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Sườn nướng: <b>10</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Salad <b>250g </b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Nước ngọt: <b>2</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              <h1><b>150.000</b></h1> VND
                          </ListGroupItem>
                      </ListGroup>
                      <CardFooter>
                          <Button 
                            onClick={() => onBtnClickChonSizePizza("S")} 
                            color={order.kichCo === "S" ? "success" : "warning"}
                            block> <b>Chọn</b></Button>
                      </CardFooter>
                  </Card>
              </Col>
              <Col sm={4}>
                  <Card>
                      <CardHeader className='bg-warning text-center' tag={"h3"}>M (medium)</CardHeader>
                      <ListGroup flush className='text-center'>
                          <ListGroupItem>
                              Đường kính: <b>25cm</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Sườn nướng: <b>4</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Salad <b>300g </b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Nước ngọt: <b>3</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              <h1><b>200.000</b></h1> VND
                          </ListGroupItem>
                      </ListGroup>
                      <CardFooter>
                          <Button 
                            onClick={() => onBtnClickChonSizePizza("M")} 
                            color={order.kichCo === "M" ? "success" : "warning"} 
                            block> <b>Chọn</b></Button>
                      </CardFooter>
                  </Card>
              </Col>
              <Col sm={4}>
                  <Card>
                      <CardHeader className='bg-warning text-center' tag={"h3"}>S (small)</CardHeader>
                      <ListGroup flush className='text-center'>
                          <ListGroupItem>
                              Đường kính: <b>30cm</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Sườn nướng: <b>8</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Salad <b>500g: </b>
                          </ListGroupItem>
                          <ListGroupItem>
                              Nước ngọt: <b>4</b>
                          </ListGroupItem>
                          <ListGroupItem>
                              <h1><b>250.000</b></h1> VND
                          </ListGroupItem>
                      </ListGroup>
                      <CardFooter>
                          <Button 
                            onClick={() => onBtnClickChonSizePizza("L")} 
                            color={order.kichCo === "L" ? "success" : "warning"}
                            block> <b>Chọn</b></Button>
                      </CardFooter>
                  </Card>
              </Col>
          </Row>
      </Container>
  )
}
