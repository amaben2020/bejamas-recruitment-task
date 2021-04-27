import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const featured = ({ data }) => {
  console.log(data.products.nodes);
  const products = data.products.nodess;
  const FeaturedProduct = styled.div`
    height: auto;
  `;
  return (
    <>
      <FeaturedProduct>
        <p>
          {' '}
          {products.map((product) => (
            <div>
              <p>{product.name} </p>

              <Img
                style={{ height: '50vh' }}
                fluid={product.image.asset.fluid}
                alt={product.name}
                src={product.image}
              />
            </div>
          ))}{' '}
        </p>
      </FeaturedProduct>
    </>
  );
};

export default featured;

export const query = graphql`
  query MyQuery2 {
    products: allSanityProducts(filter: { featured: { eq: true } }) {
      nodes {
        featured
        name
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
