import { useState, ChangeEvent } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

interface HeaderProps {
  onAssignmentCreate: (title: string) => void;
}

export function Header({ onAssignmentCreate }: HeaderProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreateButtonClick = () => {
    if (inputValue.trim() !== "") {
      onAssignmentCreate(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleCreateButtonClick}
          disabled={inputValue.trim() === ""}
          className={inputValue.trim() === "" ? styles.disabledButton : ""}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
