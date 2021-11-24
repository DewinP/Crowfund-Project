import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import  Typography from '@mui/material/Typography'


const FormCard:React.FC<{formTitle:string}> = ({formTitle,children}) => {
    
    return(
        <Container maxWidth='sm' component='main'  >
                <Paper elevation={2} sx={{padding:2}}>
                    <Typography variant="h5" fontWeight='bold' textAlign='center' sx={{marginBottom:3}}>
                        {formTitle}
                    </Typography>
                    {children}
                </Paper>
                </Container>
    )
}

export default FormCard;