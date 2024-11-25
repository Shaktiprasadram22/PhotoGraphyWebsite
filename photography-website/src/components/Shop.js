import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Professional Camera",
    description:
      "High-resolution, full-frame DSLR camera for professional photography.",
    image:
      "https://images.unsplash.com/photo-1586079892339-bc66555db4f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹2,499",
  },
  {
    id: 2,
    name: "Versatile Camera Lens",
    description: "A versatile lens suitable for any type of photography.",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹899",
  },
  {
    id: 3,
    name: "Sturdy Tripod",
    description: "A sturdy and reliable tripod for stable shooting.",
    image:
      "https://images.unsplash.com/photo-1534081333815-ae5019106622?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹299",
  },
  {
    id: 4,
    name: "Camera Bag",
    description: "Durable and spacious camera bag for all your gear.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹119",
  },
  {
    id: 5,
    name: "Memory Card",
    description: "High-speed memory card with 128GB of storage.",
    image:
      "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹59",
  },
  {
    id: 6,
    name: "Flash Kit",
    description: "External flash kit for enhanced lighting in photography.",
    image:
      "https://images.unsplash.com/photo-1579356343602-c9d4453188a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹229",
  },
  {
    id: 7,
    name: "Reflectors",
    description: "Set of quality reflectors for managing light in your shots.",
    image:
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹84",
  },
  {
    id: 8,
    name: "Light Stand",
    description: "Adjustable light stand for versatile studio setups.",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941aa98a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹95",
  },
  {
    id: 9,
    name: "Telephoto Lens",
    description: "Capture distant subjects with sharp precision.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹1,350",
  },
  {
    id: 10,
    name: "Wide-Angle Lens",
    description:
      "Wide-angle lens ideal for landscapes and architectural shots.",
    image:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹1,250",
  },
  {
    id: 11,
    name: "Filter Set",
    description: "Professional filter set for creative effects in photography.",
    image:
      "https://images.unsplash.com/photo-1601758003122-f3b9e8167ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹199",
  },
  {
    id: 12,
    name: "Underwater Housing",
    description: "Underwater housing for shooting up to 40 meters deep.",
    image:
      "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    price: "₹1,099",
  },
];

function Shop() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div id="shop" className="shop">
      <h1>Welcome to Our Online Shop</h1>
      <p>Explore our collection of photography-related products!</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
              <button className="btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <div>Quantity: {item.qty}</div>
              <div>Price: {item.price}</div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <button className="checkout-btn" onClick={handleCheckout}>
            Go to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Shop;
