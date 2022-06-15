import { BsLinkedin, BsTwitter, BsWater } from "react-icons/bs";
import Layout from "../components/Layout";
import StudioCard from "../components/StudioCard";

import {
    ArrowRightIcon,
  } from '@heroicons/react/outline'

export default function Studio() {
    return (
        <Layout>
            <div className="font-bold mb-6 text-lg">
                Studio
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-6 gap-6">
                <StudioCard header="Tipsea" description="Tipsea creates generative NFT thank you notes in the form of tasty digital cocktails" imageSrc="./tipsea_icon.png" href="https://tipsea-web.vercel.app/" />
            </div>
            <div className="font-bold mb-6 text-lg">
                Advisory & Engineering
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-6 gap-6">
                <StudioCard header="Intuily" description="Intuily connects you with health & wellness practitioners who are the perfect match for your personality and style" imageSrc="./intuily.png" href="https://www.intuily.com/" />
                <StudioCard header="Moolah U" description="Moolah U gives parents tools to teach kids financial and personal responsibility" imageSrc="./moolahu.jpeg" href="https://moolahu.com/" />
                <StudioCard header="Stealth Web3 Company" description="Revolutionizing off-chain experiences using the power of Solana" imageSrc="./divination_logo.png" href="/studio" />
            </div>
            {/* <div className="font-bold mb-0 text-lg">
                Prior Creations
            </div>
            <div className="w-full md:w-1/3 pr-4">
            <button
        type="button"
        onClick={() => router.push("/about")}
        className="my-8 w-full py-3 text-sm font-medium text-white rounded-xl bg-zinc-800 focus:outline-none ring-1 ring-zinc-600 focus:ring-1 focus:ring-offset-1 focus:ring-white hover:ring-1 hover:ring-offset-1 hover:ring-white hover:bg-opacity-40 hover:scale-105 transition ease-in-out delay-50"
      >
        View Design Portfolio
        <ArrowRightIcon className="h-4 px-1 inline-block" />
      </button>
      </div> */}
        </Layout >
    )
}