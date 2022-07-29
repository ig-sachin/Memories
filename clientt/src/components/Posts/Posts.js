import React from 'react'
import Post from './Post/Post';
// useSelector is used to get the global varaibles and use it in out component
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = ({ setCurrentID }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    return (
        <>
            {
                !posts.length ? <CircularProgress /> : (
                    <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                        {
                            posts.map((post) => (
                                <Grid key={post._id} item xs={12} sm={6}>
                                    <Post post={post} setCurrentID={setCurrentID} />
                                </Grid>
                            ))
                        }
                    </Grid>
                )
            }
        </>
    )
}

export default Posts