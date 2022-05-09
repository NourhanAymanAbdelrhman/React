import { useState, createContext } from "react";
import item1 from "../images/category-banner1.jpg";
import item2 from "../images/category-banner2.jpg";
import item3 from "../images/category-banner3.jpg";
import item4 from "../images/category-banner4.jpg";
import item5 from "../images/chair1.jpg";
import item6 from "../images/chair3.jpg";
import item7 from "../images/chair5.jpg";
import item8 from "../images/chair2.jpg";
import item9 from "../images/chair4.jpg";
import item10 from "../images/chair6.jpg";
export const productContext = createContext();

const ProductModule = ({ children }) => {
  const products = [
    {
      id: 1,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item1,
      color: "black",
      rating: 2,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
    {
      id: 2,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item2,
      color: "black",
      rating: 4,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
    {
      id: 3,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item3,
      color: "black",
      rating: 2,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
    {
      id: 4,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item4,
      color: "black",
      rating: 3,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
    {
      id: 5,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item1,
      color: "black",
      rating: 1,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
  ];
  const productsFeatured = [
    {
      id: 6,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item5,
      color: "black",
      rating: 2,
      imageoverlay: item8,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
    {
      id: 7,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item6,
      color: "black",
      rating: 4,
      imageoverlay: item9,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
    {
      id: 8,
      category: "chair",
      name: "Modern Chair",
      price: 33,
      image: item7,
      color: "black",
      rating: 2,
      imageoverlay: item10,
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows",
    },
  ];
  const [cart, setcart] = useState("");
  

  const addtocart = (product) => {
     const cartitemclone=[...cart];
     let isproductexsist=false;
     cartitemclone.map( p => {
       if( p.id===product.id){
        p.qty++
       isproductexsist=true
    } });
    if(!isproductexsist){
        cartitemclone.push({...product,qty:1})
    }
    
    setcart(()=> cartitemclone)
 
  };
   const increment=(productid)=>{
    setcart((products) =>
			products.map((product) =>
            product.id === productid ? { ...product, qty: +product.qty + 1 } : product
			)
		);
	};

    
   

  const deletefromcart = (product) => {
    const cartitemclone = [...cart];
    setcart(cartitemclone.filter((p) => p.id !== product.id));
  };
  const contextValue = {
    products,
    productsFeatured,
     addtocart,
    cart,
     deletefromcart,
     increment
  };
  return (
    <div>
      <productContext.Provider value={{ ...contextValue }}>
        {children}
      </productContext.Provider>
    </div>
  );
};
export default ProductModule;
