import '../styles/globals.css'
import Layout from '../components/Layout'
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";

function MyApp({ Component, pageProps }) {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div>
      <div className="h-full min-h-screen bg-gray-100">
        <Layout setOpen={setOpen}>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
    </>
  )
}

export default MyApp
