import styles from './Time.module.scss';

const Time = props => {
  const timeVal = {
    min: ("0" + Math.floor(props.time / 60000) % 60).slice(-2),
    sec: ("0" + Math.floor(props.time / 1000) % 60).slice(-2),
    ms: ("" + ((props.time / 10) % 100)).slice(-2),
  }
  return (<span className={styles.timer}>{timeVal.min}:{timeVal.sec}.{timeVal.ms}</span>)
};

export default Time;