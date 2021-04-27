import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const ProductGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;


export default function SingleProductPage({data: {products}}){
    console.log(products)
    return  (
    <ProductGrid>
        <Img fluid={products.image.asset.fluid}/>
        <div>
            <h2>{products.name}</h2>
            <h4>{products.category}</h4>
                  </div>
    </ProductGrid>)
}

//dynamic based on the passed in slug via context in gatsby node
export const query = graphql`
    query($slug: String!) {
        products: sanityProducts(slug: {
            current: {eq: $slug}}){
            name
            id
            image {
                asset{
                    fluid(maxWidth: 800){
                        ...GatsbySanityImageFluid
                    }
                }
            }
         }
    }
`;