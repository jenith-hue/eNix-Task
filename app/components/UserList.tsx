import React from "react";

interface UserListProps {
  users: { id: number; name: string }[];
  onSelectUser: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSelectUser }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>User List</h3>
      <ul style={styles.list}>
        {users.map((user) => (
          <li
            key={user.id}
            style={styles.listItem}
            onClick={() => onSelectUser(user.id)}
          >
            {user.name}
          </li>
        ))}
      </ul>
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
    fontWeight: "bold"
  },
};

export default UserList;
