import { CardsList } from "./components/CardsList/CardsList";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import TagsList from "./components/TagsList/TagsList";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TagService } from "./services/TagService";
import { NoteService } from "./services/NoteService";

import { ThemeContext } from "./context/theme-context";

function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem("default-theme");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const list = TagService.getAllTags();
  const [tagsList, setTagsList] = useState(list);
  const notesStorageList = NoteService.getNotes();
  const [notesList, setNotesList] = useState(notesStorageList);
  const [filter, setFilter] = useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className="App">
          <Header changeLanguage={changeLanguage} t={t}></Header>
          <main className="main">
            <section className="container">
              <Form
                t={t}
                setTagsList={setTagsList}
                setNotesList={setNotesList}
              ></Form>
              <TagsList
                items={tagsList}
                setTagsList={setTagsList}
                setFilter={setFilter}
                t={t}
              ></TagsList>
            </section>
            <CardsList
              items={notesList}
              setNotesList={setNotesList}
              setTagsList={setTagsList}
              filter={filter}
              t={t}
            ></CardsList>
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
