import React from 'react';
import { Route, Switch, useHistory } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Button} from '@material-ui/core';
import LottoFooter from './LottoFooter';

function MainPage() {
    const history = useHistory();
    const handleClick = () => {
        console.log('test');
        history.push('/dream');
    }
    return (
        <div className="App">
        <Button onClick={handleClick}>
        랜덤
        </Button>
        <Button>
        꿈으로
        </Button>
        <Button>
        사주로
        </Button>
        <BrowserRouter>
        <Switch>
            <Route path="/random">
                <LottoFooter />
            </Route>
            <Route path="/dream">
                <LottoFooter />
            </Route>
            <Route path="/birth">
                <LottoFooter />
            </Route>
            {/* <Redirect from="*" to="/login" /> */}
        </Switch>
       </BrowserRouter>

        </div>
    );
}

export default MainPage;