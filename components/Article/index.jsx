import React from 'react';
import cl from 'classnames';
import style from './index.module.scss';

const Article = ({
	className,
	children
}) => {
	return (
		<article
		className={cl(className, style.article)}
		>
			{children}
			</article>
	)
}

export default Article