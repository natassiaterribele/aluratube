import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";


function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
                <Favorites favorites={config.favorites}></Favorites>
            </div>
        </>    
    )
}

export default HomePage


const StyledHeader = styled.div`
    .banner {
        width: 100%;
        height: 50vh;
    }
    .banner img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px
    }
    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <div className="banner">
                <img src={config.banner}/>
            </div>
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

function Favorites(props) {
    const favoritesList = Object.keys(props.favorites);

    return (
        <StyledFavorites>
            {favoritesList.map((favorite) => {
                const channels = props.favorites[favorite];
                return (
                    <section>
                        <h2>{favorite}</h2>
                        <div>
                            {channels.map((channel) => {
                                return (
                                    <a href={channel.url}>
                                        <img src={channel.img} />
                                        <span>
                                            {channel.name}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledFavorites>
    )
}