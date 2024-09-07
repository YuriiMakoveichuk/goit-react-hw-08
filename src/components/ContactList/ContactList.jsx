import Contact from "../Contact/Contact";

// import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";

import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filters/selection";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operation";
import toast from "react-hot-toast";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success("Contacts loaded successfully");
      });
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {contacts?.length === 0 && <li>Your contacts list is empty</li>}
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
