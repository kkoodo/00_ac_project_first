import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./layouts/Layout";
import MainNo from "./pages/MainNo";
import MainOct from "./pages/MainOct";
import MainDe from "./pages/MainDe";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import Months from "./pages/Months"
import Error from './pages/Error'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path ="*" element={<Error/>}/>
      <Route index element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Layout/>}>       
        <Route index element={<Months/>}/>
        <Route path="months" element={<Months/>}/>
        <Route path="main10" element={<MainOct/>}/>
        <Route path="main11" element={<MainNo/>}/>
        <Route path="main12" element={<MainDe/>}/>
        <Route path="searchpage" element={<SearchPage/>}/>
        <Route path="dailylog" element={<DetailPage/>}>
          <Route path=":date" element={<DetailPage/>}/>
        </Route>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;