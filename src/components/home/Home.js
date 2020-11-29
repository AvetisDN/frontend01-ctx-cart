import { withStyles } from '@material-ui/core'
import React from 'react'
import StoreContext from '../../context/StoreContext'
import CategoryCart from './CategoryCart'

const styles = (theme) => ({
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: theme.spacing(3)
    }
})

function Home(props) {
    const {classes} = props
    return (
        <StoreContext.Consumer>
            {(ctx) => (
                <div className={classes.main}>
                    {
                        ctx.getCategories().map(category => (
                            <CategoryCart category={category}/>
                        ))
                    }
                </div>
            )}
        </StoreContext.Consumer>
    )
}

export default withStyles(styles)(Home)