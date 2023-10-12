import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface DropdownProps {
    sections: string[]
    iconIndex: number
}

export default function Dropdown({ sections, iconIndex }: DropdownProps) {

    let menuItemClassName = "absolute z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"

    const checkDropdownIcon = (iconIndex: number) => {
        switch (iconIndex) {
            case 0:
                menuItemClassName += " left-0 w-24"
                return <Bars3Icon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

            case 1:
                menuItemClassName += " right-0 w-20"
                return <MoonIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

            default:
                menuItemClassName += " left-0 w-24"
                return <Bars3Icon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        }
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {checkDropdownIcon(iconIndex)}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={menuItemClassName}>
                    <div className="py-1">
                        {
                            sections.map((section, index) => (
                                <Menu.Item key={index}>
                                    {({ active }) => (
                                        <a
                                            href={`#${section}`}
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            {section}
                                        </a>
                                    )}
                                </Menu.Item>
                            ))
                        }
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}