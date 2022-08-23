import { useState } from "react";
import { Product } from "../components/Products";

export function Catalog() {
    const [ products, setProducts ] = useState<string[]>([
        'Produto 1',
        'Produto 2',
        'Produto 3',
    ])

    function createProduct() {
        setProducts([...products, 'Produto 4'])
    }

    return (
        <div>
            {products.map(product => {
                return <Product text={product} />
            })}

            <button onClick={createProduct}>Adicionar produto</button>
        </div>
    )
}