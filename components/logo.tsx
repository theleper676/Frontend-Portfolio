import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-wight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  hight: 30px;
  line-height: 20px;
`;

const Logo = () => {
  return (
    <div>
      <LogoBox>
        <Text
          ml={5}
          fontWeight={"bold"}
          fontFamily={"monospace"}
          color={"black"}
        >
          Yoav Levin
        </Text>
      </LogoBox>
    </div>
  );
};
export default Logo;
