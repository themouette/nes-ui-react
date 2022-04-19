import { Heading, Container, Br } from "../../dist";

export const ContainerDemo = () => (
    <>
        <Heading size='large' centered>&lt;Container&gt; &amp; Content Alignment</Heading>

        <Container align='center' title='&lt;Container align=&quot;center&quot;&gt;'>title + content center algined because of align=&quot;center&quot;</Container>

        <Br />

        <Container align='right' title='&lt;Container align="right"&gt;'>title + content aligned right</Container>

        <Br />

        <Container align='left' title='&lt;Container roundedCorners alignTitle="center"&gt;' roundedCorners alignTitle="center">
          rounded corners, title aligned center, but content aligned left (default)
        </Container>

        <Br size="large" />
    </>
)
export default ContainerDemo