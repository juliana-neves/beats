import { MenuContainer, Logo, MenuItemsWrapper, MenuItem, MenuLink,  ButtonIconsWrapper, ButtonIcon } from './NavbarStyled';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Navbar() {
    return (
        <MenuContainer>
            <Logo>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 16C32 24.8369 24.8369 32 16 32C7.16308 32 0 24.8369 0 16C0 7.16308 7.16308 0 16 0C24.8369 0 32 7.16308 32 16Z" fill="white" />
                    <path d="M20.8795 16.0008C20.8795 13.3054 18.6949 11.127 16.0057 11.127C13.3103 11.127 11.1318 13.3116 11.1318 16.0008C11.1318 18.69 13.3165 20.8746 16.0057 20.8746C18.6949 20.8746 20.8795 18.6962 20.8795 16.0008Z" fill="#E52629" />
                    <path d="M16.0059 0C14.4797 0 13.0089 0.215385 11.612 0.615385V9.26154C12.8736 8.43692 14.3812 7.95692 16.0059 7.95692C20.4489 7.95692 24.0489 11.5569 24.0489 16C24.0489 20.4431 20.4489 24.0431 16.0059 24.0431C11.5628 24.0431 7.96278 20.4431 7.96278 16C7.96278 15.8585 7.96894 15.7169 7.97509 15.5754L7.96278 15.5815V2.17231C3.20586 4.94769 0.00585938 10.0985 0.00585938 16C0.00585938 24.8369 7.16894 32 16.0059 32C24.8428 32 31.9997 24.8369 31.9997 16C31.9997 7.16308 24.8366 0 16.0059 0Z" fill="#E52629" />
                </svg>
            </Logo>
            <MenuItemsWrapper>
                <MenuItem>
                    <MenuLink href="#">Discover</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="#">Shop</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="#">Support</MenuLink>
                </MenuItem>
            </MenuItemsWrapper>
            <ButtonIconsWrapper>
                <ButtonIcon>
                    <LocalMallIcon />
                </ButtonIcon>
                <ButtonIcon>
                    <PersonIcon />
                </ButtonIcon>
            </ButtonIconsWrapper>
        </MenuContainer >
    );
}

export default Navbar;
