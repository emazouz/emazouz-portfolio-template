import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { resumeData } from "@/utils/fackData/resumeData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
    return (
        <section id="resume" className="pt-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <SectionTitle className="text-center">
                                    <SectionTitle.Name>My Resume</SectionTitle.Name>
                                    <SectionTitle.Title>Showcase Your <span className="text-primary">Talent</span> amplifing your impact</SectionTitle.Title>
                                </SectionTitle>
                            </div>
                        </div>
                        <div className="bg-primary rounded-2xl pt-15 pb-12.5 lg:px-15 sm:px-10 px-5 px mt-15">
                            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-52 gap-x-20 gap-y-[55px] justify-between relative after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-black md:after:block after:hidden">
                                {
                                    resumeData.map(({ companyName, id, title, years }) =>
                                        <Card key={id} companyName={companyName} title={title} years={years} id={id} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Resume

type CardPropsType = {
    title: string,
    companyName: string,
    years: string,
    id: number
}
const Card = ({ title, companyName, years, id }: CardPropsType) => {
    return (
        <SlideUp delay={id}>
            <div className="flex group">
                <div className="flex-none transition-all duration-500 w-10 h-10 leading-10 text-center -rotate-45 text-white mr-5 rounded-full bg-[#131313] group-hover:bg-white group-hover:text-black">
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
                <div className="content">
                    <span className="block leading-none font-normal">{years}</span>
                    <h4 className="text-black mt-5 mb-[5px]">{title}</h4>
                    <span className="font-normal">{companyName}</span>
                </div>
            </div>
        </SlideUp>
    )
}