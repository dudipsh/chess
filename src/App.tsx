import React from "react";
import "./App.css";
import { ChessBoard } from "./components/ChessBoard/ChessBoard";
import { Color, Theme } from "./common/enums";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  const [theme, setTheme] = React.useState<Theme>(Theme.Brown);
  return (
    <div className="app">
      <div className="flex justify-center">Choose a color:</div>
      <div className="flex justify-center">
        <div className="flex">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => setTheme(Theme.Green)}>Green</Button>
            <Button onClick={() => setTheme(Theme.Brown)}>Brown</Button>
          </ButtonGroup>
        </div>
      </div>
      <ChessBoard playAs={Color.White} theme={theme} />
    </div>
  );
}

export default App;
