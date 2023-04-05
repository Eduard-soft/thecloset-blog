import React from 'react';
import cl from 'classnames';
import style from './index.module.scss';

const Post = ({
	className,
	image,
	title,
	description,
	slug
}) => {
	console.log(title)
	return (
		<div>{title}</div>
	)
}

export default Post