import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Header({ setOpen }) {
  return (
    <>
      <div className="mt-3 md:mt-4 flex flex-col justify-between items-center w-full px-0 top-0">
        <Link
          href="/"
          className="flex flex-row justify-center items-center rounded-full bg-transparent px-1 h-10 mb-2"
        >
          <text className={`text-4xl cloister`}>Divination</text>
        </Link>
        <div className="py-1 flex flex-row border-black border-t border-b w-full items-center px-2 md:px-3">
          <div className="flex-1 flex text-sm">
            <span className="hidden md:block font-medium">Late Night Edition</span>
            <span className="font-medium md:hidden">Vol. XI</span>
          </div>
          <div className="flex-grow md:flex-1 flex news font-semibold pt-1">
            <span className="m-auto">{new Date().toDateString()}</span>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="flex-1 flex flex-row justify-end text-sm font-medium hover:font-bold hover:cursor-pointer"
          >
            <span className="hidden md:block">Contact Us</span>
            <span className="md:hidden">Contact</span>
          </div>
        </div>
        <div className="text-4xl md:text-8xl font-extrabold tracking-tight text-center w-full pt-4">
          <div className="">BAD PRODUCT</div>
          <div className="">ENDS AT LAST!</div>
        </div>
        <div className="text-2xl md:text-3xl font-bold border-b border-black pt-4 md:pt-8 pb-4 md:pb-8 px-1 md:px-16 text-center uppercase tracking-tight w-full">
          Divination is a product consultancy making magic in the digital age
        </div>
      </div>
    </>
  );
}
