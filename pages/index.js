import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    //ao inves de digitar direto dentro da tag o css, posso usar variável
    const estiloDaHomePage = { 
        //backgroundColor: "red" 
    };

    //console.log(config.playlists);

    return ( //usando parenteses posso quebrar linha após return
        <>
            <CSSReset />
            <div style={estiloDaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>    
    )
}

export default HomePage


// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/*<img src="banner" />*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
            
        </StyledHeader>
    )
}

function Timeline(props) {
    //console.log("Dentro do componente", props.playlists);
    const playlistNames = Object.keys(props.playlists);
    //statement
    //retorno por expressao
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(playlistName)
                console.log(videos)
                    return (
                        <section>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.map((video) => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a> 
                                    )
                                })}
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}