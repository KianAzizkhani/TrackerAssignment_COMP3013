import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

interface Assignment {
  title: string;
  completed: boolean;
}

function App() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const handleAssignmentCreate = (title: string) => {
    setAssignments([...assignments, { title, completed: false }]);
  };

  const handleAssignmentDelete = (index: number) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);
  };

  const handleToggleCompleted = (index: number) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].completed = !updatedAssignments[index].completed;
    setAssignments(updatedAssignments);
  };

  return (
    <>
      <Header onAssignmentCreate={handleAssignmentCreate} />
      <Assignments assignments={assignments} onDelete={handleAssignmentDelete} onToggleCompleted={handleToggleCompleted} />
    </>
  );
}

export default App;