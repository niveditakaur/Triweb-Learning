import ProductList from "../components/product/ProductList";
function Product(){

    let products = [
        {
            id:'p1',
            product_name:"City Tour",
            image:"https://drive.google.com/uc?export=download&id=1ME2pkXO1XM1vyuSoPF-qSDw660Sx_5rX",
            description:"It is a good tour",
            price:"20000"
        },
        {
            id:'p2',
            product_name:"Forest Tour",
            image:"https://drive.google.com/uc?export=download&id=1pAz0wbSvHtvbQ1pM9lFHeZmcoDsFgvc-",
            description:"It is a thrilling tour",
            price:"50000"
        },
        {
            id:'p3',
            product_name:"River Side Tour",
            image:"https://drive.google.com/uc?export=download&id=1CsREOz0cljoKlt5tGxZvBRp8lbcVu97a",
            description:"It is a refreshing tour",
            price:"40000"
        }
    ]

    return <div>
              
        <ProductList products={products}/>   

    </div>

}

export default Product;