import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar"
import ProductsPage from "../pages/Products";
import CategoriesPage from "../pages/Categories";
import ShoppingPage from "../pages/Shopping";

import './styles.css';

export const HulkStoreRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="products" element={<ProductsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="shopping" element={<ShoppingPage />} />

          <Route path="/" element={<Navigate to="products" />} />
        </Routes>
      </div>
    </>
  )
}