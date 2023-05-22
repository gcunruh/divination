import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from "next/link";
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Expertise', href: '#expertise', current: false },
  { name: 'Capabilities', href: '#capabilities', current: false },
  { name: 'Insights', href: '#insights', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ setOpen }) {
  return (
<div className="bg-gray-100 pb-24">
          <Disclosure as="nav" className="bg-gray-100">
            {({ open }) => (
              <>
                <div className="mx-auto sm:px-6 lg:px-8 py-4">
                  <div className="">
                    <div className="flex items-center justify-between px-4 sm:px-0">
                      <div className="relative flex items-center">
                        <div className="pt-1 flex-shrink-0 font-serif text-black text-2xl z-40">
                          <div>Divination</div><div className="font-sans text-xs -mt-1 text-gray-500 font-light">A Conrad Holdings Subsidiary</div>
                        </div>
                        <div className="hidden md:block">
                          <div className="flex items-baseline space-x-4 ml-16 3xl:ml-36 z-40">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-500 border-b-2 border-transparent hover:border-medblue hover:text-black',
                                  'px-3 py-2 text-sm font-light z-40'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
 
                    </div>
                  </div>
                </div>
              </>
            )}
          </Disclosure>
          </div>
      );
}
