
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Form , FormGroup, Label, Col, Input } from 'reactstrap';

export default function ModalOrderCode({modal,toggle}) {
  // nhận data
  const {orderCode} = useSelector((reduxData ) => {
    return reduxData.orderReducers
  })
  console.log(orderCode)

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg" >
        <ModalHeader className='bg-warning' toggle={toggle} >Cảm ơn bạn đã đặt hàng tại Pizza 365. Mã đơn hàng của bạn là</ModalHeader>
        <ModalBody className='bg-warning'>
          <Form>
            <FormGroup row>
              <Label
                for="exampleEmail"
                sm={2}
                tag="h4"
              >
                Mã đơn hàng
              </Label>
              <Col sm={10}>
                <Input
                name='orderCode'
                value={orderCode}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}
