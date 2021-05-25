import Head from "next/head";
import fetch from "node-fetch";
import styles from "../styles/Home.module.css";
import { fromImageToUrl, API_URL } from "../utils/urls";
import { twoDecimals } from '../utils/format'
import Link from "next/link";

 const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Create Next Appa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map((product) => (
        <div key={product.name} className={styles.product}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  <img
                    className={styles.product__Im}
                    src={fromImageToUrl(product.image)}
                    alt=""
                  />
                </div>
                <div className={styles.product__Col}>
                  {product.name} ${twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {


  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

 

  return {
    props: {
      products
    }
  }
}

export default Home
