import styled from "@emotion/styled";

const components = {
    h1: 'h1',
    text: 'p'
}

const styles = {
    h1: `
        font-weight: 800;
        font-size: 40px;
        margin: 24px auto;
        `,
    h2: `
        font-weight: 600;
        font-size: 32px;
        margin: 16px auto;
        `,
    h3: `
        font-weight: 400;
        font-size: 24px;
        margin: 8px auto;
        `,
    text: `
        font-weight: 400;
        font-size: 20px;
    `,
    textBold: `
        font-weight: 600;
        font-size: 20px;
    `,
    textSmall: `
        font-weight: 400;
        font-size: 12px;
    `,
    textSmallBold: `
        font-weight: 600;
        font-size: 12px;
    `
}

export default function Typography({ variant, component, children }) {
    const tag = components[component];
    const StyledTypography = styled[tag]`${styles[variant]}`;

    return (
        <StyledTypography>
            {children}
        </StyledTypography>
    );
}