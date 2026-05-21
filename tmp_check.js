
function scheduleNextTournament(reason) {
    if(seasonRestartTimer) clearTimeout(seasonRestartTimer);
    if(seasonRestartInterval) clearInterval(seasonRestartInterval);
    let wait = 8;
    seasonRestartInterval = setInterval(() => {
        wait -= 1;
        if(wait <= 0) {
            clearInterval(seasonRestartInterval);
        }
    }, 1000);
    seasonRestartTimer = setTimeout(() => {
        addTweet("CS2 Calendar", "🔥 Время прошло. Начинается новый турнир!");
        if(myTeam && myTeam.roster.length >= TEAM_ROSTER_LIMIT) {
            generateTournamentBracket();
        } else {
            alert('Ростер не полный, новый турнир не может начаться. Достройте состав до 5 игроков.');
        }
    }, wait * 1000);
}

function autoSimulateRemainingBracket() {
    if(bracketAutoRestarted) return;
    bracketAutoRestarted = true;

    if(bracketMatches.semi1.simulated && bracketMatches.semi1.winner.id !== myTeam.id) {
        if(!bracketMatches.final.teamA) {
            bracketMatches.final.teamA = bracketMatches.semi1.winner;
        }
        if(!bracketMatches.final.simulated) {
            let teamA = bracketMatches.final.teamA;
            let teamB = bracketMatches.final.teamB;
            let result = simulateBo3Result();
            bracketMatches.final.simulated = true;
            bracketMatches.final.scoreA = result.scoreA;
            bracketMatches.final.scoreB = result.scoreB;
            bracketMatches.final.winner = result.winner === 'A' ? teamA : teamB;
            addTweet("HLTV Results", `🔁 Финал досимулирован: ${teamA.name} ${result.scoreA}:${result.scoreB} ${teamB.name}.`);
            renderBracketView();
        }
    }

    setTimeout(() => {
        addTweet("CS2 Calendar", "🏁 Турнир завершен. Готовится новый старт...");
        if(myTeam && myTeam.roster.length >= TEAM_ROSTER_LIMIT) {
            generateTournamentBracket();
        }
    }, 2200);
}

function simulateBo3Result() {
    let winner = Math.random() < 0.5 ? 'A' : 'B';
    let loserScore = Math.floor(Math.random() * 2);
    return winner === 'A'
        ? { scoreA: 2, scoreB: loserScore, winner: 'A' }
        : { scoreA: loserScore, scoreB: 2, winner: 'B' };
}

// СЛУЧАЙНЫЕ ЧП ПЕРЕД МАТЧЕМ (ИНЦИДЕНТЫ)
function checkIncidentsBeforeMatch() {
    let roll = Math.random();
    if(roll < 0.4) {
        // Происходит случайное событие
        triggerRandomIncident();
    } else {
        startVetoStage();
    }
}

function triggerRandomIncident() {
    let modal = document.getElementById("event-modal");
    let title = document.getElementById("event-title");
    let desc = document.getElementById("event-desc");
    let opts = document.getElementById("event-options-container");
    opts.innerHTML = "";
    
    let p = myTeam.roster[Math.floor(Math.random()*myTeam.roster.length)];
    
    const events = [
        {
            title: `🎮 Сбой девайсов у ${p.name}`,
            desc: `У игрока ${p.name} прямо перед выходом сломался сенсор мышки Razer Viper Mini, а запасной нет! Что будете делать?`,
            options: [
                { text: "«Купить топовую мышь у админов турнира за $5k»", effect: () => { clubBalance = Math.max(0, clubBalance - 5000); p.moral = 100; p.skill += 1; updateHUD(); startVetoStage(); } },
                { text: "«Пусть играет на старой офисной мышке»", effect: () => { p.skill = Math.max(50, p.skill - 6); p.moral = Math.max(10, p.moral - 25); startVetoStage(); } }