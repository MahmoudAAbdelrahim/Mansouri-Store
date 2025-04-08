import React, { createContext, useEffect, useState } from "react";
import '../src/App.css';

// إنشاء سياق للمنتجات
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // حالة المنتجات
  const [SelectProduct, setSelectProduct] = useState(null); // المنتج المختار (إن وجد)
  const [Cart, setCart] = useState([]); // السلة وحالتها

  // جلب البيانات من API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // تحديث حالة المنتجات
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // استدعاء الدالة لجلب البيانات عند التحميل
  }, []);

  // إزالة منتج من السلة
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart; // إذا كان المنتج موجودًا بالفعل
      }
      return [...prevCart, { ...product, quantity: 1 }]; // إضافة المنتج مع تعيين الكمية
    });
  };
  

  // القيمة المقدمة من السياق
  return (
    <ProductContext.Provider
      value={{
        products,
        SelectProduct,
        setSelectProduct,
        Cart,
        addToCart,
        removeFromCart,
        setCart, // في حال الحاجة للوصول الكامل للحالة
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
