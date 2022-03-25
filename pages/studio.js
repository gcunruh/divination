import { BsLinkedin, BsTwitter, BsWater } from "react-icons/bs";
import Layout from "../components/Layout"

export default function Studio() {
    return (
        <Layout>
            <div className="mt-8 w-10/12 mx-auto px-2">
                <h2 className="text-lg">
                    Internal Products
                </h2>
                <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
                    <li className="col-span-1 flex shadow-sm rounded-md">
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
                    </li>
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
                </ul >
                <h2 className="text-lg mt-8 mb-4">
                    External Engagements
                </h2>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
                <li
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                        <div className="flex-1 flex flex-col text-black">
                            <h2 className="text-center text-md font-semibold bg-tahiti py-4 rounded-t-lg text-white">
                                Engineering
                            </h2>
                            <div className="my-4 mx-5">
                                Hands on engineering and architecture guidance ranging from proof of concepts to production-ready applications
                            </div>
                        </div>
                    </li>
                    <li
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                        <div className="flex-1 flex flex-col text-black">
                            <h2 className="text-center text-md font-semibold bg-purple-500 py-4 rounded-t-lg text-white">
                                Finance
                            </h2>
                            <div className="my-4 mx-5">
                                Financial services including financial modeling, and fundraising strategy, and startup bookkeeping
                            </div>
                        </div>
                    </li>
                    <li
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                        <div className="flex-1 flex flex-col text-black">
                        <h2 className="text-center text-md font-semibold bg-blue-400 py-4 rounded-t-lg text-white">
                                Advisory
                            </h2>
                            <div className="my-4 mx-5">
                                Stategic advisory including independent directorships, audit committee, and industry commentary/research
                            </div>
                        </div>
                    </li>
                </ul>
            </div >
        </Layout >
    )
}