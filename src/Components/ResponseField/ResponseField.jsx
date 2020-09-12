import React from 'react';
import 'antd/dist/antd.css';
import JSONTree from 'react-json-tree';

export default function ResponseField({ response }) {
	const theme = {
		scheme: 'monokai',
		author: 'wimer hazenberg (http://www.monokai.nl)',
		base00: '#272822',
		base01: '#383830',
		base02: '#49483e',
		base03: '#75715e',
		base04: '#a59f85',
		base05: '#f8f8f2',
		base06: '#f5f4f1',
		base07: '#f9f8f5',
		base08: '#f92672',
		base09: '#fd971f',
		base0A: '#f4bf75',
		base0B: '#a6e22e',
		base0C: '#a1efe4',
		base0D: '#66d9ff',
		base0E: '#ae81ff',
		base0F: '#cc6633',
	};
	return (
		<div style={{margin: '1rem'}}>
			<JSONTree data={response} theme={theme} />
		</div>
	);
}


