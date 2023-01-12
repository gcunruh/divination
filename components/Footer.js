export default function Footer() {
    return (
        <div className="py-3 md:py-2 border-t border-black flex flex-col md:flex-row gap-2 justify-center items-center uppercase text-sm font-bold">
            <div>
                Divination, LLC © {new Date().getFullYear()}
            </div>
            <img src="/barcode.png" />

            <div className="news normal-case font-medium">
                "Disrupt or be disrupted"
            </div>
        </div>
    )
}