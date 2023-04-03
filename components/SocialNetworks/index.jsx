import React from 'react';
import cl from 'classnames';

import { AFaTelegram, FiInstagram, SlSocialVkontakte } from "react-icons/ai"
import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss'; 

const socialNetworks = [
	{
		id: 1,
		href: 'https://instagram.com',
		icon: FiInstagram,
	},
	{
		id: 2,
		href: 'https://telegram.org',
		icon: AFaTelegram,
	},
	{
		id: 3,
		href: 'https://vk.com',
		icon: SlSocialVkontakte,
	}
]

const SocialNetwork = ({
	className,
}) => {
	return (
		<ScreenEgg type="left">
		<ul className={cl(className, styles.list)}>
			{socialNetworks.map((socialNetwork) => (
					<li
					key={socialNetwork.id}
					className={styles.listItem}
					>
						<a
							href={socialNetworks.href}
							target="_blank"
							className={styles.listLink}
							rel="noreferrer"
						>icon!!!!
							{/* {React.createElement(
								socialNetwork.icon, 
								{
								color: 'black',
							  size: 50
								}
							)} */}
						</a>
					</li>	
				))}
		</ul>
		</ScreenEgg>
	)
}

export default SocialNetwork