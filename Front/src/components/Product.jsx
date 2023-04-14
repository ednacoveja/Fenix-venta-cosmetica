import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { cyan, grey,teal } from '@mui/material/colors';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



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

export default function Product() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[900] }} aria-label="recipe">
                        <img
                            width={"30px"}
                            src={'images/fenixBlackCircular.png'}
                            alt="Logo"
                        />
                    </Avatar>
                }
                action={
                    <Typography
                        variant='h4'
                        color="textSecondary"
                    >
                        {/* {accounting.formatMoney(500,"$")} */}
                        {"$500"}
                    </Typography>
                }
                title={
                    <Typography
                        variant='h5'
                        color="title"
                    >
                        {"Jabon Aloe"}
                    </Typography>
                }

                subheader="Stock"
            />
            <CardMedia
                component="img"
                height="194"
                image="images/JabonAloe.jpg"
                alt="Jabon"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Jabón Fénix de Aloe Vera y Romero natural.

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to Cart" >
                    <AddShoppingCart fontSize="large" />
                </IconButton>
                {Array(5)
                    .fill()
                    .map((_, i) => (
                        <p>&#11088;</p>
                    ))
                }
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
                    <Typography paragraph>Descripcion:</Typography>
                    <Typography paragraph>
                        Ideales para limpieza del rostro, ayuda a combatir el acné y puntos negros.
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}