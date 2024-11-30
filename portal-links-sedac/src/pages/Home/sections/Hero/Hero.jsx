import React from 'react';
import { Paper, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import StorageIcon from '@mui/icons-material/Storage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { styled } from '@mui/system';

// Defina os componentes estilizados com styled
const HeroContainer = styled(Box)({
    flexGrow: 1,
    padding: '32px',
    textAlign: 'center',
});

const LinksGrid = styled(Box)({
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: '1fr 1fr 1fr', // Padrão para telas grandes
    '@media (max-width: 960px)': {
        gridTemplateColumns: '1fr 1fr', // Para telas médias
    },
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr', // Para telas pequenas
    },
});

// Estilizando o Paper com imagens de fundo específicas
const StyledPaper = styled(Paper)(({ backgroundImage }) => ({
    minHeight: '150px', // Diminuindo a altura mínima
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px', // Diminuindo o padding
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease', // Adicionando transição de cor
    backgroundImage: `url(${backgroundImage})`, // Imagem de fundo personalizada
    backgroundSize: 'cover', // A imagem cobre toda a área do Paper
    backgroundPosition: 'center', // Centraliza a imagem
    '&:hover': {
        transform: 'scale(1.05)', // Aumenta um pouco o tamanho quando o mouse passa por cima
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Efeito de sombra para destacar
        backgroundColor: 'rgba(144, 238, 144, 0.3)', // Cor verde clarinha com opacidade
        backgroundBlendMode: 'overlay', // Modo de mistura da imagem de fundo
    },
}));

const IconBox = styled(Box)({
    marginBottom: '12px', // Diminuindo a margem inferior do ícone
});

// Título com animação
const Title = styled(Typography)({
    fontFamily: '"Poppins", sans-serif', // Fonte personalizada
    fontWeight: 600,
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    opacity: 0,
    animation: 'fadeIn 2s forwards, slideUpDown 3s infinite', // Animações de fadeIn e slideUpDown
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
        color: '#4CAF50', // Mudando a cor do título ao passar o mouse
        cursor: 'pointer',
        transform: 'scale(1.1)', // Aumenta um pouco o título ao passar o mouse
        transition: 'transform 0.3s ease, color 0.3s ease',
    },
});

const links = [
    { title: 'SedacWP', description: 'Acesse a página de Registros', icon: <HomeIcon sx={{ fontSize: 40 }} />, path: '/', backgroundImage: 'https://via.placeholder.com/150?text=SedacWP' },
    { title: 'DCAcesso', description: 'Acesse a página de solicitação de acesso ao DC', icon: <InfoIcon sx={{ fontSize: 40 }} />, path: '/about', backgroundImage: 'https://via.placeholder.com/150?text=DCAcesso' },
    { title: 'DCVisitantes', description: 'Acesse a página de controle de acessos ao DC', icon: <MailOutlineIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=DCVisitantes' },
    { title: 'DCIM', description: 'Acesse a página do DCIM', icon: <SettingsIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=DCIM' },
    { title: 'CheckMk', description: 'Acesse a página do Monitoramento', icon: <BuildIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=CheckMk' },
    { title: 'QualTurno?', description: 'Acesse a página de registro de modelo de trabalho', icon: <AccessAlarmIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=QualTurno' },
    { title: 'OTRS', description: 'Acesse a página de abertura de chamados', icon: <HelpOutlineIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=OTRS' },
    { title: 'Controle Material', description: 'Acesse a página de controle material da Sedac', icon: <StorageIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=ControleMaterial' },
    { title: 'Chamados DECISION', description: 'Acesse a página de abertura de chamados na Decision', icon: <AssignmentIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=ChamadosDecision' },
    { title: 'Datafaz', description: 'Acesse o paínel de monitoramento do DCs', icon: <AssignmentIcon sx={{ fontSize: 40 }} />, path: '/contact', backgroundImage: 'https://via.placeholder.com/150?text=Datafaz' },
];

const Hero = () => {
    return (
        <HeroContainer>
            <Title variant="h3">
                Bem-vindo ao Portal de Links da Sedac
            </Title>
            <LinksGrid>
                {links.map((link, index) => (
                    <StyledPaper key={index} elevation={3} backgroundImage={link.backgroundImage}>
                        <CardActionArea component={Link} to={link.path}>
                            <CardContent>
                                <IconBox>{link.icon}</IconBox>
                                <Typography variant="h6">{link.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {link.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </StyledPaper>
                ))}
            </LinksGrid>
        </HeroContainer>
    );
};

export default Hero;
