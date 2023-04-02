import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

const Title = ({
	className,
	children
}) => {
	return (
		<h2
			className={cl(className, styles.section)}>{ children}</h2>
	)
}

export default Title