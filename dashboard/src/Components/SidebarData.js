import React from 'react'
import * as HeroIcons from "react-icons/hi";


export const SidebarData = [{
        title: "Profile",
        path: "/",
        icon: < HeroIcons.HiDocumentText / > ,
        cName: "nav-text"
    },
    {
        title: "Home",
        path: "../pages/Home.js",
        icon: < HeroIcons.HiLibrary / > ,
        cName: "nav-text"
    },
    {
        title: "Product",
        path: "/",
        icon: < HeroIcons.HiShoppingCart / > ,
        cName: "nav-text"
    },


]