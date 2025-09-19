import { useCartDispatch } from "../../context/CartContext";
import { useInventory } from "../../context/InventoryContext";

export default function CartItem({ product }) {
    const dispatchToCart = useCartDispatch();
    const inventory = useInventory();
    const productInInventory = inventory.find(item => item.productName === product.productName);

    const stockAvailable = productInInventory ? productInInventory.stock : 0;

    return (
        <div className="border border-black m-4 px-3 py-2 rounded text-center flex flex-col items-center bg-white border-2">
            <h1 className="font-bold text-xl">{product.productName}</h1>
            <div className="w-[250px] h-[250px] overflow-hidden border border-gray-300 rounded">
                <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-lg mt-2">Price: ₹ {product.price.toFixed(2)}</p>
            <div>
                {product.quantity > 1 ? (
                    <button
                        onClick={() => {
                            dispatchToCart({
                                type: 'DEC_QTY',
                                ...product,
                            });
                        }}
                        className=" bg-gradient-to-r from-red-900 via-red-700 to-red-400 hover:from-rose-900 hover:via-red-700 hover:to-rose-400 transition-all duration-700 px-2 py-1 m-1 shadow-lg text-white rounded"
                    >
                         -  
                    </button>
                ) : (
                    <button disabled className="bg-red-300 text-white px-2 py-1 m-1 rounded">
                        -
                    </button>
                )}
                {' '}{product.quantity}{' '}
                {product.quantity < stockAvailable ? (
                    <button
                        onClick={() => {
                            dispatchToCart({
                                type: 'INC_QTY',
                                ...product,
                            });
                        }}
                        className="bg-gradient-to-r from-green-900 via-green-700 to-green-400 hover:from-emerald-900 hover:via-green-700 hover:to-lime-400 transition-all duration-700 px-2 py-1 m-1 shadow-lg text-white rounded"
                    >
                        +
                    </button>
                ) : (
                    <button disabled className="bg-gray-300 px-2 py-1 m-1 rounded text-white">
                        +
                    </button>
                )}
            </div>
            <button
                onClick={() => {
                    dispatchToCart({
                        type: 'removed',
                        ...product,
                    });
                }}
                className="bg-gradient-to-r from-red-900 via-red-700 to-red-400 hover:from-rose-900 hover:via-red-700 hover:to-rose-400 transition-all duration-700 py-3 px-6 shadow-lg text-white rounded"
            >
                Remove from Cart
            </button>
        </div>
    );
}
