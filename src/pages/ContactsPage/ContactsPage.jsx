import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { Section } from "../../components/Section/Section";
import { Container } from "../../Container/Container";

const ContactsPage = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section>
        <Container>
          <h1>Phonebook</h1>
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
