import { BsLinkedin, BsTwitter, BsGlobe } from "react-icons/bs";
import Layout from "../components/Layout"

const people = [
    {
        name: 'Gabriel Unruh',
        title: 'Lead Magician',
        role: 'Lead Magician',
        twitter: 'https://twitter.com/firstwonk/',
        linkedin: 'https://linkedin.com/in/gcunruh/',
        imageUrl:
            './gu.jpeg',
    },
    // More people...
]

export default function About() {
    return (
        <Layout>
            <div className="mt-6 text-xl w-10/12 max-w-lg mx-auto">
                <ul role="list" className="px-1">
                    {people.map((person) => (
                        <li
                            key={person.email}
                            className="col-span-1 flex flex-col text-center bg-black bg-opacity-40 rounded-lg shadow-lg border border-zinc-600"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-white text-sm font-medium">{person.name}</h3>
                                <dl className="mt-1 flex-grow flex flex-col justify-between">
                                    <dt className="sr-only">Role</dt>
                                    <dd className="mt-3">
                                        <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                            {person.role}
                                        </span>
                                    </dd>
                                    <dd className="text-sm text-zinc-300 px-2 pt-4">
                                        Focused on outcomes and exceptional craftsmanship in technology, Gabriel has experience in technology and corporate strategy roles across industries and lifecycles.
                                    </dd>
                                </dl>
                            </div>
                            <div className="rounded-lg py-3 bg-zinc-800 hover:bg-zinc-900 mx-8 my-6 ring-1 ring-zinc-600 transition ease-in-out delay-50">
                                <a
                                            href={person.twitter}
                                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent"
                                >
                                            <BsTwitter className="w-5 h-5" aria-hidden="true" />
                                            <span className="ml-3">Twitter</span>
                                </a>
                            </div>
                            {/* <div className="divide-y divide-zinc-600">
                                <div className="-mt-px flex divide-x divide-zinc-600">
                                    <div className="-ml-px w-0 flex-1 flex text-zinc-300 hover:text-white">
                                        <a
                                            href={person.twitter}
                                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent"
                                        >
                                            <BsTwitter className="w-5 h-5" aria-hidden="true" />
                                            <span className="ml-3">Twitter</span>
                                        </a>
                                    </div>
                                    <div className="w-0 flex-1 flex text-zinc-300 hover:text-white">
                                        <a
                                            href={person.linkedin}
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent"
                                        >
                                            <BsLinkedin className="w-5 h-5" aria-hidden="true" />
                                            <span className="ml-3">Linkedin</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="-mt-px flex">
                                    <div className="w-0 flex-1 flex text-zinc-300 hover:text-white">
                                        <a
                                            href="https://gabrielunruh.com"
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-transparent rounded-bl-lg"
                                        >
                                            <BsGlobe className="w-5 h-5" aria-hidden="true" />
                                            <span className="ml-3">Website</span>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}