import { useState } from "react";
import styles from "./App.module.css";

const EuroChangeCalculator: React.FC = () => {
  const [given, setGiven] = useState<string>("");
  const [price, setPrice] = useState<string>("");

/**
 * Sanitize input to allow only valid numeric values with dot as decimal separator
 * @param value Input string to sanitize
 * @returns Sanitized numeric string
 */
const sanitizeNumber = (value: string) => {

  //Replace comma with dot
  let sanitized = value.replace(",", ".");
  //Remove all non-numeric and non-dot characters
  sanitized = sanitized.replace(/[^\d.]/g, "");

  return sanitized;
};


// /**
//  * Set given price after sanitizing input
//  * @param value Input string for given price
//  */
// const setGivenPriceHandler = (value: string) => {
//   const cleaned = sanitizeNumber(value);
//   setGiven(cleaned);
// };
// /**
//  * Set price after sanitizing input
//  * @param value Input string for price
//  */
// const setPriceHandler = (value: string) => {
//   const cleaned = sanitizeNumber(value);
//   setPrice(cleaned);
// };

  const rate:number = 1.95583;

  const changeBGN:number = Number(given) - Number(price);
  const changeEUR:number = changeBGN > 0 ? changeBGN / rate : 0;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Ресто (лв → €)</h1>

      <input
        className={styles.input}
        placeholder="Дадена сума (лв)"
        value={given}
        onChange={(e) => setGiven(sanitizeNumber(e.target.value))}
        type="text"
      />

      <input
        className={styles.input}
        placeholder="Цена (лв)"
        value={price}
        onChange={(e) =>setPrice(sanitizeNumber(e.target.value))}
        type="text"

      />

      <div className={styles.resultBox}>
        <p>Ресто в лева: <strong>{changeBGN > 0 ? changeBGN.toFixed(2) : "0.00"} лв</strong></p>
        <p>Ресто в евро: <strong>{changeEUR > 0 ? changeEUR.toFixed(2) : "0.00"} €</strong></p>
      </div>
      <button className={styles.resetButton} onClick={() => { setGiven(""); setPrice(""); }}>Изчисти</button>
      <p className={styles.footer}>Курс: 1 € = 1.95583 лв</p>
    </div>
  );
};

export default EuroChangeCalculator;
