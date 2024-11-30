import React from 'react';
import { Paper, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import image from '../../../../assets/11.jpg';
import imageSedacWP from '../../../../assets/13.jpg';
import imageDCA from '../../../../assets/12.jpg';
import imageDCvisitantes from '../../../../assets/14.jpg';
import imageDCIM from '../../../../assets/15.jpg';
import imageNagios from '../../../../assets/16.jpg';
import imageQualturno from '../../../../assets/17.jpg';
import imageOTRS from '../../../../assets/18.jpg';
import imageControle from '../../../../assets/19.jpg';
import imageDecision from '../../../../assets/20.jpg';
import imageCVO from '../../../../assets/21.jpg';
import imageChat from '../../../../assets/22.jpg';


// Componentes estilizados
const HeroContainer = styled(Box)({
    flexGrow: 1,
    padding: '32px',
    textAlign: 'center',
});

const LinksGrid = styled(Box)({
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: '1fr 1fr 1fr',
    '@media (max-width: 960px)': {
        gridTemplateColumns: '1fr 1fr',
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
    },
});

const StyledPaper = styled(Paper)(({ backgroundImage }) => ({
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(144, 238, 144, 0.3)',
        backgroundBlendMode: 'overlay',
    },
}));

// Título com animação
const Title = styled(Typography)({
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    opacity: 0,
    animation: 'fadeIn 2s forwards, slideUpDown 3s infinite',
    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    '@keyframes slideUpDown': {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0)' },
    },
    '&:hover': {
        color: '#4CAF50',
        cursor: 'pointer',
        transform: 'scale(1.1)',
        transition: 'transform 0.3s ease, color 0.3s ease',
    },
});

// Links
const links = [
    { title: 'SedacWP', path: '/', backgroundImage: imageSedacWP },
    { title: 'DCAcesso', path: '/about', backgroundImage: imageDCA },
    { title: 'DCVisitantes', path: '/contact', backgroundImage: imageDCvisitantes },
    { title: 'DCIM', path: '/contact', backgroundImage: imageDCIM },
    { title: 'CheckMk', path: '/contact', backgroundImage: imageNagios },
    { title: 'QualTurno?', path: '/contact', backgroundImage: imageQualturno },
    { title: 'OTRS', path: '/contact', backgroundImage: imageOTRS },
    { title: 'Controle Material', path: '/contact', backgroundImage: imageControle },
    { title: 'Chamados DECISION', path: '/contact', backgroundImage: imageDecision },
    { title: 'Datafaz', path: '/contact', backgroundImage: image },
    { title: 'OpenManage', path: '/contact', backgroundImage: imageCVO },
    { title: 'Ditec Chat', path: '/contact', backgroundImage: imageChat },

];

const Hero = () => (
    <HeroContainer>
        <Title variant="h3">Bem-vindo ao Portal de Links da Sedac</Title>
        <LinksGrid>
            {links.map((link, index) => (
                <StyledPaper key={index} elevation={3} backgroundImage={link.backgroundImage}>
                    <CardActionArea component={Link} to={link.path}>
                        <CardContent>
                            <Typography variant="h6">{link.title}</Typography>
                        </CardContent>
                    </CardActionArea>
                </StyledPaper>
            ))}
        </LinksGrid>
    </HeroContainer>
);

export default Hero;
