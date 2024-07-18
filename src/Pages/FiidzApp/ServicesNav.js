'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { FiidzAppLogo, Logo } from '../../Assets'
import '../../fonts.css'
import { a } from 'react-router-dom'

const products = [
  { name: 'Fiidz App', description: 'Revolutionizing poultry farming', href: '/fiidzapp' },
]

const resources = [
  { name: 'News', href: '/news', icon: NewspaperIcon },
  { name: 'Help and Support', href: '/helpandsupport', icon: QuestionMarkCircleIcon },
]

export default function ServiceNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setHasScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-${hasScrolled ? "white" : "transparent"
      } fixed top-0 w-full z-50 font-sp-pro`}>
      <nav aria-label="Global" className="mx-auto flex max-w-[1443px] items-center justify-between py-6 px-2 md:px-5 lg:px-8">
        <div className="flex lg:flex-1">
          <a
            href="/"
            aria-label="Yiieldy"
            title="Yiieldy"
            class="inline-flex items-center"
          >
            <img src={Logo} alt="Logo" className="lg:w-auto lg:h-auto w-20" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex items-center lg:gap-x-8">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900 focus:outline-none">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-20 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img src={FiidzAppLogo} aria-hidden="true" className="h-auto w-auto text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-bold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-bold leading-6 text-gray-900 focus:outline-none">
              Resources
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {resources.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-primaryColor" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-bold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <a href={"/services"} className="text-sm font-bold leading-6 text-gray-900">
            Services
          </a>
          <a href={"/about"} className="text-sm font-bold leading-6 text-gray-900">
            About Us
          </a>
          <a
            href={'/contact'}
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-whiteShade transition duration-200 shadow-md bg-primaryColor hover:opacity-[.9] focus:shadow-outline focus:outline-none rounded-full"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white px-2 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              aria-label="Yiieldy"
              title="Yiieldy"
              class="inline-flex items-center"
            >
              <img src={Logo} alt="Logo" className="w-[75px]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root px-1">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        // as="a"
                        // href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <a
                          href={item.href}
                          className="block w-full h-full"
                        >
                          {item.name}
                        </a>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50">
                    Resources
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...resources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        // as="a"
                        // href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-bold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <a
                          href={item.href}
                          className="block w-full h-full"
                        >
                          {item.name}
                        </a>
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href={"/services"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href={"/about"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href={"/contact"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
