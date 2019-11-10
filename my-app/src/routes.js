import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
    <BrowserRouter>
        {/* apenas uma rota sera exibida (com Switch), pq estamos utilizando paginas */}
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;