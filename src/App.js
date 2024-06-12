import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./ErrorPage";
import { CartProvider } from "./context/cart_context";


const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29,29,29,0.8)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
      element: <>
      <Header/>
      <Home/>
      <Footer/>
      
      </>
        },
      {
        path: "/about",
        element: <>
        <Header/>
        <About/>
        <Footer/>
        </>
      },
      {
        path: "/product",
        element: 
        <>
      <Header/>
      
      <Products/>
      <Footer/>
      </>
      },
      {
        path: "/contact",
        element: 
        <>
      <Header/>
      
      <Contact/>
      <Footer/>
      </>
      },
      {
        path: "/singleproduct/:id",
        element: 
        <>
      <Header/>
      
      <SingleProduct></SingleProduct>
      <Footer/>
      </>
      },
      {
        path: "/cart",
        element: 
        <>
      <Header/>
      <Cart/>
      <Footer/>
      </>

      },
      {
        path: "*",
        element: 
        <>
      <Header/>
      
      <ErrorPage/>
      <Footer/>
      </>

      }
    ]
  );


  return (
    <div>
    
 <ThemeProvider theme={theme}>

<GlobalStyle/>
<CartProvider>
<RouterProvider router={router}>
</RouterProvider>
</CartProvider>
</ThemeProvider>
    </div>
 
  );

};

export default App;
