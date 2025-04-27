import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { skillsData } from "@/utils/fackData/skillsData"

const Skills = () => {
    return (
        <section id="skills" className="pt-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <SectionTitle className="text-center">
                            <SectionTitle.Name>Pro Skills</SectionTitle.Name>
                            <SectionTitle.Title>Let’s Explore Popular <span>Skills &amp; Experience</span></SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="skill-items-wrap mt-15">
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-7.5 gap-y-7.5 gap-x-5">
                        {skillsData.map(({ id, img, progress, title }) =>
                            <Card key={id} img={img} progress={progress} title={title} id={id} />
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Skills

type CardPropsType = {
    title: string,
    progress: string,
    img: string,
    id: number
}
const Card = ({ img, title, progress, id }: CardPropsType) => {
    return (
        <SlideUp delay={id} className="border border-border rounded-2xl flex justify-center flex-col items-center p-6 w-full hover:border-primary transition-all duration-500 group">
            <img src={img} alt="Skill" />
            <h5 className="mt-[15px] mb-4 text-xl leading-[1.4]">{title}</h5>
            <span className="bg-primary block w-full text-center p-2.5 font-semibold text-xl rounded-2xl font-DM-Sans group-hover:bg-black group-hover:text-foreground transition-all duration-500">{progress}</span>
        </SlideUp>
    )
}