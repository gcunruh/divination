export default function StudioCard({ header, description, imageSrc, href }) {
    return (
        <a
            className="text-white col-span-1 flex flex-col text-left bg-black bg-opacity-40 rounded-2xl shadow-xl border border-zinc-600 -ml-1"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex-1 flex flex-col my-4 mx-5">
                <h2 className="text-lg font-regular py-2 rounded-t-lg text-zinc-300">
                <img src={imageSrc} className="rounded-full inline-block h-12 w-12 mr-3" /> 
                {header}
                </h2>
                <div className="my-4">
                    {description}
                </div>
            </div>
        </a>
    )
}