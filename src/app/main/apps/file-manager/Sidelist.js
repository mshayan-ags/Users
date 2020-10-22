import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import SubjectIcon from '@material-ui/icons/Subject';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [Basicopen, BasicsetOpen] = React.useState(true);

  const BasichandleClick = () => {
    BasicsetOpen(!Basicopen);
  };
  const [Dataopen, DatasetOpen] = React.useState(true);

  const DatahandleClick = () => {
    DatasetOpen(!Dataopen);
  };
  const [Fieldsopen, FieldssetOpen] = React.useState(true);

  const FieldshandleClick = () => {
    FieldssetOpen(!Fieldsopen);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Containers" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={BasichandleClick}>
        <ListItemText primary="Basic" />
        {Basicopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={Basicopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <TextFieldsIcon />
            </ListItemIcon>
            <ListItemText primary="Tile" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText primary="Text" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText primary="Image" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={DatahandleClick}>
        <ListItemText primary="Data" />
        {Dataopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={Dataopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={FieldshandleClick}>
        <ListItemText primary="Fields" />
        {Fieldsopen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={Fieldsopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
