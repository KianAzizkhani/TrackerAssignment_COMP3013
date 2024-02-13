import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface AssignmentProps {
  assignments: { title: string; completed: boolean }[];
  onDelete: (index: number) => void;
  onToggleCompleted: (index: number) => void;
}

export function Assignments({ assignments, onDelete, onToggleCompleted }: AssignmentProps) {
  const createdAssignmentsCount = assignments.length;
  const completedAssignmentsCount = assignments.filter(
    (assignment) => assignment.completed
  ).length;

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createdAssignmentsCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completedAssignmentsCount} of {createdAssignmentsCount}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            completed={assignment.completed}
            onDelete={() => onDelete(index)}
            onToggleCompleted={() => onToggleCompleted(index)}
          />
        ))}
      </div>
    </section>
  );
}