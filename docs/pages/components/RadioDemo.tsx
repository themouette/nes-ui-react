import { Container, Radio, Text, Br } from "../../dist";

export const RadioDemo = () => (
    <Container title='&lt;Radio&gt;'>
        <Radio name="foo" value="yes" label="Yes" checked />
        <Radio name="foo" value="no" label="No" />

        <Br />
        <Text size="small" color="disabled">Can be disabled too:</Text>
        <Radio name="foo1" value="yes" label="Disabled" checked disabled />
    </Container>
)
export default RadioDemo