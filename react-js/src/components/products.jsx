import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function Products() {
    return(
        <>
        <nav>
            <NavLink to="popular-product">Popular Products</NavLink>
            <NavLink to="child-product">Child Products</NavLink>
        </nav>
        <Outlet />
        </>
    );
}