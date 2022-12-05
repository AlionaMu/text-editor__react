import { CardsList } from "./components/CardsList/CardsList";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { TagsList } from "./components/TagsList/TagsList";
import { useTranslation } from "react-i18next";

function App() {
  // const { t, i18n } = useTranslation();
  // const changeLanguage = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <section className="container">
          <Form></Form>
          <TagsList></TagsList>
        </section>
        <CardsList></CardsList>
      </main>
    </div>
  );
}

export default App;

// <Header changeLanguage={changeLanguage} t={t}></Header>
