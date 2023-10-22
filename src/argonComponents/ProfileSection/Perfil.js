import React, { useContext } from "react";
import { Avatar, Box, MenuItem } from "@mui/material";
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import './css.css'
import { GeneralFetch } from "Api/generalFetch/generalFetch";

const useStyles = makeStyles(() => ({
    box: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        columnGap: '5%',
    },
    icon: {
        marginRight: '7px',
    }
}));


function PopoverPopupState({ classes }) {
    const { FetchData } = GeneralFetch()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const navigate = new useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function logout() {
        (async () => {
            await FetchData(null, 'logout', 'POST', 'user')
        })()
        sessionStorage.clear();
        navigate('/')
    }

    function minhaConta() {
        // setUpdate(true)
        navigate('/')
    }

    return (
        <div>
            <Avatar style={{ margin: '-10px -35px 0 0', cursor: 'pointer' }} {...stringAvatar(sessionStorage.getItem("nome") + " " + sessionStorage.getItem("apelido"))} onClick={(event) => { handleClick(event) }} />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                class="container"
            >
                <div style={{ padding: '7px', margin: "-8px", background: "#fff" }}>
                    <MenuItem onClick={() => { minhaConta() }} > <ManageAccountsIcon className={classes.icon} /> Minha Conta</MenuItem>
                    <MenuItem style={{ color: 'red' }} onClick={() => { logout() }} > <LogoutIcon className={classes.icon} /> Sair</MenuItem>
                </div>
            </Popover>
        </div>
    );
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: '#A2999E',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const PerfilSection = () => {
    const classes = useStyles();

    return (
        <Box
            sx={{ ml: 1, mr: 3, mt: 1 }}
            className={classes.box}
        >
            <PopoverPopupState classes={classes} />
        </Box>
    )
}

export default PerfilSection