import React from 'react';
import { Timeline } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';

function PreviousRequests(props) {
	return (
		<div style={{margin: '1rem'}}>
			<Timeline style={{margin: '1rem'}}>
				{props.previousRequests.map(e => <Timeline.Item color="green">{e.split('').splice(0, 40).join('') + '...'}</Timeline.Item>)}
			</Timeline>
		</div>
	);
}

export default PreviousRequests;
