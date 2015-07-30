import React from 'react';
import bootswatch from './styles/index.less';

export class SneatApp extends React.Component {
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

React.render(<SneatApp/>, document.querySelector("#app"));
