const Footer = () => {
    return (
        <footer className="pt-[90px] pb-10">
            <div className="container">
                <p className="text-center text-white">
                    Copyright @{new Date().getFullYear()}, <a href="#" className="text-primary">Liam</a> All
                    Rights Reserved.
                </p>
                <ul className="flex justify-center flex-wrap gap-x-10 gap-y-4 mt-4">
                    <li><a href="#" className="text-gray font-normal">Facebook</a></li>
                    <li><a href="#" className="text-gray font-normal">Twitter</a></li>
                    <li><a href="#" className="text-gray font-normal">Instagram</a></li>
                    <li><a href="#" className="text-gray font-normal">LinkedIn</a></li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer