import React from 'react'
import { Grid } from '@material-ui/core'
import StoreContext from '../../context/StoreContext'

export default function CategoryGrid(props) {
    return (
        <StoreContext.Consumer>
            {(ctx) => {
                <Grid container spacing={3}>
                    {
                        ctx.getCategory(props.match.params.slug).forEach(category => {
                            console.log(category);
                            return (
                                <div key={category.id}>
                                    {category.name}
                                </div>
                            )
                        })
                    }
                </Grid>
            }}
        </StoreContext.Consumer>
    )
}
