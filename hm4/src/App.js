import React, { useEffect } from "react";
import "./App.scss";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { loadProducts } from "./store/Home/operations";

const App = () => {


  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch]);


  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
