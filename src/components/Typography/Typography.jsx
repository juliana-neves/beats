import styled from '@emotion/styled';



export const Heading1 = styled.h1`
    font-weight: 800;
    font-size: 40px;
    margin: 24px auto;
`;

export const Heading2 = styled.h2`
    font-weight: 600;
    font-size: 32px;
    margin: 16px auto;
`;

export const Heading3 = styled.h3`
    font-weight: 600;
    font-size: 24px;
    margin: 8px auto;
`;

export const Heading4 = styled.h4`
    font-weight: 600;
    font-size: 16px;
    margin: 8px auto;
    color: ${props => props.theme.color.white};

`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
`;

export const TextBold = styled.p`
    font-weight: 600;
    font-size: 16px;
`;
export const TextSmall = styled.p`
    font-weight: 400;
    font-size: 12px;
`;

export const TextSmallBold = styled.p`
    font-weight: 600;
    font-size: 12px;
`;

export const TextLink = styled.a`
    font-size: 14px;
    font-weight: 400;
`

export const TextButton = styled.button`
    font-size: 16px;
    font-weight: 400;
`