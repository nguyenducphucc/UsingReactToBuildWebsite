import { Switch, Route } from "react-router-dom";

import * as page from "./Pages";
import WomenItems from "./WomenItems";

export default function PageSwitching() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={page.Home} />
        <Route path="/about" component={page.About} />
        <Route path="/women" component={WomenItems} />
        <Route path="/login" component={page.Login} />
        <Route component={page.PageNotFound} />
      </Switch>
    </div>
  );
}
