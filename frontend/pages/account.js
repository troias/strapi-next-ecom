import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import { API_URL } from '../utils/urls'
import Link from 'next/link';
import AuthContext from '../context/AuthContext'

const useOrders = (user, getToken) => {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchOrders = async () => {
            
            if (user) {
                try {
                    setLoading(true)
                    const token = await getToken()
                    const order_res = await fetch(`${API_URL}/orders`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                    const data = await order_res.json()
                    setOrders(data)
                } catch (error) {
                    setOrders([])
                    setLoading(false)
                }
            }
            setLoading(false)
        }

        fetchOrders()
    }, [user])

    return {orders, loading}
}

const Account = () => {

    const { user, logoutUser, getToken } = useContext(AuthContext)

    const {orders, loading}= useOrders(user, getToken)
    

    if (!user) {
        return (<div> Please login or register <Link href="/"><a>Go back</a></Link> </div>)
    }
    return (
        <div>
            <Head>
                <title>Acount Page</title>

                <meta name="description" content="The Account Page view your orders and logout" />
            </Head>
            <h2>Account Page</h2>
            <hr />
            <h3>Your Orders</h3>
            <div>
                {loading && <div> ..Loading </div>}
                {orders.map(order => (
                    <div key={order.id}>
                        {new Date(order.created_at).toLocaleDateString('en-En')}
                        { order.product.name} 
                        { order.total.price}
                        {order.status}
                    </div>
                ))}

            </div>
            <p> Logged in as {user.email}</p>
            <a href="#" onClick={logoutUser}>LogOut</a>
        </div>
    )
}

export default Account