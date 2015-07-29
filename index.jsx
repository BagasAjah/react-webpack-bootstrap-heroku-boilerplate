import React from 'react';
import bootswatch from './client/index.less';

export class App extends React.Component {
  render() {
    return (
      <form className="form-horizontal">
          <fieldset>
            <legend>Legend</legend>
              <div className="form-group">
                <label for="inputEmail" className="col-lg-2 control-label">Email</label>
                <div className="col-lg-10">
                  <input type="text" className="form-control" id="inputEmail" placeholder="Email"/>
                </div>
            </div>
          </fieldset>
        </form>
    );
	}
}

React.render(<App/>, document.querySelector("#myApp"));
