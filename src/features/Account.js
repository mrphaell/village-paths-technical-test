import logo from 'common/svg/logo-full.svg';
import arrow from 'common/svg/arrow-left.svg';
import users from 'common/svg/user-cards.svg';
import { Form, Row, Col, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';


function Account() {
  const history = useHistory();

  function backBtnClick() {
    history.goBack();
  }

  function continueBtnClick() {
    history.push('/join');
  }

  return (
    <div className="About">
      <header className="About-header">
        <img src={logo} className="About-logo" alt="logo"/>
      </header>
      <div className="About-body">
        <div className="About-title">
          <Button shape="circle" onClick={backBtnClick}>
            <img src={arrow} alt="back"/>
          </Button>
        </div>
        <div className="About-content">
          <div className="titles">
            <h2 className="title"><b>Let's get to know you...</b></h2>
            <span className="title">Tell us more about yourself.</span>
          </div>
          <Form name="about_user" 
            className="form"
            initialValues={{
              email: 'anita.village@villagecreed.com',
              first_name: 'Anita',
              last_name: 'Village',
              password: 'anita.village',
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ]}
            >
              <Input size="medium"
                placeholder="Email"
                autoComplete="email"
                className="form-input"
              />
            </Form.Item>
            <Row>
              <Col>
                <Form.Item
                  name="first_name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your First Name!',
                    },
                  ]}
                >
                  <Input size="medium"
                    placeholder="First Name"
                    autoComplete="first_name"
                    className="form-input name"
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Last Name!',
                    },
                  ]}
                >
                  <Input size="medium"
                    placeholder="Last Name"
                    autoComplete="last_name"
                    className="form-input last-name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password 
                placeholder="Password"
                className="form-input" />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" className="About-form-button" size="large" onClick={continueBtnClick}>
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="Side-image">
          <img src={users} className="image" alt="user-cards"/>
        </div>
      </div>
    </div>
  );
}

export default Account;
