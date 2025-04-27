import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone, faEnvelope, faUser, faFileText, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/button";

const Contact = () => {
    return (
        <section id="contact" className="pt-[140px]">
            <div className="container">
                <div className="grid lg:grid-cols-[33%_auto] grid-cols-1 gap-7.5">
                    <div className="col-lg-4">
                        <div className="contact-content-part pt-5 rpt-0 rmb-25 wow fadeInUp delay-0-2s">
                            <SectionTitle className="mb-10">
                                <SectionTitle.Name>Contact me</SectionTitle.Name>
                                <SectionTitle.Title>Let’s Talk About your <span className="text-primary">Next Projects</span></SectionTitle.Title>
                                <SectionTitle.Description>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</SectionTitle.Description>
                            </SectionTitle>

                            <SlideUp delay={2} className="flex items-center gap-3 pb-10">
                                <div className="w-12.5 h-12.5 rounded-full border border-primary flex justify-center items-center text-primary text-xl">
                                    <FontAwesomeIcon icon={faMap} />
                                </div>
                                <div>
                                    <strong className="text-lg text-white font-medium capitalize">our office:</strong>
                                    <p>Jurain,Dhaka Bangladesh</p>
                                </div>
                            </SlideUp>

                            <SlideUp delay={3} className="flex items-center gap-3 pb-10">
                                <div className="w-12.5 h-12.5 rounded-full border border-primary flex justify-center items-center text-primary text-xl">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div>
                                    <strong className="text-lg text-white font-medium capitalize">contact number:</strong>
                                    <p>+1234321321</p>
                                </div>
                            </SlideUp>

                            <SlideUp delay={4} className="flex items-center gap-3">
                                <div className="w-12.5 h-12.5 rounded-full border border-primary flex justify-center items-center text-primary text-xl">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div>
                                    <strong className="text-lg text-white font-medium capitalize">Email us:</strong>
                                    <p>websitename@mail.com</p>
                                </div>
                            </SlideUp>

                        </div>
                    </div>
                    {/* START CONTACT FORM DESIGN AREA */}
                    <div className="col-lg-8">
                        <SlideUp delay={2} className="contact-form contact-form-area overflow-hidden">
                            <form id="contactForm" className="contactForm" name="contactForm">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-7.5">

                                    <div className="relative">
                                        <label htmlFor="name" className="text-white text-lg font-DM-Sans mb-[18px] block">Your Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-primary focus:border border-transparent border" defaultValue="" placeholder="Diego Liam" required data-error="Please enter your Name" />
                                        <label htmlFor="name" className="absolute top-1/2 translate-y-1/2 right-8"><FontAwesomeIcon icon={faUser} /></label>
                                        <div className="help-block with-errors" />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="email" className="text-white text-lg font-DM-Sans mb-[18px] block">Email Address</label>
                                        <input type="email" id="email" name="email" className="w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-primary focus:border border-transparent border" defaultValue="" placeholder="hello@websitename.com" required data-error="Please enter your Email" />
                                        <label htmlFor="email" className="absolute top-1/2 translate-y-1/2 right-8"><FontAwesomeIcon icon={faEnvelope} /></label>
                                        <div className="help-block with-errors" />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="phone_number" className="text-white text-lg font-DM-Sans mb-[18px] block">Phone Number</label>
                                        <input type="text" id="phone_number" name="phone_number" className="w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-primary focus:border border-transparent border" defaultValue="" placeholder={'+1234567890'} required data-error="Please enter your Phone Number" />
                                        <label htmlFor="phone_number" className="absolute top-1/2 translate-y-1/2 right-8"><FontAwesomeIcon icon={faPhone} /></label>
                                        <div className="help-block with-errors" />
                                    </div>

                                    <div className="relative">
                                        <label htmlFor="subject" className="text-white text-lg font-DM-Sans mb-[18px] block">Subject</label>
                                        <input type="text" id="subject" name="subject" className="w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-primary focus:border border-transparent border" defaultValue="" placeholder="Subject" required data-error="Please enter your Subject" />
                                        <label htmlFor="subject" className="absolute top-1/2 translate-y-1/2 right-8"><FontAwesomeIcon icon={faFileText} /></label>
                                        <div className="help-block with-errors" />
                                    </div>

                                    <div className="md:col-span-2 col-auto">
                                        <div className="relative">
                                            <label htmlFor="message" className="text-white text-lg font-DM-Sans mb-[18px] block">Message</label>
                                            <textarea name="message" id="message" className="w-full bg-white py-[19px] pl-7.5 pr-11 outline-none focus:border-primary focus:border border-transparent border" rows={4} placeholder="Write Yur message" required data-error="Please Write your Message" defaultValue={""} />
                                            <div className="help-block with-errors" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2 col-auto">
                                        <div className="relative mb-0">
                                            <Button type="submit">
                                                Send Me Message <FontAwesomeIcon icon={faAngleRight} fontSize={14} />
                                            </Button>
                                            <div id="msgSubmit" className="hidden" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </SlideUp>
                    </div>
                    {/* / END CONTACT FORM DESIGN AREA */}
                </div>
            </div>
        </section >

    )
}

export default Contact