import { useState } from "react";
import { Button, Input } from "antd";

type Product = {
  title: string;
  price: number;
  quantity?: number;
};
// Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.
// Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
// Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
// Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
// Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

// 1. Identify your component’s different visual states
// - all visual states - show available list items and current input
// - empty - disable add task button; 
// - typing - enable button, show typed value in textbox - user input
// - submitting/loading - disable button, clear textfield, send data (if making network call) - user input
// - success - clear input, disable button, add to list - network response
// - error - show error message - network response

// 2. Determine what triggers those state changes
// 3. Represent the state in memory using useState
// 4. Remove any non - essential state variables
// 5. Connect the event handlers to set the state

const Inventory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<{ title: string; price: string }>({
    title: "",
    price: "",
  });
  const [formStatus, setFormStatus] = useState<"empty" | "typing" | "success" | "error">("empty");
  
  const isSuccess = formStatus === "success";
  const isError = formStatus === "error";
  const isButtonDisabled = formStatus === "empty";
  const totalProducts = products.length;

  const addNewItemToInventory = () => {
    const existingProduct = products.find((product) => product.title === newProduct.title);
    if (existingProduct) {
      setFormStatus("error");
      return;
    }

    setProducts((prev) => [
      ...prev,
      {
        title: newProduct.title,
        price: parseFloat(newProduct.price) || 0,
        quantity: 1,
      },
    ]);

    setNewProduct({ title: "", price: "" });
    setFormStatus("success");
  };

  const onChangeFormField = (fieldName: "title" | "price", value: string) => {
    setFormStatus("typing");
    setNewProduct((current) => ({
      ...current,
      [fieldName]: value,
    }));

    if (value.length === 0) {
      setFormStatus("empty");
    }
  };

  const deleteProduct = (title: string) => {
    setProducts(products.filter((product) => product.title !== title));
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
