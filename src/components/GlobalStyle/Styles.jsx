import { Global } from "@emotion/react";

const styles = theme => {
    return {
        html: {
            fontFamily: theme.fontFamily
        },
        body: {
            margin: 0
        }
    }
}

export default function Styles () {
    return (<Global styles={styles} />);
}