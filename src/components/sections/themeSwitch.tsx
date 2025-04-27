'use client'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme')
        if (currentTheme === 'dark') {
            setIsDark(true)
            document.documentElement?.classList.add('dark')
        }
        else {
            document.documentElement?.classList.remove('dark')
            setIsDark(false)
        }
    }, [])

    const handleThemeMode = (type: string) => {
        if (type === 'dark') {
            document.documentElement?.classList.add('dark')
            localStorage.setItem('theme', "dark")
            setIsDark(true)
        } else {
            document.documentElement?.classList.remove('dark')
            localStorage.setItem('theme', "light")
            setIsDark(false)
        }
    }


    return (
        <div className='fixed z-50 -translate-y-2/4 bg-primary cursor-pointer flex justify-center items-center rounded-tl-[3px] rounded-bl-[3px] right-0 top-2/4'>
            <i className={`justify-center items-center text-base w-10 h-[42px] ${isDark ? "flex" : "hidden"}`} onClick={() => handleThemeMode('light')} > <FontAwesomeIcon icon={faSun} /></i>
            <i className={`justify-center items-center text-base w-10 h-[42px] ${isDark ? "hidden" : "flex"}`} onClick={() => handleThemeMode('dark')} > <FontAwesomeIcon icon={faMoon} /></i>
        </div>
    )
}

export default ThemeSwitch