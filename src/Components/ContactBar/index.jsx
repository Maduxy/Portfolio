import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/maduabuchi-onyejiaka-512023197/" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/Maduxy" target="_blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="https://instagram.com/o_da_vid_" target="_blank" className={styles.icon} >
					<InstagramIcon  />
				</a>
				<a href="https://twitter.com/Maduxy1" target="_blank" className={styles.icon} >
					<TwitterIcon  />
				</a>
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="onyejiakamadu@gmail.com" className={styles.email}>
					Onyejiakamadu@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;