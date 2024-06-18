import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./BookCard.module.css";
function BookCard({ data, likedListHandler }) {
	const { image, language, title, author, pages } = data;
	const [like, setLike] = useState(false);
	const likeHandler = () => {
		setLike((like) => !like);
		likedListHandler(data, like);
	};
	return (
		<div className={styles.card}>
			<img src={image} alt={title} />
			<div className={styles.info}>
				<h3>{title}</h3>
				<p>{author}</p>
				<div>
					<span>{language}</span>
					<span>{pages} pages</span>
				</div>
			</div>
			<button onClick={likeHandler}>
				<AiFillHeart color={like ? "red" : "lightblue"} fontSize="1.9rem" />
			</button>
		</div>
	);
}

export default BookCard;
