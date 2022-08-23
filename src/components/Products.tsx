type CreateProductsProps = {
    text: string
}

export function Product(props: CreateProductsProps) {
    return (
        <p>{props.text}</p>
    )
}