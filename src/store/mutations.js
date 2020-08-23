export default {
    SET_DATA(state, data) {
        const { phoneData, totalPrice, totalCount, cartData } = data;
        state.phoneData = phoneData;
        state.totalPrice = totalPrice;
        state.totalCount = totalCount;
        state.cartData = cartData;
    },
    SET_TOTAL(state, { price, type }) {
        switch (type) {
            case 'plus':
                state.totalPrice += Number(price);
                state.totalCount ++;
                break;
            case 'minus':
                state.totalPrice -= price;
                state.totalCount --;
                break;
            default:
                break;
        }
    },
    SET_CART_DATA(state, payload) {
        const {id, img, name, price, slogan, type} = payload;
        const index = state.cartData.findIndex(item => item.id == id);
        if(index == -1) {
            state.cartData.push({
                id,
                img, 
                name, 
                price,
                slogan,
                totalCount: 1,
                totalPrice: price   // price * count
            })
        } else {
            switch(type) {
                case 'plus':
                    state.cartData[index].totalCount ++;
                    state.cartData[index].totalPrice += price;
                    break;
                case 'minus':
                    state.cartData[index].totalCount --;
                    state.cartData[index].totalPrice -= price;
                    !state.cartData[index].totalCount && state.cartData.splice(index, 1);
                    break;
                default:
                    break;
            }
        }
    }
};