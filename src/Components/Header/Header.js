import React from 'react'
import {
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

export default function Header() {
  return (
    <div className='bg-warning py-2 text-info' id='header'>
          <Nav fill pills>
              <NavItem tag={"h6"}>
                  <NavLink href="#" style={{color: "black"}}>
                      Trang chủ
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#pizzaSize" style={{color: "black"}}>
                      Combo
                  </NavLink>
              </NavItem><NavItem>
                  <NavLink href="#pizzaType" style={{color: "black"}}>
                      About
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="#formSubmit" style={{color: "black"}}>
                      Gửi đơn hàng
                  </NavLink>
              </NavItem>
          </Nav>
    </div>
  )
}
