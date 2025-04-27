import Button from "@/components/ui/button"
import Image from "next/image"

const BlogSidebar = () => {
    return (
        <div className="bg-black py-12.5 px-7.5">
            <div className="border border-border rounded-2xl p-6 mb-7.5">
                <h5 className="text-[22px] capitalize mb-[15px]">Search</h5>
                <input type="text" className="px-2.5 py-5 bg-transparent border border-border w-full h-12.5 outline-none focus:bg-white" placeholder="Search" />
                <Button variant="secondary" className="bg-[#333] text-white font-normal text-base h-[45px] py-0 rounded-none hover:bg-transparent border-border">Search</Button>
            </div>
            <div className="border border-border rounded-2xl p-6 mb-7.5">
                <h5 className="text-[22px] capitalize mb-[15px]">about me</h5>
                <Image width={298} height={298} src="/images/blog/author.jpg" alt="img" />
                <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="border border-border rounded-2xl p-6 mb-7.5">
                <h5 className="text-[22px] capitalize mb-[15px]">Catagory lists</h5>
                <ul>
                    <li><a href="#" className="text-gray flex items-center justify-between py-1.5 hover:text-white transition-all duration-500"> Business planning <span>(5)</span></a></li>
                    <li><a href="#" className="text-gray flex items-center justify-between py-1.5 hover:text-white transition-all duration-500"> CMS Web Templates <span>(3)</span></a></li>
                    <li><a href="#" className="text-gray flex items-center justify-between py-1.5 hover:text-white transition-all duration-500"> Html Templates <span>(6)</span></a></li>
                    <li><a href="#" className="text-gray flex items-center justify-between py-1.5 hover:text-white transition-all duration-500"> Graphics Design <span>(4)</span></a></li>
                    <li><a href="#" className="text-gray flex items-center justify-between py-1.5 hover:text-white transition-all duration-500"> WordPress <span>(8)</span></a></li>
                </ul>
            </div>
            <div className="border border-border rounded-2xl p-6">
                <h5 className="text-[22px] capitalize mb-[15px]">Tags</h5>
                <div className="flex flex-wrap gap-2.5">
                    <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Web design</a>
                    <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Web Development</a>
                    <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Accounting</a>
                    <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Taxation</a>
                    <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Retirement</a>
                    <a href="#" className="border border-border text-white font-normal px-2.5 py-2 text-sm transition-all duration-500 hover:text-gray">Financial planning</a>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar