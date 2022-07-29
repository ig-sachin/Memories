import React, { useEffect, useState } from 'react';
import { Container, Typography, Grow, Grid, AppBar } from '@material-ui/core';
import memories from './image/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

// step9
// using redux with use of hook
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';


const App = () => {
  // this currentID will keep track of ID of each post 
  // and by using that ID we can update the particular post or delete the post
  const [currentID, setCurrentID] = useState(null);
  const classes = useStyles();
  // step10
  const dispatch = useDispatch();

  // we are using useEffect to dispatch our action
  // step11
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentID]);
  return (
    <Container>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h2' align='center' className={classes.heading}>
          Memories
        </Typography>
        <img src={memories} alt='Memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            {/* xs=12 means full width on extra small devices */}
            {/* and sm = 7 means 7 width on small and medium devices */}
            <Grid item xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentID={currentID} setCurrentID={setCurrentID} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App