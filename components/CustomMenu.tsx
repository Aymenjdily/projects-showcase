"use client"

import React,{ Fragment } from 'react'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import { CustomFieldProps } from '@/types/types'

const CustomMenu = (
    {
        title, state, filters, setState
    } : CustomFieldProps
) => {
  return (
    <div className='flexStart flex-col w-full gap-7 relative'>
        <label htmlFor={title} className='w-full text-gray-100'></label>
        <Menu
            as="div"
            className="self-start relative"
        >
            <div>
                <Menu.Button className="flexCenter custom_menu-btn">
                    {state || 'Select a Category'}
                    <Image
                        src="/arrow-down.svg"
                        width={10}
                        height={5}
                        alt="down"
                    />
                </Menu.Button>
            </div>
            <Menu.Items className="flexStart custom_menu-items">
                {
                    filters && filters.map((item) => (
                        <Menu.Item
                            key={item}
                        >
                            <button
                                type='button'
                                value={item}
                                className='custom_menu-item'
                                onClick={(e) => setState(e.currentTarget.value)}
                            >
                                {item}
                            </button>
                        </Menu.Item>
                    ))
                }
            </Menu.Items>
        </Menu>
    </div>
  )
}

export default CustomMenu