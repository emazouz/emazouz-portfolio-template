import SlideUp from "@/utils/animations/slideUp"
import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    className?: string
}
const SectionTitle = ({ children, className }: Props) => {
    return (
        <SlideUp delay={2}>
            <div className={`section-title ${className}`}>
                {children}
            </div>
        </SlideUp>
    )
}

SectionTitle.Name = Name
SectionTitle.Title = Title
SectionTitle.Description = Description
export default SectionTitle

function Name({ children, className }: Props) {
    return <span className={`text-gray block font-medium mb-[15px] ${className}`}>{children}</span>
}

function Title({ children }: Props) {
    return <h2 className="">{children}</h2>
}

function Description({ children }: Props) {
    return <p className="mt-[25px]">{children}</p>
}