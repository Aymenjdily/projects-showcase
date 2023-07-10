import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'
import { signOut } from 'next-auth/react'
import ProfileMenu from './ProfileMenu'

const Navbar = async () => {
    const session = await getCurrentUser() 

    console.log(session)
    
    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={115}
                        height={43}
                        alt='logo'
                    />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {
                        NavLinks && NavLinks.map((link) => (
                            <Link key={link.key} href={link.href}>
                                {link.text}
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className='flexCenter gap-4'>
                {
                    session?.user ? (
                        <>
                            <ProfileMenu session={session} />
                            <Link href="/create">
                                Share Work
                            </Link>
                        </>
                    ) : 
                    (
                        <AuthProviders />
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar