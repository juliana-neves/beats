import styled from "@emotion/styled";

export const MenuContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: fixed;
    z-index: 1;
    width: ${props => props.theme.width.l};
    height: ${props => props.theme.height.l};
    background-color: ${props => props.theme.color.white};
`;

export const Logo = styled.span`
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spacing.s};
`;

export const MenuItemsWrapper = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const MenuItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 ${props => props.theme.spacing.xs};
    padding: 0 ${props => props.theme.spacing.m};
    height: ${props => props.theme.height.m};
    &:hover a{
        color: ${props => props.theme.color.details};
    }
`;

export const MenuLink = styled.a`
    color: ${props => props.theme.color.black};
    text-decoration: none;
`

export const ButtonIconsWrapper = styled.div`
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
`

export const ButtonIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    margin: 0 ${props => props.theme.spacing.m};
    width: ${props => props.theme.height.m};
    height: ${props => props.theme.height.m};
    &:hover {
        color: ${props => props.theme.color.details};
    }
`;

