import Document, { Html, Head, Main, NextScript } from 'next/document';
import ScriptTag from 'react-script-tag';
import { withPrefix } from '../utils';


class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
                alert(123);

        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <ScriptTag src={withPrefix('js/init.js')}/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
