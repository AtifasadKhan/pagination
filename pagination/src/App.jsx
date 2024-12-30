import {useEffect, useState} from 'react'
import './App.css'

function App() {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const fetchProducts = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const result = await response.json();
        if (result.products && result.products.length > 0) {
            setUsers(result.products);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handlePage = (page) => {
        setPage(page)
    }
    return (
        <>
            <div>

                <div className="products">
                    {users.slice(page * 10 - 10, page * 10).map((user, index) => (
                        <div className="imgTag" key={index}>
                            <img src={user.thumbnail} alt=""/>
                            <div>
                                {user.title}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="page">
                    {
                        [...Array(users.length / 10)].map((_, index) => (
                            <span onClick={() => handlePage(index + 1)} key={index}>
                                {index + 1}
                            </span>))
                    }
                </div>

            </div>
        </>
    )
}

export default App
