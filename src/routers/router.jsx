import { BrowserRouter, Navigate, replace, Route, Routes } from "react-router-dom"
import Login from "../pages/Login"
import { Home } from "../pages/Home"
import DashboardLayout from "../layout/DashboardLayout"
import Dashboard from "../pages/dashboard/Dashboard"
import AddProduct from "../pages/dashboard/AddProduct"
import ProductList from "../pages/dashboard/ProductList"
import MaterialList from "../pages/dashboard/MaterialList"
import AddMaterial from "../pages/dashboard/AddMaterial"
import Orders from "../pages/dashboard/Orders"
import AddCategory from "../pages/dashboard/AddCategory"
import CategoryList from "../pages/dashboard/CategoryList"



export const Router = () => {


    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path="/login" element = {<Login/>} />

                
                {/* Dashboard Routes */}

                <Route path="/admin" element={<DashboardLayout />}>
  <Route index element={<Dashboard />} />
  <Route path="products" element={<ProductList />} />
  <Route path="products/add" element={<AddProduct />} />
  <Route path="materials" element={<MaterialList />} />
  <Route path="materials/add" element={<AddMaterial />} />
  <Route path="categories" element={<CategoryList />} />
  <Route path="category/add" element={<AddCategory />} />
  <Route path="orders" element={<Orders />} />
</Route>

            </Routes>
        </BrowserRouter>
    )
}