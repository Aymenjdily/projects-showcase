"use client"

import { ProjectProps } from '@/types/types'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import FormField from './FormField'
import { categoryFilters } from '@/constants'
import CustomMenu from './CustomMenu'
import CustomButton from './CustomButton'
import { createNewProject, fetchToken } from '@/lib/actions'
import { useRouter } from 'next/navigation'

const ProjectForm = ({ type, session } : ProjectProps) => {

    const router = useRouter()
    
    const [form, setForm] = useState({
        title: '',
        description: '',
        liveSiteUrl: '',
        image: '',
        githubUrl: '',
        category: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleStateChange = (fieldName: string, value:string) => {
        setForm((prev) => ({ ...prev, [fieldName]: value}))
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const file = e.target.files?.[0]

        if(!file) return

        if(!file.type.includes('image')) {
            return alert('Please upload an image file')
        }

        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onload = () => {
            const result = reader.result as string

            handleStateChange('image', result)
        }
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true)

        const { token } = await fetchToken()

        try {
            if (type === "create") {
                await createNewProject(form, session?.user?.id, token)

                router.push("/")
            }
            
            // if (type === "edit") {
            //     await updateProject(form, project?.id as string, token)

            //     router.push("/")
            // }

        } catch (error) {
            alert(`Failed to ${type === "create" ? "create" : "edit"} a project. Try again!`);
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className='flexStart form'
        >
            <div className='flexStart form_image-container'>
                <label htmlFor="poster" className='flexCenter form_image-label'>
                    {!form.image && 'Choose a poster for your project'}
                </label>
                <input id="image" type='file' accept='image/' required={type === 'create'} className='form_image-input' onChange={handleChangeImage} />
                {form.image && (
                    <Image
                        src={form?.image}
                        className='sm:p-10 object-contain z-20'
                        alt='Project poster'
                        fill
                    />
                ) }
            </div>

            <FormField 
                title="title"
                state={form.title}
                placeholder="Flexibble"
                setState={(value) => handleStateChange('title', value)}
            />

            <FormField 
                title="Description"
                state={form.description}
                placeholder="ShowCase and Discover remakable developer projects."
                setState={(value) => handleStateChange('description', value)}
            />

            <FormField 
                type='url'
                title="Website Url"
                state={form.liveSiteUrl}
                placeholder="https://Example.com"
                setState={(value) => handleStateChange('liveSiteUrl', value)}
            />

            <FormField 
                type='url'
                title="GitHub Url"
                state={form.githubUrl}
                placeholder="https://github.com/@your_name"
                setState={(value) => handleStateChange('githubUrl', value)}
            />

            {/* <FormField 
                title="title"
                state={form.title}
                placeholder="Flexibble"
                setState={(value) => handleStateChange('title', value)}
            /> */}

            {/* custom Input Category */}

            <CustomMenu 
                title="Category"
                state={form.category}
                filters={categoryFilters}
                setState={(value) => handleStateChange('category', value)}
            />

            <div className='flexStart w-full'>
                <CustomButton
                    title={isSubmitting ? `${type === 'create' ? 'Creating' : 'Editing'}` : `${type === 'create' ? 'Create' : 'Edit'}` }
                    type="submit"
                    leftIcon={
                        isSubmitting ? "" : "/plus.svg"
                    }
                    isSubmitting={isSubmitting}
                />
            </div>
        </form>
    )
}

export default ProjectForm