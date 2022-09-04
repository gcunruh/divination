import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

import {
  ArrowRightIcon,
  PaperAirplaneIcon,
  BeakerIcon,
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/outline'

import { useRouter } from 'next/router'
import { backgroundSize } from 'tailwindcss/defaultTheme'

const customTextStyles = {
  animation: "flow 30s ease-in-out infinite",
  background: "linear-gradient(-60deg, #904e95, #904e95, #e73c7e, #ee7752)",
  backgroundSize: "300%",
}

const actions = [
  {
    title: 'APIs and Data Extraction',
    description: "",
    icon: PaperAirplaneIcon,
    iconForeground: 'text-red-700',
    iconBackground: 'bg-red-50',
  },
  {
    title: 'Web3',
    icon: SparklesIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Product Transformation',
    icon: BeakerIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  { title: 'Future of Healthcare', href: '#', icon: HeartIcon, iconForeground: 'text-red-700', iconBackground: 'bg-red-50' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <div className="mb-0 py-4 px-3 md:px-0 text-4xl md:text-5xl text-white max-w-4xl text-left font-bold">
        Divination is a product studio making magic in the digital age.
      </div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 my-6">
                <li
                    className="text-white col-span-1 flex flex-col text-left bg-black bg-opacity-40 rounded-2xl shadow-xl border border-zinc-600"
                    >
                        <div className="flex-1 flex flex-col my-4 mx-5">
                            <h2 className="text-md font-regular py-2 rounded-t-lg text-zinc-300">
                                <span className="border border-zinc-300 rounded-full inline-block h-3 w-3 mr-1 bg-tahiti animate-pulse"> </span>Engineering
                            </h2>
                            <div className="">
                                Software engineering and architecture guidance ranging from proof of concepts to production-ready applications
                            </div>
                        </div>
                    </li>
                    <li
                    className="text-white col-span-1 flex flex-col text-left bg-black bg-opacity-40 rounded-2xl shadow-xl border border-zinc-600"
                    >
                        <div className="flex-1 flex flex-col my-4 mx-5">
                            <h2 className="text-md font-regular py-2 rounded-t-lg text-zinc-300">
                            <span className="border border-zinc-300 rounded-full inline-block h-3 w-3 mr-1 bg-purple-500 animate-pulse"> </span>Product
                            </h2>
                            <div className="">
                                Product Development support including product discovery, design, and roadmaps
                            </div>
                        </div>
                    </li>
                    <li
                    className="text-white col-span-1 flex flex-col text-left bg-black bg-opacity-40 rounded-2xl shadow-xl border border-zinc-600"
                    >
                        <div className="flex-1 flex flex-col my-4 mx-5">
                            <h2 className="text-md font-regular py-2 rounded-t-lg text-zinc-300">
                            <span className="border border-zinc-300 rounded-full inline-block h-3 w-3 mr-1 bg-blue-400 animate-pulse"> </span>Advisory
                            </h2>
                            <div className="">
                                Startup investing & advisory, independent directorships, and industry commentary
                            </div>
                        </div>
                    </li>
                </ul>
      <div className="pt-4 pb-1 px-3 md:px-0 text-xl md:text-2xl text-white text-left font-bold">
        What is a product studio?
      </div>
      <div className="py-4 px-3 md:px-0 text-md md:text-lg text-white text-left font-light">
        A product studio is a platform for repeatable creation and growth of successful products. It has two wings: clients and its own software products. They are integrally connected and complement each other. Working with clients on the implementation of their product ideas, a studio acts as a tech partner, bringing real-world industry development and real time knowledge on day one.
      </div>
      <div className='w-48 px-3 md:px-0'>
      <button
        type="button"
        onClick={() => router.push("/about")}
        className="my-8 w-full py-3 text-sm font-medium text-white rounded-xl bg-zinc-800 focus:outline-none ring-1 ring-zinc-600 focus:ring-1 focus:ring-offset-1 focus:ring-white hover:ring-1 hover:ring-offset-1 hover:ring-white hover:bg-opacity-40 hover:scale-105 transition ease-in-out delay-50"
      >
        Let&apos;s Talk
        <ArrowRightIcon className="h-4 px-1 inline-block" />
      </button>
      </div>
    </Layout>
  )
}
