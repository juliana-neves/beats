import { Container, Row, Col } from 'react-grid-system';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { linkProducts, linkSupport, linkCompany, linkLegal } from './FooterLinks';
import { FooterContainer, TitleFooter, Link, IconLink } from './FooterStyled';

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
                    <Col lg={3} md={3} sm={0}>
                        <TitleFooter>Products</TitleFooter>
                        {linkProducts.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)} >
                                {link.text}
                            </Link>
                        ))}
                    </Col>
                    <Col lg={3} md={3} sm={0}>
                        <TitleFooter>Support</TitleFooter>
                        {linkSupport.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)}>
                                {link.text}
                            </Link>
                        ))}
                    </Col>
                    <Col lg={3} md={3} sm={0}>
                        <TitleFooter>Company</TitleFooter>
                        {linkCompany.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)}>
                                {link.text}
                            </Link>
                        ))}
                        <TitleFooter>Legal</TitleFooter>
                        {linkLegal.map((link, index) => (
                            <Link key={index} href={linkFooter(link.url)}>
                                {link.text}
                            </Link>
                        ))}
                    </Col>
                    <Col lg={3} md={3} sm={0}>
                        <TitleFooter>Follow Us</TitleFooter>
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