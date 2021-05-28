
import Head from "next/head";
import { fromImageToUrl, API_URL } from "../../utils/urls"
import { twoDecimals } from '../../utils/format'
import BuyButton from '../../components/BuyButton'


const Product = (props) => {

    const { product } = props

    return (
        <div>
            <Head>
                {product.meta_title && <title>{product.meta_title}</title>}
                {product.meta_description && <meta name="description" content={product.meta_description} />}
            </Head>
            <h3>
                {product.name}
            </h3>
            <img src={fromImageToUrl(product.image)} />
            <h3>{product.name}</h3>
            <p>${twoDecimals(product.price)}</p>
            <BuyButton product={product} />
            <p>{product.content}</p>
        </div>
    )
}
export const getStaticProps = async (context) => {
    const { params: { slug } } = context
    const product_rest = await fetch(`${API_URL}/products/?slug=${slug}`) //returns arr
    const foundProduct = await product_rest.json()

    return {
        props: {
            product: foundProduct[0]
        }
    }
}
export const getStaticPaths = async () => {

    //retrieve all posible paths
    const product_res = await fetch(`${API_URL}/products`)
    const products = await product_res.json()

    //return to nextjs context
    return {
        paths: products.map(product => ({
            params: {
                slug: String(product.slug)
            }
        })),
        fallback: false //tells next js to show 404 if param not matched
    }

}

export default Product