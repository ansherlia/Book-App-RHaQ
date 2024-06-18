import styles from "./SideBar.module.css";
function SideBar({ data: { image, title } }) {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<p>{title}</p>
		</div>
	);
}

export default SideBar;
