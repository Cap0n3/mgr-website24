import { Link } from 'react-router-dom';
import styled from "styled-components";
import mgr_palette from '../../theme/palette';
import { Typography } from '@mui/material';

const linkStyle = {
    textDecoration: "none",
    color: mgr_palette.text.primary
};

const NavLink = ({url, name}) => {
    return (
        <Link to={url} style={linkStyle}>
            <Typography variant="body2" fontWeight="fontWeightLight">
                {name}
            </Typography>
        </Link>
    );
}

export default NavLink;