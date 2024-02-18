"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
    const [clicked, setClicked] = useState();

    return (
        <nav className='flex flex-row justify-between h-[56px] bg-primary text-white border-y border-secondary rounded-t-[10px]'>
            <div
                className='flex  flex-row justify-normal w-1/2'>
                <Link
                    href="/"
                    onClick={() => { setClicked(1) }}
                    className={`${clicked === 1 ? " border-b-2 border-b-[#FEA55F] " : " border-x border-secondary "} 
                    border-l border-secondary text-center my-auto px-8 py-4  h-full`}>_Abderrahim _Eziane
                </Link >
                <Link
                    href="/about-me"
                    onClick={() => { setClicked(2) }}
                    className={`${clicked === 2 ? " border-b-2 border-b-[#FEA55F] " : " border-x border-secondary "} 
                    border-l border-secondary text-center my-auto px-8 py-4  h-full`} >_about-me
                </Link >
                <Link
                    href="/projects"
                    onClick={() => { setClicked(3) }}
                    className={`${clicked === 3 ? " border-b-2 border-b-[#FEA55F] " : " border-x border-secondary "} 
                    border-l border-secondary text-center my-auto px-8 py-4  h-full`}>_projects
                </Link >
                <Link
                    href="/blog"
                    onClick={() => { setClicked(4) }}
                    className={`${clicked === 4 ? " border-b-2 border-b-[#FEA55F] " : " border-x border-secondary "} text-center my-auto px-8 py-4 h-full`}>_blog
                </Link >
            </div>
            <div
                className={`${clicked === 5 ? " border-b-2 border-b-[#FEA55F] " : " border-x border-secondary "} 
                flex flex-row justify-end`}>
                <Link
                    href="/contact-me"
                    onClick={() => { setClicked(5) }}
                    className={`w-full text-center my-auto flex-shrink-0 p-4 border-x border-secondary`}>_contact-me
                </Link >
            </div>
        </nav>
    );
}

export default NavBar;
