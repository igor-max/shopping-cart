function setCartDataLocalStorage({totalCount, totalPrice, cartData}) {
    localStorage.setItem('totalCount', totalCount);
    localStorage.setItem('totalPrice', totalPrice);
    localStorage.setItem('cartData', JSON.stringify(cartData));
}

export { setCartDataLocalStorage };