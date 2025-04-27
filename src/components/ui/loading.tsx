'use client'
import { useEffect, useState } from "react";

const Loading = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false)
        }, 500);

        return () => clearInterval(timeOut)
    }, [])

    return (
        <div className={`fixed z-[1000] w-full h-full text-center left-0 top-0 bg-black ${loading ? "block" : "hidden"}`}>
            <div className="relative -translate-x-2/4 -translate-y-2/4 text-center left-2/4 top-2/4">
                <div className="bounce1 loading inline-block bg-primary w-3.5 h-3.5 m-[3px] rounded-full" />
                <div className="bounce2 loading inline-block bg-primary w-3.5 h-3.5 m-[3px] rounded-full" />
                <div className="bounce3 loading inline-block bg-primary w-3.5 h-3.5 m-[3px] rounded-full" />
            </div>
        </div>

    )
}

export default Loading