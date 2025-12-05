import { useState } from "react";
import styles from "./App.module.css";

const EuroChangeCalculator: React.FC = () => {
  const [given, setGiven] = useState<string>("");
  const [price, setPrice] = useState<string>("");

const sanitizeNumber = (value: string) => {
  let sanitized = value.replace(",", ".");

  sanitized = sanitized.replace(/[^\d.]/g, "");

  return sanitized;
};

const setGivenPriceHandler = (value: string) => {
  const cleaned = sanitizeNumber(value);
  setGiven(cleaned);
};

const setPriceHandler = (value: string) => {
  const cleaned = sanitizeNumber(value);
  setPrice(cleaned);
};




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
        onChange={(e) => setGivenPriceHandler(e.target.value)}
        type="number"
        step="0.01"
      />

      <input
        className={styles.input}
        placeholder="Цена (лв)"
        value={price}
        onChange={(e) =>setPriceHandler(e.target.value)}
        type="number"
        step="0.01"

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
