import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Pagination from "../components/Pagination";
import useCartInfo from "../utils/useCartInfo";
import DropDown from "../components/DropDown";
import CustomButton from "../components/CustomButton";
import "../styles/element.css";
import "../styles/featuredDescription.css";
import "../styles/showHideBtn.css";
import "../styles/buttonstyle.css";

const SlicemasterGrid = styled.div`
	display: grid;
	grid-gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	width: 70vw;
`;

const SlicemasterFlex = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 741px) {
		display: flex;
		flex-direction: column;
		bottom: 135.88px;
	}
`;

const SlicemasterStyles = styled.div`
	a {
		text-decoration: none;
	}
	.gatsby-image-wrapper {
		height: 400px;
	}
`;

const FeaturedDesc = styled.div`
	@media screen and (max-width: 1124px) {
		margin-bottom: 1em;
	}
`;

export default function SlicemastersPage({ data, pageContext }) {
	const products = data.products.nodes;

	const { addToOrder } = useCartInfo({ products });

	const featuredProduct = data.featured.nodes;

	const sortedProductsPrice = data.sortedProductsPrice.nodes;

	const sortedProductsByName = data.sortedProductsByName.nodes;

	const recommendations = data.recommendations.nodes;

	return (
		<>
			<div>
				{" "}
				{featuredProduct.map((product) => (
					<div>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<div>
								<p style={{ fontWeight: 900 }}>{product.name} </p>{" "}
							</div>
							<div>
								{" "}
								<CustomButton
									className="custom-buttonn"
									inverted
									onClick={() => {
										addToOrder({
											id: product.id,
											price: product.price,
											name: product.name,
											image: product.image.asset.fluid,
										});
									}}
								>
									Add To Cart
								</CustomButton>
							</div>
						</div>
						<Img
							style={{ height: "50vh", position: "relative" }}
							fluid={product.image.asset.fluid}
							alt={product.name}
							src={product.image}
						/>

						<div className="element">
							{" "}
							{product.featured && (
								<span style={{ fontWeight: 700 }}>Photo of the day </span>
							)}{" "}
						</div>

						<div className="featuredDesc">
							<div className="featuredDesc1">
								<div style={{ padding: 20 }}>
									<h2
										style={{
											paddingBottom: 20,
											color: "black",
											fontWeight: 800,
										}}
									>
										{" "}
										About the {product.name}
									</h2>
									<h3 style={{ fontWeight: 600, margin: "0.2em" }}>
										{" "}
										{product.category}{" "}
									</h3>
									<h5
										style={{
											fontSize: "0.9em",
											lineHeight: "1.5em",
											color: "gray",
										}}
									>
										{" "}
										{product.description}{" "}
									</h5>
								</div>
							</div>
							<div className="recommended">
								<div className="recommended-images" style={{ width: "40vw" }}>
									<h2>People also buy</h2>
									{recommendations.map((recommendation, index) => (
										<div key={index}>
											<div>
												<Img
													style={{
														maxWidth: "7vw",
														height: "27vh",
														margin: "1rem",
													}}
													imgStyle={{ objectFit: "contain" }}
													fluid={recommendation.image.asset.fluid}
												/>
											</div>
										</div>
									))}
									<div>
										<h2>Details</h2>
										{recommendations.map((recommendation, index) => (
											<div>
												{recommendation.size && (
													<p> Size: {recommendation.size} mb</p>
												)}
												{recommendation.dimensions ? (
													<div>
														<span>
															{recommendation.dimensions} X{" "}
															{recommendation.dimensions2}pixel
														</span>
													</div>
												) : (
													""
												)}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}{" "}
			</div>

			<div className="photography-section" style={{ marginLeft: "4vw" }}>
				<div
					style={{
						paddingBottom: "2em",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<h2>
						Photography /<span style={{ color: "gray" }}> Premium Photos </span>
					</h2>
					<h2 className="sort-by"> Sort By </h2>
				</div>
				<SlicemasterFlex>
					<div className="filter-component">FILTER component</div>
					<SlicemasterGrid>
						{products.map((product) => (
							<SlicemasterStyles key={product.id}>
								<Link to={`/slicemaster/${product.slug.current}`} />
								<div className="cart-item-hover">
									<div
										style={{
											position: "absolute",
											zIndex: 6,
											background: "white",
											fontWeight: 700,
											fontSize: "1.2em",
											paddingLeft: 3,
										}}
									>
										{" "}
										{product.bestseller && "Best Seller"} {"  "}
									</div>
									<Img fluid={product.image.asset.fluid} />
									<CustomButton
										onClick={() =>
											addToOrder({
												id: product.id,
												price: product.price,
												name: product.name,
												image: product.image.asset.fluid,
											})
										}
									>
										Add To Cart
									</CustomButton>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											lineHeight: "2px",
										}}
									>
										<p style={{ fontWeight: 600 }}>{product.category} </p>
										<p
											style={{
												fontWeight: 800,
												fontSize: "1.2em",
											}}
										>
											{" "}
											{product.name}{" "}
										</p>
										<p style={{ fontWeight: 600 }}>
											{" "}
											${""}
											{product.price.toFixed(2).toLocaleString("en") / 100}{" "}
										</p>
									</div>
								</div>
								{/* <p className="description">{product.description}</p> */}
							</SlicemasterStyles>
						))}
						<div style={{ width: "66vw" }}>
							<Pagination
								pageSize={6}
								totalCount={data.products.totalCount}
								currentPage={pageContext.currentPage || 1}
								skip={pageContext.skip}
								base="/slicemasters"
							/>
						</div>
					</SlicemasterGrid>
				</SlicemasterFlex>
			</div>
		</>
	);
}

export const query = graphql`
	query($skip: Int = 0, $pageSize: Int = 6) {
		products: allSanityProducts(limit: $pageSize, skip: $skip) {
			totalCount
			nodes {
				name
				id
				price
				featured
				category
				recommendations
				bestseller
				slug {
					current
				}
				description
				image {
					asset {
						fluid(maxWidth: 410) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}

		featured: allSanityProducts(filter: { featured: { eq: true } }) {
			nodes {
				featured
				name
				category
				description
				price
				image {
					asset {
						fixed(width: 200, height: 200) {
							...GatsbySanityImageFixed
						}
						fluid(maxWidth: 400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
		sortedProductsPrice: allSanityProducts(sort: { fields: price }) {
			edges {
				node {
					id
					name
					price
				}
			}
		}
		sortedProductsByName: allSanityProducts(sort: { fields: name }) {
			edges {
				node {
					id
					name
					price
				}
			}
		}
		recommendations: allSanityProducts(
			filter: { recommendations: { eq: true } }
		) {
			nodes {
				description
				dimensions
				dimensions2
				size
				image {
					asset {
						fixed(width: 200, height: 200) {
							...GatsbySanityImageFixed
						}
						fluid(maxWidth: 400) {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`;
