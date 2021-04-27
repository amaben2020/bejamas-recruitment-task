import PriceInput from "../components/PriceInput";

export default {
	name: "products",
	title: "Products",
	type: "document",

	fields: [
		{
			name: "name",
			title: "Product Name",
			type: "string",
			description: "Name of product",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 100,
			},
		},
		{
			name: "image",
			title: "image",
			type: "image",
			description: "Product imaage",
			options: {
				hotspot: "true",
			},
		},
		{
			name: "currency",
			title: "Currency",
			type: "string",
			description: "Currency of product",
		},
		{
			name: "bestseller",
			title: "Best Seller",
			type: "boolean",
			description: "Bestselling product",
			options: {
				layout: "checkbox",
			},
		},

		{
			name: "price",
			title: "Price",
			type: "number",
			description: "Bestselling product",
			validation: (Rule) => Rule.min(1000),
			inputComponent: PriceInput,
		},
		{
			name: "featured",
			title: "Featured",
			type: "boolean",
			description: "Featured product",
			options: {
				layout: "checkbox",
			},
		},
		{
			name: "details",
			title: "Product Details",
			type: "boolean",
			description: "Product details",
			options: {
				layout: "checkbox",
			},
		},
		{
			name: "category",
			title: "Category",
			type: "string",
			description: "Product category",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
			description: "Product description",
		},
		{
			name: "dimensions",
			title: "Dimensions Width",
			type: "number",
			description: "Width",
		},
		{
			name: "dimensions2",
			title: "Dimensions Height",
			type: "number",
			description: "Width",
		},
		{
			name: "size",
			title: "Size",
			type: "number",
			description: "Size",
		},
		{
			name: "recommendations",
			title: "Recommendations",
			type: "boolean",
			description: "Product Recommendations",
            options: {
				layout: "checkbox",
			},
		},
	      
	],
   
};
