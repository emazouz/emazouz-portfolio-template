import React, { ReactNode } from 'react'
import Link from 'next/link'
import { cva } from "class-variance-authority";
import { cn } from '@/utils/utils'

type Props = {
    children: ReactNode,
    className?: string,
    asLinked?: boolean,
    path?: any,
    variant?: "primary" | "secondary" | "outline",
    size?: "default" | "large",
    type?: 'button' | 'submit' | 'reset';
}

const buttonVariants = cva(
    "bg-none border rounded box-border cursor-pointer inline-block font-semibold leading-5 overflow-visible text-center normal-case touch-manipulation select-none align-middle whitespace-nowrap transition-all duration-500 ml-0 mr-[5px] mt-0 mb-2.5 border-solid border-black lg:leading-none leading-none",
    {
        variants: {
            variant: {
                primary: "bg-primary text-black shadow-[#fff_4px_4px_0_0,#000_4px_4px_0_1px] hover:text-foreground",
                outline: "bg-transparent border border-border",
                secondary:"bg-black"
            },
            size: {
                large: "px-12 py-[15px] text-lg",
                default: "px-10 py-[15px] text-lg"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "default"
        }
    })


const Button = ({ children, className, variant, size, asLinked, path, type }: Props) => {
    const Comp = asLinked ? Link : "button"
    return (
        <Comp href={path} className={cn(buttonVariants({ variant, size, className }))} type={type}>
            {children}
        </Comp >
    )
}

export default Button