import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  ArrowRightIcon
} from '@heroicons/react/outline'

import { useRouter } from 'next/router'

const actions = [
  {
    title: 'APIs',
    description: "",
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Web3',
    icon: BadgeCheckIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Data Extraction',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  { title: 'Product Innovation', href: '#', icon: CashIcon, iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Home() {
  const router = useRouter()

  return (
    <Layout>
      <div className="my-10 text-2xl text-transparent bg-clip-text bg-gradient-to-br from-red-400 via-purple-400 to-teal-300 max-w-lg mx-auto">
        Divination is a human-readable product studio making magic in the digital age.
      </div>
      <h1 className="text-xl my-4">Our Focus</h1>
      <div className="mx-auto w-10/12 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-full inline-flex p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <p className="text-md text-gray-500">
                {action.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 w-full md:w-3/5 flex mx-auto flex-col items-center">
        <img className="mx-auto h-64 opacity-80" src="./langs_div.png" />
        <div className="my-8 text-lg">
          Magic comes in many forms
        </div>
      </div>
      <button
        type="button"
        onClick={() => router.push("/about")}
        className="w-9/12 max-w-xs items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-800 bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-800"
      >
        Let's Talk
        <ArrowRightIcon className="h-4 px-1 inline-block" />
      </button>
    </Layout>
  )
}
