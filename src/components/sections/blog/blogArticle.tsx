import Image from "next/image"
import BlogSidebar from "./blogSidebar"
import Comments from "./comments"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faReply } from "@fortawesome/free-solid-svg-icons";

const BlogArticle = () => {
    return (
        <section>
            <div className="container">
                <div className="grid lg:grid-cols-[65%_32.5%] w-full gap-7.5 items-start">
                    <div>
                        <div className="bg-black py-12.5 px-7.5">
                            <Image width={790} height={501} src="/images/blog/blog1.jpg" className="w-full" alt='img' />
                            <h2 className="py-5">Create website step by step deatils</h2>
                            <div className="text-white">
                                <span> <FontAwesomeIcon icon={faCalendar} /> 02,Feb 2017</span>
                                <span> <FontAwesomeIcon icon={faCalendar} /> website development</span>
                            </div>
                            <span className="block w-full h-px bg-border mt-2.5 mb-2.5"></span>
                            <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <blockquote className="font-normal text-gray my-4 pl-10 border-l border-l-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                            </blockquote>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <h2 className="py-5 mb-2">Tags</h2>
                            <div className="flex flex-wrap gap-2.5">
                                <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Web design</a>
                                <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Web Development</a>
                                <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Accounting</a>
                            </div>
                            <div className="next-previews-button-design">
                                <a className="pull-left" href="#"><i className="fa fa-chevron-left" /> Previous post</a>
                                <a className="pull-right" href="#">Next post <i className="fa fa-chevron-right" /></a>
                            </div>
                        </div>
                        <Comments />
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </section>

    )
}

export default BlogArticle