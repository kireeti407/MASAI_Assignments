import React from "react";
import Parent from "./components/propdrilling/Parent";

function App() {
  // const user = "Kireeti";
  // return <Parent user={user} />;

  <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
}
export default App;