import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';

const Homepage = ({ data }) => {
	return (
		<Fragment>
			<div>
				<h1>Pages</h1>
				{data.allWordpressPage.edges.map(({ node }) => (
					<div key={node.slug}>
						<Link to={node.slug}>
							<h2>{node.title}</h2>
						</Link>
						<h3 dangerouslySetInnerHTML={{ __html: node.excerpt }} />
					</div>
				))}
			</div>

			<h1>Posts</h1>
			{data.allWordpressPost.edges.map(({ node }) => (
				<div key={node.slug}>
					<Link to={node.slug}>
						<h2>{node.title}</h2>
					</Link>
					<h3 dangerouslySetInnerHTML={{ __html: node.excerpt }} />
				</div>
			))}
		</Fragment>
	);
};

export default Homepage;

export const pageQuery = graphql`
	query {
		allWordpressPage {
			edges {
				node {
					id
					title
					excerpt
					slug
				}
			}
		}
		allWordpressPost {
			edges {
				node {
					title
					excerpt
					slug
				}
			}
		}
	}
`;
