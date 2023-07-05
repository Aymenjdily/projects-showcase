import React from 'react'
import Image from 'next/image'
import FooterColumn from './FooterColumn'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flexStart footer'>
        <div className='flex flex-col gap-12 w-full'>
            <div className='flex items-start flex-col'>
                <Image
                    src="/logo-purple.svg"
                    width={115}
                    height={38}
                    alt="logo"
                />
                <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                    Flexibble is a website for developers community, sharing creatives projects, grow, and get hired.
                </p>
            </div>
            <div className='flex flex-wrap gap-12'>
                <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />
                <div className='flex-1 flex flex-col gap-4'>
                    <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                    <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
                </div>
                <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
                <div className='flex-1 flex flex-col gap-4'>
                    <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                    <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
                </div>
                <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
            </div>
        </div>
        <div className='flexBetween footer_copyright'>
            <p>
                &copy; 2023 flexibble. All rights Reserved.
            </p>
            <p className='text-gray'>
                <span className='text-black font-semibold'>
                    320
                </span>
                {" "}
                projects submitted
            </p>
        </div>
    </footer>
  )
}

export default Footer