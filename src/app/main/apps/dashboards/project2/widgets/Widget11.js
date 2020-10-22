import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

function Widget11(props) {
	return (
		<Paper className="w-full rounded-8 shadow-none border-1">
			<div className="border-b-1">
				<div className="flex items-center justify-between px-16 h-64">
					<Typography className="text-16">{props.widget.title}</Typography>

					<Typography className="text-11 font-500 rounded-4 text-white bg-blue px-8 py-4">
						{`${props.widget.table.rows.length} Members`}
					</Typography>
				</div>
				<ListSubheader>{props.widget.Subtitle}</ListSubheader>
			</div>
			<div className="table-responsive">
				<Table className="w-full min-w-full" size="small">
					<TableBody>
						{props.widget.table.rows.map(row => (
							<TableRow key={row.id}>
								{row.cells.map(cell => {
									switch (cell.id) {
										case 'avatar': {
											return (
												<TableCell key={cell.id} component="th" scope="row" className="px-16">
													<Avatar src={cell.value} />
												</TableCell>
											);
										}
										default: {
											return (
												<div className="flex items-center justify-between px-16 h-64 border-b-1">
													<TableCell
														key={cell.id}
														component="th"
														scope="row"
														className="truncate"
													>
														{cell.value}
													</TableCell>
													<TableCell component="th" scope="row" className="truncate">
														
														<Button
															variant="contained"
															color="secondary"
															startIcon={<AddIcon />}
															className="text-11 font-500 rounded-4 text-white bg-Blue px-8 mx-8 py-4"
														>
															Edit
														</Button>
														<Button
															variant="contained"
															color="secondary"
															startIcon={<DeleteIcon />}
															className="text-11 font-500 rounded-4 text-white bg-green px-8 mx-8 py-4"
														>
															Delete
														</Button>
													</TableCell>
												</div>
											);
										}
									}
								})}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</Paper>
	);
}

export default React.memo(Widget11);
