import { Fragment, useState, useEffect, useRef } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { setDarkMode, scrollToSection } from '../utils/Handlers'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

interface DropdownProps {
    sections: string[]
    iconIndex: number
}

export default function Dropdown({ sections, iconIndex }: DropdownProps) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState(null);
    const [darkModeIcon, setDarkModeIcon] = useState(null);
    const [localMode, setLocalMode] = useState("");
    const dropdownRef = useRef(null);

    let menuItemClassName = "absolute z-10 mt-2 origin-top-right rounded-md shadow-lg customRing bg-defColors-lBG dark:bg-defColors-dBG"

    const checkMenuIcon = () => {
        let tempIcon: any = null
        if (isMenuOpen) {
            tempIcon = <XMarkIcon className="-mr-1 h-9 w-9 text-defColors-main" aria-hidden="true" />
        } else {
            tempIcon = <Bars3Icon className="-mr-1 h-9 w-9" aria-hidden="true" />
        }
        setMenuIcon(tempIcon)
    }
    const checkDarkModeIcon = () => {
        let tempIcon: any = null
        if ((localMode === "System" || localMode == "") && !('theme' in localStorage)) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                tempIcon = <MoonIcon className="-mr-1 h-9 w-9 text-defColors-lBG" aria-hidden="true" />
            } else {
                tempIcon = <SunIcon className="-mr-1 h-9 w-9 text-defColors-dBG" aria-hidden="true" />
            }
        } else if (localMode === "Light" || localStorage.theme !== 'dark') {
            tempIcon = <SunIcon className="-mr-1 h-9 w-9 text-defColors-main" aria-hidden="true" />
        } else {
            tempIcon = <MoonIcon className="-mr-1 h-9 w-9 text-defColors-main" aria-hidden="true" />
        }
        setDarkModeIcon(tempIcon)
    }

    const onMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const setDropdownsInitialState = (iconIndex: number) => {
        switch (iconIndex) {
            case 0:
                menuItemClassName += " left-0 w-24"
                break;
            case 1:
                menuItemClassName += " right-0 w-20"
                break;

            default:
                menuItemClassName += " left-0 w-24"
                break;
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
        if (mode === "System" || mode == undefined) {
            // The user explicitly chose to respect the OS preference
            localStorage.removeItem('theme')
        } else {
            //The user explicitly chose the mode
            localStorage.theme = mode.toLowerCase()
        }
        setDarkMode()
        setLocalMode(mode)
    }

    setDropdownsInitialState(iconIndex)

    useEffect(() => {
        checkMenuIcon()
    }, [isMenuOpen]);

    useEffect(() => {
        checkDarkModeIcon()
    }, [localMode]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const curr: any = dropdownRef.current
            if (dropdownRef.current && !curr.contains(event.target as EventTarget)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div ref={dropdownRef} className="dropdown">
                <Menu.Button className="inline-flex w-full justify-center rounded-md pr-[3px] text-sm font-semibold shadow-sm navBarItemsHover"
                    onClick={onMenuClick}
                >
                    {iconIndex == 0 ? menuIcon : darkModeIcon}
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