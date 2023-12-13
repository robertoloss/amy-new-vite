import { client } from '../../sanity/lib/client.ts';
import imageUrlBuilder from '@sanity/image-url'
import { Picture } from './sanity_types';


const builder = imageUrlBuilder(client) 
export function urlFor(source: Picture["image"] | undefined) {
	if (source) {
			return builder.image(source)
	}
} 

export async function getWebsiteInfo() {
  return await client.fetch(
    `*[_type == "website"]`,
  )
}

export async function getPreviews() {
	return await client.fetch(
		`*[_type == "project"] | order(rank asc) { preview }`
	)
}

export async function getProject(slug:string) {
	return await client.fetch(
		`*[_type == "project" && preview.slug == "${slug}"]`
	)
}
