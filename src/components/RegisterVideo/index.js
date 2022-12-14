import { StyledRegisterVideo } from "./styles";
import React from "react";

//custon hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues)
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value
            });
        },
        clearForm() {
            setValues({})
        }
    }
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "blablabla", url: "https://youtube..."}
    });
    const [formVisivel, setFormVisivel] = React.useState(true);
    

    // oque precisa para o form funcionar
    // pegar os dados, que precisam vir do state: titulo e url do video
    // precisamos ter um onSubmit do nosso form
    // limpar o form após o submit
    
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel 
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        setFormVisivel(false)
                        formCadastro.clearForm()
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Título do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                placeholder="URL" 
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : null}
            
        </StyledRegisterVideo>
    )
}


// falta o botão para adicionar ok
    // modal ok
    // => precisamos controlar o state ok
    // => formuario em si dentro do modal ok