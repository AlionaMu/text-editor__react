import { CardsList } from "./components/CardsList/CardsList";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import TagsList from "./components/TagsList/TagsList";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TagService } from "./services/TagService";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    console.log("change", language);
    i18n.changeLanguage(language);
  };

  const list = TagService.getAllTags();
  const [tagsList, setTagsList] = useState(list);

  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} t={t}></Header>
      <main className="main">
        <section className="container">
          <Form t={t} setTagsList={setTagsList}></Form>
          <TagsList items={tagsList} setTagsList={setTagsList}></TagsList>
        </section>
        <CardsList></CardsList>
      </main>
    </div>
  );
}

export default App;
