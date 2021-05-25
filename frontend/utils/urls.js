export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://172.20.0.2:1337'
export const PUBLIC_API_URL =process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

/**
 * Given the image return a url
 * Works for local and deployed strapi
 * @param {any} image 
 * @returns 
 */

export const fromImageToUrl = (image) => {

    if (!image)  {
        return "/vercel.svg"
    }

    if (image.url.indexOf("/") === 0) {
        return `${PUBLIC_API_URL}${image.url}`
    }

    return image.url
}