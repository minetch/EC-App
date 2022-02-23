import React from 'react'
import { Route, Switch } from 'react-router'
import { Login, Top, ItemList, ItemView, AddProducts } from './Page'

const Router = () => {
    return(
        <Switch>
            <Route exact path={"/Top?"} component={Top}/>
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"(/)?"} component={ItemList}/>
            <Route path={"/ItemView"} component={ItemView}/>
            <Route path={"/AddProducts"} component={AddProducts}/>
        </Switch>
    )
}

export default Router;