import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../cartSlice';
import axios from 'axios';
import styles from './OrderForm.module.scss';

interface OrderFormProps {
  items: CartItem[];
}

const OrderForm: React.FC<OrderFormProps> = ({ items }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
    products: []
  });

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const API_URL = 'http://localhost:5000/orders';

    const orderData = {
      ...formData,
      products: items.map((item) => ({
        _id: item.product._id,
        quantity: item.quantity
      }))
    };

    axios
      .post(API_URL, orderData)
      .then((response) => {
        console.log('Order submitted successfully', response.data);
        navigate('/thank-you');
      })
      .catch((error) => {
        console.error('Error submitting order', error);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleOrderSubmit}>
      <div className={styles.form__container}>
        <fieldset className={styles.form__fieldset}>
          <div className={styles.form__group}>
            <label htmlFor="full-name" className={styles.form__label}>
              Full Name*
            </label>
            <input
              type="text"
              id="full-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.form__input}
              placeholder="Your full name"
            />
          </div>

          <div className={styles.form__group}>
            <label htmlFor="email" className={styles.form__label}>
              Your Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.form__input}
              placeholder="example@yourmail.com"
            />
          </div>

          <div className={styles.form__group}>
            <label htmlFor="address" className={styles.form__label}>
              Address*
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={styles.form__input}
              placeholder="Your company address"
            />
          </div>

          <div className={styles.form__group}>
            <label htmlFor="phone" className={styles.form__label}>
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.form__input}
              placeholder="Enter your phone number"
            />
          </div>
        </fieldset>

        <div className={styles.form__group}>
          <label htmlFor="message" className={styles.form__label}>
            Message*
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className={styles.form__textarea}
            placeholder="Some extra information"
          ></textarea>
        </div>

        <div className={styles.form__submit}>
          <button type="submit">Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
