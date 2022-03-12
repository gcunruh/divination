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
                            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                        >
                            <div className="flex-1 flex flex-col p-8">
                                <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={person.imageUrl} alt="" />
                                <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
                                <dl className="mt-1 flex-grow flex flex-col justify-between">
                                    <dt className="sr-only">Role</dt>
                                    <dd className="mt-3">
                                        <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                                            {person.role}
                                        </span>
                                    </dd>
                                    <dd className="text-sm text-gray-500 px-2 pt-4">
                                        Focused on outcomes and exceptional craftsmanship in technology, Gabriel has experience in corporate strategy, research, and technology roles across finance, academia, and startups.
                                    </dd>
                                </dl>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="-mt-px flex divide-x divide-gray-200">
                                    <div className="-ml-px w-0 flex-1 flex">
                                        <a
                                            href={person.twitter}
                                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                                        >
                                            <BsTwitter className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            <span className="ml-3">Twitter</span>
                                        </a>
                                    </div>
                                    <div className="w-0 flex-1 flex">
                                        <a
                                            href={person.linkedin}
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent hover:text-gray-500"
                                        >
                                            <BsLinkedin className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            <span className="ml-3">Linkedin</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="-mt-px flex">
                                    <div className="w-0 flex-1 flex">
                                        <a
                                            href="https://gabrielunruh.com"
                                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                                        >
                                            <BsGlobe className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                            <span className="ml-3">Website</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}