import { BsLinkedin, BsTwitter, BsWater } from "react-icons/bs";
import Layout from "../components/Layout"

export default function Studio() {
    return (
        <Layout>
            <div className="mt-8 w-10/12 mx-auto">
                <h2 className="text-lg">
                    Internal Products
                </h2>
                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-3 lg:grid-cols-3">
                    {/* <li className="col-span-1 flex shadow-sm rounded-md">
                        <div
                            className=
                            'bg-red-200 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'

                        >
                            <BsTwitter />
                        </div>
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                            <div className="flex-1 px-4 py-4 text-sm truncate text-left">
                                <a href='https://google.com/' className="text-gray-900 font-medium hover:text-gray-600">
                                    Cotton Candy
                                </a>
                            </div>
                        </div>
                    </li> */}
                    {/* <li className="col-span-1 flex shadow-sm rounded-md">
                        <div
                            className=
                            'bg-blue-400 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'

                        >
                            FA
                        </div>
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                            <div className="flex-1 px-4 py-4 text-sm truncate text-left text-black">
                                    Founders Anonymous
                            </div>
                        </div>
                    </li> */}
                    <a href="https://scacchi.vercel.app">
                    <li className="col-span-1 flex shadow-sm rounded-md">
                        <div
                            className=
                            'bg-purple-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'

                        >
                            S
                        </div>
                        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                            <div className="flex-1 px-4 py-4 text-sm truncate text-left text-black">
                                    Scacchi
                            </div>
                        </div>
                    </li>
                    </a>
                </ul >
                <h2 className="text-lg mt-8 mb-4">
                    External Engagements
                </h2>
            </div >
        </Layout >
    )
}