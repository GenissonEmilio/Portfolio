import Tilt from 'react-parallax-tilt';
import styles from './NotebookCard.module.css';

function NotebookCard() {
  return (
    <Tilt className={styles.notebookContainer}>
      <div className={styles.notebookWrapper}>
        <img src="/images/notebook.jpg" alt="Notebook" className={styles.notebookImg} />
        <video
          src="/videos/demo.mp4"
          autoPlay
          muted
          loop
          className={styles.notebookVideo}
        />
      </div>
    </Tilt>
  );
}

export default NotebookCard;
