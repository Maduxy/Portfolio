import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					An able, enthusiastic, skilled, and reliable engineering student seeking a position that reflects experience,
					skills, and personal attributes including dedication, meeting goals, creativity, and the ability to follow
					through. Motivated to learn, grow and excel in all aspect.
					</p>
					<p className={styles.desc}>
					As a frontend developer, I believe in constant learning and adaptability. 
					I enjoy solving complex problems, staying up-to-date with industry trends, and embracing new challenges with enthusiasm. 
					My goal is to make the web a more beautiful and user-friendly place, one project at a time.</p>
				</div>
				<div className={styles.right}>
					<img
						src="../../Images/Profile-img.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;