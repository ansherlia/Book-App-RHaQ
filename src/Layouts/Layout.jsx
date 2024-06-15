import styles from "./Layout.module.css";
function Layout({ children }) {
	return (
		<>
			<header className={styles.header}>
				<h1>Book App</h1>
				<p>
					<a href="https://taskman.com">TaskMan</a> | React JS Full Course
				</p>
			</header>
			{children}
			<footer className={styles.footer}>
				<p>
					Developed By Reza With <i className="fa-solid fa-heart-pulse"></i>
				</p>
			</footer>
		</>
	);
}

export default Layout;
