import SlideUp from "@/utils/animations/slideUp"
import { priceData } from "@/utils/fackData/priceData"
import SectionTitle from "../ui/sectionTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/button";

const Pricing = () => {
    return (
        <section className="mt-[140px] mb-7.5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center">
                            <SectionTitle.Name>My Pricing</SectionTitle.Name>
                            <SectionTitle.Title>Amazing <span className="text-primary">Pricing</span> For your Projects</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-7.5 mt-15">
                    {
                        priceData.map(({ description, features, id, price, title }) =>
                            <Card key={id} title={title} description={description} price={price} features={features} id={id} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default Pricing

type CardPropsType = {
    title: string,
    description: string,
    price: number,
    id: number,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}
const Card = ({ title, price, description, features, id }: CardPropsType) => {
    return (
        <SlideUp delay={id}>
            <div className="border border-border p-2.5 rounded-2xl">
                <div className="border border-border rounded-md lg:px-12.5 px-6 py-12">
                    <h4 className="pb-2">{title}</h4>
                    <p className="pb-10" dangerouslySetInnerHTML={{ __html: description }} />
                    <h4 className="text-5xl text-primary font-DM-Sans">${price}<span className="text-base font-normal text-[rgba(255,_255,_255,_.65)]">/Hour</span></h4>
                </div>
                <div className="py-10 lg:px-12.5 px-6">
                    <ul>
                        {
                            features.map(({ available, feature, id }) =>
                                <li key={id} className={`text-white text-xl font-normal mb-[34px] ${available ? "" : "opacity-35"}`}>
                                    <i className={`mr-[15px] ${available ? "text-primary" : ""}`}><FontAwesomeIcon icon={faCheck} /></i>
                                    {feature}
                                </li>
                            )
                        }
                    </ul>
                    <Button>Order Now <FontAwesomeIcon icon={faAngleRight} fontSize={14} /></Button>
                </div>
            </div>
        </SlideUp>
    )
}