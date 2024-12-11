import React from "react";

interface UserListProps {
  userDetails: { id: number; name: string };
}

const ActionPannel: React.FC<UserListProps> = ({ userDetails }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Action</h3>
      <button style={styles.listItem}>Action 1</button>
      <button style={styles.listItem}>Action 2</button>
    </div>
  );
};

const styles = {
  container: {
    width: "20%",
    height: "100vh",
    backgroundColor: "rgb(0 86 186)",
    color: "#ecf0f1",
    padding: "1rem",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    borderBottom: "1px solid #ecf0f1",
    paddingBottom: "0.5rem",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "0.75rem 1rem",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginBottom: "0.5rem",
    backgroundColor: "rgb(94 164 235)",
    fontWeight: "bold",
    width: "100%",
    border: "2px solid #0070f3",
  },
};

export default ActionPannel;
