import { client_Data } from "../data/Client_Data"
export default function Client_Part() {
    const client_list = client_Data.map((client, index) => 
    (<li class="clients-item" key={index}>
        <a href={client.imgSrc} target="_blank">
            <img src={client.imgSrc} alt={client.imgAlt} />
        </a>
    </li>))
    return (
        <section class="clients">

            <h3 class="h3 clients-title">Clients</h3>

            <ul class="clients-list has-scrollbar">

                {client_list}
            </ul>

        </section>
    )
}