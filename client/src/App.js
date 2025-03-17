import React from "react";
import { BrowserRouter , Route , Routes} from "react-router-dom"
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat"

const App=() => {
return(
<BrowserRouter>
  <Routes>
     <Route path="/" element={<Join />}/>
     <Route path="/Chat" element={<Chat />}/>
  </Routes>
</BrowserRouter>
);
}

export default App;
