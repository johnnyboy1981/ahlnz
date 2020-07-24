import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    


			<div id="banner">
		<div className="container">
			<div className="title">
				<h2>{data.allPrismicPage.edges[0].node.data.page_title.text}</h2>
				<span className="byline">{data.allPrismicPage.edges[0].node.data.page_text_1.text}</span> </div>
			<ul className="actions">
				<li>{/*<AnchorLink to="/#contact-details" title="Contact Us" className="button" stripHash={true}>
              <span>Contact Us</span>
            </AnchorLink>*/}
        </li>
			</ul>
		</div>
	</div>
	<div id="extra" className="container">
		<div className="title">
    <a id="contact-details"></a>
			<h2>Contact Details</h2>
			<span className="byline">Looking to contact us? We can be reached using the following details.</span> </div>
		<div id="three-column">
			<div className="boxA">
				<div className="box"> <span className="fa fa-envelope"></span>
					<p>Email: <a className="underline" href="mailto:info@ahl.nz">info@ahl.nz</a></p>
				</div>
			</div>
			<div className="boxB">
				<div className="box"> <span className="fa fa-phone"></span>
					<p>Phone: <a className="underline" href="tel:021418890">021 418 890</a></p>
				</div>
			</div>
		</div>
	</div>
	

  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allPrismicPage(filter: {data: {page_id: {eq: "home"}}}) {
    edges {
      node {
        id
        data {
          page_id
          page_text_1 {
            html
            text
            raw
          }
          page_text_2 {
            html
            text
            raw
          }
          page_title {
            html
            text
            raw
          }
        }
      }
    }
  }
}
`
