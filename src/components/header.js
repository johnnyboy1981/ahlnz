import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (

  <div id="header-wrapper">
	<div id="header" className="container">
		<div id="logo">
      <h1><a href="#">{siteTitle}</a></h1>
		</div>
		<div id="menu">
			<div>
				<Link to="#" title="">Homepage</Link>			
			</div>
		</div>
	</div>
	</div>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
