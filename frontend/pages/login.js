import Head from 'next/head'
import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'
import styles from '../styles/login.module.css'

const Login = () => {

    const [email, setEmail] = useState("")
    const { loginUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault() //avoids refresh
        loginUser(email)
    }

    return (
        <div>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login here to make your purchase" />
            </Head>

            <h2 className={styles.loginTitle}>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email Address"
                />
                <button
                    type="submit"
                    className={styles.button}
                >LogIn</button>
            </form>
        </div>
    )
}

export default Login