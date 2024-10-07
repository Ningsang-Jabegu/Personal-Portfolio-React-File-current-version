import { Link } from "react-router-dom"
import { client_Data } from "../data/Client_Data"
export default function CLIENT_PART() {
    const client_list = client_Data.map((client, index) => 
    (<li className="clients-item" key={index}>
        <Link to={client.imgSrc} target="_blank" rel="noopener noreferrer">
            <img src={client.imgSrc} alt={client.imgAlt} />
        </Link>
    </li>))
    return (
        <section className="clients">

            <h3 className="h3 clients-title">Clients</h3>

            <ul className="clients-list has-scrollbar">

                {client_list}
            </ul>

        </section>
    )
}
