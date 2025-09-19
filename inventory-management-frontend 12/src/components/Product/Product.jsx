import { useCartDispatch } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";

export default function Product({ product }) {
    const cartItems = useCart();
    const dispatchToCart = useCartDispatch();

    const onCartToggle = () => {
        if (cartItems.some((item) => item.productName === product.productName)) {
            dispatchToCart({
                type: "removed",
                ...product,
            });
        } else {
            dispatchToCart({
                type: "added",
                ...product,
            });
        }
    };

    return (
        <div className="border border-black p-4 rounded text-center flex flex-col items-center bg-white border-2">
            <h1 className="font-bold text-xl">{product.productName}</h1>
            <div className="w-[250px] h-[250px] overflow-hidden border border-gray-300 rounded mt-2">
                <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-lg mt-2">Price: ₹ {product.price.toFixed(2)}</p>
            <button
                onClick={onCartToggle}
                className={`mt-2 rounded p-2 transition ${
                    cartItems.some((item) => item.productName === product.productName)
                        ? "bg-gradient-to-r from-red-900 via-red-700 to-red-400 hover:from-rose-900 hover:via-red-700 hover:to-rose-400 transition-all duration-700 py-3 px-6 shadow-lg text-white" 
                        : "bg-gradient-to-r from-green-900 via-green-700 to-green-400 hover:from-emerald-900 hover:via-green-700 hover:to-lime-400 transition-all duration-700 py-3 shadow-lg text-white"
                }`}
            >
                {cartItems.some((item) => item.productName === product.productName)
                    ? "Remove from Cart"
                    : "Add to Cart"}
            </button>
        </div>
    );
}
