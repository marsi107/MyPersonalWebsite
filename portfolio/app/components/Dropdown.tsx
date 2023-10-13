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

    let menuItemClassName = "absolute z-10 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none ring-defColors-dBG dark:ring-slate-800 bg-defColors-lBG dark:bg-defColors-dBG"

    const checkDropdownIcon = (iconIndex: number) => {
        switch (iconIndex) {
            case 0:
                menuItemClassName += " left-0 w-24"
                return <Bars3Icon className="-mr-1 h-9 w-9 text-defColors-main" aria-hidden="true" />

            case 1:
                menuItemClassName += " right-0 w-20"
                return <MoonIcon className="-mr-1 h-9 w-9 text-defColors-main" aria-hidden="true" />

            default:
                menuItemClassName += " left-0 w-24"
                return <Bars3Icon className="-mr-1 h-9 w-9 text-defColors-main" aria-hidden="true" />
        }
    }

    const toggleDarkMode = () => {
        console.log("dark mode toggled")
        localStorage.theme = 'dark'
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        //// Whenever the user explicitly chooses light mode
        //localStorage.theme = 'light'
        //
        //// Whenever the user explicitly chooses dark mode
        //localStorage.theme = 'dark'
        //
        //// Whenever the user explicitly chooses to respect the OS preference
        //localStorage.removeItem('theme')
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button onClick={toggleDarkMode} className="inline-flex w-full justify-center rounded-md pr-[3px] text-sm font-semibold text-defColors-main shadow-sm hover:bg-defColors-lGray dark:hover:bg-defColors-dGray">
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
                                                active ? 'text-defColors-main bg-defColors-lGray dark:bg-defColors-dGray' : 'text-defColors-dBG dark:text-defColors-lBG',
                                                'block px-4 py-2 text-sm rounded-md'
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