export default function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="mt-48 mb-4 font-light text-gray-500 text-sm">
                <div>
                Divination, LLC © {new Date().getFullYear()}
            </div>
            {/* <img src="/barcode.png" /> */}

            <div className="">
                &quot;Disrupt or be disrupted&quot;
            </div>
                </div>
        </div>
    )
}