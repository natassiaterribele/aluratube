import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Prop Drilling */}
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
        <Favorites favorites={config.favorites}></Favorites>
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

  .banner {
    width: 100%;
    height: 25vw;
    min-height: 200px;
    max-height: 350px;
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
    gap: 16px;
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
        <img src={config.banner} />
      </div>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  //statement
  //retorno por expressao
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        //console.log(playlistName)
        //console.log(videos)
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url} target="_blank">
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Favorites(props) {
  const favoritesList = props.favorites;
  return (
    <StyledFavorites>
      <section>
        <h2>AluraTubes Favoritos</h2>
        <div>
          {favoritesList.map((favorito) => {
            return (
              <a key={favorito.url} href={favorito.url}>
                <img src={favorito.img} />
                <span>{favorito.name}</span>
              </a>
            );
          })}
        </div>
      </section>
    </StyledFavorites>
  );
}
