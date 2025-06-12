import React, { createContext, useContext, useState, useMemo } from "react";

const groceryStore = createContext();

function Context() {
  const [user, setUser] = useState({ name: "Scaler", age: 23 });

  // Memoize the value to avoid triggering re-renders unnecessarily
  const value = useMemo(() => ({ user, setUser }), [user]);

  console.log("Context is rendered");

  return (
    <div>
      <h3>Prop Drilling</h3>
      <div>⬇️</div>
      <groceryStore.Provider value={value}>
        <Grandparent />
        <FarAwayRelative />
      </groceryStore.Provider>
    </div>
  );
}

const Grandparent = React.memo(function Grandparent() {
    console.log("Grandparent is rendered");
    return (
      <>
        <p>Parent</p>
        <div>⬇️</div>
        <Parent />
      </>
    );
  });
  
  const Parent = React.memo(function Parent() {
    console.log("Parent is rendered");
    return (
      <>
        <p>Child</p>
        <div>⬇️</div>
        <Child />
      </>
    );
  });

  function FarAwayRelative() {
    const { user } = useContext(groceryStore);
    console.log("FarAwayRelative is rendered");
    return (
      <>
        <p>FarAwayRelative</p>
        <div>⬇️</div>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </>
    );
  }
  
  function Child() {
    const { user, setUser } = useContext(groceryStore);
    console.log("Child is rendered");
    return (
      <>
        <p>Child</p>
        <div
          onClick={() => setUser({ name: "Anuroop", age: Math.floor(Math.random() * 100) })}
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          ⬇️
        </div>
        <p>{user.name}</p>
        <p>{user.age}</p>
      </>
    );
  }
  
  export default Context;