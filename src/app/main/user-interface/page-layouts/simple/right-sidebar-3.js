import DemoContent from './Card';
import DemoSidebarContent from '@fuse/core/DemoSidebarContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef } from 'react';
import Nav from './Navbar';
import ReactDOM from 'react-dom';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

const useStyles = makeStyles({
	layoutRoot: {}
});

function SimpleRightSidebar3Sample() {
	const classes = useStyles();
	const pageLayout = useRef(null);

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			// header={
			// 	<div className="flex flex-col flex-1">
			// 		<div className="flex items-center p-24 px-12">
			// 			<div className="flex-1 lg:px-12">
			// 				<h4>Header</h4>
			// 			</div>
			// 			<Hidden lgUp>
			// 				<IconButton
			// 					onClick={ev => pageLayout.current.toggleRightSidebar()}
			// 					aria-label="open right sidebar"
			// 				>
			// 					<Icon>menu</Icon>
			// 				</IconButton>
			// 			</Hidden>
			// 		</div>
			// 	</div>
			// }
			content={
				<div className="m-64">
					<ReactFormBuilder
						url="path/to/GET/initial.json"
						saveUrl="path/to/POST/built/form.json"
					/>{' '}
				</div>
			}
			ref={pageLayout}
		/>
	);
}

export default SimpleRightSidebar3Sample;
