import { Link } from "react-router-dom";
import { service_Data } from "../data/Service_Data";

export default function SERVICE_PART({ dataFrom = service_Data, type = 'none' }) {
    const service_list = type === 'none' ? dataFrom.map((service, index) => (
        <Link to={service.link} key={index}>
            <li className="service-item" key={index}>

                <div className="service-icon-box">
                    <ion-icon name={service.ionIcon_name}></ion-icon>
                </div>

                <div className="service-content-box">
                    <h4 className="h4 service-item-title">{service.serviceTitle}</h4>

                    <p className="service-item-text">
                        {service.serviceText}
                    </p>
                </div>

            </li>
        </Link>
    )) : dataFrom.map((service, index) => service.pageIn === 'About' ? (
        <Link to={service.link} key={index}>
            <li className="service-item hover-service-btn" key={index} style={{ margin: '2rem auto 0', display: 'flex', justifyContent: 'center' }}>

                <div className="service-icon-box">
                    <ion-icon name="mail-outline"></ion-icon>
                </div>

                <div className="service-content-box">
                    <h4 className="h4 service-item-title">{service.title}</h4>

                    <p className="service-item-text" style={{ margin: '0' }}>
                        {service.text}
                    </p>
                </div>

            </li>
        </Link>
    ) : (
    <></>
    ));

    return (
        <section className="service" style={{ margin: type !== 'none' ? '0' : '' }}>
            {type === 'none' && <h3 className="h3 service-title">Multi-dimensional journey</h3>}
            <ul className={`service-list ${type !== 'none' ? 'full-width' : ''}`}>
                {service_list}
            </ul>
        </section>
    );
}
