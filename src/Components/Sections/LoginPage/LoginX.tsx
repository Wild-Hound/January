import { Button, Input } from "@nextui-org/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { MdLogin } from "react-icons/md";
import { useDispatch } from "react-redux";
import { updateIsAuth } from "../../../Lib/Redux/Actions";
import { useNavigate, useLocation } from "react-router-dom";

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

const LoginX = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <Wrapper>
      <InputWrapper>
        <Input label="Email" placeholder="example@email.com" clearable />
      </InputWrapper>
      <InputWrapper>
        <Input
          label="Password"
          type="password"
          placeholder="*******"
          clearable
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          shadow
          color="gradient"
          icon={<MdLogin />}
          auto
          onClick={() => {
            dispatch(updateIsAuth(true));
            navigate(-1);
          }}
        >
          Login
        </Button>
      </ButtonWrapper>
      <FooterWrapper>
        <Button light color="primary" auto>
          Create account
        </Button>
        <Button light color="error" auto>
          Forgot password
        </Button>
      </FooterWrapper>
    </Wrapper>
  );
};

export default LoginX;
