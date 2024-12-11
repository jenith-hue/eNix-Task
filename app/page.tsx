"use client";
import { useState, useEffect } from 'react'
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import ActionPannel from './components/ActionPannel';
import { fetchUsers, fetchUserDetails } from "./data/fakeAPI";

export default function Home() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    fetchUsers().then((fetchedUsers) => {
      setUsers(fetchedUsers);
      if (fetchedUsers.length > 0) {
        setUserDetails({...fetchedUsers[0]});
      }
    });
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      fetchUserDetails(selectedUserId).then(setUserDetails);
    }
  }, [selectedUserId]);

  return (
    <div style={styles.mainContainer}>
      <UserList users={users} onSelectUser={setSelectedUserId} />
      {userDetails ? (
        <UserDetails user={userDetails} />
      ) : (
        <div style={styles.placeholder}>Select a user to see details.</div>
      )}
      {userDetails ? <ActionPannel userDetails={userDetails} /> : null}
    </div>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f0f0f0",
    overflow: "hidden",
  },
  placeholder: {
    padding: "2rem",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.25rem",
    color: "#555",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
}