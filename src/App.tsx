import { BrowserRouter, Routes, Route } from "react-router"
import PageComponents from "./pages/page-components"
import LayoutMain from "./pages/layout-main"

function App() {
  return (
   <BrowserRouter>
      <Routes>
         <Route element={<LayoutMain />}>
           <Route path="/componentes"  element={<PageComponents />} />
         </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
