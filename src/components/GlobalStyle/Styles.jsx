import { css, Global } from "@emotion/react";

const styles = css`
    * {
        font-family: 'Open Sans', sans-serif;
    }
`

export default function Styles () {
    return (<Global styles={styles} />);
}