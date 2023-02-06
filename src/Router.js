import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import {store, persistor} from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Homepage from "./pages/Homepage/Homepage";
import Pagination from "./pages/Pagination/Pagination";
import Product from "./pages/Product/Product";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Category from "./pages/CategoryView/CategoryView";
import Search from "./components/Search/SearchItems";
import Account from "./pages/Account/Account";
import Order from "./pages/Order/Order";
import MyProducts from "./pages/MyProducts/MyProducts";
import OneTimePass from "./pages/Auth/OneTimePass";
import Reset from "./pages/Auth/Reset";

function Router() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <ProtectedRoute path='/profile' component={Account} />
            <Route path='/search' component={Search} />
            <Route path='/products' component={Pagination} />
            <Route path='/product/:id' component={Product} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/reset' component={ResetPassword} />
            <Route path='/otp' component={OneTimePass} />
            <Route path='/resetpass' component={Reset} />
            <ProtectedRoute path='/cart' component={Cart} />
            <ProtectedRoute path='/checkout' component={Checkout} />
            <Route path='/category' component={Category} />
            <ProtectedRoute path='/account' component={Account} />
            <ProtectedRoute path='/order' component={Order} />
            <ProtectedRoute path='/myproducts' component={MyProducts} />
            <Route path='*' component={NotFound} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default Router;