import { IoSearchSharp } from "react-icons/io5";
import styles from "./SearchBox.module.css";
function SearchBox({ setSearch, search, searchHandler }) {
	return (
		<div className={styles.contain}>
			<input 
				type="text"
				placeholder="Search  Title"
				value={search}
				onChange={(e) => setSearch(e.target.value.toLowerCase())}
			/>
			<button onClick={searchHandler} className={styles.button}>
				<IoSearchSharp />
			</button>
		</div>
	);
}

export default SearchBox;
