import { NextResponse } from "next/server"
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
});

export async function GET() {
    return NextResponse.json(
        {message: 'Uploaded Done'},
        {status:200}
    )
}

export async function POST(req: Request){
    const { path } = await req.json()

    if(!path){
        return NextResponse.json(
            {message: 'Image path is required'},
            {status:400}
        )
    }

    try {
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            transformation: [
                {
                    width: 1000,
                    height: 752,
                    crop: 'scale'
                }
            ]
        }

        const result = cloudinary.uploader.upload(path, options)
        
        return NextResponse.json(result, {
            status:200
        })
    } catch (error) {
        return NextResponse.json(
            {
                message: error
            }
            , {
            status:200
        })
    }
}