import SlideUp from "@/utils/animations/slideUp"
import { clientLogoData } from "@/utils/fackData/clientLogoData"

const Clients = () => {
    return (
        <div className="pt-[140px] overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SlideUp delay={2}>
                            <div className="section-title text-center pt-5 mb-65">
                                <h6 className="text-lg">
                                    I’ve worked with <span className="text-primary">300+ Global Clients</span> All over the world.
                                </h6>
                            </div>
                        </SlideUp>
                    </div>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 mt-15">
                    {
                        clientLogoData.map(({ id, img }) => {
                            return (
                                <SlideUp key={id} delay={id} className="lg:px-7.5 sm:px-5 px-4 lg:pb-[70px] pb-12">
                                    <a href="#">
                                        <img src={img} alt="brand Logo" />
                                    </a>
                                 </SlideUp>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default Clients