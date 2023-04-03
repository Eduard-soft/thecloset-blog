import sanityClient from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

export const clientConfig = {
	projectId: 'beaje1mv',
	dataset: 'production'
}

export const client = sanityClient({
	projectId: 'your-project-id',
	dataset: 'bikeshop',
	apiVersion: '2023-04-03',
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	useCdn: true,
	ignoreBrowserTokenWarning: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);