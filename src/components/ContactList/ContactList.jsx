import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";

import { FcOk } from "react-icons/fc";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/operations";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

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
      {contacts?.length === 0 && (
        <p className={css.text}>
          Your contacts list is empty <FcOk />
        </p>
      )}
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
