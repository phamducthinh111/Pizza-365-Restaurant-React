
import { Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import {    orderUpdateName,
            orderUpdateEmail,
            orderUpdatePhone,
            orderUpdateAddress,
            orderUpdateVoucher,
            orderUpdateMess
         } from '../../../Action/order.Action';


export default function FormSubmit() {
    const dispatch = useDispatch()

    const {order} = useSelector((reduxData ) => {
        return reduxData.orderReducers
    })
    
    const onChangeNameHander = (event) => {
        dispatch(orderUpdateName(event.target.value))
    }
    const onChangeEmailHander = (event) => {
        dispatch(orderUpdateEmail(event.target.value))
    }
    const onChangePhoneHander = (event) => {
        dispatch(orderUpdatePhone(event.target.value))
    }
    const onChangeAddressHander = (event) => {
        dispatch(orderUpdateAddress(event.target.value))
    }
    const onChangeVoucherHander = (event) => {
        dispatch(orderUpdateVoucher(event.target.value))
    }
    const onChangeMessHander = (event) => {
        dispatch(orderUpdateMess(event.target.value))
    }
    return (
        <Container className='mt-3' id='formSubmit'>
            <div className=" text-center p-4 ">
                <h2><b className="p-2 border-bottom border-warning text-warning">Gửi đơn hàng</b></h2>
            </div>
            <Form >
                <FormGroup>
                    <Label>
                        Tên
                    </Label>
                    <Input
                        onChange={onChangeNameHander}
                        placeholder='Nhập tên'
                        type='name'
                        value={order.ten}  />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Email
                    </Label>
                    <Input
                        onChange={onChangeEmailHander}
                        placeholder='Nhập Email'
                        type='email'
                        value={order.email}  />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Số điện thoại
                    </Label>
                    <Input
                        onChange={onChangePhoneHander}
                        placeholder='Nhập Số điện thoại'
                        type='phone'
                        value={order.phone} />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Địa chỉ
                    </Label>
                    <Input
                        onChange={onChangeAddressHander}
                        placeholder='Nhập Địa chỉ'
                        type='address'
                        value={order.diaChi} />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Mã giảm giá
                    </Label>
                    <Input
                       onChange={onChangeVoucherHander}
                        placeholder='Nhập mã giảm giá'
                        type='voucher'
                        value={order.maGiamGia} />
                </FormGroup>
                <FormGroup>
                    <Label>
                        Lời nhắn
                    </Label>
                    <Input
                        onChange={onChangeMessHander}
                        placeholder='Nhập Lời nhắn'
                        type='message'
                        value={order.loinhan} />
                </FormGroup>
            </Form>
        </Container>
    )
}
