import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';

const ScreenEgg = ({
	className,
	type,
	children
}) => {
	return (
		<div className={cl(
			className,
			styles.ScreenEgg,
			type === 'right' 
			? styles.ScreenEggRight 
			: styles.ScreenEggLeft
		)}>
			{children}
		</div>
	)
}

export default ScreenEgg