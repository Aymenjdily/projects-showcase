import { ColumnProps } from '@/types/types'
import React from 'react'
import Link from 'next/link'

const FooterColumn = ({
    title, links
} : ColumnProps) => {
  return (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map((link) => (
                <Link href="/" key={link}>
                    {link}
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default FooterColumn