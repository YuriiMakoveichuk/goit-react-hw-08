import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Section } from "../../components/Section/Section";
import { Container } from "../../Container/Container";

const RegistrationPage = () => {
  return (
    <>
      <Section>
        <Container>
          <RegistrationForm />
        </Container>
      </Section>
    </>
  );
};

export default RegistrationPage;
