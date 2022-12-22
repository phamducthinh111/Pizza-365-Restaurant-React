import {ORDER_UPDATE_TYPE, 
        ORDER_UPDATE_SIZE,
        ORDER_UPDATE_DRINK,
        ORDER_UPDATE_TEN,
        ORDER_UPDATE_EMAIL,
        ORDER_UPDATE_PHONE,
        ORDER_UPDATE_ADDRESS,
        ORDER_UPDATE_VOUCHER,
        ORDER_UPDATE_MESSEAGE,
        ORDER_UPDATE_ORDERCODE
    } from "../Constant/order.Constant"

export const orderUpdateType = (type) => {
    return {
        type: ORDER_UPDATE_TYPE,
        payload: type
    }
}

export const orderUpdateSize = (size) => {
    return {
        type: ORDER_UPDATE_SIZE,
        payload: size
    }
}

export const orderUpdateDrink = (drink) => {
    return {
        type: ORDER_UPDATE_DRINK,
        payload: drink
    }
}
export const orderUpdateName = (name) => {
    return {
        type: ORDER_UPDATE_TEN,
        payload: name
    }
}
export const orderUpdateEmail = (email) => {
    return {
        type: ORDER_UPDATE_EMAIL,
        payload: email
    }
}
export const orderUpdatePhone = (phone) => {
    return {
        type: ORDER_UPDATE_PHONE,
        payload: phone
    }
}
export const orderUpdateAddress = (diachi) => {
    return {
        type: ORDER_UPDATE_ADDRESS,
        payload: diachi
    }
}
export const orderUpdateVoucher = (voucher) => {
    return {
        type: ORDER_UPDATE_VOUCHER,
        payload: voucher
    }
}
export const orderUpdateMess = (mes) => {
    return {
        type: ORDER_UPDATE_MESSEAGE,
        payload: mes
    }
}

export const orderUpdateOrderCode = (orderCode) => {
    return {
        type: ORDER_UPDATE_ORDERCODE,
        payload: orderCode
    }
}