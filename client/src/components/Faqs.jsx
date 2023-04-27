import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Face2Icon from '@mui/icons-material/Face2';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Stack } from '@mui/system';
import { List, ListItem } from '@mui/material';
import Sidebar from './Sidebar';
import { Face2Outlined } from '@mui/icons-material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box justifyContent="centre" flex={3} p={1}>
    <Stack direction="row" spacing={1} justifyContent="space-between">
    <Card  sx={{ minWidth: 500, maxWidth:950 ,justifyContent:"center" }} textAlign="center" style={{backgroundColor:"white"}}>
      <CardContent>
      <Typography sx={{ fontSize: 50 }} color="gray" gutterBottom  textAlign={"center"}>
          All About  Y<Face2Icon/>urLib
        </Typography>
        <Typography variant="body2" fontSize={18} color="text.secondary">
        This is a Library for people with vision impairment that enables their speech by an
         interactive interface to let them say the name of the book along with the author's name .
          System analysis the location of the books and guide the person with reference of the 
          number of footsteps and directions from the current location. The verbal interaction
           of the system makes it easier for the person to learn without any dependencies.
 

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography sx={{ fontSize: 18}} color="skyblue" gutterBottom>
          READ MORE
      </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="#00acc1">Implementation</Typography>
          <Typography paragraph>
          The learning environment should be created in such a manner that students
           should be able to adapt easily and enhance their learning such as application 
           of speech to text and text to speech recognition in the library system that guides 
           and enable them to reach the nearly accurate labelled bookshelf and locate the book
           by recognising the speech of the person by analysing the name of the book and author's 
           name.

          </Typography>
            <Typography paragraph color="#00acc1">Procedure</Typography>
          <List sx = {{ listStyleType: 'disc', pl: 2,'& .MuiListItem-root': {display: 'list-item'}}}>
            <ListItem>Register or Login with the credentials required.</ListItem>
            <ListItem>Provides route guider to locate your book</ListItem>
            <ListItem>generalised method of counting steps</ListItem>

            </List>
        </CardContent>
      </Collapse>
    </Card>
    <Box sx={{display:{ xs:"none", sm:"block"}}}>
    <Sidebar/>
    </Box>
    </Stack>
    </Box>
  );
}

