export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://host.docker.internal:1337'
export const PUBLIC_API_URL =process.env.NEXT_PUBLIC_API_URL || 'http://host.docker.internal:1337'
export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY || 'pk_test_1BD0CF5FD1A748A8'
export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_wsM8DdfghvqwLFFekyuYcimi'
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