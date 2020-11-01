import React from "react";
import { App as WordsApp } from "words-app-components";
import "words-app-components/dist/index.css";

import styles from "./App.module.css";

const App = () => <WordsApp className={styles.app} />;

export default App;
