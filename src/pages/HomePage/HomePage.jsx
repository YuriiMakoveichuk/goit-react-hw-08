import { Section } from "../../components/Section/Section";
import { Container } from "../../Container/Container";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Section>
        <Container>
          <h1 className={css.text}>Contacts manager welcome page 🙋‍♀️</h1>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
