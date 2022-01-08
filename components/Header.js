const tabs = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]

import { useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const router = useRouter();
    console.log(router.pathname)

    return (
        <>
            <div className="my-3 mx-auto w-auto flex flex-row justify-center items-center">
                <img
                    className="block h-9 w-auto"
                    src="./divination_logo.png"
                    alt="Divination"
                />
                <text className="hidden md:block text-white ml-3 font-semibold tracking-wide">Divination</text>
            </div>
            <div className="mx-auto w-4/5 md:w-1/2 lg:w-3/6 xl:w-5/12 my-5">
                <div className="">
                    <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                        {tabs.map((tab, tabIdx) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                    tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                                    tabIdx === 0 ? 'rounded-l-lg' : '',
                                    tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                                    'group relative min-w-0 flex-1 overflow-hidden bg-white py-3 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                                )}
                            >
                                <span>{tab.name}</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        router.pathname == tab.href ? 'bg-tahiti' : 'bg-transparent',
                                        'absolute inset-x-0 bottom-0 h-1'
                                    )}
                                />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    )
}