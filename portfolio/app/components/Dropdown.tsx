import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { setDarkMode, scrollToSection } from '../utils/Handlers'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface DropdownProps {
    sections: string[]
    iconIndex: number
}

export default function Dropdown({ sections, iconIndex }: DropdownProps) {

    let menuItemClassName = "absolute z-10 mt-2 origin-top-right rounded-md shadow-lg customRing bg-defColors-lBG dark:bg-defColors-dBG"

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

    const onSectionClick = (event: any) => {
        event.preventDefault()
        const sectionId = event.target.getAttribute("href")?.substring(1)
        if (iconIndex === 1) {
            handleDarkMode(sectionId)
        } else {
            scrollToSection(sectionId)
        }
    }

    const handleDarkMode = (mode: string) => {
        console.log("dark mode set to = " + mode.toLowerCase())
        if (mode === "System" || mode == undefined) {
            // The user explicitly chose to respect the OS preference
            localStorage.removeItem('theme')
        } else {
            //The user explicitly chose the mode
            localStorage.theme = mode.toLowerCase()
        }
        setDarkMode()
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md pr-[3px] text-sm font-semibold text-defColors-main shadow-sm hover:bg-defColors-lGray dark:hover:bg-defColors-dGray">
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
                                            onClick={onSectionClick}
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