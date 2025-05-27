import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

function Settings() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
  };

  return (
    <div>
      <h2>Update User Info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;
