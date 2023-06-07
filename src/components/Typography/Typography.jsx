import { css } from '@emotion/react'

export const heading1 = css`
    font-weight: 800;
    font-size: 40px;
    margin: 24px auto;
`;

export const heading2 = css`
    font-weight: 600;
    font-size: 32px;
    margin: 16px auto;
`;

export const heading3 = css`
    font-weight: 400;
    font-size: 24px;
    margin: 8px auto;
`;

export const heading4 = css`
    font-weight: 600;
    font-size: 20px;
    margin: 8px auto;
`;

export const text = css`
    font-weight: 400;
    font-size: 16px;
`;

export const textBold = css`
    font-weight: 600;
    font-size: 16px;
`;
export const textSmall = css`
    font-weight: 400;
    font-size: 12px;
`;

export const textSmallBold = css`
    font-weight: 600;
    font-size: 12px;
`;

export function Typography({ variant, component, children }) {

    return (
        <Typography variant={variant} component={component}>
            {children}
        </Typography>
    );
}