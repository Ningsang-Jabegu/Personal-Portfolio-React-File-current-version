import { service_Data } from "../data/Service_Data"
export default function SERVICE_PART() {
    const service_list = service_Data.map((service, index) =>
    (
        <li class="service-item">

                    <div class="service-icon-box">
                        <ion-icon name={service.ionIcon_name}></ion-icon>
                    </div>

                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">{service.serviceTitle}</h4>

                        <p class="service-item-text">
                            {service.serviceText}
                        </p>
                    </div>

                </li>
    ))
    return (
        <section class="service">

            <h3 class="h3 service-title">What i'm doing</h3>

            <ul class="service-list">
                {service_list}
            </ul>

        </section>
    )
}
