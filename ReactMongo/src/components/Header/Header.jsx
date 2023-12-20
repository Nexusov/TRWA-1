import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.navList}>
					<li>
						<Link to='/'>Главная</Link>
					</li>
					<li>
						<Link to='/add'>Добавить</Link>
					</li>
					<li>
						<Link to='/about'>О проекте</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
