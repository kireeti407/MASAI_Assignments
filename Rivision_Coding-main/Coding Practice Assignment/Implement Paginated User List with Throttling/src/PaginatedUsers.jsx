import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const PaginatedUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const throttleRef = useRef(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const allUsers = res.data;
      setTotalPages(Math.ceil(allUsers.length / usersPerPage));

      const startIndex = (currentPage - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      setUsers(allUsers.slice(startIndex, endIndex));
    } catch (err) {
      console.error("Error fetching users", err);
    }
  };

  // Throttled page change
  const handlePageChange = (pageNumber) => {
    if (throttleRef.current) return;
    throttleRef.current = true;

    setTimeout(() => {
      throttleRef.current = false;
    }, 500); // 500ms throttle delay

    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Paginated Users</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ margin: "5px 0" }}>
            {user.name}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{
              margin: "5px",
              padding: "6px 12px",
              backgroundColor: currentPage === index + 1 ? "#4CAF50" : "#ddd",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedUsers;
