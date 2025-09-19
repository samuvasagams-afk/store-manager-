import { useInventoryDispatch } from "../context/InventoryContext";

export default function AddProduct() {
    const dispatchToInventory = useInventoryDispatch()

    const onAddProduct = (e) => {
        e.preventDefault()

        const newProduct = {
            productName: e.target.productName.value,
            imageUrl: e.target.imageUrl.value,
            price: parseFloat(e.target.price.value),
            tags: e.target.tags.value.split(",").map((tag) => tag.trim()),
            stock: e.target.stock.value,
        }

        dispatchToInventory({
            type: 'NEW_PRODUCT',
            ...newProduct,
        })

        e.target.reset()
        alert("Product added successfully!")
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 mb-4">
            <h1 className="font-bold text-4xl text-center mb-6 black">
                Add New Product
            </h1>
            <form onSubmit={onAddProduct} className="space-y-4">
                <div>
                    <label
                        htmlFor="productName"
                        className="block text-l font-medium text-gray-700"
                    >
                        Product Name
                    </label>
                    <input
                        id="productName"
                        type="text"
                        className="w-full p-2 border rounded focus:ring focus:ring-green-300 focus:outline-none"
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="imageUrl"
                        className="block text-l font-medium text-gray-700"
                    >
                        Product Image URL
                    </label>
                    <input
                        id="imageUrl"
                        type="text"
                        className="w-full p-2 border rounded focus:ring focus:ring-green-300 focus:outline-none"
                        placeholder="Enter image URL"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="price"
                        className="block text-l font-medium text-gray-700"
                    >
                        Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        className="w-full p-2 border rounded focus:ring focus:ring-green-300 focus:outline-none"
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="stock"
                        className="block text-l font-medium text-gray-700"
                    >
                        Stock
                    </label>
                    <input
                        id="stock"
                        type="number"
                        step="0.01"
                        className="w-full p-2 border rounded focus:ring focus:ring-green-300 focus:outline-none"
                        placeholder="Enter stock"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="tags"
                        className="block text-l font-medium text-gray-700"
                    >
                        Tags (comma-separated)
                    </label>
                    <input
                        id="tags"
                        type="text"
                        className="w-full p-2 border rounded focus:ring focus:ring-green-300 focus:outline-none"
                        placeholder="Enter tags, separated by commas"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-900 via-green-700 to-green-400 hover:from-emerald-900 hover:via-green-700 hover:to-lime-400 transition-all duration-700 px-2 py-4 m-1 shadow-lg text-white font-bold rounded"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}
