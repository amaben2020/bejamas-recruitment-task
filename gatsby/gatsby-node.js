import path, { resolve } from "path";

async function turnSlicemastersIntoPages({ graphql, actions }) {
	// 1. Query all slicemasters. Slicemasters is our homepage
	const { data } = await graphql(`
		query {
			pagination: allSanityProducts {
				totalCount
				nodes {
					name
					id
					slug {
						current
					}
				}
			}
		}
	`);

	data.pagination.nodes.forEach((pagination) => {
		actions.createPage({
			component: resolve("./src/templates/SliceMasterPage.js"),
			path: `/slicemaster/${pagination.slug.current}`,
			context: {
				name: pagination.products,
				slug: pagination.slug.current,
			},
		});
	});

	data.pagination.nodes.forEach((slicemaster) => {
		actions.createPage({
			component: resolve("./src/pages/slicemasters.js"),
			path: `/slicemasters/${slicemaster.slug.current}`,
			context: {
				name: slicemaster.products,
				slug: slicemaster.slug.current,
			},
		});
	});

	// 3. Figure out how many pages there are based on how many pagination there are, and how many per page! This is easy to read...
	const pageSize = 6;
	const pageCount = Math.ceil(data.pagination.totalCount / pageSize);
	console.log(
		`There are ${data.pagination.totalCount} total products. And we have ${pageCount} pages with ${pageSize} per page`
	);
	// 4. Loop from product 1 to n and create the pages for them
	Array.from({ length: pageCount }).forEach((_, i) => {
		console.log(`Creating page ${i}`);
		actions.createPage({
			path: `/slicemasters/${i + 1}`,
			component: path.resolve("./src/pages/slicemasters.js"),
			// This data is pass to the template when we create it
			context: {
				skip: i * pageSize,
				currentPage: i + 1,
				pageSize,
			},
		});
	});
}

export async function createPages(params) {
	// Create pages dynamically
	// Wait for all promises to be resolved before finishing this function
	await turnSlicemastersIntoPages(params);
}
