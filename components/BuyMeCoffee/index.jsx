import React from 'react';
import cl from 'classnames';
import styles from './index.module.scss';
import ScreenEgg from '../ScreenEgg';

const BuyMiCoffee = ({
	className,
}) => {
	return (
		<ScreenEgg type="right">
			<div className={cl(styles.buyMiCoffee, className)}>
				<a href='https://buy.stripe.com/5kA7sL9574SG7xCfZ3'
				target="_blank"
				className={styles.buyMiCoffeeButton}
				rel="noreferrer"
				>
					Buy me a coffe...
				</a>
			</div>
		</ScreenEgg>
	)
}

export default BuyMiCoffee