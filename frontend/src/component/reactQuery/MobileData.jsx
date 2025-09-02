import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    return data.products
};


const MobileData = () => {
    const { isLoading, error, data: products } = useQuery({
        queryKey: ["products"], queryFn: fetchProducts
        // , staleTime: 20000
    })
    console.log(products);


    // const [products, setProducts] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             setIsLoading(true)
    //             setError(null)
    //             const response = await fetch('https://dummyjson.com/products')
    //             const data = await response.json();
    //             setProducts(data.products)
    //             setIsLoading(false)
    //         } catch (error) {
    //             setError(error.message)
    //             setIsLoading(false)
    //         }
    //     };
    //     fetchProducts();
    // }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error : {error.message}</h1>
    }

    return (
        <div className="bg-gray-900" >
            <div className="p-20" >
                <div className="grid grid-cols-12 gap-10" >
                    {
                        products?.map((ele, idx) => {
                            return (
                                <>
                                    <div className="col-span-3">
                                        <div className="flex justify-center  bg-gray-300 rounded-xl" >
                                            <Link to={`/products/${ele.id}`}>
                                                {/* <Link to={`/home`}> */}
                                                <img src={ele.images.length > 1 ? `${ele.images[0]}` : `${ele.images}`} />
                                            </Link>
                                        </div>
                                        <div className="flex justify-between" >
                                            <p className="text-white text-sm px-5 py-2" >{ele.brand ? ele.brand : ele.title}</p>
                                            <p className="text-white text-sm px-5 py-2" >{ele.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-white text-sm px-5" >{ele.category}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MobileData;