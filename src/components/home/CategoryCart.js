import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    withStyles
} from '@material-ui/core'
import {
    Link
} from 'react-router-dom'
import React from 'react'

const styles = (theme) => ({
    media: {
        height: 200
    },
    buttons: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2)
    }
})

function CategoryCart(props) {
    const {classes, category} = props
    return (
        <Card>
            <CardActionArea component={Link} to={`/category/${category.slug}`}>
                <CardMedia
                    className={classes.media}
                    title={category.name}
                    image={category.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {category.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {category.description}
                    </Typography>
                </CardContent>
            </CardActionArea>            
        </Card>
    )
}

export default withStyles(styles)(CategoryCart)