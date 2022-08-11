import ThemeProvider from "../hooks/ThemeProvider";
import FunctionalUseContext from "./context/FunctionalUseContext";

function MainUseContext() {
  return (
    <>
      <ThemeProvider>
        <FunctionalUseContext />
      </ThemeProvider>
    </>
  );
}

export default MainUseContext;
