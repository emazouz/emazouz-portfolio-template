import Link from "next/link"
import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { blogData } from "@/utils/fackData/blogData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";


const Blog = () => {
    return (
        <section id="blog" className="pt-[140px] pb-7.5 shadow-[0_16px_40px_#ededed]">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center">
                            <SectionTitle.Name>My Blog</SectionTitle.Name>
                            <SectionTitle.Title>Latest <span>Blogs</span> In my Mind</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 mt-15">
                    {
                        blogData.map(({ date, description, id, img, title }) =>
                            <Card key={id} id={id} date={date} description={description} img={img} title={title} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default Blog

type CardPropsType = {
    id: number
    title: string,
    description: string,
    date: string,
    img: string
}

const Card = ({ title, description, date, img, id }: CardPropsType) => {
    return (
        <SlideUp delay={id}>
            <div className="border border-border rounded-2xl p-2.5">
                <div className="image">
                    <img src={img} alt="Blog" />
                </div>
                <div className="mt-7.5">

                    <Link href="/blog-single" className="text-[22px] leading-[34px] text-foreground transition-all duration-500 hover:text-primary">{title}</Link>

                    <p className="mt-[15px]">{description}</p>
                    <span className="block border-b border-border my-4"></span>
                    <div className="mt-[15px]">
                        <a className="text-gray" href="#"><FontAwesomeIcon icon={faCalendarAlt} /> {date}</a>
                    </div>
                </div>
            </div>
        </SlideUp>
    )
}