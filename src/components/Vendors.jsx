/*

    navigate("/new-page");

*/

import "./Login.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Vendors() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  const fetchData = async (e) => {
    try {
      let result = await axios.get("http://194.87.239.231:55555/api/vendor", {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          User: `${localStorage.getItem("login")}`,
        },
      });
      setVendors(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  let vendors2 = [];
  useEffect(() => {
    fetchData();
  }, []);

  const [contact, setContact] = useState([
    {
      id: "100126e6-c2c5-11eb-9674-a8a1595a0d25",
      info: "123 456",
    },
  ]);

  const getContact = async (id) => {
    try {
      let res = await axios.get(
        `http://194.87.239.231:55555/api/VendorContact/${id}`,
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            User: `${localStorage.getItem("login")}`,
          },
        }
      );
      res = res.data;
      setContact(res);
      //   return res;
      //setContact(res.map((el) => ({ id: el.id, info: el.name })));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (!(contact.length && contact[0].vendorID)) return;
    console.log(contact);
    let resVendors = vendors.map((vendor) => ({
      ...vendor,
      contacts:
        vendor.id === contact[0].vendorID
          ? contact.map((c) => ({
              id: c.id,
              name: c.name,
              contact: c.contact,
              type: c.type,
            }))
          : null,
    }));
    setVendors(resVendors);
  }, [contact]);
  //   if (vendors)
  vendors2 = vendors.map((vendor) => ({
    ...vendor,
  }));
  console.log(vendors2);
  let res = [];
  vendors2.forEach((vendor) => {
    console.log(vendor.contacts);
    res.push(
      <tr onClick={() => getContact(vendor.id)}>
        <td>{vendor.name}</td>
        <td>{vendor.code}</td>
      </tr>
    );

    if (vendor.contacts) {
      let href = `https://web.whatsapp.com/send?phone=${contact.contact}&text=Привет! Пришли, пожалуйста, прайс-лист на наш сервис *https://vinopark.ru* %0aCпасибо`;
      res.push(
        <tr key={vendor.id}>
          <th scope="row" colSpan="2">
            {vendor.contacts.map((contact) => (
              <div>
                {contact.name}:{" "}
                {contact.type === 2 ? (
                  <a href={href} data-action="share/whatsapp/share">
                    Share via Whatsapp web
                  </a>
                ) : (
                  contact.contact
                )}
              </div>
            ))}{" "}
          </th>
        </tr>
      );
    }
  });
  return (
    <table border="1">
      <tr key={1}>
        <th>Название</th>
        <th>Код</th>
      </tr>

      {res}
    </table>
  );
}

export default Vendors;
