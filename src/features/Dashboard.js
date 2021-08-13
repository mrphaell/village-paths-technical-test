import logo from 'logo.svg';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();

  function aboutYouClick() {
    history.push('/account');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Button shape="round" onClick={aboutYouClick}>
          Account
        </Button>
        <p>Create React App Template Preconfigured with</p>
        <ol style={{textAlign: 'left'}}>
          <li>Redux Toolkit</li>
          <li>React Router</li>
          <li>AntD</li>
          <li>Axios</li>
          <li>Redux Saga</li>
          <li> Basic Authentication / Routes</li>
          <li> SASS</li>
          <li> Code Splitting</li>
        </ol>
        <a
          className="App-link"
          href="https://github.com/Nilanth/cra-template-redux-auth-starter"
          target="_blank"
          rel="noopener noreferrer"
        > Learn More</a>
      </header>
    </div>
  );
}

export default Dashboard;
