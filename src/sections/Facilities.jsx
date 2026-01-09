import styles from "./Facilities.module.css";

const Facilities = () => {
  return (
    <section className={styles.videoSection}>
      <h2 className={styles.heading}>Message from Our Founder</h2>

      <p className={styles.description}>
        Watch this short video to understand the vision and activities of
        Bachpan Activity Centre.
      </p>

      <div className={styles.videoWrapper}>
        <video className={styles.video} controls>
          <source src="/about-centre.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Facilities;
