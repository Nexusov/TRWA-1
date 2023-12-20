/* eslint-disable react/prop-types */

import styles from './Error.module.css'

const Error = ({ error }) => {
	return (
		<div className={styles.error}>
			<p>{error}</p>
		</div>
	);
};

export default Error;
