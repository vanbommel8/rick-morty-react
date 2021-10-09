import Characters from "./Characters";
import Navigation from "./Navigation";
import { useState } from "react";


function App() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  return (
    <div className='App'>
      <Navigation page={page} setPage={setPage} maxPage={maxPage} />
      <Characters page={page} setMaxPage={setMaxPage} />
    </div>
  );
}

export default App;
