// "use client"

// import { signOut } from '@/app/auth';
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image';
// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// const navigation = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Products', href: '/products' },
//   { name: 'Contact Us', href: '/contact' },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar({ session }) {
//   const [currentPath, setCurrentPath] = useState('');

//   useEffect(() => {
//     setCurrentPath(window.location.pathname);
//   }, []);

//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               {/* <img
//                 alt="Your Company"
//                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-8 w-auto"
//               /> */}
//               <h1 className='font-bold text-white font-serif'>Attari Collection</h1>
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     aria-current={currentPath === item.href ? 'page' : undefined}
//                     className={classNames(
//                       currentPath === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <Link href={'/addToCart'}>
//               <button
//                 type="button"
//                 className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//               >
//                 <span className="absolute -inset-1.5" />
//                 <span className="sr-only">View cart</span>
//                 <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
//               </button>
//             </Link>
//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               {session ? (
//                 <>
//                   <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">Open user menu</span>
//                     <Image
//                       alt="User profile"
//                       src={session?.user?.image}
//                       className="h-8 w-8 rounded-full"
//                       width={40}
//                       height={40}
//                     />
//                   </MenuButton>
//                   <MenuItems
//                     transition
//                     className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                   >
//                     <MenuItem>
//                       <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                         {session?.user?.name}
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                         {session?.user?.email}
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link href="/customerOrders" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                         Your Orders
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                         Settings
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                         <form
//                           action={async () => {
//                             "use server"
//                             await signOut("google")
//                           }}
//                         >
//                           {/* <button type="submit">Signin with Google</button> */}
//                                 <Button 
//                                   variant="outline" 
//                                   className="w-full flex items-center justify-center gap-2 bg-gray-300 hover:bg-gray-700 hover:text-white"
//                                 >
//                                     Sign out
//                                   </Button>
//                             </form>
//                       </Link>
//                     </MenuItem>
//                   </MenuItems>
//                 </>
//               ) : (
//                 <Link href={"/signin"}>
//                   <button className="ml-3 bg-gray-700 px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-300 hover:text-black">
//                     Login
//                   </button>
//                 </Link>
//               )}
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={currentPath === item.href ? 'page' : undefined}
//               className={classNames(
//                 currentPath === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }








// "use server"

import { signOut } from '@/app/auth';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import SignOut from '../SignOut/Signout';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact Us', href: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default async function Navbar({ session }) {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 className='font-bold text-white font-serif'>Attari Collection</h1>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href={'/addToCart'}>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </Link>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              {session ? (
                <>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Image
                      alt="User profile"
                      src={session?.user?.image}
                      className="h-8 w-8 rounded-full"
                      width={40}
                      height={40}
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                  >
                    <MenuItem>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
                        {session?.user?.name}
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
                        {session?.user?.email}
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/customerOrders" className="block px-4 py-2 text-sm text-gray-700">
                        Your Orders
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" className="block px-4 py-2 text-sm text-gray-700">
                        Settings
                      </Link>
                    </MenuItem>
                      <SignOut />
                  </MenuItems>
                </>
              ) : (
                <Link href={"/signin"}>
                  <button className="ml-3 bg-gray-700 px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-300 hover:text-black">
                    Login
                  </button>
                </Link>
              )}
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                'block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
