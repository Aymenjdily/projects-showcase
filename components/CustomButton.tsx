import { CustomButtonProps } from '@/types/types'
import React from 'react'
import Image from 'next/image'

const CustomButton = ({ title, leftIcon, rightIcon, handleClick, isSubmitting, type, bgColor, textColor } : CustomButtonProps) => {
  return (
    <button
        type={type || 'button'}
        disabled={isSubmitting}
        className={`flexCenter gap-3 px-4 py-3 ${textColor ? textColor : 'text-white'} ${isSubmitting ? 'bg-black/50' : bgColor ? bgColor : 'bg-primary-purple'} rounded-xl text-sm font-medium max-md:w-full`}
        onClick={handleClick}
    >
        {leftIcon && 
            <Image 
                src={leftIcon}
                width={14}
                height={14}
                alt="icon"
            />
        }
        {title}
        {rightIcon &&
            <Image 
                src={rightIcon}
                width={14}
                height={14}
                alt="icon"
            />
        }
    </button>
  )
}

export default CustomButton