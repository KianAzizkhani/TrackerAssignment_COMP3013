import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheckCircleFill } from "react-icons/bs";

interface AssignmentProps {
  title: string;
  completed: boolean;
  onDelete: () => void;
  onToggleCompleted: () => void;
}

export function Assignment({ title, completed, onDelete, onToggleCompleted }: AssignmentProps) {
  return (
    <div className={`${styles.assignment} ${completed ? styles.completed : ''}`}>
      <button className={styles.checkContainer} onClick={onToggleCompleted}>
        {completed ? (
          <BsCheckCircleFill size={20} />
        ) : (
          <div className={styles.emptyCheckCircle} />
        )}
      </button>

      <p className={completed ? styles.textCompleted : ''}>{title}</p>

      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}