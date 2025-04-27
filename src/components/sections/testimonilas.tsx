'use client'
import Image from "next/image";
import SectionTitle from "@/components/ui/sectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonilasData } from "@/utils/fackData/testimonilasData";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Testimonilas = () => {
    return (
        <section className="mt-40">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center">
                            <SectionTitle.Name>Testimonilas</SectionTitle.Name>
                            <SectionTitle.Title>What <span className="text-primary">Amazing</span> peoples Says About me</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>

                <div className="mt-15">
                    <Swiper
                        navigation={{
                            nextEl: ".testimonial-next",
                            prevEl: ".testimonial-prev"
                        }}
                        loop
                        // autoplay={{
                        //     delay:1500,
                        // }}
                        speed={4000}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            }
                        }}
                        modules={[Navigation, Autoplay]}
                    >
                        {
                            testimonilasData.map(({ id, img, name, position, review }) =>
                                <SwiperSlide key={id}><Card img={img} name={name} position={position} review={review} /> </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
                <div className="flex justify-center gap-2 mt-10">
                    <button className="w-12.5 h-12.5 border border-border rounded-full flex justify-center items-center rotate-45 text-white hover:bg-primary hover:text-white transition-all duration-500">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className="w-12.5 h-12.5 border border-border rounded-full flex justify-center items-center -rotate-45 text-white hover:bg-primary hover:text-white transition-all duration-500">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>

    )
}

export default Testimonilas


type CardPropsType = {
    img: string,
    name: string,
    review: string,
    position: string
}
const Card = ({ img, review, name, position }: CardPropsType) => {
    return (
        <div className="lg:px-15 md:px-10 px-6 py-12.5 border border-border text-center rounded-2xl">
            <div className="flex justify-center mb-9">
                <Image width={90} height={90} src={img} alt="Author" className="rounded-full" />
            </div>
            <p className="font-normal">{review}</p>
            <div className="mt-7.5">
                <h5 className="text-[22px]">{name}</h5>
                <span className="text-primary text-sm font-normal">{position}</span>
            </div>
        </div>

    )
}