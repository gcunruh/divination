import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundSize: "300%", boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.56)" }} className="-mt-4 h-full min-h-screen bg-gradient-to-br from-red-400 via-purple-400 to-teal-300 animate-flow pb-10 md:pb-24">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
