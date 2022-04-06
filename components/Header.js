import Image from "next/image"
import Link from "next/link";

const tabs = [
    { name: 'Home', href: '/' },
    { name: 'The Studio', href: '/studio' },
    { name: 'About', href: '/about' },
]

import { useRouter } from "next/router";

function Pill({ text, href }) {
    const router = useRouter();
    const conditionalStyle = router.pathname == href ? "bg-white text-black" : "bg-transparent text-white"

    return (
        <Link href={href}>
            <a className={"flex flex-row items-center mx-[2px] text-sm cursor-pointer rounded-full px-4 md:px-6 h-8 hover:opacity-60 transition ease-in-out delay-50 " + conditionalStyle}>
            <div className="">
                {text}    
            </div>
            </a>
        </Link>
    )
}

export default function Header() {

    return (
        <div className="my-3 md:my-4 flex flex-row justify-between items-center w-full px-3 md:px-0 sticky top-0">
            <Link href="/">
                <a className="flex flex-row justify-center items-center rounded-full backdrop-blur-md bg-transparent px-1 h-10">
                    <Image
                        className="block w-auto"
                        src="/divination_logo.png"
                        alt="Divination"
                        height={34}
                        width={34}
                        priority={true}
                    />
                    <text className="text-white ml-3 font-mono tracking-wide hidden md:block">Divination</text>
                </a>
            </Link>
            <div className="flex flex-row rounded-full bg-zinc-800 border-2 border-black h-10 my-4 bg-opacity-60 border-opacity-0 shadow-md items-center backdrop-blur-md">
                <Pill text="Home" href="/" />
                {/* <Pill text="Studio" href="/studio" /> */}
                <Pill text="About" href="/about" />
            </div>
        </div>
    )
}