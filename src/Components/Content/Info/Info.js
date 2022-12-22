import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Info() {
    return (
        <Container className='pt-5' id='info'>
            <div className=" text-center p-4 ">
                <h2><b className="p-2 border-bottom border-warning text-warning">Tại sao lại Pizza 365:</b></h2>
            </div>
            <Row>
                <Col sm={3} className="border border-warning" style={{ backgroundColor: "lightgoldenrodyellow", padding: "25px" }}>
                    <h3>Đa dạng</h3>
                    <p style={{ fontWeight: "bold" }} className="pt-3"> Số lượng pizza đa dạng, có đầy đủ các loại pizza đang hót nhất hiện nay</p>
                </Col>
                <Col sm={3} className="border border-warning" style={{ backgroundColor: "yellow", padding: "25px" }}>
                    <h3>Chất lượng</h3>
                    <p style={{ fontWeight: "bold" }} className="pt-3"> Nguyên liệu sạch 100% rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm</p>
                </Col>
                <Col sm={3} className="border border-warning" style={{ backgroundColor: "lightsalmon", padding: "25px" }}>
                    <h3>Hương vị</h3>
                    <p style={{ fontWeight: "bold" }} className="pt-3"> Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ Pizza 365.</p>
                </Col>
                <Col sm={3} className="border border-warning" style={{ backgroundColor: "orange", padding: "25px" }}>
                    <h3>Dịch vụ</h3>
                    <p style={{ fontWeight: "bold" }} className="pt-3">Nhân viên thân thiên, nhà hàng hiện đại. Dịch vụ giao hàng nhanh chất lượng, tân tiến</p>
                </Col>
            </Row>
        </Container>
    )
}
