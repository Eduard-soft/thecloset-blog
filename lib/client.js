import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const clientConfig = {
	projectId: 'beaje1mv',
	dataset: 'production'
}

export const client = sanityClient({
	projectId: clientConfig.projectId,
	dataset: clientConfig.dataset,
	apiVersion: '2023-04-03',
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	useCdn: true,
	ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);