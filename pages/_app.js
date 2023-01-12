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
      <div className="h-full min-h-screen">
        <div className="fixed texture min-h-screen w-full"></div>
        <Layout setOpen={setOpen}>
          <Component {...pageProps} />
        </Layout>
      </div>
    </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden border border-black border-b-4 border-r-4 bg-white px-12 md:px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="bg-white text-black border border-transparent hover:border-black"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div>
                    <div className="mt-3 text-center sm:mt-5 text-sm">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-black uppercase tracking-tight"
                      >
                        Contact Us
                      </Dialog.Title>
                      <div className="mt-2 flex flex-col gap-4">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="mailto:gabriel@divination.dev"
                          className="flex flex-row gap-2 hover:cursor-pointer"
                        >
                          <img className="w-4" src="/envelope.svg" />
                          <div className="underline news">Email ↗</div>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.linkedin.com/company/25236760"
                          className="flex flex-row gap-2 hover:cursor-pointer"
                        >
                          <img className="w-4" src="/case.svg" />
                          <div className="underline news">LinkedIn ↗</div>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://t.me/firstwonk"
                          className="flex flex-row gap-2"
                        >
                          <img className="w-4" src="/chat.svg" />
                          <div className="underline news">Telegram ↗</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default MyApp
