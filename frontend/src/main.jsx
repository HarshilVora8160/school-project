import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { api } from './component/apiSlice.js'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 50000,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider api={api} >
      <QueryClientProvider client={queryClient} >
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ApiProvider>
  </StrictMode>
)

////////////////////////////////////////////////////////////////////////////
// import React from 'react'
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx"
// import MobileData from "./component/reactQuery/MobileData.jsx";
// import Product from "./component/reactQuery/Product.jsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/mobile-data',
//     element: <MobileData />
//   },
//   {
//     path: '/products/:productId',
//     element: <Product />
//   }
// ])

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 10000,
//     }
//   }
// });

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <QueryClientProvider client={queryClient} >
//     <RouterProvider router={router} />
//     <ReactQueryDevtools initialIsOpen={false} />
//   </QueryClientProvider>
// )
