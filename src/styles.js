import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    container : {
        paddingTop : '80px'
    },
    icon: {
        marginRight : '20px'
    },
    button: {
         marginTop : '40px'
    },
    cardGrid: {
        marginTop: '50px',
        marginBottom: '50px',
        padding : '20px 0'
    },
    card: {
        display : 'flex',
        flexDirection : 'column',
        height : '100%'
    },
    cardMedia: {
        paddingTop : '56.25%' // 16:9
    },
    cardContent: {
        flexGrow : 1
    },
    footer: {
        backgroundColor : '#e3dada',
        padding : '50px 0'
    }
}))

export default useStyles