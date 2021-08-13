import logo from 'common/svg/logo-full.svg';
import miniLogo from 'common/svg/logo.svg';
import arrow from 'common/svg/arrow-left.svg';
import join from 'common/svg/join-org.svg';
import { Button, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

function Join() {
  const history = useHistory();
  
  function backBtnClick() {
    history.goBack();
  }

  const [organization, getOrganization] = useState('');
  const url = 'https://sprout-tech-assets.s3.amazonaws.com/village-paths-test-data/data.json';
  
  useEffect(() => {
    getOrganizationAPI();
  }, []);

  const getOrganizationAPI = () => {
    axios.get(url)
      .then((response) => {
        const organization = response.data;
        getOrganization(organization);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  return (
    <div className="Join">
      <header className="About-header">
        <img src={logo} className="About-logo" alt="logo"/>
      </header>
      <div className="Join-body">
        <div className="Join-title">
          <Button shape="circle" onClick={backBtnClick}>
            <img src={arrow} alt="back"/>
          </Button>
        </div>
        <div className="Join-content">
          <div className="titles">
            <h2 className="title"><b>Join your organization in Village Hub</b></h2>
            <span className="title">This organization allow anyone from <b>@villagecreed.com</b> to join:</span>
          </div>
          <Card className="Join-card">
            <div className="Card-content">
              <img src={miniLogo} className="org-logo" alt="mini-logo"/>
              <div className="Org-info">
                <h3>{organization.name}</h3>
                <span>{organization.memberCount}{organization.memberCount > 1 ? ' members' : ' member'}</span>
              </div>
              <Button className="Join-org" size="large">
                Join
              </Button>
            </div>
          </Card>

          <Button className="Create-org" icon={<PlusOutlined />} size="large">
            <b className="Create-lbl">Create a new organization</b>
          </Button>
        </div>
        <div className="Side-image">
          <img src={join} className="image" alt="join-org"/>
        </div>
      </div>
    </div>
  );
}

export default Join;
