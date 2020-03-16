import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
	const StaticPage = data.wordpressPage;

	return (
		<Fragment>
			<h1>{StaticPage.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: StaticPage.content }} />
		</Fragment>
	);
};

export default Page;

export const pageQuery = graphql`
	query($id: String!) {
		wordpressPage(id: { eq: $id }) {
			title
			content
		}
		site {
			id
			siteMetadata {
				title
				description
			}
		}
	}
`;
