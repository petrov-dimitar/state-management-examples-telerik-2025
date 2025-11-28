import { useState } from "react";
import { Button, Input } from "antd";

type Product = {
  title: string;
  price: string;
  quantity?: number;
};

const Inventory = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productTitle, setProductTitle] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const addNewItemToInventory = () => {
    setIsButtonDisabled(true);

    const existingProduct = products.find(
      (product) => product.title === productTitle
    );
    if (existingProduct) {
      setIsError(true);
      setIsSuccess(false);
      setIsButtonDisabled(false);
      return;
    }
    
    setProducts((prev) => [
      ...prev,
      {
        title: productTitle,
        price: productPrice,
        quantity: 1,
      },
    ]);
    setTotalProducts(prev => prev+1);
    setIsSuccess(true);
    setIsError(false);
    setIsButtonDisabled(false);
  };

  const deleteProduct = (title: string) => {
    setProducts(products.filter((product) => product.title !== title));
    setIsSuccess(false);
    setIsError(false);
    setTotalProducts(prev => prev-1);
  };

  return (
    <div>
      {/* Create product */}
      <div className="card">
        <h2>Create Product (Start Component)</h2>
        <Input
          value={productTitle}
          onChange={(e) => {
            const value = e.target.value;
            setProductTitle(value);
            setIsButtonDisabled(value.length === 0);
          }}
          placeholder="Product title"
        />
        <Input
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Product price"
        />
        <Button disabled={isButtonDisabled} onClick={addNewItemToInventory}>
          Add Product to inventory
        </Button>
          {isSuccess && <div className="success">Successfully added item</div>}
          {isError && <div className="error">Error Could not add</div>}
      </div>

      {/* List items */}
      <div className="card">
        <h2>List Products</h2>
        <p>Total Products: {totalProducts}</p>
        <hr/>
        {products.map((product) => (
          <div key={product.title}>
            Title: {product.title} — Price: {product.price} — Quantity:{" "}
            {product.quantity}
            <Button onClick={() => deleteProduct(product.title)}>Delete</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
