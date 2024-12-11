import React, { useState } from "react";
interface UserDetailsProps {
  user: {
    name: string;
    profile: { age: number; occupation: string };
    contact: { mobile: string; skype: string; email: string };
  };
}
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<"Profile" | "Contact">("Profile");
  const renderProfile = () => (
    <tbody>
      <tr>
        <td style={styles.bodyCell}>{user.profile.age}</td>
        <td style={styles.bodyCell}>{user.profile.occupation}</td>
      </tr>
    </tbody>
  );
  const renderContact = () => (
    <tbody>
      <tr>
        <td style={styles.bodyCell}>{user.contact.mobile}</td>
        <td style={styles.bodyCell}>{user.contact.skype}</td>
        <td style={styles.bodyCell}>{user.contact.email}</td>
      </tr>
    </tbody>
  );
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{user.name}</h3>
      <div style={styles.tabContainer}>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "Profile" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("Profile")}
        >
          Profile
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "Contact" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("Contact")}
        >
          Contact
        </button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            {activeTab === "Profile" ? (
              <>
                <th style={styles.headerCell}>Age</th>
                <th style={styles.headerCell}>Role</th>
              </>
            ) : (
              <>
                <th style={styles.headerCell}>Mobile</th>
                <th style={styles.headerCell}>Skype</th>
                <th style={styles.headerCell}>Email</th>
              </>
            )}
          </tr>
        </thead>
        {activeTab === "Profile" ? renderProfile() : renderContact()}
      </table>
    </div>
  );
};
const styles: any = {
  container: {
    padding: "2rem",
    backgroundColor: "#f7f7f7",
    width: "calc(100vw - 250px)",
    height: "100vh",
    boxSizing: "border-box",
  },
  title: { fontSize: "1.5rem", color: "#333", marginBottom: "1rem" },
  tabContainer: { display: "flex", marginBottom: "1rem" },
  tabButton: {
    padding: "0.7rem 1.5rem",
    fontSize: "1.1rem",
    marginRight: "1rem",
    cursor: "pointer",
    border: "2px solid #0070f3",
    backgroundColor: "#fff",
    color: "#0070f3",
    borderRadius: "4px",
  },
  activeTab: { backgroundColor: "#0070f3", color: "#fff" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "1rem",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    color: "black",
  },
  headerCell: {
    padding: "1rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    textAlign: "left",
    fontWeight: "bold",
  },
  bodyCell: { padding: "1rem" },
  actionButton: {
    margin: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background-color 0.3s",
  },
};
export default UserDetails;
