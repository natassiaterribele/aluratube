import React from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => {alert("Você precisa me configurar primeiro")},
    toggleMode: () => {alert("Você precisa me configurar primeiro")}
});

// sabe o mode, troca o modo (toggle), deixa definir um específico (set)
//colormodeprovider envolve a aplicação toda (myapp)
export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode)
    
    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
          
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}