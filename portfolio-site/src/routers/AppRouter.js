import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioDetailsPage from '../components/PortfolioDetailsPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>                
                <Route path="/portfolio/:id" component={PortfolioDetailsPage}/>                
                <Route path="/contacts" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;