import LoginForm from "../../components/LoginForm/LoginForm";
import { Section } from "../../components/Section/Section";
import { Container } from "../../Container/Container";

const LoginPage = () => {
  return (
    <>
      <Section>
        <Container>
          <LoginForm />
        </Container>
      </Section>
    </>
  );
};

export default LoginPage;
