import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className="fixed left-1/2 top-1/2 w-full h-full z-50">
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
