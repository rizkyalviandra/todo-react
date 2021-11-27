import React, { Suspense } from "react";
import { HomeContainer } from "./modules/Home";
import useTodoStore from "./stores/useTodoStore";

function App() {
  const { setTodos } = useTodoStore();

  React.useEffect(() => {
    fetch(`https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [setTodos]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContainer />
    </Suspense>
  );
}

export default App;
