import * as React from "react";

function App() {
  const title = "React";

  return (
    <div>
      <h1>Hello {title}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text"></input>
    </div>
  );
}
export default App;
