import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import  {orderUpdateType} from  "../../../Action/order.Action"

export default function PizzaType() {
    const dispatch = useDispatch()

    const {order} = useSelector((reduxData ) => {
        return reduxData.orderReducers
    })
    const onBtnClickChonTypePizza = (type) => {
        dispatch(orderUpdateType(type))
    }


    return (
        <Container className='mt-3' id='pizzaType'>
            <Row className='text-center p-4 text-warning'>
                <h2><b className="p-2 border-bottom border-warning ">Chọn loại pizza</b></h2>
            </Row>
            <Row>
                <Col sm={4}>
                    <Card>
                        <img src='http://localhost:8000/public/images/bacon.jpg' alt='bacon' />
                        <CardBody>
                            <CardTitle tag={"h5"}> OCEAN MANIA</CardTitle>
                            <CardText>
                                PIZZA HẢI SẢN XỐT MAYONNAISE
                            </CardText>
                            <CardText>
                                Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh cua, Hành tây.
                            </CardText>
                            <Button
                                color= {order.loaiPizza === "OCEAN MANIA" ? "success" : "warning"}
                                onClick = {() => onBtnClickChonTypePizza("OCEAN MANIA")}
                                block> <b>Chọn</b></Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <img src='http://localhost:8000/public/images/hawaiian.jpg' alt='hawaiian' />
                        <CardBody>
                            <CardTitle tag={"h5"}> HAWAIIAN</CardTitle>
                            <CardText>
                                PIZZA DĂM BÔNG DỨA KIỂU HAWAII
                            </CardText>
                            <CardText>
                                Xốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông, Thơm.
                            </CardText>
                            <Button 
                                color={order.loaiPizza === "HAWAIIAN" ? "success" : "warning"}
                                onClick = {() => onBtnClickChonTypePizza("HAWAIIAN")}
                                block> <b>Chọn</b></Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <img src='http://localhost:8000/public/images/seafood.jpg' alt='bacon' />
                        <CardBody>
                            <CardTitle tag={"h5"}> CHEESY CHICKEN BACON</CardTitle>
                            <CardText>
                                PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI
                            </CardText>
                            <CardText>
                                Xốt Phô Mai,Thịt Gà, Thịt Heo Muối, Phô Mai Mozzarella, Cà Chua.
                            </CardText>
                            <Button 
                                color={order.loaiPizza === "CHEESY CHICKEN BACON" ? "success" : "warning"} 
                                onClick = {() => onBtnClickChonTypePizza("CHEESY CHICKEN BACON")}
                                block> <b>Chọn</b></Button>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
