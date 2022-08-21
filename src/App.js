import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import User from './User';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Product from './Product';
import Createuser from "./Createuser"
import Userview from './Userview';
import Useredit from './Useredit';
import CreateProducts from './CreateProducts';
import EditProduct from './EditProduct';
import Login from './Login';
function App() {
  return (
    
  <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar/>
          <div className='container-fluid'>
          <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/users" element={<User />}/>
          <Route path="/users/create" element={<Createuser />}/>
          <Route path="/products" element={<Product />}/>
          <Route path="/users/view/:userId" element={<Userview />}/>
          <Route path="/users/edit/:userId" element={<Useredit />}/>
          <Route path="/products/createproducts" element={<CreateProducts />} />
          <Route path="/products/editdata/:productId" element={<EditProduct/>}/>
          </Routes>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
