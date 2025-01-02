import "modern-normalize/modern-normalize.css";
import { AppHeader } from "./components/app-header/app-header";

function App() {
  return (
    <>
      <AppHeader />
      <div
        style={{
          background: "#f7f8f9",
          height: 500,
        }}
      ></div>
    </>
  );
}

export default App;
