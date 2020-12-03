import { Grid, withStyles } from '@material-ui/core'
import React from 'react'
import StoreContext from '../../context/StoreContext'
import CategoryCart from './CategoryCart'

const styles = (theme) => ({
    
})

function Home(props) {
    const {classes} = props
    return (
        <StoreContext.Consumer>
            {(ctx) => (
                <Grid container spacing={3}>
                    {
                        ctx.getCategories().map(category => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                                <CategoryCart category={category}/>
                            </Grid>
                        ))
                    }
                </Grid>
            )}
        </StoreContext.Consumer>
    )
}

export default withStyles(styles)(Home)