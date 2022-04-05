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
      <div style={{ backgroundSize: "300%" }} className="mb-4 py-4 px-3 md:px-0 text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-purple-400 to-teal-300 max-w-4xl animate-flow text-left">
        Divination is a human-readable product studio making magic in the digital age.
      </div>
      <button
        type="button"
        onClick={() => router.push("/about")}
        className="my-8 w-9/12 md:w-48 items-center py-3 text-sm font-medium text-white rounded-lg bg-black bg-opacity-30 focus:outline-none ring-1 ring-zinc-600 focus:ring-1 focus:ring-offset-1 focus:ring-white hover:ring-1 hover:ring-offset-1 hover:ring-white hover:bg-opacity-40 hover:scale-105 transition ease-in-out delay-50"
      >
        Let&apos;s Talk
        <ArrowRightIcon className="h-4 px-1 inline-block" />
      </button>
    </Layout>
  )
}
