import "modern-normalize/modern-normalize.css";
import { AppHeader } from "./layout/app-header/app-header";
import { AppMain } from "./layout/app-main/app-main";
import { Performance } from "./pages/performance-page/performance-page";

function App() {
  return (
    <>
      <AppHeader />
      <AppMain>
        <Performance />
      </AppMain>
    </>
  );
}

export default App;
