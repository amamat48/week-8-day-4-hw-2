import {useParams} from 'react-router-dom'

export default function Stock({ stocks }) {
    const { symbol } = useParams();

    const stock = stocks.find((stock) => stock.symbol === symbol) // .find is a higher order function that scans the deconstructed prop from thr stock component and serches the array to see if the symbol matches
    return (
        <div>
            <h1>{stock.name}</h1>
      <table>
        <tbody>
          <tr>
            <th>Symbol</th>
            <td>{stock.symbol}</td>
          </tr>
          <tr>
            <th>Last Price</th>
            <td>{stock.lastPrice}</td>
          </tr>
          <tr>
            <th>Change</th>
            <td>{stock.change}</td>
          </tr>
          <tr>
            <th>High</th>
            <td>{stock.high}</td>
          </tr>
          <tr>
            <th>Low</th>
            <td>{stock.low}</td>
          </tr>
          <tr>
            <th>Open</th>
            <td>{stock.open}</td>
          </tr>
        </tbody>
      </table>
    </div>

    )
}
