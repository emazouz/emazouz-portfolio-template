'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp";
import { portfolioData } from "@/utils/fackData/portfolioData";

const animations = [
    { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }, // Fade
    { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 50, opacity: 0 } }, // Slide
    { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.9, opacity: 0 } }, // Scale
];

const Portfolio = () => {
    const [data, setData] = useState(portfolioData)
    const [filterData, setfilterData] = useState(portfolioData)
    const [activeTab, setActiveTab] = useState('show all');
    const [animation, setAnimation] = useState(animations[0]);

    const categories: string[] = ["show all"]

    data.forEach(({ category }) => {
        if (!categories.includes(category.toLocaleLowerCase())) {
            categories.push(category.toLocaleLowerCase())
        }
    })

    const handleTabSelect = (el: any) => {
        setActiveTab(el)
        setAnimation(animations[Math.floor(Math.random() * animations.length)]);

        if (el === "show all") {
            setfilterData(data)
        }
        else {
            const x = data.filter(({ category }) => category.toLocaleLowerCase() === el)
            setfilterData(x)
        }
    }

    useEffect(() => {
        setData(portfolioData)
    }, [])


    return (
        <section id="portfolio" className="mt-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center">
                            <SectionTitle.Name>Latest Works</SectionTitle.Name>
                            <SectionTitle.Title>View My Latest <span className="text-primary">Works</span></SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <ul className="flex justify-center flex-wrap gap-x-10 pb-35 mt-15">
                    {categories.map((el, index) => <li key={index} onClick={() => handleTabSelect(el)} className={`${activeTab === el ? "text-primary after:bg-primary" : "text-[#ffffff59]"} relative after:absolute after:bottom-0 after:left-0 after:w-5/12 after:h-[3px] mb-5 pb-[15px] text-lg capitalize cursor-pointer`}>
                        {el}
                    </li>
                    )}
                </ul>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 mt-9">
                    <AnimatePresence >
                        {filterData.map((tab) => (
                            <motion.div
                                key={tab.id}
                                {...animation}
                                transition={{ duration: 0.4 }}
                            >
                                <Card category={tab.category} title={tab.title} img={tab.img} id={tab.id} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>

    )
}

export default Portfolio

type CardPropsType = {
    title: string,
    img: string,
    category: string,
    id: number
}
const Card = ({ img, title, category, id }: CardPropsType) => {
    return (
        <SlideUp delay={id}>
            <div className="border border-border rounded-br-2xl rounded-bl-2xl group">
                <div className="relative">
                    <Image width={408} height={408} src={img} alt="Project" />
                    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-lighter opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <a href="#" className="w-16 h-16 rounded-full bg-primary flex justify-center items-center -rotate-45"><FontAwesomeIcon icon={faArrowRight} fontSize={20} /> </a>
                    </div>
                </div>
                <div className="p-5">
                    <span className="text-primary">{category}</span>
                    <a href="#" className="font-inter text-[rgba(255,_255,_255,_.65)] my-2 line-clamp-1 hover:text-primary transition-all duration-500 text-2xl">{title}</a>
                </div>
            </div>
        </SlideUp>
    )
}


