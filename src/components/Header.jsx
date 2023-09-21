import { Container, AppBar, Box, Tooltip, Avatar, Menu,MenuItem, IconButton, Toolbar, Typography, Button } from "@mui/material";
import  React, {useState} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import CustomButton from "./CustomButton";
import MenuIcon from '@mui/icons-material/Menu';
import { socials } from "../utils/resumeData";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Height } from "@mui/icons-material";

const pages = [{name:'Resume', path:'/'}, {name:'Portfolio', path:'/portfolio'},{name:'Contact', path:'/contact'}];

const Header = ({icon}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const buttonStyles = {
    color:'black',
    alignSelf:'start',
    padding:'1.5rem',
  }
  return(
    <>
      <AppBar position="static" className="container" sx={{background:'var(--surface)', marginBottom:'2rem'}}>
        <Container style={{paddingLeft:0 }}>
          <Toolbar disableGutters>
            <Box sx={{backgroundColor: 'var(--secondary)', borderRadius: '1rem 0 0 1rem',  display: { xs: 'none', md: 'flex' }}}>
              <Button size="large" component='a' href='/' sx={buttonStyles}>
                <HomeIcon sx={{ }} />
              </Button>
            </Box>
            {/* menu on mobile */}
            <Box sx={{flexGrow:1, display: { xs: 'flex', md: 'none' }, }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="var(--secondary)"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  href={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2,color:'var(--textHeadingColor)', display: 'block', fontWeight:'var(--bold)' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection:'row', color: 'var(--textHeadingColor)' }}>
              <IconButton href='https://mail.google.com/' size="large" target="_blank"  color="inherit">
                  <MailIcon />
              </IconButton>
              <IconButton href='https://github.com/daiterranova' size="large" target="_blank"  color="inherit">
                  <GitHubIcon />
              </IconButton>
              <IconButton href='https://www.linkedin.com/in/daiana-terranova/' size="large" target="_blank"  color="inherit">
                  <LinkedInIcon />
              </IconButton>
                {/* {Object.keys(socials).map((key, index) =>
                <IconButton href={socials[key].link} key={index}  target="_blank" >
                  {socials[key].icon}
                </IconButton>
                )} */}
            <CustomButton text='Hire me'  icon={<TelegramIcon/>}/>
            </Box>              
          </Toolbar>
        </Container>
      </AppBar>
          
    </>
  );
}


export default Header;
