import stocks from "../data"
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            {stocks.map((stock) => {

                const { name, symbol } = stock
                return (
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name} ({symbol})</h2>

                    </Link>

                )
            })}
        </div>
    )
}
