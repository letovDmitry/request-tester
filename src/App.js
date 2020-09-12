import React, { useState } from 'react';
import './App.css';
import ResponseField from './Components/ResponseField/ResponseField';
import UrlForm from './Components/UrlForm/UrlForm';
import { Row, Col, Divider } from 'antd';
import PreviousRequests from './Components/PreviosRequests/PreviousRequests';

function App() {
  const [response, setResponse] = useState('');
  const [previousRequests, setPreviousRequests] = useState([]);
  return (
    <div className="App">
      <Row gutter={[32, 32]}>
        <Col span={8}>
          <PreviousRequests previousRequests={previousRequests}/>
        </Col>
        <Col span={8}>
          <UrlForm previousRequests={previousRequests} setPreviousRequests={setPreviousRequests} setResponse={setResponse}/>
        </Col>
        {/* <Divider type="vertical" /> */}
        <Col span={8}>
          {response ? <ResponseField response={response} /> : null}
        </Col>
    </Row>
    </div>
  );
}

export default App;
