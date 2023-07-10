"use client"

import React,{ useState, useEffect } from 'react'
import { getProviders, signIn } from 'next-auth/react'
import { Provider, Providers } from '@/types/types'

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)

  console.log(providers)

  useEffect(() => {
    const fetchProviders = async () => {
      const res:any = await getProviders()

      setProviders(res)
    }

    fetchProviders()
  }, [])
  

  if(providers){
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button
            key={i}
            onClick={() => signIn(provider?.id)}
          >
            {provider.id}
          </button>
        ))}
      </div>
    )
  }
}

export default AuthProviders