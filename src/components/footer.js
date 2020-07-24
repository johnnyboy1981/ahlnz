import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  
  <div id="copyright" className="container">
	<p>&copy; Aldridge Holdings Limited. | All Rights Reserved | Design by <a href="https://rockymountainweb.ca" rel="nofollow">Rocky Mountain Web</a>.</p>
</div>
  
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
