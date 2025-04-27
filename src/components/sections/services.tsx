import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { servicesData } from "@/utils/fackData/servicesData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faVectorSquare, faYinYang } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <section id="services" className="pt-[160px]">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <SectionTitle className="text-center">
                            <SectionTitle.Name>Services</SectionTitle.Name>
                            <SectionTitle.Title> My <span className="text-primary">Special Service</span> For your Website Development</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 mt-15">
                    {
                        servicesData.map(({ description, icon, id, title }) =>
                            <Card key={id} description={description} icon={icon} title={title} id={id} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default Services

type CardPropsType = {
    title: string,
    icon: string,
    description: string,
    id: number
}
const Card = ({ title, icon, description, id }: CardPropsType) => {
    return (
        <SlideUp delay={id}>
            <div className="service-item py-[45px] sm:px-12.5 px-6 bg-primary rounded-[15px]">
                <div className="content">
                    <div className="w-15 h-15 rounded-full flex items-center justify-center bg-black text-white">
                        <i className="text-[22px]">{getIcon(icon)}</i>
                    </div>
                    <h4 className="text-black mt-6 font-semibold">{title}</h4>
                    <p className="text-black font-normal mt-2">{description}</p>
                </div>
            </div>
        </SlideUp>
    )
}

const getIcon = (icon: string) => {
    switch (icon) {
        case 'fa-yin-yang':
            return <FontAwesomeIcon icon={faYinYang} />
        case 'fa-vector-square':
            return <FontAwesomeIcon icon={faVectorSquare} />
        case 'fa-layer-group':
            return <FontAwesomeIcon icon={faLayerGroup} />

        default:
            break;
    }
}