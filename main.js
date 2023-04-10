function escolhaGames() {
    var texto;
    var game = document.querySelector("#game").value;

    switch (game) {
        case "Hollow Knight":
            texto = "<img src='https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg?t=1667006028' alt='Imagem do jogo Hollow Knight'><br>Forje seu caminho em Hollow Knight! Uma aventura de ação épica em um vasto reino arruinado de insetos e heróis. Explore cavernas serpenteantes, lute contra criaturas malignas e alie-se a insetos bizarros num estilo clássico 2D desenhado à mão.";
            break;
        case "Rain World":
            texto = "<img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/header.jpg?t=1674137018' alt='Imagem do jogo Rain World'><br>Você é um lesgato, um predador e presa ao mesmo tempo em um ecossistema imperfeito. Pegue sua lança e enfrente os resíduos industriais, caçando comida o suficiente para sobreviver, mas tenha cuidado: outras criaturas maiores têm o mesmo plano... e os lesgatos parecem deliciosos.";
            break;
        case "The Binding of Isaac":
            texto = "<img src='https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg?t=1617174663' alt='Imagem do jogo nomedojogo'><br>The Binding of Isaac: Rebirth é um RPG de ação gerado aleatoriamente com elementos pesados ​​do tipo Rogue. Seguindo Isaac em sua jornada, os jogadores encontrarão tesouros bizarros que mudam a forma de Isaac, dando a ele habilidades super-humanas e permitindo que ele lute contra multidões de criaturas misteriosas, descubra segredos";
            break;
        case "Phasmophobia":
            texto = "<img src='https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1674232976' alt='Imagem do jogo nomedojogo'><br>Phasmophobia é um jogo de terror psicológico cooperativo online para 4 jogadores. A atividade paranormal está em ascensão e cabe a você e sua equipe usar todo o equipamento de caça fantasma à sua disposição para reunir o máximo de evidências possível.";
            break;
        default:
            texto = "Escolha um jogo"
    }

    document.querySelector("#frase").innerHTML = texto
    document.querySelector(".resposta").style.display = "inline";

}

/* case "nomedojogo":
    texto = "<img src='' alt='Imagem do jogo nomedojogo'><br>texto";
    break; */