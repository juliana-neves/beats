import { Container, Row, Col } from 'react-grid-system';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { linkProducts, linkSupport, linkCompany, linkLegal } from './FooterLinks';
import { FooterContainer, Link, IconLink } from './FooterStyled';
import { Heading4, TextLink } from '../Typography/Typography';

const beatsURL = 'https://www.beatsbydre.com';

const linkFooter = (link) => {
    if (beatsURL === 'https://www.beatsbydre.com' && link.startsWith('/')) {
        return `${beatsURL}${link}`
    } else {
        return link;
    }
}

function Footer() {

    return (
        <FooterContainer>
            <Container>
                <Row>
                    <Col lg={3} md={3}>
                        <Heading4>Products</Heading4>
                        {linkProducts.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)} >
                                <TextLink>
                                    {link.text}
                                </TextLink>
                            </Link>
                        ))}
                    </Col>
                    <Col lg={3} md={3}>
                        <Heading4>Support</Heading4>
                        {linkSupport.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)}>
                                <TextLink>
                                    {link.text}
                                </TextLink>
                            </Link>
                        ))}
                    </Col>
                    <Col lg={3} md={3} sm={0}>
                        <Heading4>Company</Heading4>
                        {linkCompany.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)}>
                                <TextLink>
                                    {link.text}
                                </TextLink>
                            </Link>
                        ))}
                        <Heading4>Legal</Heading4>
                        {linkLegal.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)}>
                                <TextLink>
                                    {link.text}
                                </TextLink>
                            </Link>
                        ))}
                    </Col>
                    <Col lg={3} md={3} sm={0}>
                        <Heading4>Follow Us</Heading4>
                        <IconLink href="https://www.facebook.com/beatsbydre">
                            <FaFacebook />
                        </IconLink>
                        <IconLink href="https://www.instagram.com/beatsbydre/">
                            <FaInstagram />
                        </IconLink>
                        <IconLink href="https://twitter.com/beatsbydre">
                            <FaTwitter />
                        </IconLink>
                        <IconLink href="https://www.youtube.com/beatsbydre">
                            <FaYoutube />
                        </IconLink>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    );

}

export default Footer;