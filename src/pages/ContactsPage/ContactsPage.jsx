import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
// import { selectError, selectLoading } from "../../redux/contactsSlice";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
import { Section } from "../../components/Section/Section";
import { Container } from "../../Container/Container";
// import { fetchContacts } from "../../redux/contacts/operation";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { Toaster } from "react-hot-toast";

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
