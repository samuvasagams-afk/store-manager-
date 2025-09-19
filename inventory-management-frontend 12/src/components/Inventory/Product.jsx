import { useState } from "react";
import { useInventoryDispatch } from "../../context/InventoryContext";

const Product = ({ product, alertValue }) => {
    const [addStock, setAddStock] = useState(0)
    const inventoryDispatch = useInventoryDispatch()

    return (
        <div
            className={`border px-3 py-2 rounded text-center flex flex-col items-center ${product.stock < alertValue ? "border-black bg-white border-2" : "border-gray-400"
                }`}
        >
            <h1 className="font-bold text-xl">{product.productName}</h1>
            <div className="w-[250px] h-[250px] overflow-hidden border border-gray-300 rounded mt-2">
                <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="text-lg mt-2">Price: ₹ {product.price.toFixed(2)}</p>
            <div>
                <p>Stock Available: {product.stock}</p>
            </div>
            <div className="mt-2">
                Add Stock:{" "}
                <input
                    onChange={(e) => {
                        setAddStock(e.target.value);
                    }}
                    className="border border-gray-400 rounded p-1"
                    value={addStock}
                    type="number"
                    name="new-stock-qty"
                    id="new-stock-qty"
                />
            </div>
            <div>
                <button
                    onClick={() => {
                        setAddStock(0);
                        inventoryDispatch({
                            type: "STOCK_ADDED",
                            productName: product.productName,
                            stock: addStock,
                        });
                    }}
                    className="bg-gradient-to-r from-green-900 via-green-700 to-green-400 hover:from-emerald-900 hover:via-green-700 hover:to-lime-400 transition-all duration-700 px-2 py-1 m-1 shadow-lg text-white rounded rounded p-1 text-white mt-2"
                >
                    Update Stock
                </button>
            </div>
        </div>
    );
};

export default Product;
