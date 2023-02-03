import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Card from './Card'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const cards = [
  {
    title: 'Total Sales',
    amount: '$ 1,500',
    percentage: '3.5%',
    percentageColor: 'text-green-500',
  }, {
    title: 'Total Sales',
    amount: '$ 1,500',
    percentage: '3.5%',
    percentageColor: 'text-green-500',
  }, {
    title: 'Total Sales',
    amount: '$ 1,500',
    percentage: '3.5%',
    percentageColor: 'text-green-500',
  }, {
    title: 'Total Sales',
    amount: '$ 1,500',
    percentage: '3.5%',
    percentageColor: 'text-green-500',
  }
]

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">


        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl text-center items-center m-2 flex align-middle flex-wrap justify-center py-6 sm:px-6 lg:px-8">
            {
              cards.map((card, index) => (
                <Card key={index} {...card} />
              ))
            }
          </div>
        </main>
      </div>
    </>
  )
}
