import { Button, Input } from "antd";
import { useReducer } from "react";
import { productsReducer } from "../store/productsReducer";

const initialState = {
  products: [],
  newProduct: {
    title: "",
    price: "",
  },
  formStatus: 'empty'
}

const Inventory = () => {
  const [{ products, formStatus, newProduct }, disptch] = useReducer(productsReducer, initialState);

  const isSuccess = formStatus === "success";
  const isError = formStatus === "error";
  const isButtonDisabled = formStatus === "empty";
  const totalProducts = products.length;

  const addNewItemToInventory = () => {
    disptch({ type: 'ADD_ITEM' });
  };

  const onChangeFormField = (fieldName, value) => {
    disptch({ type: 'CHANGE_FIELD', values: { fieldName, value } });
  };

  const deleteProduct = (title) => {
    disptch({ type: 'DELETE_ITEM', values: { title } });
  };

  return (
    <div>
      {/* Create product */}
      <div className="card">
        <h2>Create Product</h2>
        <Input
          value={newProduct.title}
          onChange={(e) => onChangeFormField("title", e.target.value)}
          placeholder="Product title"
        />
        <Input
          value={newProduct.price}
          onChange={(e) => onChangeFormField("price", e.target.value)}
          placeholder="Product price"
        />
        <Button disabled={isButtonDisabled} onClick={addNewItemToInventory}>
          Add Product to inventory
        </Button>
        {isSuccess && <div className="success">Successfully added item</div>}
        {isError && <div className="error">Error — Could not add</div>}
      </div>

      {/* List items */}
      <div className="card">
        <h2>List Products</h2>
        <p>Total Products: {totalProducts}</p>
        {products.map((product) => (
          <div key={product.title}>
            Title: {product.title} — Price: {product.price} — Quantity: {product.quantity}
            <Button onClick={() => deleteProduct(product.title)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
