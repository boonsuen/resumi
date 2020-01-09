import React from 'react';

class Account extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Profile</h2>
        <div>
          <form>
            <label htmlFor="inputDisplayName">Display Name</label>
            <input type="text" id="inputDisplayName" />
            <button type="submit">Save</button>
          </form>
          <input type="text" />
        </div>
        <h2>Danger zone</h2>
        <div>
          <p>If you delete your account, all of the associated data will be removed, including all your resumes. You'll get a confirmation email first.</p>
          <button>Delete Account</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Account;