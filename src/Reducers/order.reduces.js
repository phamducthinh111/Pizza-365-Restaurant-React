import {ORDER_UPDATE_TYPE , 
        ORDER_UPDATE_SIZE , 
        ORDER_UPDATE_DRINK,
        ORDER_UPDATE_TEN,
        ORDER_UPDATE_EMAIL,
        ORDER_UPDATE_PHONE,
        ORDER_UPDATE_ADDRESS,
        ORDER_UPDATE_VOUCHER,
        ORDER_UPDATE_MESSEAGE,
        ORDER_UPDATE_ORDERCODE
    } from "../Constant/order.Constant"

const initialState = {
    order : {
        kichCo: '',
        duongKinh: '',
        suon: '',
        salad: '',
        loaiPizza: '',
        idVoucher: '',
        idLoaiNuocUong: 'N',
        soLuongNuoc: '',
        priceVND: '',
        ten: "",
        email: "",
        phone: "",
        diaChi: "",
        maGiamGia: "",
        loinhan: "",
    },
    orderCode: "",
}

const orderReducers = ( state = initialState, action) => {
    switch (action.type) {
        case ORDER_UPDATE_SIZE:
            if(action.payload === "S") {
                state.order.kichCo = "S";
                state.order.duongKinh = 20;
                state.order.suon = 10;
                state.order.salad = 250;
                state.order.soLuongNuoc = 2;
                state.order.priceVND = 150000;
            }
            if(action.payload === "M") {
                state.order.kichCo = "M";
                state.order.duongKinh = 25;
                state.order.suon = 4;
                state.order.salad = 300;
                state.order.soLuongNuoc = 3;
                state.order.priceVND = 200000;
            }
            if(action.payload === "L") {
                state.order.kichCo = "L";
                state.order.duongKinh = 30;
                state.order.suon = 8;
                state.order.salad = 500;
                state.order.soLuongNuoc = 4;
                state.order.priceVND = 250000;
            }
            break;
        case ORDER_UPDATE_TYPE:
                state.order.loaiPizza = action.payload
            break;
        case ORDER_UPDATE_DRINK:
                state.order.idLoaiNuocUong = action.payload
            break;
        case ORDER_UPDATE_TEN:
                state.order.ten = action.payload
            break; 
        case ORDER_UPDATE_EMAIL:
                state.order.email = action.payload
            break;
        case ORDER_UPDATE_PHONE:
                state.order.phone = action.payload
            break; 
        case ORDER_UPDATE_ADDRESS:
                state.order.diaChi = action.payload
            break;
        case ORDER_UPDATE_VOUCHER:
                state.order.maGiamGia = action.payload
            break; 
        case ORDER_UPDATE_MESSEAGE:
                state.order.loinhan = action.payload
            break;
        case ORDER_UPDATE_ORDERCODE:
                state.orderCode = action.payload  
            break;
        default:
            break;
    }
    return {...state}
}

export default orderReducers