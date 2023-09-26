import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Maduabuchi.</h1>
			<h1 className={styles.heading_2}>I build things for the web.</h1>
			<p className={styles.desc}>
			A passionate frontend developer with a creative flair for designing and building captivating web experiences. 
			With a strong foundation in HTML, CSS, and JavaScript,
			 I bring websites to life by combining eye-catching designs with seamless functionality.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}
 
export default Home;