import CartItem from "./CartItem";
import { useCart } from "../../context/CartContext";
import { useCartDispatch } from "../../context/CartContext";
import { useInventoryDispatch } from "../../context/InventoryContext";
import { useSalesDispatch } from "../../context/SalesContext";

export default function Cart() {
    const inventoryDispatch = useInventoryDispatch();
    const cartItemsFromContext = useCart();
    const cartDispatch = useCartDispatch();
    const saleDispatch = useSalesDispatch();
    let count = 0;
    let cartValue = 0;
    if (cartItemsFromContext.length > 0)
        cartItemsFromContext.forEach((item) => {
            cartValue = cartValue + (item.price * item.quantity);
            count = count + (item.quantity);
        });

    return (
        <div className="m-2 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-2 mx-2">Your Cart</h1>
            {count === 0 ? (
                <p className="text-lg text-gray-600 mx-2">Your cart is empty.</p>
            ) : (
                <div>
                    <p className="mx-2">
                        No. of products in cart: <b>{count}</b> | Total Cart Value: <b>{cartValue.toFixed(2)}</b> 
                        <button onClick={() => {
                            cartItemsFromContext.forEach((cartItem) => {
                                inventoryDispatch({
                                    type: 'STOCK_SOLD',
                                    productName: cartItem.productName,
                                    stock: cartItem.quantity,
                                })
                            });
                            saleDispatch({
                                type: 'NEW_SALE',
                                saleValue: cartValue,
                                products: cartItemsFromContext,
                            });
                            cartDispatch({
                                type: 'EMPTY_CART',
                            });
                            alert('Checkout successful! Inventory has been updated.');
                        }} className="bg-gradient-to-r from-green-900 via-green-700 to-green-400 hover:from-emerald-900 hover:via-green-700 hover:to-lime-400 transition-all duration-700 px-2 py-1 shadow-lg text-white rounded p-1 m-1 mx-2">Checkout Cart</button>
                        <button onClick={() => {
                            cartDispatch({
                                type: 'EMPTY_CART',
                            });
                        }} className="bg-gradient-to-r from-red-900 via-red-700 to-red-400 hover:from-rose-900 hover:via-red-700 hover:to-rose-400 transition-all duration-700 px-2 py-1 shadow-lg text-white rounded p-1 m-1 mx-2">Clear Cart</button>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {cartItemsFromContext.map((product) => (
                            <CartItem key={product.productName} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
