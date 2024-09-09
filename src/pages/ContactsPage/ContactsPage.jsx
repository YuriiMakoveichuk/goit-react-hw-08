import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import { Section } from "../../components/Section/Section";
import { Container } from "../../Container/Container";

import { selectError, selectLoading } from "../../redux/contacts/selectors";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <Section>
        <Container>
          <h1>Phonebook</h1>
          <Toaster />
          <ContactForm />
          <SearchBox />
          <div style={{ height: "60px" }}>
            {loading && !error && <Loader />}
          </div>
          <ContactList />
        </Container>
      </Section>
    </>
  );
};

export default ContactsPage;
