import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Post = ({ data }) => {
	const post = this.props.data.wordpressPost;

	return (
		<Fragment>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</Fragment>
	);
};

Post.propTypes = {
	data: PropTypes.object.isRequired,
	edges: PropTypes.array,
};

export default Post;

export const postQuery = graphql`
	query($id: String!) {
		wordpressPost(id: { eq: $id }) {
			title
			content
		}
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
