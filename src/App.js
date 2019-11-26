import React from 'react';
import Presentation from './views/Presentation';
import Register from './views/Register';
import Profile from './views/Profile';
import Landing from './views/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// creating a library with the Font Awesome icons we use through the kit
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faDownload, faUser, faKey, faGlobe, faCampground, faBinoculars, faFire, faCat, faCrow, faDog, faFish, faOtter, faTshirt, faShoePrints, faSocks, faStopCircle, faChessQueen, faChessKing, faChessRook, faChessKnight, faIgloo, faAddressCard, faChartLine, faLocationArrow, faInfo, faCheck, faExclamationCircle , faTh, faTools, faPuzzlePiece, faPalette} from '@fortawesome/free-solid-svg-icons';
import { faCompass as farCompass, faUser as farUser, faHeart as farHeart, faBookmark as farBookmark, faIdBadge as farIdBadge, faFrownOpen as farFrownOpen} from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faHeart, faDownload, faUser, faKey, faGlobe, faCampground, faBinoculars, faFire, faCat, faCrow, faDog, faFish, faOtter, faTshirt, faShoePrints, faSocks, faStopCircle, faChessQueen, faChessKing, faChessRook, faChessKnight, faIgloo, faAddressCard, faChartLine, faLocationArrow, faInfo, faCheck, faExclamationCircle, farCompass, farUser, farHeart, faTh, farBookmark, farIdBadge, farFrownOpen, faTools, faPuzzlePiece, faPalette, faTwitter, faFacebookSquare, faGithub, faLinkedin);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Presentation />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
        </Switch>
      </Router>
    );
  }

};

export default App;
