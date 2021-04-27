import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default function SlicemasterPage({ data: { products } }) {
	console.log(products);
	return (
		<>
			<div className="center">
				<Img fluid={products.image.asset.fluid} />
				<h2>
					{" "}
					<span>{products.name}</span>
				</h2>
				<p>{products.description}</p>
			</div>
		</>
	);
}

export const query = graphql`
	query($slug: String!) {
		products: sanityProducts(slug: { current: { eq: $slug } }) {
			name
			id
			description
			image {
				asset {
					fluid(maxWidth: 1000, maxHeight: 750) {
						...GatsbySanityImageFluid
					}
				}
			}
		}
	}
`;
