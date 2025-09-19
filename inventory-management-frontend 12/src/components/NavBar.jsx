const NavBar = () => {
    return (
      <nav className="bg-black py-4">
        <div className="mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center w-1/3">
            <a href="/" className="ml-6 p-2 text-white transform transition duration-300 hover:text-green-400 font-bold hover:scale-105">
                Home
              </a>
              <a href="/cart" className="ml-6 p-2 text-white transform transition duration-300 hover:text-green-400 font-bold hover:scale-105">
                Cart
              </a>
              <a href="/inventory" className="ml-6 p-2 text-white transform transition duration-300 hover:text-green-400 font-bold hover:scale-105">
                Inventory
              </a>
              <a href="/sales" className="ml-6 p-2 text-white transform transition duration-300 hover:text-green-400 font-bold hover:scale-105">
                Sales
              </a>
              <a href="/add-product" className="ml-6 p-2 text-white transform transition duration-300 hover:text-green-400 font-bold hover:scale-105">
                Add Product
              </a>
            </div>
            <div className="flex items-center w-1/3 justify-center">
              <h2 className="text-white text-lg font-bold">Store Manager</h2>
              <img className="w-[30px] h-[30px] mx-2 transform transition-transform duration-300 hover:scale-150" src="/barista (1).png" alt="LOGO" />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavBar;
  