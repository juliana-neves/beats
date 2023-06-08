import styled from "@emotion/styled";

const FooterContainer = styled.footer`
    background-color: ${props => props.theme.color.black};
    padding: ${props => props.theme.spacing.xl};
    margin-bottom: 0;
`

const TitleFooter = styled.h3`
    color: ${props => props.theme.color.white};
`

const Link = styled.a`
    color: ${props => props.theme.color.neutral};
    text-decoration: none;
    display: block;
    height: ${props => props.theme.spacing.m};
    margin: ${props => props.theme.spacing.s} 0;
    &:hover {
        font-weight: 600;
        color: ${props => props.theme.color.white};
    }
`

const IconLink = styled.a`
    color: ${props => props.theme.color.neutral};
    font-size: 24px;
    text-decoration: none;
    display: inline-block;
    margin-right: ${props => props.theme.spacing.m};
    &:hover {
    color: ${props => props.theme.color.white};
    }
`

export { FooterContainer, TitleFooter, Link, IconLink };