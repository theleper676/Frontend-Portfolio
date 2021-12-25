import { Box, Container } from "@chakra-ui/react";
const Layout = ({children}: any):JSX.Element => {
    return(
        <Box pb={8}>
<Container pt={8} maxW={'container.md'}>
    {children}
</Container>
</Box>
    )
}


export default Layout;