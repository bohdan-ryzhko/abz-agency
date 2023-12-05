import { ThemeProvider, createTheme } from "@material-ui/core";
import { Header, Notifications } from "./components";
import { CreateUser, Hero, Users } from "./sections";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Nunito, sans-serif",
    },
    palette: {
      primary: {
        main: "#00BDD3",
      },
      error: {
        main: "#CB3D40",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Users />
      <CreateUser />
      <Notifications />
    </ThemeProvider>
  );
}

export default App;
