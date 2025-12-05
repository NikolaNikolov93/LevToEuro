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



  const rate:number = 1.95583;

  const changeBGN:number = Number(given) - Number(price);
  const changeEUR:number = changeBGN > 0 ? changeBGN / rate : 0;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Конвертиране на рестото от лев в евро(лв → €)</h1>
      <div className={styles.inputGroup}>
  <input
    id="given"
    className={styles.inputFloating}
    type="text"
    inputMode="decimal"
    value={given}
    onChange={(e) => setGiven(sanitizeNumber(e.target.value))}
    required
  />
  <label htmlFor="given" className={styles.floatingLabel}>
    Дадена сума (лв)
  </label>
</div>

<div className={styles.inputGroup}>
  <input
    id="price"
    className={styles.inputFloating}
    type="text"
    inputMode="decimal"
    value={price}
    onChange={(e) => setPrice(sanitizeNumber(e.target.value))}
    required
  />
  <label htmlFor="price" className={styles.floatingLabel}>
    Цена (лв)
  </label>
</div>

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
