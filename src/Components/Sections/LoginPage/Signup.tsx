import { Button, Input } from "@nextui-org/react";
import React from "react";
import { MdCreate } from "react-icons/md";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 350px;
`;

const InputWrapper = styled.div`
  padding: 1rem;
  .nextui-c-iwmZdB-iiIdOsz-css {
    width: 100% !important;
  }
`;
const ButtonWrapper = styled.div`
  padding: 1rem;
  > button {
    width: 100%;
  }
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const Signup = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Input label="Email" placeholder="example@email.com" clearable />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Confirm email"
          placeholder="example@email.com"
          clearable
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Password"
          type="password"
          placeholder="*******"
          clearable
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="confirm password"
          type="password"
          placeholder="*******"
          clearable
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button shadow color="gradient" icon={<MdCreate />} auto>
          Create Account
        </Button>
      </ButtonWrapper>
      <FooterWrapper>
        <Button light color="primary" auto>
          Already have an account?
        </Button>
      </FooterWrapper>
    </Wrapper>
  );
};

export default Signup;
