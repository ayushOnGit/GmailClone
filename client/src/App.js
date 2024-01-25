import {React , lazy} from 'react';
import Main from './pages/Main';
import {  Route,   createBrowserRouter, createRoutesFromElements, Navigate, RouterProvider } from 'react-router-dom';
import { routes } from './Routes/routes';
import { Suspense } from 'react';
import SuspenseLoader from './Components/Commo/SuspenseLoader';


const ErrorComponent  = lazy(()=> import('./Components/Commo/ErrorComponent'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route  path={routes.main.path} element = {<Navigate to = {`${routes.emails.path}/inbox`}/>}/>
      <Route path={routes.main.path} element={<routes.main.element />} > 
      <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element/>} errorElement = {<ErrorComponent/>} />
      <Route path = {routes.invalid.path} element = {<routes.view.element/>} errorElement = {<ErrorComponent/>}/>
      </Route>

      <Route path ={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`}/>}/>
      
    </Route>
  )
);

const App = () => {
  return (
    <Suspense fallback={<SuspenseLoader/>}>
      <RouterProvider router={router}/>
    </Suspense>
  );
};

export default App;
