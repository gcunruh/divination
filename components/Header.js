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
            <a className={"flex flex-row items-center mx-1 text-sm cursor-pointer rounded-full px-6 h-8 hover:opacity-60 transition ease-in-out delay-50 " + conditionalStyle}>
            <div className="">
                {text}    
            </div>
            </a>
        </Link>
    )
}

export default function Header() {
    const router = useRouter();

    return (
        <div className="my-3 md:my-4 flex flex-row justify-center md:justify-between w-full">
            <div className="flex-row justify-center items-center hidden md:flex">
                <Image
                    className="block w-auto"
                    src="/divination_logo.png"
                    alt="Divination"
                    height={36}
                    width={36}
                    priority={true}
                />
                <text className="text-white ml-3 font-mono tracking-wide">Divination</text>
            </div>
            <div className="flex flex-row rounded-full bg-black border-2 border-black h-10 my-4 bg-opacity-40 border-opacity-0 shadow-md items-center">
                <Pill text="Home" href="/" />
                <Pill text="Studio" href="/studio" />
                <Pill text="Team" href="/about" />
            </div>
        </div>
    )
}