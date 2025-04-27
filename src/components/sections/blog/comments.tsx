import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/ui/button";

const Comments = () => {
    return (
        <div className="bg-black mt-12.5 py-12.5 px-7.5">
            <h2 className="mb-5">Comments</h2>
            <div>
                <Image width={100} height={100} src="/images/blog/author.jpg" alt="img" className="rounded-full float-left md:mr-12.5 mr-8 md:mb-20" />
                <div className="">
                    <h5 className="font-bold text-xl leading-[1.4] mb-2">Admin - June, 2024</h5>
                    <p className="font-normal">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipi scing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. </p>
                    <a href="#" className="text-white flex items-center gap-2 mt-4"> <i className="text-[10px] bg-[#767676] rounded-full w-5 h-5 flex justify-center items-center"><FontAwesomeIcon icon={faReply} /></i> Reply</a>
                </div>
            </div>
            <div className="mt-15">
                <Image width={100} height={100} src="/images/blog/author.jpg" alt="img" className="rounded-full float-left md:mr-12.5 mr-8 md:mb-20"/>
                <div>
                    <h5 className="font-bold text-xl leading-[1.4] mb-2">Admin - June, 2024</h5>
                    <p className="font-normal">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipi scing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. </p>
                    <a href="#" className="text-white flex items-center gap-2 mt-4"> <i className="text-[10px] bg-[#767676] rounded-full w-5 h-5 flex justify-center items-center"><FontAwesomeIcon icon={faReply} /></i> Reply</a>
                </div>
            </div>
            <div className="mt-15">
                <form action="">
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-7.5">
                        <div>
                            <input type="text" name="name" className="w-full bg-transparent border border-white text-lg py-5 px-2.5 h-12.5 outline-none focus:bg-white" placeholder="* Name" required={true} />
                        </div>
                        <div>
                            <input type="email" name="email" className="w-full bg-transparent border border-white text-lg py-5 px-2.5 h-12.5 outline-none focus:bg-white" placeholder="* Email" required={true} />
                        </div>
                        <div className="sm:col-span-2 col-auto">
                            <textarea rows={6} name="message" className="w-full bg-transparent border border-white text-lg py-5 px-2.5 outline-none focus:bg-white" placeholder="* Comment" required={true} defaultValue={""} />
                        </div>
                        <div className="sm:col-span-2 col-auto">
                            <Button type="submit" variant="outline" className="text-white text-base font-normal px-3 rounded-none">Submit Comment</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Comments