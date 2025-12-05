const Requirements = () => {
    return (
   <div className="card">
  <h2>About This App</h2>
  <p>
    This app helps small business owners manage their inventory by allowing them
    to input product details, track stock levels, and adjust related variables
    that change together (like price, quantity, and reorder level).
  </p>

  <h2>Features</h2>
  <p>• Add new products to the inventory</p>
  <p>• Disable the add button when no title or price is provided</p>
  <p>• Show an error message if a product title already exists</p>
  <p>• Show a success message when a new item is added</p>
  <p>• Display a list of all products</p>
  <p>• Delete a product from the list</p>
</div>
    );
};

export default Requirements;
