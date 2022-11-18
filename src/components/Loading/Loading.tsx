import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className="flex justify-center">
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
