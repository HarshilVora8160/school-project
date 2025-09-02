import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import axios from "axios";

const Product = () => {

    const params = useParams();

    const mutation = useMutation({
        mutationFn: (newProduct) => {
            return axios.put(`https://dummyjson.com/products/${params.productId}`, newProduct)
        }
    })

    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${params.productId}`)
        const data = await response.json()
        return data
    }

    const { isLoading, error, data: product } = useQuery({
        queryKey: ['products', params.productId],
        queryFn: fetchProduct
    })

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>Error: {error.message}</h3>
    }

    return (
        <div>
            <h1>Product : {product.title}</h1>

            <button onClick={() => {
                mutation.mutate({title: 'Updated product' })
            }} >Create Product</button>

        </div>
    )
}

export default Product