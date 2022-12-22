import React, { useState } from 'react'
import ButtonSubmit from './ButtonSubmit/ButtonSubmit'
import DrinkSelect from './DrinkSelect/DrinkSelect'
import FormSubmit from './FormSubmit/FormSubmit'
import Info from './Info/Info'
import Lading from './Lading/Lading'
import ModalOrderCode from './ModalOrderCode/ModalOrderCode'
import PizzaSize from './PizzaSize/PizzaSize'
import PizzaType from './PizzaType/PizzaType'

export default function Content() {
  //const [isOpenModalOrderCode, setIsOpenModalOrderCode] = useState(false)
  const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  return (
    <>
        <Lading/>
        <Info/>
        <PizzaSize/>
        <PizzaType/>
        <DrinkSelect/>
        <FormSubmit/>
        <ButtonSubmit openModalOrderCode = {() => setModal(true)}/>
        <ModalOrderCode modal = {modal} toggle = {toggle} />
    </>
  )
}
