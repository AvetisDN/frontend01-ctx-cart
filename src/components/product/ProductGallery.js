import { Grid,withStyles } from '@material-ui/core'
import React, {useState} from 'react'

const styles = (theme) => ({
    bigImg: {
        height: 450,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    },
    smallImg: {
        height: 120,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        cursor: 'pointer',
        border: `6px solid ${theme.palette.primary.main}`,
        '&:hover' : {
            borderColor: theme.palette.primary.dark
        }        
    },
    activeImg: {
        border: `6px solid ${theme.palette.secondary.main}`,
        '&:hover' : {
            borderColor: theme.palette.secondary.dark
        }  
    },
    dialog: {
        position: 'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogContent: {
        width: '90vw',
        height: '90vh',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogContentImg: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
})

function ProductGallery(props) {
    const {image,gallery,classes} = props
    const [selectedImg, setSelectedImg] = useState(0)
    const [open, setOpen] = useState(false)
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div
                 onClick={() => { setOpen(true) }}
                className={`${classes.bigImg} ${classes.activeImg}`} 
                style={{
                    backgroundImage: `url(${gallery ? gallery[selectedImg] : image})`
                }}></div>
            </Grid>
            {gallery && 
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {gallery.map( (img, index) => (
                        <Grid item xs={3} key={index} onClick={() => { setSelectedImg(index) }}>
                            <div
                            className={`${classes.smallImg} ${selectedImg === index ? classes.activeImg : ''}`} 
                            style={{
                                backgroundImage: `url(${img})`
                            }}></div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            }
            <div
                onClick={() => { setOpen(false) }}
                className={classes.dialog}
                style={{
                    display: open ? 'flex' : 'none'
                }}>
                    <div className={classes.dialogContent}>
                        <img className={classes.dialogContentImg} 
                            src={`${gallery ? gallery[selectedImg] : image}`}/>
                    </div>
            </div>
        </Grid>
    )
}

export default withStyles(styles)(ProductGallery)