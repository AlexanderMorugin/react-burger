import { motion } from "framer-motion";
import styles from "./feed-counts.module.css";
import { FC } from 'react';
import { AnimatedDoneList, AnimatedPrepareList, AnimatedTextDone, AnimatedTextPrepare, AnimatedTextTotal, AnimatedTotal, AnimatedTextToday, AnimatedToday } from "./animation";

interface IFeedCounts {
  doneList: Array<number>;
  preparingList: Array<number>;
  total: number;
  totalToday: number;
}

export const FeedCounts: FC<IFeedCounts> = ({ doneList, preparingList, total, totalToday }) => {
  return (
    <div className={styles.counts_content}>
      <div className={styles.counts_top}>
        <div className={styles.counts_block}>
          <AnimatedTextDone>
            Готовы:
          </AnimatedTextDone>
          <AnimatedDoneList>
            {doneList.map((item, index) => {
              return (
                <li className={styles.counts_active} key={index}>
                  {item}
                </li>
              );
            })}
          </AnimatedDoneList>
        </div>
        <div className={styles.counts_block}>
          <AnimatedTextPrepare>
            В работе:
          </AnimatedTextPrepare>
          <AnimatedPrepareList>
            {preparingList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </AnimatedPrepareList>
        </div>
      </div>
      <div className={styles.counts_middle}>
        <AnimatedTextTotal>
          Выполнено за все время:
        </AnimatedTextTotal>
        <AnimatedTotal>
          {total}
        </AnimatedTotal>
      </div>
      <div className={styles.counts_middle}>
        <AnimatedTextToday>
          Выполнено за сегодня:
        </AnimatedTextToday>
        <AnimatedToday>
          {totalToday}
        </AnimatedToday>
      </div>
    </div>
  );
};
