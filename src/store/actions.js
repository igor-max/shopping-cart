export default {
    setData({ commit }) {
        const phoneData = JSON.parse(localStorage.getItem('phoneData') || '[]'),
            totalPrice = Number(JSON.parse(localStorage.getItem('totalPrice') || '0')),
            totalCount = Number(JSON.parse(localStorage.getItem('totalCount') || '0')),
            cartData = JSON.parse(localStorage.getItem('cartData') || '[]');
        phoneData.forEach(item => {
            const pics = JSON.parse(item.pics);
            item.imgSrc = pics[0][0][0];
        });

        commit('SET_DATA', {
            phoneData,
            totalPrice,
            totalCount,
            cartData
        });
    },
    setTotal({ commit }, payload) {
        commit('SET_TOTAL', payload);
    },
    setCartData({ commit }, payload) {
        commit('SET_CART_DATA', payload);
    }
};