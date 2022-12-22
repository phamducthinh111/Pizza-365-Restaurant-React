import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { orderUpdateOrderCode } from '../../../Action/order.Action';
import ModalOrderCode from '../ModalOrderCode/ModalOrderCode';
export default function ButtonSubmit({openModalOrderCode}) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    

    // nhận data
    const {order} = useSelector((reduxData ) => {
        return reduxData.orderReducers
    })
    const dispatch = useDispatch();
    const onBtnSendClick = () => {
        if(!order.kichCo) {
            alert("Bạn chưa chọn Size Pizza");
            return false
        }
        if(!order.loaiPizza) {
            alert("Bạn chưa chọn Loại Pizza");
            return false
        }
        if(order.idLoaiNuocUong === "N") {
            alert("Bạn chưa chọn loại nước uống");
            return false
        }
        if(order.ten.trim() === "") {
            alert("Bạn chưa nhập họ và tên người nhận");
            return false
        }
        if(!kiemTraEmail(order.email)) {
            alert("Email không đúng định dạng");
            return false
        }
        if(isNaN(order.phone) || (order.phone.trim() === "")) {
            alert("Số điện thoại bạn không được để trống và phải là số !!!")
            return false
        }
        if(order.diaChi.trim() === "") {
            alert("Bạn chưa nhập địa chỉ nhận hàng");
            return false
        }
        setModal(true)
    }
    // hàm kiểm tra email
    const kiemTraEmail = (paramEmail) => {
        const vValidateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return vValidateEmail.test(String(paramEmail).toLowerCase())
    }
    const [disCount, setDisCount] = useState([])
     // call API load voucher
     useEffect(() => {
        fetch("http://localhost:8000/devcamp-pizza365/voucher_detail/" + order.maGiamGia)
          .then(res => res.json())
          .then((result) => {
            setDisCount(result.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
      },[])
    
    const onCreateOrderClick = () => {
        const userOrder = JSON.stringify(
            {
                kichCo: order.kichCo ,
                duongKinh: order.duongKinh,
                suon: order.suon,
                salad: order.salad,
                soLuongNuoc: order.soLuongNuoc,
                thanhTien: order.priceVND,
                loaiPizza: order. loaiPizza ,
                loaiNuocUong: order.idLoaiNuocUong  ,
                hoVaTen: order.ten  ,
                email: order.email ,
                diaChi: order.diaChi ,
                dienThoai:  order.phone ,
                voucher: order.maGiamGia,
            }
        ) 
        const body = {
            method: 'POST',
            headers:  {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: userOrder,
          };
        fetch("http://localhost:8000/devcamp-pizza365/orders", body)
          .then(res => res.json())
          .then((result) => {
            console.log(result.order)
            // gui data ve store
            dispatch(orderUpdateOrderCode(result.order.orderCode))
            })
            .catch((error) => {
                console.log(error.message);
            })
        setModal(!modal)
        openModalOrderCode()
    }
    console.log(openModalOrderCode)
    
    const soTienPhaiTra = order.priceVND * (1- disCount.phanTramGiamGia / 100)
    console.log(soTienPhaiTra)
    return (
        <Container>
            <Button color="warning" onClick={onBtnSendClick} block>
                Gửi
            </Button>
            <Modal isOpen={modal} toggle={toggle} size="xl">
                <ModalHeader toggle={toggle}>Thông tin đơn hàng</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>
                                Tên
                            </Label>
                            <Input
                                value={order.ten}
                                type='name' />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Số điện thoại
                            </Label>
                            <Input
                                value={order.phone}
                                type='phone' />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Địa chỉ
                            </Label>
                            <Input
                                value={order.diaChi}
                                type='address' />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Mã giảm giá
                            </Label>
                            <Input
                                value={order.maGiamGia}
                                type='voucher' />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Lời nhắn
                            </Label>
                            <Input
                                value={order.loinhan}
                                type='message' />
                        </FormGroup>
                        <FormGroup>
                            <Label>
                                Thông tin chi tiết
                            </Label>
                            <Input
                                value={` Xác nhận: ${order.ten}, ${order.phone}, ${order.diaChi}
 Menu:  ${order.kichCo}, Loại nước: ${order.idLoaiNuocUong}, Số lượng nước: ${order.soLuongNuoc}
Loại Pizza: ${order.loaiPizza}, Giá: ${order.priceVND} VNĐ, ${order.maGiamGia ? `Mã giảm giá: ${order.maGiamGia}` : ""}
Phải thanh toán: ${order.maGiamGia ? soTienPhaiTra: order.priceVND} VNĐ, ${order.maGiamGia ? `giảm giá : ${disCount.phanTramGiamGia}%`: ""}
${order.loinhan ? `Lời nhắn: ${order.loinhan}` : "" } `}
                                style={{ height: "200px" ,padding:"none" }}
                                type="textarea"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button className='px-5' color="danger" onClick={toggle}>
                        Quay lại
                    </Button>
                    <Button className='px-5' color="warning" onClick={onCreateOrderClick}>
                        Tạo đơn
                    </Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}
