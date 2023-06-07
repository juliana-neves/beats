import styled from "@emotion/styled";
import { heading4, text, textBold } from "../Typography/Typography";

const FooterContainer = styled.footer`
    background-color: ${props => props.theme.color.black};
    padding: ${props => props.theme.spacing.m};
    margin-bottom: 0;
    margin-top: ${props => props.theme.spacing.l}
`

const TitleFooter = styled.h3`
    ${heading4};
    color: ${props => props.theme.color.white};
`

const Link = styled.a`
    ${text}
    color: ${props => props.theme.color.neutral};
    text-decoration: none;
    display: block;
    height: ${props => props.theme.spacing.m};
    margin: ${props => props.theme.spacing.s} 0;
    &:hover {
        ${textBold};
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