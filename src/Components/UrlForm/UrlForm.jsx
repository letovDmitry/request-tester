import React, { useState, } from 'react';
import { Form, Input, Button, Select, } from 'antd';
import 'antd/dist/antd.css';
import c from './UrlForm.module.css';
import * as axios from 'axios';

const { Option } = Select;

export default function UrlForm(props) {
	const [method, changeMethod] = useState('GET');
	const [requestData, changeRequestData] = useState('');
	const [url, changeURL] = useState('');
	return (
		<div>
			<Form layout="horizontal">
				<div className={c.form}>
					<Form.Item>
						<Input onChange={e => {
							changeURL(e.target.value);
						}} placeholder="Enter request URL" />
					</Form.Item>
					{method === 'POST' ? <Form.Item>
						<Input onChange={e => {
							changeRequestData(e.target.value);
						}} placeholder="Enter request data" />
					    </Form.Item> : null}
					<Form.Item
						name="method"
						label="Method"
					>
						<Select
							placeholder="Select a option and change input text above"
							onChange={value => {
								changeMethod(value);
								console.log(method);
							}}
						>
							<Option value="POST">Post</Option>
							<Option value="GET">Get</Option>
						</Select>
					</Form.Item>
				</div>
				<div className={c.button}>
					<Form.Item>
						<Button onClick={() => axios({
							'method': method,
							'url': url,
							'headers': {},
							'data': requestData,
						}).then(r => {
							props.setResponse(r);
							props.setPreviousRequests([...props.previousRequests, url]);
						}).catch(() => props.setResponse('404 not found'))} type="primary">Submit</Button>
					</Form.Item>
				</div>
                
			</Form>
		</div>
	);
}

// testing url https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=b23a34c77d834a399dcda0ee3dce73dd
