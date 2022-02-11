import React, { useEffect } from "react";
import Header from "./Header";
import Products from "./Products";
import AddForm from "./AddForm";

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <Products />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
