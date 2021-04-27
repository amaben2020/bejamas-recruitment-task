import dotenv from "dotenv";

dotenv.config({ path: " .env" });
export default {
	siteMetadata: {
		title: "Bejamas",
		siteUrl: `https://behamas.task`,
		description: "Best JAMstack company",
	},
	plugins: [
		"gatsby-plugin-styled-components",

		{
			resolve: "gatsby-source-sanity",
			options: {
				projectId: "ja4xaxfc",
				dataset: "production",
				watchMode: true,
				token: process.env.SANITY_TOKEN,
			},
		},
	],
};
