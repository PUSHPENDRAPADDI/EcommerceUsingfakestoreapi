const addToCart = (cartArray, newItem) => {
    const existingItem = cartArray.find(item => item.id === newItem.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartArray.push({ ...newItem, quantity: 1 });
    }
    return cartArray;
};

const removeFromCart = (cartArray, newItem) => {
    const existingItem = cartArray.find(item => item.id === newItem.id);
    if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
    } else {
        const removeProduct = cartArray.filter(obj=> obj.id !== existingItem.id);
        return removeProduct;
    }
    return cartArray;
};

const calculateTotal = (prodList) => {
    return prodList.reduce((acc, product) => { return acc + product.price * product.quantity }, 0).toFixed(2);
}

export { addToCart, removeFromCart, calculateTotal };