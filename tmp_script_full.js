
const IMG_DIR = "img/";
const LOGOS = {
    Vitality: IMG_DIR + "Team_Vitality.png", NAVI: IMG_DIR + "Navi-Logo.png", Spirit: IMG_DIR + "Team_Spirit.png",
    Paravision: IMG_DIR + "PARIVISION.png", FUT: IMG_DIR + "FUT.png", Falcons: IMG_DIR + "Falcons.png",
    Furia: IMG_DIR + "Furia.png", Aurora: IMG_DIR + "Aur.png", Mongolz: IMG_DIR + "Mongolz.png",
    Astralis: IMG_DIR + "Astralis.png", MOUZ: IMG_DIR + "mouz.png", G2: IMG_DIR + "G2.png",
    GL: IMG_DIR + "GamerLegion.png", Legacy: IMG_DIR + "Legacy.png", BCGAME: IMG_DIR + "bcgame.png",
    FaZe: IMG_DIR + "FaZe.png", VP: IMG_DIR + "Virtus.pro.png", Liquid: IMG_DIR + "Liquid.png", Complexity: IMG_DIR + "Complexity.png" // эти оставим в кэше
};

const AVATARS = {
    "b1t": "b1t.png", "jl": "jL.png", "im": "iM.png", "w0nderful": "w0nderful.png", "aleksib": "Aleksib.png",
    "ropz": "ropz.png", "broky": "BROKY1.png", "frozen": "frozen.png", "rain": "rain.png", "karrigan": "karrigan.png",
    "donk": "donk.png", "sh1ro": "sh1ro.png", "chopper": "Chopper.png", "magixx": "Magixx.png", "zont1x": "zont1x.png",
    "m0nesy": "m0NESY.png", "niko": "niko.png", "hunter": "hunter.png", "snax": "Snax.png", "malbsmd": "malsbsmd.png",
    "s1mple": "simple.png", "dupreeh": "dupreeh.png", "magisk": "magisk.png", "maden": "maden.png", "snappi": "snappi.png",
    "fallen": "fallen.png", "kscerato": "kscerato.png", "yuurih": "yuurih.png", "chelo": "chelo.png", "skullz": "skullz.png",
    "lack1": "lack1.png", "kensi": "kensi.png", "norwi": "norwi.png", "deko": "deko.png", "r3salt": "r3salt.png",
    "jerry": "jerry.png", "artfr0st": "artfrost.png", "art": "art.png", "qikert": "qikert.png", "patsi": "patsi.png", "fl4mus": "fl4mus.png",
    "jame": "kame.png", "fl1t": "fl1t.png", "fame": "fame.png", "n0rb3r7": "n0rb3r7.png", "electronic": "elictronic.png",
    "torzsi": "torzsi.png", "xertion": "xertion.png", "xelex": "xelex.png", "siuhy": "siuhy.png", "jimpphat": "jimpphat.png", "brollan": "brollan.png",
    "twistzz": "twistzz.png", "naf": "naf.png", "yekindar": "yekindar.png", "ultimate": "ultimate.png", "jks": "jks.png",
    "elige": "elige.png", "jt": "jt.png", "grim": "grim.png", "floppy": "floppy.png", "hallzerk": "hallzerk.png",
    "zywoo": "Zywoo.png", "apex": "apEX.png", "spinx": "Spinx.png", "flamez": "flamez.png", "mezii": "mezil.png",
    "perfecto": "perfecto.png", "nafany": "nafany.png", "degster": "degster.png", "smooya": "smooya.png", "aunkere": "aunkere.png",
    "fear": "fear.png", "makazze": "makazze.png", "tN1R": "tN1r.png", "BELCHONOKK": "belchonokk.png", "xiELO": "xielo.png", 
    "nota": "nota.png", "zweih": "zweih.png", "kyousuke": "kyousuke.png", "molodoy": "molodoy.png", "soulfly": "soulfly.png", 
    "mzinho": "mzinho.png", "senzu": "senzu.png", "910": "910.png", "blitz": "blitz.png", "techno": "techno.png",
    "hooxi": "hooxi.png", "phzy": "phzy.png", "jabbi": "jabbi.png", "staehr": "staehr.png", "ryu": "ryu.png",
    "dem0n": "dem0n.png", "launx": "launx.png", "krabeni": "krabeni.png", "cmtry": "cmtry.png", "dziugss": "dziugss.png",
    "XANTARES": "xantares.png", "woxic": "woxic.png", "MAJ3R": "maj3r.png", "Wicadia": "wicadia.png", "HeavyGod": "heavygod.png", 
    "hunter-": "hunter.png", "nertz": "nertz.png", "sunpayus": "sunpayus.png", "matys": "matys.png", 
    "PR": "pr.png", "Tauson": "tauson.png", "hypex": "hypex.png", 
    "hades": "hades.png", "imoRR": "imorr.png", "xfl0ud": "xfl0ud.png", "jottAAA": "jottaaa.png", "ztr": "ztr.png", 
    "REZ": "rez.png", "saadzin": "saadzin.png", "lux": "lux.png", "dumau": "dumau.png", "latto": "latto.png", "n1ssim": "nissim.png", "TeSeS": "teses.png", "kyxsan": "kyxsan.png", "Krazy": "krazy.png", "Scrunk": "scrunk.png",  

    // Дубликаты в нижнем регистре на случай несовпадения шрифтов в массивах команд
    "tn1r": "tN1r.png", "belchonokk": "belchonokk.png", "xielo": "xielo.png", "heavygod": "heavygod.png", 
    "xantares": "xantares.png", "maj3r": "maj3r.png", "wicadia": "wicadia.png", "imorr": "imorr.png", 
    "jottaaa": "jottaaa.png", "rez": "rez.png", "pr": "pr.png", "tauson": "tauson.png", "hypex": "hypex.png", "malbsmd": "malsbsmd.png",
    "teses": "teses.png", "kyxsan": "kyxsan.png", "dumau": "dumau.png", "latto": "latto.png", "n1ssim": "nissim.png", "krazy": "krazy.png", "scrunk": "scrunk.png", "nota": "nota.png", "zweih": "zweih.png", "soulfly": "soulfly.png", "woxic": "woxic.png",
    "default": "https://liquipedia.net/commons/images/a/a2/No_avatar.png"
};

function getPlayerAvatar(name) {
    if(!name) return AVATARS['default'];
    let cleanName = name.toString().trim().toLowerCase();
    return AVATARS[cleanName] ? IMG_DIR + AVATARS[cleanName] : AVATARS['default'];
}

const MAP_IMAGES = {
    "Mirage": IMG_DIR + "mirage.png", "Inferno": IMG_DIR + "inferno.png", "Nuke": IMG_DIR + "nuke.png", 
    "Ancient": IMG_DIR + "ancient.png", "Anubis": IMG_DIR + "anubis.png", "Dust 2": IMG_DIR + "dust2.png", "Vertigo": IMG_DIR + "vertigo.png"
};

const INITIAL_TOURNAMENT_SCHEDULE = [
    {name: 'PGL Season 1', type: 'PGL', status: 'Ожидается', result: '-', stage: '-' },
    {name: 'PGL Season 2', type: 'PGL', status: 'Ожидается', result: '-', stage: '-' },
    {name: 'PGL Season 3', type: 'PGL', status: 'Ожидается', result: '-', stage: '-' },
    {name: 'MAJOR 2026', type: 'Major', status: 'Ожидается', result: '-', stage: '-' }
];

let seasonState = {
    tournaments: [],
    currentIndex: 0,
    pglWins: 0,
    majorWins: 0,
    startSkill: 0,
    startValue: 0,
    startKD: 0
};

function initSeasonState() {
    seasonState.tournaments = INITIAL_TOURNAMENT_SCHEDULE.map(item => ({...item}));
    seasonState.currentIndex = 0;
    seasonState.pglWins = 0;
    seasonState.majorWins = 0;
    seasonState.hltvPointsGained = 0;
    seasonState.startSkill = Math.round(myTeam.roster.reduce((sum, p) => sum + p.skill, 0) / myTeam.roster.length);
    seasonState.startValue = myTeam.roster.reduce((sum, p) => sum + (p.price || getTransferOfferPrice(p)), 0);
    seasonState.startKD = calculateTeamAverageKD(myTeam);
    myTeam.roster.forEach(p => {
        p.startSkill = p.skill;
        p.startPrice = p.price || getTransferOfferPrice(p);
        p.startKD = parseFloat(p.kd) || 1.00;
    });
    playoffTeams = [];
    bracketMatches = { semi1: null, semi2: null, final: null };
    currentOpponentTeam = null;
    bracketAutoRestarted = false;
    currentMapIdx = 0;
    matchMaps = [];
    seriesScoreA = 0;
    seriesScoreB = 0;
    renderTournamentCalendar();
    updateNextTournamentPanel();
}

function getTournamentLogoBadge(type) {
    let logoSrc = type === 'PGL' ? IMG_DIR + 'pgl.png' : IMG_DIR + 'major.png';
    return `<img class="tournament-logo-img" src="${logoSrc}" alt="${type} логотип" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">`;
}

function calculateTeamAverageKD(team) {
    if(!team || !team.roster || !team.roster.length) return 1.00;
    let sum = 0;
    let count = 0;
    team.roster.forEach(p => {
        let kd = parseFloat(p.kd);
        if(isNaN(kd)) kd = 1.00;
        sum += kd;
        count += 1;
    });
    return count ? parseFloat((sum / count).toFixed(2)) : 1.00;
}

function renderTournamentCalendar() {
    let container = document.getElementById('tournament-calendar');
    if(!container) return;
    container.innerHTML = '';
    seasonState.tournaments.forEach((t, idx) => {
        container.innerHTML += `
            <div class="tournament-row">
                <div class="tournament-name">${getTournamentLogoBadge(t.type)}<span>${t.name}</span></div>
                <div style="text-align:right;">
                    <div class="tournament-status">${t.status}</div>
                    <div style="font-size:12px; color:var(--text-muted);">${t.result}${t.stage ? ' / ' + t.stage : ''}</div>
                </div>
            </div>
        `;
    });
}

function updateNextTournamentPanel() {
    let title = document.getElementById('next-tournament-title');
    let button = document.getElementById('btn-start-tournament');
    if(!title || !button) return;
    if(seasonState.currentIndex >= seasonState.tournaments.length) {
        title.innerText = 'Сезон завершен';
        button.innerText = 'Показать итоги сезона';
    } else {
        let next = seasonState.tournaments[seasonState.currentIndex];
        title.innerText = next.name;
        button.innerText = `Начать ${next.type}`;
    }
}

function startNextTournament() {
    if(!myTeam) {
        alert('Сначала выберите команду для управления.');
        return;
    }
    if(seasonState.currentIndex >= seasonState.tournaments.length) {
        showSeasonSummary();
        return;
    }
    generateTournamentBracket();
}

function showSeasonSummary() {
    let modal = document.getElementById('season-summary-modal');
    let content = document.getElementById('season-summary-content');
    if(!modal || !content) return;

    let currentSkill = Math.round(myTeam.roster.reduce((sum, p) => sum + p.skill, 0) / myTeam.roster.length);
    let currentValue = myTeam.roster.reduce((sum, p) => sum + (p.price || getTransferOfferPrice(p)), 0);
    let currentKD = calculateTeamAverageKD(myTeam);
    let skillDelta = currentSkill - seasonState.startSkill;
    let valueDelta = currentValue - seasonState.startValue;
    let kdDelta = parseFloat((currentKD - seasonState.startKD).toFixed(2));

    let tournamentSummary = seasonState.tournaments.map(t => `<div style="display:flex; justify-content:space-between; gap:10px;"><span>${t.name}</span><span style="color:#fff; font-weight:700;">${t.result}${t.stage ? ' / ' + t.stage : ''}</span></div>`).join('');

    content.innerHTML = `
        <div style="display:grid; gap:10px;">
            <div style="display:flex; justify-content:space-between; gap:10px;"><span>Выигранные PGL</span><strong>${seasonState.pglWins} из 3</strong></div>
            <div style="display:flex; justify-content:space-between; gap:10px;"><span>Выигранные Major</span><strong>${seasonState.majorWins} из 1</strong></div>
            <div style="display:flex; justify-content:space-between; gap:10px;"><span>Средний скилл</span><strong>${currentSkill} (${skillDelta >= 0 ? '+' : ''}${skillDelta})</strong></div>
            <div style="display:flex; justify-content:space-between; gap:10px;"><span>Стоимость текущих игроков</span><strong>$${currentValue.toLocaleString()} (${valueDelta >= 0 ? '+' : ''}$${valueDelta.toLocaleString()})</strong></div>
            <div style="display:flex; justify-content:space-between; gap:10px;"><span>Средний K/D команды</span><strong>${currentKD} (${kdDelta >= 0 ? '+' : ''}${kdDelta})</strong></div>
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:14px;">
            <div style="font-weight:900; color:#fff; margin-bottom:8px;">Результаты турниров</div>
            ${tournamentSummary}
        </div>
        <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:14px;">
            <div style="font-weight:900; color:#fff; margin-bottom:10px;">Игроки и прирост</div>
            ${myTeam.roster.map(p => {
                let skillDiff = Math.round(p.skill - (p.startSkill || p.skill));
                let priceDiff = Math.round((p.price || getTransferOfferPrice(p)) - (p.startPrice || (p.price || getTransferOfferPrice(p))));
                let kdDiff = parseFloat(((parseFloat(p.kd) || 1.00) - (p.startKD || (parseFloat(p.kd) || 1.00))).toFixed(2));
                return `
                    <div class="summary-modal-player">
                        <img src="${getPlayerAvatar(p.name)}" class="summary-modal-avatar" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">
                        <div class="summary-modal-player-info">
                            <div class="summary-modal-player-name">${p.name}</div>
                            <div class="summary-modal-player-meta">Скилл: ${p.startSkill} → ${p.skill} (${skillDiff >= 0 ? '+' : ''}${skillDiff})</div>
                            <div class="summary-modal-player-meta">Стоимость: $${(p.startPrice || getTransferOfferPrice(p)).toLocaleString()} → $${(p.price || getTransferOfferPrice(p)).toLocaleString()} (${priceDiff >= 0 ? '+' : ''}$${priceDiff.toLocaleString()})</div>
                            <div class="summary-modal-player-meta">K/D: ${p.startKD.toFixed(2)} → ${parseFloat(p.kd).toFixed(2)} (${kdDiff >= 0 ? '+' : ''}${kdDiff.toFixed(2)})</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    modal.style.display = 'flex';
}

/* Стилизация итогового модального окна сезона — красивый шрифт и свечения */
const seasonModalBox = document.querySelector('#season-summary-modal .modal-box');
if(seasonModalBox) {
    seasonModalBox.style.fontFamily = "Orbitron, 'Inter', sans-serif";
    seasonModalBox.style.textShadow = '0 2px 18px rgba(0,255,204,0.12)';
    seasonModalBox.style.boxShadow = '0 10px 40px rgba(0,255,204,0.06)';
}

function closeSeasonSummary() {
    document.getElementById('season-summary-modal').style.display = 'none';
}

function startNewSeasonFromSummary() {
    closeSeasonSummary();
    initSeasonState();
    updateHUD();
    renderRoster();
    switchMainTab('hub');
    goScreen('screen-main');
    if(typeof addTweet === 'function') {
        addTweet("CS2 News", `🚀 ${myTeam.name} начинает новый сезон!`);
    }
}

function openSeasonOffers() {
    let modal = document.getElementById('season-offer-modal');
    let content = document.getElementById('season-offer-content');
    if(!modal || !content || !myTeam) return;

    let player = myTeam.roster[Math.floor(Math.random() * myTeam.roster.length)] || { name: 'Игрок', price: 20000 };
    let buyerOptions = teamsData.filter(t => t.id !== myTeam.id && t.roster.length < TEAM_ROSTER_LIMIT);
    if(buyerOptions.length === 0) buyerOptions = teamsData.filter(t => t.id !== myTeam.id);
    let sellBuyer = buyerOptions[Math.floor(Math.random() * buyerOptions.length)] || teamsData[0];
    let coachBuyerOptions = teamsData.filter(t => t.id !== myTeam.id && t.id !== sellBuyer.id);
    let coachBuyer = coachBuyerOptions.length ? coachBuyerOptions[Math.floor(Math.random() * coachBuyerOptions.length)] : sellBuyer;
    let sellPrice = Math.round((player.price || getTransferOfferPrice(player)) * 1.1);

    seasonOfferContext = {
        playerName: player.name,
        playerIdx: myTeam.roster.findIndex(p => p.name === player.name),
        buyerName: sellBuyer.name,
        buyerTeamId: sellBuyer.id,
        sellPrice,
        coachBuyerName: coachBuyer.name
    };

    content.innerHTML = `
        <div style="display:grid; gap:14px;">
            <div style="padding:14px; border:1px solid var(--border-color); border-radius:14px; background:rgba(255,255,255,0.02);">
                <div style="font-weight:700; margin-bottom:8px;">Продать ${player.name}</div>
                <div style="color:var(--text-muted); font-size:13px; margin-bottom:12px;">Команда ${sellBuyer.name} предлагает выкупить ${player.name} за $${sellPrice.toLocaleString()}.</div>
                <button class="modal-option-btn" onclick="handleSeasonOffer('sell')">Принять предложение</button>
            </div>
            <div style="padding:14px; border:1px solid var(--border-color); border-radius:14px; background:rgba(255,255,255,0.02); display:flex; gap:12px; align-items:center;">
                <img src="${coachBuyer.logo || 'https://liquipedia.net/commons/images/a/a2/No_avatar.png'}" style="width:64px; height:64px; object-fit:contain; border-radius:8px; border:1px solid rgba(255,255,255,0.04);">
                <div style="flex:1;">
                    <div style="font-weight:700; margin-bottom:6px;">Предложение возглавить: ${coachBuyer.name}</div>
                    <div style="color:var(--text-muted); font-size:13px; margin-bottom:8px;">Организация ${coachBuyer.name} прислала официальное предложение стать главным тренером. Срок вступления — следующий сезон.</div>
                    <button class="modal-option-btn" onclick="handleSeasonOffer('coach')">Оценить предложение</button>
                </div>
            </div>
            <div style="padding:14px; border:1px solid var(--border-color); border-radius:14px; background:rgba(255,255,255,0.02);">
                <div style="font-weight:700; margin-bottom:8px;">Продлить контракт</div>
                <div style="color:var(--text-muted); font-size:13px; margin-bottom:12px;">Клуб предлагает вам продлить контракт на новый сезон с улучшенными условиями и дополнительными бонусами.</div>
                <button class="modal-option-btn" onclick="handleSeasonOffer('extend')">Принять продление</button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeSeasonOffers() {
    document.getElementById('season-offer-modal').style.display = 'none';
}

function handleSeasonOffer(type) {
    closeSeasonOffers();
    if(!myTeam) return;
    if(type === 'sell') {
        // Открываем окно переговоров с ИИ-покупателем
        let item = seasonOfferContext;
        openNegotiation(item.playerName, item.buyerName, item.sellPrice, item.buyerTeamId, item.playerIdx);
        return;
    } else if(type === 'coach') {
        teamChemistry = Math.min(100, teamChemistry + 8);
        addTweet("CS2 News", `🎯 Вы получили предложение возглавить другую команду, но предпочли остаться в ${myTeam.name}. Сыгранность команды выросла.`);
        updateHUD();
    } else if(type === 'extend') {
        teamChemistry = Math.min(100, teamChemistry + 5);
        addTweet("CS2 News", `📝 Контракт продлён: клуб ${myTeam.name} готовит усиленные условия на новый сезон.`);
        updateHUD();
    }
}

function recordTournamentResult(win) {
    if(seasonState.currentIndex >= seasonState.tournaments.length) return;
    let current = seasonState.tournaments[seasonState.currentIndex];
    current.status = 'Завершено';
    current.result = win ? 'Победа' : 'Поражение';
    let isSemiLost = bracketMatches.semi1.simulated && bracketMatches.semi1.winner.id !== myTeam.id;
    current.stage = win ? 'Чемпион' : (isSemiLost ? 'Полуфинал' : 'Финал');
    if(current.type === 'PGL' && win) seasonState.pglWins += 1;
    if(current.type === 'Major' && win) seasonState.majorWins += 1;
    seasonState.currentIndex += 1;
    renderTournamentCalendar();
    updateNextTournamentPanel();
}

// ГЛОБАЛЬНЫЕ ДАННЫЕ ОРГАНИЗАЦИЙ И РОСТЕРОВ (ВСЕ 14 КОМАНД)
let teamsData = [
    { id: "vitality", name: "Team Vitality", logo: LOGOS.Vitality, skill: 93, form: 96, points: 1000, roster: [
        { name: "apEX", skill: 85, moral: 92, role: "IGL", matches: 215, kd: "0.98", salary: 6500 },
        { name: "ZywOo", skill: 97, moral: 95, role: "AWPer", matches: 190, kd: "1.32", salary: 11500 },
        { name: "ropz", skill: 91, moral: 90, role: "Lurker", matches: 180, kd: "1.17", salary: 9000 },
        { name: "flameZ", skill: 89, moral: 90, role: "Entry", matches: 110, kd: "1.12", salary: 5800 },
        { name: "mezii", skill: 84, moral: 88, role: "Support", matches: 95, kd: "1.01", salary: 4900 }
    ]},
    { id: "navi", name: "Natus Vincere", logo: LOGOS.NAVI, skill: 91, form: 94, points: 880, roster: [
        { name: "Aleksib", skill: 86, moral: 95, role: "IGL", matches: 75, kd: "1.04", salary: 7500 },
        { name: "b1t", skill: 91, moral: 92, role: "Rifler", matches: 165, kd: "1.16", salary: 8500 },
        { name: "w0nderful", skill: 92, moral: 93, role: "AWPer", matches: 80, kd: "1.24", salary: 8000 },
        { name: "iM", skill: 88, moral: 90, role: "Rifler", matches: 85, kd: "1.10", salary: 6800 },
        { name: "makazze", skill: 84, moral: 88, role: "Rifler", matches: 45, kd: "1.07", salary: 4000 }
    ]},
    { id: "spirit", name: "Team Spirit", logo: LOGOS.Spirit, skill: 91, form: 91, points: 795, roster: [
        { name: "chopper", skill: 83, moral: 90, role: "IGL", matches: 125, kd: "0.99", salary: 5500 },
        { name: "donk", skill: 97, moral: 94, role: "Rifler", matches: 100, kd: "1.35", salary: 11500 },
        { name: "sh1ro", skill: 94, moral: 90, role: "AWPer", matches: 120, kd: "1.27", salary: 9500 },
        { name: "zont1x", skill: 87, moral: 86, role: "Rifler", matches: 95, kd: "1.07", salary: 5200 },
        { name: "magixx", skill: 84, moral: 91, role: "Anchor", matches: 135, kd: "1.01", salary: 4800 }
    ]},
    { id: "paravision", name: "PARIVISION", logo: LOGOS.Paravision, skill: 85, form: 95, points: 690, roster: [
        { name: "Jame", skill: 87, moral: 90, role: "IGL/AWP", matches: 195, kd: "1.11", salary: 6500 },
        { name: "BELCHONOKK", skill: 85, moral: 89, role: "Rifler", matches: 80, kd: "1.12", salary: 4600 },
        { name: "xiELO", skill: 84, moral: 86, role: "Entry", matches: 65, kd: "1.06", salary: 4200 },
        { name: "nota", skill: 83, moral: 87, role: "Rifler", matches: 70, kd: "1.04", salary: 4100 },
        { name: "zweih", skill: 82, moral: 85, role: "Support", matches: 50, kd: "1.01", salary: 3800 }
    ]},
    { id: "fut", name: "FUT Esports", logo: LOGOS.FUT, skill: 85, form: 92, points: 610, roster: [
        { name: "dem0n", skill: 84, moral: 90, role: "IGL", matches: 180, kd: "1.02", salary: 5200 },
        { name: "lauNX", skill: 86, moral: 88, role: "AWPer", matches: 170, kd: "1.12", salary: 5600 },
        { name: "Krabeni", skill: 83, moral: 86, role: "Entry", matches: 135, kd: "1.05", salary: 4500 },
        { name: "cmtry", skill: 82, moral: 85, role: "Rifler", matches: 120, kd: "1.03", salary: 4300 },
        { name: "dziugss", skill: 81, moral: 84, role: "Support", matches: 90, kd: "0.98", salary: 4000 }
    ]},
    { id: "falcons", name: "Team Falcons", logo: LOGOS.Falcons, skill: 92, form: 83, points: 540, roster: [
        { name: "kyxsan", skill: 83, moral: 88, role: "IGL", matches: 95, kd: "0.97", salary: 5000 },
        { name: "m0NESY", skill: 97, moral: 96, role: "AWPer", matches: 135, kd: "1.32", salary: 11000 },
        { name: "NiKo", skill: 92, moral: 84, role: "Rifler", matches: 180, kd: "1.19", salary: 10000 },
        { name: "TeSeS", skill: 84, moral: 87, role: "Rifler", matches: 190, kd: "1.04", salary: 5200 },
        { name: "kyousuke", skill: 83, moral: 89, role: "Entry", matches: 50, kd: "1.05", salary: 3900 }
    ]},
    { id: "furia", name: "FURIA Esports", logo: LOGOS.Furia, skill: 85, form: 84, points: 490, roster: [
        { name: "FalleN", skill: 82, moral: 95, role: "IGL/AWP", matches: 405, kd: "1.02", salary: 5800 },
        { name: "KSCERATO", skill: 89, moral: 88, role: "Rifler", matches: 210, kd: "1.19", salary: 7000 },
        { name: "yuurih", skill: 85, moral: 87, role: "Rifler", matches: 205, kd: "1.08", salary: 5600 },
        { name: "YEKINDAR", skill: 84, moral: 81, role: "Entry", matches: 175, kd: "1.05", salary: 6200 },
        { name: "molodoy", skill: 81, moral: 86, role: "Support", matches: 40, kd: "0.99", salary: 3600 }
    ]},
    { id: "aurora", name: "Aurora Gaming", logo: LOGOS.Aurora, skill: 86, form: 86, points: 430, roster: [
        { name: "MAJ3R", skill: 81, moral: 90, role: "IGL", matches: 190, kd: "0.95", salary: 4000 },
        { name: "XANTARES", skill: 91, moral: 88, role: "Rifler", matches: 210, kd: "1.22", salary: 7500 },
        { name: "woxic", skill: 86, moral: 84, role: "AWPer", matches: 180, kd: "1.10", salary: 5500 },
        { name: "Wicadia", skill: 84, moral: 86, role: "Rifler", matches: 85, kd: "1.07", salary: 4400 },
        { name: "soulfly", skill: 83, moral: 85, role: "Entry", matches: 90, kd: "1.04", salary: 4100 }
    ]},
    { id: "mongolz", name: "The MongolZ", logo: LOGOS.Mongolz, skill: 86, form: 88, points: 385, roster: [
        { name: "bLitz", skill: 86, moral: 93, role: "IGL", matches: 115, kd: "1.08", salary: 4200 },
        { name: "Techno", skill: 83, moral: 89, role: "Rifler", matches: 120, kd: "1.03", salary: 3900 },
        { name: "910", skill: 86, moral: 92, role: "AWPer", matches: 110, kd: "1.14", salary: 4600 },
        { name: "Senzu", skill: 85, moral: 88, role: "Rifler", matches: 100, kd: "1.09", salary: 4300 },
        { name: "mzinho", skill: 84, moral: 90, role: "Lurker", matches: 105, kd: "1.05", salary: 4000 }
    ]},
    { id: "astralis", name: "Astralis", logo: LOGOS.Astralis, skill: 85, form: 80, points: 340, roster: [
        { name: "HooXi", skill: 87, moral: 86, role: "AWPer", matches: 180, kd: "1.12", salary: 7000 },
        { name: "phzy", skill: 86, moral: 88, role: "IGL", matches: 170, kd: "1.08", salary: 6600 },
        { name: "jabbi", skill: 85, moral: 82, role: "Rifler", matches: 140, kd: "1.06", salary: 5400 },
        { name: "Staehr", skill: 83, moral: 84, role: "Support", matches: 105, kd: "1.02", salary: 4500 },
        { name: "ryu", skill: 84, moral: 85, role: "Entry", matches: 130, kd: "1.04", salary: 5000 }
    ]},
    { id: "mouz", name: "MOUZ", logo: LOGOS.MOUZ, skill: 88, form: 79, points: 295, roster: [
        { name: "torzsi", skill: 88, moral: 85, role: "AWPer", matches: 120, kd: "1.12", salary: 6200 },
        { name: "Spinx", skill: 89, moral: 86, role: "Lurker", matches: 115, kd: "1.13", salary: 6400 },
        { name: "jL", skill: 87, moral: 84, role: "IGL", matches: 95, kd: "1.05", salary: 5600 },
        { name: "xertioN", skill: 87, moral: 86, role: "Entry", matches: 110, kd: "1.11", salary: 6000 },
        { name: "xelex", skill: 86, moral: 85, role: "Rifler", matches: 100, kd: "1.08", salary: 5800 }
    ]},
    { id: "g2", name: "G2 Esports", logo: LOGOS.G2, skill: 86, form: 76, points: 260, roster: [
        { name: "huNter-", skill: 86, moral: 85, role: "Rifler", matches: 175, kd: "1.05", salary: 6200 },
        { name: "NertZ", skill: 84, moral: 84, role: "Entry", matches: 60, kd: "1.02", salary: 5400 },
        { name: "SunPayus", skill: 83, moral: 82, role: "AWPer", matches: 55, kd: "1.05", salary: 5600 },
        { name: "HeavyGod", skill: 85, moral: 88, role: "Rifler", matches: 70, kd: "1.10", salary: 4600 },
        { name: "MATYS", skill: 82, moral: 80, role: "Support", matches: 50, kd: "0.98", salary: 4200 }
    ]},
    { id: "gl", name: "GamerLegion", logo: LOGOS.GL, skill: 83, form: 84, points: 210, roster: [
        { name: "Snax", skill: 82, moral: 85, role: "IGL", matches: 70, kd: "0.96", salary: 5000 },
        { name: "REZ", skill: 85, moral: 82, role: "Rifler", matches: 210, kd: "1.08", salary: 5000 },
        { name: "Tauson", skill: 81, moral: 85, role: "Support", matches: 60, kd: "0.99", salary: 3200 },
        { name: "PR", skill: 82, moral: 84, role: "Rifler", matches: 45, kd: "1.03", salary: 3300 },
        { name: "hypex", skill: 83, moral: 83, role: "AWPer", matches: 55, kd: "1.05", salary: 3600 }
    ]},
    { id: "legacy", name: "Legacy", logo: LOGOS.Legacy, skill: 82, form: 85, points: 175, roster: [
        { name: "arT", skill: 84, moral: 88, role: "IGL", matches: 105, kd: "1.05", salary: 3900 },
        { name: "saadzin", skill: 84, moral: 88, role: "AWPer", matches: 70, kd: "1.13", salary: 4200 },
        { name: "dumau", skill: 83, moral: 86, role: "Rifler", matches: 95, kd: "1.08", salary: 3600 },
        { name: "latto", skill: 81, moral: 83, role: "Support", matches: 115, kd: "1.01", salary: 3300 },
        { name: "n1ssim", skill: 82, moral: 85, role: "Rifler", matches: 88, kd: "1.06", salary: 3500 }
    ]},
    { id: "bcgame", name: "BC GAME", logo: LOGOS.BCGAME, skill: 79, form: 87, points: 250, roster: [
        { name: "s1mple", skill: 83, moral: 90, role: "AWPer", matches: 250, kd: "1.28", salary: 9000 },
        { name: "ElectroNic", skill: 80, moral: 87, role: "Rifler", matches: 180, kd: "1.15", salary: 6500 },
        { name: "Krazy", skill: 77, moral: 86, role: "IGL", matches: 140, kd: "1.05", salary: 5200 },
        { name: "Scrunk", skill: 72, moral: 85, role: "Support", matches: 120, kd: "1.02", salary: 4500 },
        { name: "Senzu", skill: 81, moral: 88, role: "Entry", matches: 105, kd: "1.08", salary: 4800 }
    ]}
];

// Пул свободных агентов и звезд для трансферов
let marketPlayers = {
    stars: [
        { name: "degster", skill: 87, price: 540000, salary: 7500, role: "AWPer", org: "Heroic" },
        { name: "smooya", skill: 84, price: 550000, salary: 4000, role: "AWPer", org: "Into The Breach" }
    ],
    faceit: [
        { name: "aunkere", skill: 79, price: 18000, salary: 1500, role: "Rifler", org: "Свободный агент" },
        { name: "fear", skill: 80, price: 22000, salary: 1800, role: "IGL", org: "Свободный агент" },
        { name: "nafany", skill: 81, price: 35000, salary: 2800, role: "IGL", org: "BetBoom" }
    ]
};

// СОСТОЯНИЕ ИГРЫ
let myTeam = null;
let currentTab = "hub";
let currentMarketTab = "stars";
let clubBalance = 120000;
let teamChemistry = 75;
let currentSponsor = null;
let boughtUpgrades = { monitors: false, psychologist: false, media: false };

let playoffTeams = [];
let bracketMatches = { semi1: null, semi2: null, final: null };
let currentOpponentTeam = null;

let mapsPool = ["Mirage", "Inferno", "Nuke", "Ancient", "Anubis", "Dust 2", "Vertigo"];
let vetoStage = 0; 
let vetoActiveMaps = [];
let matchMaps = []; 
let currentMapIdx = 0;

let scoreA = 0, scoreB = 0;
let seriesScoreA = 0, seriesScoreB = 0;
let matchPause = false;
let currentTactic = "normal";
let logsTimer = null;
let logLinesCounter = 0;

let activeKickingIndex = -1;

let transferCooldown = 120000; // 2 минуты
const TEAM_ROSTER_LIMIT = 5;
const MIN_ROSTER_SIZE = 4;
let matchSpeed = 1;
let transferActivityTimer = null;
let seasonRestartTimer = null;
let seasonRestartInterval = null;
let bracketAutoRestarted = false;
let seasonOfferContext = {};

// Флаг последнего трансфера для каждой команды
teamsData.forEach(t => { if(typeof t.lastTransferTime === 'undefined') t.lastTransferTime = 0; });

// ИНИЦИАЛИЗАЦИЯ И СТАРТ
window.addEventListener('load', function() {
    renderSelectScreen();
    generateTwitterFeed();
    startTransferMarketSimulation();
});

function goScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo(0,0);
}

function renderSelectScreen() {
    let container = document.getElementById("select-teams-list");
    if(!container) return;
    container.innerHTML = "";
    teamsData.forEach(t => {
        container.innerHTML += `
            <div class="team-select-card" onclick="confirmSelectTeam('${t.id}')" onmouseenter="showTeamPreview('${t.id}', event)" onmouseleave="hideTeamPreview()">
                <img src="${t.logo}" class="team-logo-img" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">
                <h3 style="margin:10px 0 5px 0; font-size:19px;">${t.name}</h3>
                <div style="font-size:13px; color:var(--text-muted); font-family:'JetBrains Mono';">Рейтинг HLTV: #${teamsData.indexOf(t)+1}</div>
                <div style="font-size:12px; margin-top:10px; color:var(--accent-cyan);">Состав: ${t.roster.map(p=>p.name).join(', ')}</div>
            </div>
        `;
    });
}
renderSelectScreen();

function selectTeam(id) {
    myTeam = teamsData.find(t => t.id === id);
    document.getElementById("my-team-name").innerText = myTeam.name;
    document.getElementById("my-team-logo").src = myTeam.logo;
    document.getElementById("my-team-logo").style.display = "block";
    // Установим стартовый бюджет клуба в диапазоне 1.5 - 3 млн
    clubBalance = Math.round(1500000 + Math.random() * 1500000);

    // Приведём зарплаты игроков к сезонным значениям 30k - 80k, если они слишком малы
    myTeam.roster.forEach(p => {
        if(!p.salary || p.salary < 30000) {
            p.salary = 30000 + Math.floor(Math.random() * 50000); // 30k..80k
        }
    });

    currentSponsor = null;
    initSeasonState();
    updateHUD();
    renderRoster();
    goScreen("screen-main");
}

function updateHUD() {
    document.getElementById("balance-txt").innerText = clubBalance.toLocaleString() + " $";
    document.getElementById("chem-txt").innerText = teamChemistry + "%";
    document.getElementById("sponsor-txt").innerText = currentSponsor ? currentSponsor.name : "Нет соглашения";
}

// РЕНДЕРИНГ СОСТАВА И УВОЛЬНЕНИЯ ИГРОКОВ
function renderRoster() {
    let list = document.getElementById("roster-list");
    list.innerHTML = "";
    myTeam.roster.forEach((p, idx) => {
        list.innerHTML += `
            <div class="player-card">
                <div class="p-info">
                    <img src="${getPlayerAvatar(p.name)}" class="p-avatar-img" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">
                    <div>
                        <div class="p-name">${p.name}</div>
                        <div class="p-meta">Роль: ${p.role} | Матчей: ${p.matches} | K/D: ${p.kd}</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:25px;">
                    <div class="p-badge">🔥 Скилл: ${p.skill}</div>
                    <div class="p-badge" style="color:#ffaa00; border-color:rgba(255,170,0,0.1);">😊 Мораль: ${p.moral}%</div>
                    <button onclick="openKickModal(${idx})" style="background:var(--red-alert); padding:8px 14px; font-size:11px;">Кикнуть</button>
                </div>
            </div>
        `;
    });
}

function openKickModal(idx) {
    activeKickingIndex = idx;
    document.getElementById("kick-modal").style.display = "flex";
}
function closeKickModal() {
    document.getElementById("kick-modal").style.display = "none";
}

function confirmKick(reason) {
    if(activeKickingIndex === -1) return;
    if(myTeam.roster.length <= MIN_ROSTER_SIZE) {
        alert(`Нельзя выгнать игрока: в команде должно оставаться минимум ${MIN_ROSTER_SIZE} игроков.`);
        return;
    }
    let kickedPlayer = myTeam.roster[activeKickingIndex];
    
    if(reason === 'toxic') {
        teamChemistry = Math.min(100, teamChemistry + 15);
        addTweet("HLTV Inside", `⚠️ Скандал! ${myTeam.name} выгнали ${kickedPlayer.name} за ужасный токсик в дискорде! Атмосфера в клубе очищена.`);
    } else if(reason === 'low_kd') {
        teamChemistry = Math.max(0, teamChemistry - 5);
        addTweet("OverDrive", `📉 Трансферные новости: ${kickedPlayer.name} покидает основной состав ${myTeam.name} из-за плохой личной статистики на последних праках.`);
    } else if(reason === 'regime') {
        clubBalance = Math.max(0, clubBalance - 5000);
        addTweet("CS2 Хайп", `🍺 Ого! Инсайдеры сообщают, что ${kickedPlayer.name} был пойман в баре перед игрой! Менеджер оштрафовал и уволил игрока.`);
    }

    myTeam.roster.splice(activeKickingIndex, 1);
    activeKickingIndex = -1;
    closeKickModal();
    renderRoster();
    updateHUD();
}

// ВКЛАДКИ ГЛАВНОГО МЕНЮ
function switchMainTab(tab) {
    currentTab = tab;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".main-sub-tab").forEach(t => t.style.display = "none");
    
    if(tab === 'hub') {
        document.getElementById("main-tab-hub").classList.add("active");
        document.getElementById("sub-tab-hub").style.display = "block";
    } else if(tab === 'market') {
        document.getElementById("main-tab-market").classList.add("active");
        document.getElementById("sub-tab-market").style.display = "block";
        renderMarket();
    } else if(tab === 'hltv') {
        document.getElementById("main-tab-hltv").classList.add("active");
        document.getElementById("sub-tab-hltv").style.display = "block";
        renderHLTV();
    } else if(tab === 'bet') {
        document.getElementById("main-tab-bet").classList.add("active");
        document.getElementById("sub-tab-bet").style.display = "block";
        renderSponsors();
    } else if(tab === 'manage') {
        document.getElementById("main-tab-manage").classList.add("active");
        document.getElementById("sub-tab-manage").style.display = "block";
        renderManagePanel();
    }
}

// СИСТЕМЫ СУБ-ВКЛАДОК: СУПЕР-АПКЕЙТЫ БАЗЫ
function buyUpgrade(type) {
    if(type === 'monitors' && !boughtUpgrades.monitors) {
        const COST = 750000;
        if(clubBalance >= COST) {
            clubBalance -= COST; boughtUpgrades.monitors = true;
            myTeam.roster.forEach(p => p.skill += 2);
            document.getElementById("up-monitors").disabled = true;
            document.getElementById("up-monitors").innerText = "🖥️ Мониторы куплены (+2 Скилл)";
            renderRoster(); updateHUD();
        } else alert("Недостаточно денег!");
    }
    if(type === 'psychologist' && !boughtUpgrades.psychologist) {
        const COST = 500000;
        if(clubBalance >= COST) {
            clubBalance -= COST; boughtUpgrades.psychologist = true;
            myTeam.roster.forEach(p => p.moral = Math.min(100, p.moral + 20));
            document.getElementById("up-psychologist").disabled = true;
            document.getElementById("up-psychologist").innerText = "🧠 Психолог нанят (Мораль стабильна)";
            renderRoster(); updateHUD();
        } else alert("Недостаточно денег!");
    }
    if(type === 'media' && !boughtUpgrades.media) {
        const COST = 800000;
        if(clubBalance >= COST) {
            clubBalance -= COST; boughtUpgrades.media = true;
            document.getElementById("up-media").disabled = true;
            document.getElementById("up-media").innerText = "📱 Медиастудия запущена (+30% прибыли)";
            updateHUD();
        } else alert("Недостаточно денег!");
    }
}

function buyBootcamp() {
    const COST = 400000;
    if(clubBalance >= COST) {
        clubBalance -= COST;
        teamChemistry = Math.min(100, teamChemistry + 10);
        addTweet("Bootcamp Live", `📸 Игроки прилетели на буткемп! Командные связи улучшаются с каждым днем.`);
        updateHUD();
    } else alert("Не хватает на буткемп!");
}

// ЛЕНТА ТВИДОВ / СОЦСЕТИ
function generateTwitterFeed() {
    let tw = document.getElementById("twitter-feed");
    tw.innerHTML = "";
    addTweet("HLTV.org", "🏆 Жеребьевка PGL Major завершена! Все команды готовы к плей-офф.");
    addTweet("harumi", "⚡ По слухам, некоторые организации подпишут жестких свободных агентов прямо сегодня.");
    addTweet("Фанаты CS2", "Скорее бы уже начались игры! Сетка обещает быть горячей.");
}
function addTweet(author, text) {
    let tw = document.getElementById("twitter-feed");
    if(!tw) return;
    tw.innerHTML = `<div class="tweet-entry" onclick="openCommentPopup('${author}', '${text.replace(/'/g, "\\'")}')"><span class="tweet-author">@${author}:</span> ${text}</div>` + tw.innerHTML;
}

// КЛИК НА ТВИТ — МОДАЛЬНОЕ ОКНО HLTV КОММЕНТАРИЕВ И ФОРУМА
function openCommentPopup(author, text) {
    document.getElementById("popup-author").innerText = "@" + author;
    document.getElementById("popup-text").innerText = text;
    
    const randomOpinions = [
        "«Полный бред, автор не понимает о чем пишет... Кикайте тренера лучше!»",
        "«Парни, скриньте, этот ростер возьмет кубок без единой отданной карты!»",
        "«Коэффициенты на них жестко просели после этой инфы. Ставлю хату на некст матч.»",
        "«Опять решаффлы, сколько можно? Дайте составу поиграть полгода вместе!»",
        "«Менеджмент гении, вовремя слили балласт. Ждем красивый CS на трансляции.»"
    ];
    let rIdx = Math.floor(Math.random() * randomOpinions.length);
    document.getElementById("popup-fan-opinion").innerText = randomOpinions[rIdx];
    
    document.getElementById("comment-popup-modal").style.display = "flex";
}
function closeCommentPopup() {
    document.getElementById("comment-popup-modal").style.display = "none";
}

// ТРАНСФЕРЫ
function setMarketTab(tab) {
    currentMarketTab = tab;
    document.getElementById("btn-t-stars").classList.remove("active");
    document.getElementById("btn-t-faceit").classList.remove("active");
    if(tab === 'stars') document.getElementById("btn-t-stars").classList.add("active");
    else document.getElementById("btn-t-faceit").classList.add("active");
    renderMarket();
}

function renderMarket() {
    let list = document.getElementById("market-list");
    list.innerHTML = "";
    let players = marketPlayers[currentMarketTab];
    let marketLocked = !myTeam || myTeam.roster.length >= TEAM_ROSTER_LIMIT || (myTeam && Date.now() - myTeam.lastTransferTime < transferCooldown);
    let statusText = document.getElementById("market-status");
    if(statusText) statusText.innerText = myTeam ? getTransferCooldownText(myTeam) : "Сначала выберите команду для управления, чтобы открывать трансферы.";
    players.forEach((p, idx) => {
        let freeAgent = isFreeAgent(p);
        let priceLabel = freeAgent ? 'Бесплатно' : '$' + ((p.price && p.price>1000000) ? p.price : getTransferOfferPrice(p)).toLocaleString();
        let buttonLabel = freeAgent ? 'Согласовать зарплату' : (marketLocked ? 'Закупка недоступна' : 'Контракт');
        list.innerHTML += `
            <div class="player-card">
                <div class="p-info">
                    <img src="${getPlayerAvatar(p.name)}" class="p-avatar-img" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">
                    <div>
                        <div class="p-name">${p.name}</div>
                        <div class="p-meta">Роль: ${p.role} | Клуб: ${p.org}</div>
                    </div>
                </div>
                <div style="display:flex; align-items:center; gap:20px;">
                    <div class="p-badge">⚡ Скилл: ${p.skill}</div>
                    <div class="p-badge" style="color:var(--green-money); border-color:rgba(0,255,102,0.1);">Цена: ${priceLabel}</div>
                    <button onclick="buyPlayer('${currentMarketTab}', ${idx})" ${marketLocked ? 'disabled' : ''}>${buttonLabel}</button>
                </div>
            </div>
        `;
    });
}

function buyPlayer(tab, idx) {
    if(!myTeam) {
        alert("Сначала выберите команду для управления.");
        return;
    }
    if(Date.now() - myTeam.lastTransferTime < transferCooldown) {
        alert("Трансферное окно ещё закрыто. Подождите несколько секунд.");
        return;
    }
    if(myTeam.roster.length >= TEAM_ROSTER_LIMIT) {
        alert(`В составе уже есть ${TEAM_ROSTER_LIMIT} игроков! Сначала кикните кого-то из основы.`);
        return;
    }
    let p = marketPlayers[tab][idx];
    let freeAgent = isFreeAgent(p);
    if(freeAgent) {
        openFreeAgentSalaryNegotiation(tab, idx);
        return;
    }
    let cost = (p.price && p.price > 1000000) ? p.price : getTransferOfferPrice(p);
    if(clubBalance >= cost) {
        clubBalance -= cost;
        marketPlayers[tab].splice(idx, 1);
        myTeam.roster.push({
            name: p.name,
            skill: p.skill,
            moral: 90,
            role: p.role,
            matches: 0,
            kd: "1.00",
            salary: p.salary || 40000,
            startSkill: p.skill,
            startPrice: cost,
            startKD: 1.00
        });
        myTeam.lastTransferTime = Date.now();
        teamChemistry = Math.max(20, teamChemistry - 15); // Приход нового сбивает сыгранность
        addTweet("HLTV Transfer", `🔥 Срочно! Игрок ${p.name} официально подписан клубом ${myTeam.name}! Болельщики в экстазе.`);
        updateHUD();
        renderMarket();
        renderRoster();
        renderManagePanel();
    } else {
        alert("Недостаточно средств на выкуп игрока!");
    }
}

function isFreeAgent(p) {
    return p && p.org && p.org.toString().toLowerCase().includes('свободный агент');
}

function getTransferOfferPrice(p) {
    if(isFreeAgent(p)) return 0;
    // Цена теперь в диапазоне примерно 10 000 000 - 20 000 000 в зависимости от скилла
    let skill = p.skill || 50;
    // нормируем скилл 50..100 -> 0..1
    let t = Math.max(0, Math.min(1, (skill - 50) / 50));
    let base = Math.round(10000000 + t * 10000000); // 10M .. 20M
    // небольшая надбавка от зарплаты
    let salaryFactor = (p.salary || 30000) / 80000; // 0.375..1
    // небольшой бонус если игрок принадлежит сильной команде (указывается в p.org)
    let teamBonus = 0;
    if(p.org) {
        let t = teamsData.find(tt => tt.name === p.org || tt.id === (p.org || '').toLowerCase());
        if(t) {
            teamBonus = Math.max(0, (t.skill - 80) / 80) * 0.12; // до +12%
        }
    }
    let final = Math.round(base * (0.9 + 0.25 * salaryFactor + teamBonus));
    return final;
}

function canTeamTransfer(team) {
    return !team || Date.now() - team.lastTransferTime >= transferCooldown;
}

function sellPlayer(idx) {
    if(!myTeam) {
        alert("Сначала выберите команду для управления.");
        return;
    }
    if(myTeam.roster.length <= MIN_ROSTER_SIZE) {
        alert(`Нельзя продать игрока. В команде должно оставаться минимум ${MIN_ROSTER_SIZE} игроков.`);
        return;
    }
    if(Date.now() - myTeam.lastTransferTime < transferCooldown) {
        alert("Трансферное окно ещё закрыто. Подождите несколько секунд.");
        return;
    }

    let p = myTeam.roster[idx];
    let price = getTransferOfferPrice(p);
    let tab = p.skill >= 85 ? 'stars' : 'faceit';
    marketPlayers[tab].push({
        name: p.name,
        skill: p.skill,
        price: price,
        salary: p.salary || 4000,
        role: p.role,
        org: myTeam.name
    });
    myTeam.roster.splice(idx, 1);
    myTeam.lastTransferTime = Date.now();
    clubBalance += price;
    teamChemistry = Math.max(0, teamChemistry - 10);
    addTweet("Transfer News", `💼 ${myTeam.name} выставил ${p.name} на трансфер за $${price.toLocaleString()}. Бюджет клуба пополнился.`);
    updateHUD();
    renderMarket();
    renderRoster();
    renderManagePanel();
}

function getTransferCooldownText(team) {
    if(!team || Date.now() - team.lastTransferTime >= transferCooldown) return "Трансферное окно открыто.";
    let remaining = Math.ceil((transferCooldown - (Date.now() - team.lastTransferTime)) / 1000);
    return `До следующего трансфера осталось ${remaining} сек.`;
}

function startTransferMarketSimulation() {
    if(transferActivityTimer) clearInterval(transferActivityTimer);
    transferActivityTimer = setInterval(() => {
        teamsData.forEach(t => {
            if(myTeam && t.id === myTeam.id) return;
            if(!canTeamTransfer(t)) return;
            if(Math.random() > 0.35) return;

            if(t.roster.length > MIN_ROSTER_SIZE && Math.random() < 0.55) {
                aiSellFromTeam(t);
            } else if(t.roster.length < TEAM_ROSTER_LIMIT && (marketPlayers.faceit.length + marketPlayers.stars.length > 0)) {
                aiBuyToTeam(t);
            }
        });
        renderMarket();
    }, 23000);
}

function aiSellFromTeam(team) {
    if(team.roster.length <= MIN_ROSTER_SIZE) return;
    let idx = Math.floor(Math.random() * team.roster.length);
    let p = team.roster[idx];
    let price = getTransferOfferPrice(p);
    let tab = p.skill >= 85 ? 'stars' : 'faceit';
    marketPlayers[tab].push({
        name: p.name,
        skill: p.skill,
        price: price,
        salary: p.salary || 4000,
        role: p.role,
        org: team.name
    });
    team.roster.splice(idx, 1);
    team.lastTransferTime = Date.now();
    team.points = Math.max(0, team.points - 10);
    addTweet("Transfer Rumors", `🚨 ${team.name} выставила ${p.name} на трансфер. Рынок стал жарче!`);
}

function aiBuyToTeam(team) {
    let availableTabs = [...marketPlayers.faceit, ...marketPlayers.stars];
    if(availableTabs.length === 0) return;
    let tab = marketPlayers.faceit.length ? 'faceit' : 'stars';
    let idx = Math.floor(Math.random() * marketPlayers[tab].length);
    let p = marketPlayers[tab].splice(idx, 1)[0];
    team.roster.push({
        name: p.name,
        skill: p.skill,
        moral: 80 + Math.floor(Math.random() * 16),
        role: p.role,
        matches: 0,
        kd: "1.00",
        salary: p.salary || 4000
    });
    team.lastTransferTime = Date.now();
    team.points += 8;
    addTweet("Transfer Market", `🔁 ${team.name} подписала ${p.name} и усилила свой ростер.`);
}

// РЕЙТИНГ HLTV
function renderHLTV() {
    let body = document.getElementById("hltv-ranking-body");
    body.innerHTML = "";
    // Сортировка по очкам формы
    let sorted = [...teamsData].sort((a,b) => b.points - a.points);
    sorted.forEach((t, index) => {
        let avgSkill = Math.round(t.roster.reduce((acc, p)=>acc+p.skill, 0) / t.roster.length) || t.skill;
        let isMine = myTeam && t.id === myTeam.id;
        body.innerHTML += `
            <tr style="${isMine ? 'background:rgba(0,255,204,0.06); font-weight:bold;' : ''}">
                <td style="padding:15px 12px; font-family:'JetBrains Mono'; color:${index<3?'var(--accent-orange)':'#fff'}">#${index+1}</td>
                <td><img src="${t.logo}" style="width:25px; height:25px; object-fit:contain; margin-right:10px; vertical-align:middle;" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">${t.name} ${isMine?'(Вы)':''}</td>
                <td>${avgSkill}</td>
                <td style="color:var(--accent-cyan); font-family:'JetBrains Mono';">${t.points} pts</td>
            </tr>
        `;
    });
}

// СПОНСОРЫ И БУКМЕКЕРЫ
const SPONSORS_LIST = [
    { name: "BetBoom (Букмекер)", bonus: 300000, desc: "Огромый сезонный контракт — существенная прибыль, но критика фанатов возможна." },
    { name: "Intel Gaming", bonus: 260000, desc: "Технологический спонсор. Поднимает репутацию организации." },
    { name: "1XBet (Бетка)", bonus: 400000, desc: "Крупнейший партнёр: большой денежный влив и публичность." },
    { name: "Monster Energy", bonus: 250000, desc: "Спонсор медиа- и сценического контента. Улучшает видимость команды." }
];

function renderSponsors() {
    let container = document.getElementById("sponsors-container");
    container.innerHTML = "";
    SPONSORS_LIST.forEach(s => {
        let isCurrent = currentSponsor && currentSponsor.name === s.name;
        container.innerHTML += `
            <div style="background:var(--card-bg); border:1px solid ${isCurrent?'var(--accent-cyan)':'var(--border-color)'}; padding:25px; border-radius:14px; position:relative;">
                <h3 style="margin-top:0; color:#fff;">${s.name}</h3>
                <p style="font-size:13px; color:var(--text-muted); line-height:1.5; min-height:40px;">${s.desc}</p>
                <div style="font-size:18px; font-weight:900; color:var(--green-money); margin-bottom:15px;">+$${s.bonus.toLocaleString()} сразу</div>
                <button onclick="signSponsor('${s.name}', ${s.bonus})" ${currentSponsor || isCurrent ? 'disabled' : ''} style="width:100%; background:${isCurrent?'var(--accent-cyan)':'var(--accent-orange)'}; color:${isCurrent?'#000':'#fff'}">
                    ${isCurrent ? 'Контракт подписан' : 'Заключить сделку'}
                </button>
            </div>
        `;
    });
}

function signSponsor(name, bonus) {
    if(currentSponsor) return;
    let modifier = boughtUpgrades.media ? 1.3 : 1.0;
    let finalBonus = Math.round(bonus * modifier);
    
    currentSponsor = { name: name, bonus: finalBonus };
    clubBalance += finalBonus;
    
    addTweet("HLTV Commercial", `🤝 Официально: Клуб ${myTeam.name} заключил партнерский контракт со спонсором ${name}! Сумма сделки составила $${finalBonus.toLocaleString()}.`);
    updateHUD();
    switchMainTab('hub');
}

// ГЕНЕРАЦИЯ СЕТКИ ПЛЕЙ-ОФФ (PGL MAJOR 2026)
function generateTournamentBracket() {
    if(!myTeam || myTeam.roster.length < TEAM_ROSTER_LIMIT) {
        alert(`У вас неполный ростер! В команде должно быть ровно ${TEAM_ROSTER_LIMIT} игроков.`);
        return;
    }
    if(seasonState.currentIndex >= seasonState.tournaments.length) {
        showSeasonSummary();
        return;
    }
    
    let current = seasonState.tournaments[seasonState.currentIndex];
    let list = [...teamsData].filter(t => t.id !== myTeam.id && t.roster.length === TEAM_ROSTER_LIMIT);
    if(list.length < 3) {
        alert("Недостаточно команд с полным составом для создания турнира. Подождите, пока рынок стабилизируется.");
        return;
    }
    list.sort(() => Math.random() - Math.random());
    playoffTeams = [myTeam, list[0], list[1], list[2]];
    
    let t2 = playoffTeams[2];
    let t3 = playoffTeams[3];
    let s2_1 = Math.floor(Math.random()*2) + 1;
    let s2_2 = s2_1 === 2 ? Math.floor(Math.random()*2) + 1 : 2;
    if(s2_1 === s2_2) { s2_2 = s2_1 === 2 ? 1 : 2; }
    let semi2_winner = s2_1 > s2_2 ? t2 : t3;
    
    bracketMatches.semi1 = { teamA: myTeam, teamB: playoffTeams[1], scoreA: 0, scoreB: 0, simulated: false, winner: null };
    bracketMatches.semi2 = { teamA: t2, teamB: t3, scoreA: s2_1, scoreB: s2_2, simulated: true, winner: semi2_winner };
    bracketMatches.final = { teamA: null, teamB: semi2_winner, scoreA: 0, scoreB: 0, simulated: false, winner: null };
    
    currentOpponentTeam = playoffTeams[1];
    bracketAutoRestarted = false;
    
    let bracketTitle = document.querySelector('#screen-bracket h2');
    if(bracketTitle) bracketTitle.innerText = `Матчи Плей-офф ${current.name}`;
    renderBracketView();
    goScreen("screen-bracket");
}

function renderBracketView() {
    let view = document.getElementById("bracket-view");
    view.innerHTML = "";
    
    // Полуфинал 1 (Наш матч)
    let m1 = bracketMatches.semi1;
    let m2 = bracketMatches.semi2;
    let f = bracketMatches.final;
    if(!f.teamA && m1.simulated && m1.winner && m1.winner.id !== myTeam.id) {
        f.teamA = m1.winner;
    }
    
    view.innerHTML += `<div class="stage-title">Полуфиналы (BO3)</div>`;
    
    // Node 1
    view.innerHTML += `
        <div class="bracket-match-node">
            <div class="bracket-team-row">
                <div class="b-team-info"><img src="${m1.teamA.logo}" class="b-team-logo" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'"> ${m1.teamA.name}</div>
                <div class="b-score ${m1.simulated && m1.winner.id===m1.teamA.id?'score-win':(m1.simulated?'score-lose':'')}" style="background:#111;">${m1.simulated ? m1.scoreA : '-'}</div>
            </div>
            <div class="bracket-team-row">
                <div class="b-team-info"><img src="${m1.teamB.logo}" class="b-team-logo" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'"> ${m1.teamB.name}</div>
                <div class="b-score ${m1.simulated && m1.winner.id===m1.teamB.id?'score-win':(m1.simulated?'score-lose':'')}" style="background:#111;">${m1.simulated ? m1.scoreB : '-'}</div>
            </div>
        </div>
    `;
    
    // Node 2
    view.innerHTML += `
        <div class="bracket-match-node">
            <div class="bracket-team-row">
                <div class="b-team-info"><img src="${m2.teamA.logo}" class="b-team-logo" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'"> ${m2.teamA.name}</div>
                <div class="b-score ${m2.winner.id===m2.teamA.id?'score-win':'score-lose'}">${m2.scoreA}</div>
            </div>
            <div class="bracket-team-row">
                <div class="b-team-info"><img src="${m2.teamB.logo}" class="b-team-logo" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'"> ${m2.teamB.name}</div>
                <div class="b-score ${m2.winner.id===m2.teamB.id?'score-win':'score-lose'}">${m2.scoreB}</div>
            </div>
        </div>
    `;
    
    view.innerHTML += `<div class="stage-title" style="margin-top:15px; border-color:var(--accent-cyan); color:var(--accent-cyan);">Гранд-Финал (BO3)</div>`;
    
    // Final Node
    let teamAName = f.teamA ? f.teamA.name : "Ожидание победителя полуфинала #1";
    let teamALogo = f.teamA ? f.teamA.logo : "https://liquipedia.net/commons/images/a/a2/No_avatar.png";
    view.innerHTML += `
        <div class="bracket-match-node" style="border-color:rgba(0,255,204,0.2);">
            <div class="bracket-team-row">
                <div class="b-team-info"><img src="${teamALogo}" class="b-team-logo" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'"> ${teamAName}</div>
                <div class="b-score" style="background:#111;">${f.simulated ? f.scoreA : '-'}</div>
            </div>
            <div class="bracket-team-row">
                <div class="b-team-info"><img src="${f.teamB.logo}" class="b-team-logo" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'"> ${f.teamB.name}</div>
                <div class="b-score" style="background:#111;">${f.simulated ? f.scoreB : '-'}</div>
            </div>
        </div>
    `;
    let btn = document.getElementById("btn-enter-server");
    if(bracketMatches.semi1 && !bracketMatches.semi1.simulated) {
        btn.innerText = "Выйти на сервер";
        btn.onclick = function() { checkIncidentsBeforeMatch(); };
        currentOpponentTeam = bracketMatches.semi1.teamB;
    } else if(bracketMatches.semi1 && bracketMatches.semi1.simulated && bracketMatches.semi1.winner.id !== myTeam.id) {
        btn.innerText = "Вы вылетели с турнира. Вернуться на базу.";
        btn.onclick = function() { goScreen("screen-main"); };
    } else if(bracketMatches.semi1 && bracketMatches.semi1.simulated && !bracketMatches.final.simulated) {
        btn.innerText = "Выйти на сервер Гранд-Финала";
        btn.onclick = function() { checkIncidentsBeforeMatch(); };
        currentOpponentTeam = bracketMatches.final.teamB;
    } else if(bracketMatches.final && bracketMatches.final.simulated) {
        btn.innerText = "Турнир завершен. Вернуться в панель управления";
        btn.onclick = function() { goScreen("screen-main"); };
    } else {
        btn.innerText = "Выйти на сервер";
        btn.onclick = function() { checkIncidentsBeforeMatch(); };
    }
}

function scheduleNextTournament(reason) {
    if(seasonRestartTimer) clearTimeout(seasonRestartTimer);
    if(seasonRestartInterval) clearInterval(seasonRestartInterval);
    addTweet("CS2 Calendar", "🔥 Начинается новый турнир!");
    if(myTeam && myTeam.roster.length >= TEAM_ROSTER_LIMIT) {
        if(seasonState.currentIndex >= seasonState.tournaments.length) {
            showSeasonSummary();
        } else {
            generateTournamentBracket();
        }
    } else {
        alert('Ростер не полный, новый турнир не может начаться. Достройте состав до 5 игроков.');
    }
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
        }
    }

    addTweet("CS2 Calendar", "🏁 Турнир завершен.");
    recordTournamentResult(false);
    if(seasonState.currentIndex >= seasonState.tournaments.length) {
        showSeasonSummary();
    } else {
        goScreen("screen-main");
    }
}

function simulateBo3Result() {
    let winner = Math.random() < 0.5 ? 'A' : 'B';
    let loserScore = Math.floor(Math.random() * 2);
    return winner === 'A'
        ? { scoreA: 2, scoreB: loserScore, winner: 'A' }
        : { scoreA: loserScore, scoreB: 2, winner: 'B' };
}

function getCurrentTournament() {
    return seasonState.tournaments[seasonState.currentIndex] || { name: 'Турнир', type: 'PGL' };
}

function ensureTournamentWinnerAfterElimination(currentTournament) {
    if(bracketMatches.final.simulated) return;
    if(!bracketMatches.final.teamA) {
        bracketMatches.final.teamA = bracketMatches.semi1.winner;
    }
    let result = simulateBo3Result();
    bracketMatches.final.simulated = true;
    bracketMatches.final.scoreA = result.scoreA;
    bracketMatches.final.scoreB = result.scoreB;
    bracketMatches.final.winner = result.winner === 'A' ? bracketMatches.final.teamA : bracketMatches.final.teamB;
    addTweet("HLTV Results", `🏆 Победитель ${currentTournament.type} ${currentTournament.name}: ${bracketMatches.final.winner.name}`);
}

// СЛУЧАЙНЫЕ ЧП ПЕРЕД МАТЧЕМ (ИНЦИДЕНТЫ)
function checkIncidentsBeforeMatch() {
    if(!myTeam || myTeam.roster.length < TEAM_ROSTER_LIMIT) {
        alert(`Для выхода на сервер у вас должно быть минимум ${TEAM_ROSTER_LIMIT} игроков в составе.`);
        return;
    }
    if(!currentOpponentTeam || currentOpponentTeam.roster.length < TEAM_ROSTER_LIMIT) {
        alert("Противник недостаточно укомплектован для матча. Подождите новое соперничество.");
        return;
    }
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
            ]
        },
        {
            title: `🔊 Токсичный Твиттер / Психология`,
            desc: `Аналитик Яна Медведева написала разгромную статью про игровую форму ${p.name}. Игрок замкнулся в себе и тильтует.`,
            options: [
                { text: "«Поддержать парня всей командой (Сыгранность -5%, Мораль +15%)»", effect: () => { teamChemistry = Math.max(0, teamChemistry - 5); p.moral = Math.min(100, p.moral + 15); updateHUD(); startVetoStage(); } },
                { text: "«Жестко прикрикнуть: Твое дело нажимать кнопки, а не ныть!»", effect: () => { p.skill = Math.min(100, p.skill + 2); p.moral = Math.max(10, p.moral - 30); startVetoStage(); } }
            ]
        }
    ];
    
    let ev = events[Math.floor(Math.random() * events.length)];
    title.innerText = ev.title;
    desc.innerText = ev.desc;
    ev.options.forEach(o => {
        let btn = document.createElement("button");
        btn.className = "modal-option-btn";
        btn.innerText = o.text;
        btn.onclick = function() {
            modal.style.display = "none";
            o.effect();
        };
        opts.appendChild(btn);
    });
    
    modal.style.display = "flex";
}

// СТАДИЯ ВЕТО КАРТ
function startVetoStage() {
    vetoStage = 0;
    vetoActiveMaps = [...mapsPool];
    matchMaps = [];
    renderVetoMaps();
    goScreen("screen-veto");
}

function renderVetoMaps() {
    let container = document.getElementById("veto-maps-container");
    container.innerHTML = "";
    
    vetoActiveMaps.forEach(m => {
        container.innerHTML += `
            <div class="map-item" style="background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('${MAP_IMAGES[m] || IMG_DIR + "mirage.png"}')">
                <span style="font-weight:900; font-size:18px; letter-spacing:1px; color:#fff;">${m.toUpperCase()}</span>
                <button onclick="banMap('${m}')" style="background:var(--red-alert); font-size:11px; padding:10px 18px;">Вычеркнуть</button>
            </div>
        `;
    });
}

function banMap(mapName) {
    // 1. Наш бан
    vetoActiveMaps = vetoActiveMaps.filter(m => m !== mapName);
    
    // 2. ИИ вычеркивает карту в ответ
    if(vetoActiveMaps.length > 3) {
        let aiBanIdx = Math.floor(Math.random() * vetoActiveMaps.length);
        let aiBanned = vetoActiveMaps[aiBanIdx];
        vetoActiveMaps = vetoActiveMaps.filter(m => m !== aiBanned);
        alert(`Вы забанили ${mapName}. Оппонент в ответ банит ${aiBanned}`);
    }
    
    // Проверяем, сколько осталось карт
    if(vetoActiveMaps.length <= 3) {
        // Оставшиеся 3 карты идут в пул матча BO3
        matchMaps = [...vetoActiveMaps];
        alert(`Пул карт на серию BO3 определен: ${matchMaps.join(', ')}! Выходим на сервер!`);
        startMatchSeries();
    } else {
        renderVetoMaps();
    }
}

// ЗАПУСК И СИМУЛЯЦИЯ СЕРИИ МАТЧА
function startMatchSeries() {
    if(!myTeam || myTeam.roster.length < TEAM_ROSTER_LIMIT) {
        alert(`Для старта серии у вас должно быть минимум ${TEAM_ROSTER_LIMIT} игроков.`);
        return;
    }
    if(!currentOpponentTeam || currentOpponentTeam.roster.length < TEAM_ROSTER_LIMIT) {
        alert("Противник не готов к матчу.");
        return;
    }
    seriesScoreA = 0;
    seriesScoreB = 0;
    currentMapIdx = 0;
    goScreen("screen-match");
    runSingleMap();
}

function runSingleMap() {
    scoreA = 0;
    scoreB = 0;
    matchPause = false;
    currentTactic = "normal";
    logLinesCounter = 0;
    matchSpeed = 1;
    updateMatchSpeedButton();
    
    document.getElementById("btn-finish-match").style.display = "none";
    document.getElementById("btn-pause-match").innerText = "⏸️ Тактическая пауза";
    document.getElementById("btn-pause-match").disabled = false;
    
    document.getElementById("hud-name-a").innerText = myTeam.name.toUpperCase();
    document.getElementById("hud-logo-a").src = myTeam.logo;
    document.getElementById("hud-name-b").innerText = currentOpponentTeam.name.toUpperCase();
    document.getElementById("hud-logo-b").src = currentOpponentTeam.logo;
    
    document.getElementById("hud-series-a").innerText = seriesScoreA;
    document.getElementById("hud-series-b").innerText = seriesScoreB;
    
    let currentMapName = matchMaps[currentMapIdx] || "Mirage";
    document.getElementById("hud-map-title").innerText = currentMapName.toUpperCase();
    document.getElementById("hud-map-bg").style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${MAP_IMAGES[currentMapName]}')`;
    
    renderLiveStats();
    
    let consoleBox = document.getElementById("match-console");
    consoleBox.innerHTML = `<div class="c-entry c-ot"> knife round: Команды разыгрывают стороны на карте ${currentMapName}... Менеджер, выберите тактику на пистолетку!</div>`;
    
    if(logsTimer) clearInterval(logsTimer);
    logsTimer = setInterval(simulateMatchRound, 1200 / matchSpeed);
}

function toggleMatchSpeed() {
    matchSpeed = matchSpeed === 1 ? 2 : 1;
    let btn = document.getElementById("btn-speed-match");
    if(btn) btn.innerText = matchSpeed === 1 ? "⏩ Ускорить x2" : "⚡ Нормальная скорость";
    if(logsTimer) {
        clearInterval(logsTimer);
        logsTimer = setInterval(simulateMatchRound, 1200 / matchSpeed);
    }
}

function updateMatchSpeedButton() {
    let btn = document.getElementById("btn-speed-match");
    if(btn) {
        btn.innerText = matchSpeed === 1 ? "⏩ Ускорить x2" : "⚡ Нормальная скорость";
    }
}

function renderLiveStats() {
    let containerA = document.getElementById("m-players-a");
    containerA.innerHTML = "";
    myTeam.roster.forEach(p => {
        let kd = (parseFloat(p.kd) || (1.0 + (p.skill-85)*0.01)).toFixed(2);
        let adr = Math.round(70 + (p.skill-85)*2);
        let health = Math.max(5, Math.min(100, Math.round(p.moral || 70)));
        let eff = Math.max(10, Math.min(100, Math.round(p.skill || 60)));
        containerA.innerHTML += `
            <div class="match-player-row">
                <div class="player-row-left">
                    <img src="${getPlayerAvatar(p.name)}" class="player-avatar" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">
                    <div>
                        <div class="m-p-nick">${p.name}</div>
                        <div class="m-p-stats">K/D: ${kd} | ADR: ${adr}</div>
                    </div>
                </div>
                <div class="stat-bars">
                    <div class="stat-row"><div style="color:var(--accent-cyan); width:36px; font-weight:700;">HP</div><div class="stat-bar"><div class="stat-bar-inner" style="width:${health}%"></div></div><div style="width:36px; text-align:right; color:var(--text-muted);">${health}%</div></div>
                    <div class="stat-row"><div style="color:var(--accent-orange); width:36px; font-weight:700;">Eff</div><div class="stat-bar"><div class="stat-bar-inner" style="width:${eff}%; background:linear-gradient(90deg,#00ffcc,#ff5500)"></div></div><div style="width:36px; text-align:right; color:var(--text-muted);">${eff}%</div></div>
                </div>
            </div>
        `;
    });
    
    let containerB = document.getElementById("m-players-b");
    containerB.innerHTML = "";
    currentOpponentTeam.roster.forEach(p => {
        let kd = (parseFloat(p.kd) || (1.0 + (p.skill-85)*0.01)).toFixed(2);
        let adr = Math.round(68 + (p.skill-85)*1.8);
        let health = Math.max(5, Math.min(100, Math.round(p.moral || 65)));
        let eff = Math.max(10, Math.min(100, Math.round(p.skill || 60)));
        containerB.innerHTML += `
            <div class="match-player-row reverse">
                <div class="player-row-left" style="flex-direction:row-reverse;">
                    <img src="${getPlayerAvatar(p.name)}" class="player-avatar" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'">
                    <div style="text-align:right;">
                        <div class="m-p-nick">${p.name}</div>
                        <div class="m-p-stats">K/D: ${kd} | ADR: ${adr}</div>
                    </div>
                </div>
                <div class="stat-bars" style="margin-left:0; margin-right:14px;">
                    <div class="stat-row"><div style="color:var(--accent-cyan); width:36px; font-weight:700;">HP</div><div class="stat-bar"><div class="stat-bar-inner" style="width:${health}%"></div></div><div style="width:36px; text-align:right; color:var(--text-muted);">${health}%</div></div>
                    <div class="stat-row"><div style="color:var(--accent-orange); width:36px; font-weight:700;">Eff</div><div class="stat-bar"><div class="stat-bar-inner" style="width:${eff}%; background:linear-gradient(90deg,#00ffcc,#ff5500)"></div></div><div style="width:36px; text-align:right; color:var(--text-muted);">${eff}%</div></div>
                </div>
            </div>
        `;
    });
}

function setMatchTactic(tac) {
    currentTactic = tac;
    let consoleBox = document.getElementById("match-console");
    if(tac === 'eco') {
        consoleBox.innerHTML += `<div class="c-entry c-ot">📋 Команда переходит на ЭКОНОМИЧЕСКИЙ раунд (сейв ресурсов).</div>`;
    } else if(tac === 'rush') {
        consoleBox.innerHTML += `<div class="c-entry c-ot">🏹 Выдан приказ на БЫСТРЫЙ РАШ А-плента! Скилл атаки повышен.</div>`;
    }
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

function toggleMatchPause() {
    matchPause = !matchPause;
    let btn = document.getElementById("btn-pause-match");
    let consoleBox = document.getElementById("match-console");
    if(matchPause) {
        btn.innerText = "▶️ Возобновить игру";
        consoleBox.innerHTML += `<div class="c-entry c-ot">⏸️ Менеджер берет тактический тайм-аут. Разбор полетов... Мораль игроков частично восстановлена!</div>`;
        myTeam.roster.forEach(p => p.moral = Math.min(100, p.moral + 5));
    } else {
        btn.innerText = "⏸️ Тактическая пауза";
        consoleBox.innerHTML += `<div class="c-entry c-ot">▶️ Пауза снята. Команды возвращаются на сервер!</div>`;
    }
    consoleBox.scrollTop = consoleBox.scrollHeight;
}

// СИМУЛЯТОР ЛОГОВ РАУНДОВ С ЦИТАТАМИ КЛЮЧЕВЫХ СОБЫТИЙ МАТЧА
function simulateMatchRound() {
    if(matchPause) return;
    
    // Считаем общую силу команд
    let powerA = myTeam.roster.reduce((acc, p) => acc + p.skill, 0) / 5 + (teamChemistry * 0.1);
    let powerB = currentOpponentTeam.roster.reduce((acc, p) => acc + p.skill, 0) / 5 + 5; // ИИ бонус
    
    if(currentTactic === 'eco') powerA -= 12; // Эко ослабляет текущий раунд, но сохраняет деньги
    if(currentTactic === 'rush') powerA += 5;
    
    let rollA = Math.random() * powerA;
    let rollB = Math.random() * powerB;
    
    let winA = rollA > rollB;
    if(winA) scoreA++; else scoreB++;
    
    document.getElementById("hud-score-a").innerText = scoreA;
    document.getElementById("hud-score-b").innerText = scoreB;
    
    // Генерация красивого лога
    let consoleBox = document.getElementById("match-console");
    let pA = myTeam.roster[Math.floor(Math.random()*myTeam.roster.length)];
    let pB = currentOpponentTeam.roster[Math.floor(Math.random()*currentOpponentTeam.roster.length)];
    
    logLinesCounter++;
    
    if(winA) {
        const logsA = [
            `🎯 ${pA.name} ставит нереальный tap в голову игроку ${pB.name} через дым! Раунд за нами!`,
            `💣 Бомба успешно установлена на B-пленте. ${pA.name} удерживает позицию в клатче 1v2!`,
            `⚡ Идеальный эко-прием от нашей команды! Перестреляли девайсы оппонента с Диглов!`,
            `🔥 Эйс! Команда стирает оппонентов с карты без единой потери!`
        ];
        consoleBox.innerHTML += `<div class="c-entry c-us">${logsA[Math.floor(Math.random()*logsA.length)]}</div>`;
    } else {
        const logsB = [
            `💀 ${pB.name} вскрывает нашу оборону через мидл, минусуя двоих. Раунд уходит врагам.`,
            `❌ Наша команда не успевает выбить точку А. Бомба взрывается.`,
            `🎯 Ужасный тайминг. ${pA.name} ловит флешку лицом, ${pB.name} забирает легкий фраг со скаута.`,
            `⚠️ Снайпер врага контролирует длину. Наш раш полностью остановлен.`
        ];
        consoleBox.innerHTML += `<div class="c-entry c-en">${logsB[Math.floor(Math.random()*logsB.length)]}</div>`;
    }
    
    consoleBox.scrollTop = consoleBox.scrollHeight;
    
    // Сброс тактики
    if(currentTactic !== 'normal' && Math.random() > 0.6) currentTactic = 'normal';
    
    // Конец карты (игра до 13 раундов по системе MR12)
    if((scoreA >= 13 || scoreB >= 13) && Math.abs(scoreA - scoreB) >= 1) {
        clearInterval(logsTimer);
        onMapFinished();
    }
}

// СИСТЕМА РОСТА ИГРОКОВ ПО СКИЛУ И СТОИМОСТИ
function calculatePlayerGrowthBonus(player, team, isWin) {
    // Базовый рост: победы дают умеренный прирост, проигрыши почти не повышают скилл
    let baseGrowth = isWin ? 1.0 : 0.1;
    
    // Коэффициент слабости команды (чем слабже команда, тем больше рост)
    let avgTeamSkill = team.roster.reduce((acc, p) => acc + p.skill, 0) / team.roster.length;
    let teamWeakness = Math.max(0.6, (95 - avgTeamSkill) / 25);
    
    // Бонус за количество сыгранных матчей (опыт) — рост замедляется с опытом
    let experienceBonus = 1 + Math.min(0.8, (player.matches * 0.008));
    
    // Бонус за роль (AWPer растет быстрее, Support медленнее)
    let roleBonus = player.role === "AWPer" ? 1.1 : (player.role === "IGL" ? 0.95 : (player.role === "Support" ? 0.8 : 1.0));
    
    // Бонус за мораль (довольные игроки растут быстрее)
    let moralBonus = 0.85 + (player.moral / 100) * 0.2;

    // Учитываем K/D: игроки с высоким K/D получают небольшой дополнительный рост
    let kd = parseFloat(player.kd) || 1.0;
    let kdBonus = 1 + Math.max(-0.2, Math.min(0.3, (kd - 1.0) * 0.5));
    
    let finalGrowth = baseGrowth * teamWeakness * experienceBonus * roleBonus * moralBonus * kdBonus;
    return Math.round(finalGrowth * 10) / 10;
}

function updatePlayerGrowth(team, isWin, mapCount = 1) {
    team.roster.forEach(player => {
        // Увеличиваем количество сыгранных матчей
        player.matches = (player.matches || 0) + mapCount;
        
        // Рассчитываем бонус к скилу
        let skillBonus = calculatePlayerGrowthBonus(player, team, isWin);
        
        // Применяем рост скила (максимум 100)
        let tentativeSkill = player.skill + skillBonus;
        // Если стартовый скилл не задан, запоминаем текущее значение
        if(typeof player.startSkill === 'undefined') {
            player.startSkill = player.skill;
        }
        // Ограничение прироста/падения за сезон: +/-2 от стартового скилла
        let maxAllowed = player.startSkill + 2;
        let minAllowed = player.startSkill - 2;
        tentativeSkill = Math.min(maxAllowed, Math.max(minAllowed, tentativeSkill));
        let newSkill = Math.min(100, Math.max(0, tentativeSkill));
        let skillIncrease = newSkill - player.skill;
        player.skill = newSkill;
        
        // Обновляем K/D на основе пользовательского результата
        if(isWin) {
            let kdIncrease = parseFloat((player.kd || "1.00")) + (0.02 * (skillBonus / 2));
            player.kd = Math.min(2.0, kdIncrease).toFixed(2);
        }
        
        // Обновляем стоимость через новую формулу (10-20M диапазон)
        player.price = getTransferOfferPrice(player);
    });
}

function updateMarketPricesAfterGrowth() {
    // Обновляем цены всех игроков на рынке
    marketPlayers.stars.forEach(p => {
        p.price = Math.max(12000, Math.round(p.skill * 700 + (p.salary || 3000) * 8));
    });
    marketPlayers.faceit.forEach(p => {
        p.price = Math.max(12000, Math.round(p.skill * 700 + (p.salary || 3000) * 8));
    });
}

function announcePlayerGrowth(team) {
    let growthMessages = [];
    team.roster.forEach(p => {
        if(p.skill >= 85 && p.skill < 87) {
            growthMessages.push(`⚡ ${p.name} приближается к элитному уровню (Скилл ${Math.round(p.skill)})`);
        } else if(p.skill >= 87) {
            growthMessages.push(`🌟 ${p.name} входит в топ-игроки мира! (Скилл ${Math.round(p.skill)})`);
        }
    });
    growthMessages.forEach(msg => addTweet("Player Development", msg));
}

function onMapFinished() {
    if(scoreA > scoreB) {
        seriesScoreA++;
        // Применяем рост победившей команде
        updatePlayerGrowth(myTeam, true, 1);
        updatePlayerGrowth(currentOpponentTeam, false, 1);
    } else {
        seriesScoreB++;
        // Применяем рост победившей команде
        updatePlayerGrowth(myTeam, false, 1);
        updatePlayerGrowth(currentOpponentTeam, true, 1);
    }
    
    document.getElementById("hud-series-a").innerText = seriesScoreA;
    document.getElementById("hud-series-b").innerText = seriesScoreB;
    
    let consoleBox = document.getElementById("match-console");
    consoleBox.innerHTML += `<div class="c-entry c-ot">🏁 Карта завершена со счетом ${scoreA}:${scoreB}!</div>`;
    
    currentMapIdx++;
    document.getElementById("btn-pause-match").disabled = true;
    
    // Проверка победы в серии BO3
    if(seriesScoreA === 2 || seriesScoreB === 2 || currentMapIdx === 3) {
        document.getElementById("btn-finish-match").style.display = "block";
    } else {
        setTimeout(runSingleMap, 2500); // Переход к следующей карте через паузу
    }
}

// ПОСЛЕМАТЧЕВОЕ ИНТЕРВЬЮ (ПРЕСС-КОНФЕРЕНЦИЯ HLTV)
function closeMatchAndOpenPress() {
    goScreen("screen-press");
    let q = document.getElementById("press-question");
    let opt = document.getElementById("press-options"); 
    opt.innerHTML = "";
    
    let isSemi = !bracketMatches.semi1.simulated;
    let currentTournament = getCurrentTournament();
    
    if(seriesScoreA > seriesScoreB) {
        // Мы выиграли матч
        if(isSemi) {
            bracketMatches.semi1.simulated = true;
            bracketMatches.semi1.scoreA = seriesScoreA;
            bracketMatches.semi1.scoreB = seriesScoreB;
            bracketMatches.semi1.winner = myTeam;
            bracketMatches.final.teamA = myTeam; // Проходим в финал
            
            // Динамическая генерация вопросов
            let gen = generatePressQuestion(myTeam, currentOpponentTeam, true, seriesScoreA, seriesScoreB);
            q.innerText = gen.question;
            gen.options.forEach(o => opt.innerHTML += `<button onclick="finishPress(true, '${o.key}')">${o.text}</button>`);
        } else {
            // Выиграли финал
            bracketMatches.final.simulated = true;
            bracketMatches.final.scoreA = seriesScoreA;
            bracketMatches.final.scoreB = seriesScoreB;
            bracketMatches.final.winner = myTeam;
            
            let gen = generatePressQuestion(myTeam, currentOpponentTeam, true, seriesScoreA, seriesScoreB, true);
            q.innerText = gen.question;
            gen.options.forEach(o => opt.innerHTML += `<button onclick="finishPress(true, '${o.key}')">${o.text}</button>`);
        }
    } else {
        // Поражение
        if(isSemi) {
            bracketMatches.semi1.simulated = true;
            bracketMatches.semi1.scoreA = seriesScoreA;
            bracketMatches.semi1.scoreB = seriesScoreB;
            bracketMatches.semi1.winner = currentOpponentTeam;
            ensureTournamentWinnerAfterElimination(currentTournament);
            q.innerText = `Журналист: Обидное поражение и вылет. Победитель ${currentTournament.type} ${currentTournament.name}: ${bracketMatches.final.winner.name}. Что будете делать дальше?`;
        } else {
            bracketMatches.final.simulated = true;
            bracketMatches.final.scoreA = seriesScoreA;
            bracketMatches.final.scoreB = seriesScoreB;
            bracketMatches.final.winner = currentOpponentTeam;
            q.innerText = `Репортер: Финал проигран. Победитель ${currentTournament.type} ${currentTournament.name}: ${bracketMatches.final.winner.name}. Какие выводы сделаете?`;
        }
        
        let gen = generatePressQuestion(myTeam, currentOpponentTeam, false, seriesScoreA, seriesScoreB);
        gen.options.forEach(o => opt.innerHTML += `<button onclick="finishPress(false, '${o.key}')">${o.text}</button>`);
    }
}

function generatePressQuestion(team, opponent, win, scoreA, scoreB, isFinal=false) {
    let top = team.roster.slice().sort((a,b)=> (parseFloat(b.kd)||1) - (parseFloat(a.kd)||1))[0];
    let avgKD = calculateTeamAverageKD(team);
    let question = '';
    let options = [];

    if(win) {
        if(isFinal) {
            question = `Репортер: Фантастика! Как вы оцениваете победу в финале против ${opponent.name}?`;
            options = [
                { key:'champion', text: '«Это заслуга всей команды и буткемпа. Мы вписали себя в историю!»' },
                { key:'strategy', text: '«Мы отлично разобрали оппонента, тактика сработала безупречно.»' }
            ];
        } else {
            question = `Журналист: Отличная игра. Кто был ключевым игроком в серии?`;
            options = [
                { key:'tactics', text: `«Наши заготовки и особенности подготовленной тактики помогли.»` },
                { key:'hype', text: `«${top.name} выдал огромный матч — его импакт решал исходы.»` }
            ];
        }
    } else {
        question = `Журналист: Печальный исход. Что главное, что нужно исправить после матча?`;
        options = [
            { key:'disband', text: '«Разберем ошибки, сделаем замены и вернемся сильнее.»' },
            { key:'blame', text: '«Технические проблемы и неверные решения на карте повлияли на результат.»' }
        ];
    }
    return { question, options };
}

function finishPress(win, answerType) {
    let isSemi = !bracketMatches.semi1.simulated;
    let currentTournament = getCurrentTournament();
    updateMarketPricesAfterGrowth();
    
    if(win) {
        let cashPrize = 80000;
        if(!isSemi && answerType === 'champion') cashPrize = 250000;
        clubBalance += cashPrize;
        let hltvReward = Math.max(0, 150 - seasonState.hltvPointsGained);
        if(hltvReward > 0) {
            myTeam.points += hltvReward;
            seasonState.hltvPointsGained += hltvReward;
        }
        myTeam.roster.forEach(p => p.moral = Math.min(100, p.moral + 15));
        announcePlayerGrowth(myTeam);
        addTweet("HLTV News", `🏆 Интервью завершено. Менеджер ${myTeam.name} похвалил игроков. Организация забирает призовые!`);
    } else {
        myTeam.roster.forEach(p => p.moral = Math.max(10, p.moral - 20));
        if(answerType === 'blame') teamChemistry = Math.max(0, teamChemistry - 20);
        addTweet("HLTV News", `❌ Грустное интервью на стриме. Атмосфера внутри ${myTeam.name} накалена до предела.`);
    }

    if(isSemi) {
        bracketMatches.semi1.simulated = true;
        bracketMatches.semi1.scoreA = seriesScoreA;
        bracketMatches.semi1.scoreB = seriesScoreB;
        bracketMatches.semi1.winner = win ? myTeam : currentOpponentTeam;
        if(win) {
            bracketMatches.final.teamA = myTeam;
            bracketMatches.final.teamB = bracketMatches.final.teamB || bracketMatches.semi2.winner;
            currentOpponentTeam = bracketMatches.final.teamB;
            renderBracketView();
            goScreen("screen-bracket");
            return;
        }
        if(!win) {
            ensureTournamentWinnerAfterElimination(currentTournament);
        }
    }

    if(!isSemi || !win) {
        if(!isSemi) {
            bracketMatches.final.simulated = true;
            bracketMatches.final.scoreA = seriesScoreA;
            bracketMatches.final.scoreB = seriesScoreB;
            bracketMatches.final.winner = win ? myTeam : currentOpponentTeam;
            if(!win && !bracketMatches.final.winner) {
                bracketMatches.final.winner = currentOpponentTeam;
            }
        }
        recordTournamentResult(win);
        if(seasonState.currentIndex >= seasonState.tournaments.length) {
            showSeasonSummary();
        } else {
            addTweet("CS2 Calendar", `🔥 После ${currentTournament.name} начинается следующий турнир: ${seasonState.tournaments[seasonState.currentIndex].name}`);
            generateTournamentBracket();
        }
    }
    updateHUD();
    renderBracketView();
}

// ФУНКЦИИ ПЛАШКИ УПРАВЛЕНИЯ
function renderManagePanel() {
    let list = document.getElementById("manage-roster-list");
    let select = document.getElementById("chat-player-select");
    list.innerHTML = "";
    select.innerHTML = "";
    
    myTeam.roster.forEach((p, idx) => {
        if(!p.salary) p.salary = 4000; // Дефолт если не подгрузилось
        
        list.innerHTML += `
            <div class="player-card" style="background:var(--card-bg); margin-bottom:10px; padding:12px;">
                <div>
                    <strong style="font-size:16px; color:#fff;">${p.name}</strong>
                    <div style="font-size:12px; color:var(--text-muted);">Зарплата: <span style="color:var(--green-money); font-weight:bold;">$${p.salary}</span>/мес</div>
                </div>
                <div style="display:flex; gap:8px;">
                    <button onclick="changeSalary(${idx}, 500)" style="background:var(--green-money); color:#000; padding:6px 12px; font-size:11px;">+$500</button>
                    <button onclick="changeSalary(${idx}, -500)" style="background:var(--red-alert); padding:6px 12px; font-size:11px;">-$500</button>
                    <button onclick="sellPlayer(${idx})" style="background:#444; padding:6px 12px; font-size:11px;">Продать на рынке</button>
                    <button onclick="openSellToTeam(${idx})" style="background:#1b4; padding:6px 12px; font-size:11px;">Предложить команде</button>
                </div>
            </div>
        `;
        
        select.innerHTML += `<option value="${idx}">${p.name} (${p.role})</option>`;
    });
}

function changeSalary(idx, amount) {
    let p = myTeam.roster[idx];
    p.salary = Math.max(1000, p.salary + amount);
    
    if(amount > 0) {
        p.moral = Math.min(100, p.moral + 10);
        p.skill = Math.min(100, p.skill + 1);
        alert(`Вы повысили зарплату ${p.name}. Мораль выросла!`);
    } else {
        p.moral = Math.max(10, p.moral - 20);
        p.skill = Math.max(50, p.skill - 2);
        alert(`Вы урезали зарплату ${p.name}. Игрок недоволен и теряет мотивацию.`);
    }
    renderManagePanel();
    updateHUD();
}

// СИМУЛЯЦИЯ ИИ ОТВЕТОВ ИГРОКОВ НА ОСНОВЕ ИХ МОРАЛИ И СКИЛЛА
function sendChatMessage() {
    let input = document.getElementById("chat-input");
    let text = input.value.trim();
    if(!text) return;
    
    let pIdx = document.getElementById("chat-player-select").value;
    let player = myTeam.roster[pIdx];
    
    let chatBox = document.getElementById("chat-box");
    
    // Выводим сообщение менеджера
    chatBox.innerHTML = `<div><span style="color:var(--accent-cyan);">Вы:</span> ${text}</div>` + chatBox.innerHTML;
    input.value = "";
    
    // Анализ контекста сообщения менеджера для ИИ-ответа
    let msgLower = text.toLowerCase();
    let aiResponse = "";
    
    // Шаблоны генерации ответа в зависимости от характера и морали
    if(msgLower.includes("плохо") || msgLower.includes("кик") || msgLower.includes("ужасно") || msgLower.includes("нуб")) {
        if(player.moral > 75) {
            aiResponse = `«Я знаю, что последние праки не пошли, менеджер. Но я выкладываюсь на 100%. Дайте мне шанс доказать на Мейджоре.»`;
            player.moral = Math.max(10, player.moral - 5);
        } else {
            aiResponse = `«Сам ты нуб! С такой атмосферой в клубе и такой тактикой ни один снайпер не заиграет. Ищи мне новую команду.»`;
            player.moral = Math.max(10, player.moral - 20);
        }
    } else if(msgLower.includes("красавчик") || msgLower.includes("лучший") || msgLower.includes("хорош") || msgLower.includes("молодец")) {
        aiResponse = `«Спасибо за поддержку, босс! Приятно, когда руководство видит твой импакт. Завтра натренирую новые смоки.»`;
        player.moral = Math.min(100, player.moral + 12);
    } else if(msgLower.includes("тактика") || msgLower.includes("тренируйся") || msgLower.includes("прак")) {
        aiResponse = `«Принял. Мы как раз с капитаном обсуждали, что нужно перестроить наш дефолт за атаку на Inferno. Будем работать.»`;
        player.skill = Math.min(100, player.skill + 1);
    } else {
        // Рандомный ИИ дефолт ответ на основе личности
        const generalAnswers = [
            `«Главное, чтобы зарплату вовремя платили, а фраги на сервере я оформлю. Какие планы на некст соперника?»`,
            `«Настроение нормальное, девайсы настроил. Готов разваливать. Главное — забанить Mirage на вето.»`,
            `«Всё под контролем, шеф. Стрельба летит, тильта нет. Главное не забудьте буткемп вовремя собрать!»`
        ];
        aiResponse = generalAnswers[Math.floor(Math.random() * generalAnswers.length)];
    }
    
    // Эмуляция задержки ИИ ответа
    setTimeout(() => {
        chatBox.innerHTML = `<div style="margin-bottom:10px;"><span style="color:var(--accent-orange); font-weight:bold;">${player.name}:</span> ${aiResponse}</div>` + chatBox.innerHTML;
        renderManagePanel(); // Обновить показатели если изменились
    }, 600);
}
// ==========================================
// ==========================================
// РАСШИРЕННЫЕ ИИ-КОММЕНТАРИИ ПОСЛЕ МАТЧА
// ==========================================

function generateExtendedAICommentary() {
    return "";
}

// ===== Переговоры при продаже игрока (малый чат с ИИ) =====
let currentNegotiation = null;
function openNegotiation(playerName, buyerName, price, buyerTeamId = null, playerIdx = null) {
    currentNegotiation = { playerName, buyerName, price, lastOffer: price, buyerTeamId, playerIdx };
    document.getElementById('neg-buyer').innerText = buyerName + ` предлагает $${price.toLocaleString()}`;
    document.getElementById('neg-chat').innerHTML = `<div style="color:var(--text-muted); font-size:13px;">Покупатель: Мы готовы предложить $${price.toLocaleString()} за ${playerName}.</div>`;
    document.getElementById('neg-offer-input').value = '';
    document.getElementById('negotiation-modal').style.display = 'flex';
}
function closeNegotiation() {
    document.getElementById('negotiation-modal').style.display = 'none';
    currentNegotiation = null;
}

function sendNegotiationOffer() {
    if(!currentNegotiation) return;
    let v = document.getElementById('neg-offer-input').value.trim();
    if(!v) return;
    let offer = parseInt(v.replace(/[^0-9]/g, '')) || 0;
    let chat = document.getElementById('neg-chat');
    chat.innerHTML = `<div style="color:var(--accent-cyan);">Вы: $${offer.toLocaleString()}</div>` + chat.innerHTML;
    document.getElementById('neg-offer-input').value = '';
    // AI отвечает на предложение
    setTimeout(() => aiNegotiateResponse(offer), 800 + Math.random()*800);
}

function aiNegotiateResponse(offer) {
    if(!currentNegotiation) return;
    let chat = document.getElementById('neg-chat');
    let target = currentNegotiation.price;
    // Простая логика: если предложение >= target => принимают, если ниже, предлагают контр
    if(offer >= target) {
        chat.innerHTML = `<div style="color:var(--accent-orange);">${currentNegotiation.buyerName}: Сделка принята. Подписываем документы.</div>` + chat.innerHTML;
        currentNegotiation.lastOffer = offer;
        // Завершим продажу
        setTimeout(() => {
            finalizeSale(currentNegotiation.playerName, currentNegotiation.buyerName, offer, currentNegotiation.buyerTeamId, currentNegotiation.playerIdx);
            closeNegotiation();
        }, 900);
        return;
    }

    // ИИ делает встречное предложение, немного ниже изначальной цены
    let counter = Math.max(Math.round(currentNegotiation.price * (0.8 + Math.random() * 0.15)), Math.round(offer * 1.05));
    currentNegotiation.lastOffer = counter;
    chat.innerHTML = `<div style="color:var(--text-muted);">${currentNegotiation.buyerName}: Мы можем поднять до $${counter.toLocaleString()}, но не больше.</div>` + chat.innerHTML;
}

function acceptNegotiation() {
    if(!currentNegotiation) return;
    finalizeSale(currentNegotiation.playerName, currentNegotiation.buyerName, currentNegotiation.lastOffer, currentNegotiation.buyerTeamId, currentNegotiation.playerIdx);
    closeNegotiation();
}

let currentFreeAgentHire = null;
function openFreeAgentSalaryNegotiation(tab, idx) {
    let p = marketPlayers[tab][idx];
    if(!p) return;
    currentFreeAgentHire = { tab, idx, player: p, agreedSalary: p.salary || 30000 };
    document.getElementById('free-agent-name').innerText = p.name;
    document.getElementById('free-agent-salary-input').value = currentFreeAgentHire.agreedSalary;
    document.getElementById('free-agent-chat').innerHTML = `<div style="color:var(--text-muted); font-size:13px;">Игрок ${p.name} готов обсуждать только зарплату. Начните с первого предложения.</div>`;
    document.getElementById('free-agent-modal').style.display = 'flex';
}

function closeFreeAgentModal() {
    document.getElementById('free-agent-modal').style.display = 'none';
    currentFreeAgentHire = null;
}

function submitFreeAgentSalary() {
    if(!currentFreeAgentHire) return;
    let value = parseInt(document.getElementById('free-agent-salary-input').value.replace(/[^0-9]/g, '')) || 0;
    if(value <= 0) {
        alert('Введите корректную зарплату.');
        return;
    }
    currentFreeAgentHire.agreedSalary = value;
    let chat = document.getElementById('free-agent-chat');
    chat.innerHTML = `<div style="color:var(--accent-cyan);">Вы: предлагаю зарплату $${value.toLocaleString()} в месяц.</div>` + chat.innerHTML;
    setTimeout(() => freeAgentAIResponse(value), 700);
}

function freeAgentAIResponse(offer) {
    if(!currentFreeAgentHire) return;
    let player = currentFreeAgentHire.player;
    let base = Math.max(10000, player.salary || 30000);
    let expected = base + Math.round((player.skill - 70) * 250);
    let chat = document.getElementById('free-agent-chat');
    let response;
    if(offer >= expected) {
        response = `Игрок: Мне подходит. Готов подписать контракт за $${offer.toLocaleString()} в месяц.`;
        currentFreeAgentHire.agreedSalary = offer;
        currentFreeAgentHire.readyToSign = true;
    } else {
        let counter = Math.round(Math.max(expected, offer * 1.1));
        response = `Игрок: Это слишком мало. Я бы хотел как минимум $${counter.toLocaleString()} в месяц.`;
        currentFreeAgentHire.agreedSalary = counter;
        currentFreeAgentHire.readyToSign = false;
    }
    chat.innerHTML = `<div style="color:var(--text-muted);">${response}</div>` + chat.innerHTML;
}

function acceptFreeAgentSalary() {
    if(!currentFreeAgentHire) return;
    let p = currentFreeAgentHire.player;
    let idx = currentFreeAgentHire.idx;
    let tab = currentFreeAgentHire.tab;
    let salary = currentFreeAgentHire.agreedSalary || p.salary || 30000;
    marketPlayers[tab].splice(idx, 1);
    myTeam.roster.push({
        name: p.name,
        skill: p.skill,
        moral: 90,
        role: p.role,
        matches: 0,
        kd: "1.00",
        salary: salary,
        startSkill: p.skill,
        startPrice: 0,
        startKD: 1.00
    });
    myTeam.lastTransferTime = Date.now();
    teamChemistry = Math.max(20, teamChemistry - 15);
    addTweet("HLTV Transfer", `🔥 ${p.name} подписал контракт со ${myTeam.name} как свободный агент за $${salary.toLocaleString()} в месяц.`);
    updateHUD();
    renderMarket();
    renderRoster();
    renderManagePanel();
    closeFreeAgentModal();
}

function finalizeSale(playerName, buyerName, price, buyerTeamId = null, playerIndex = null) {
    if(!myTeam) return;
    let playerIdx = null;
    if(typeof playerIndex === 'number' && playerIndex >= 0 && playerIndex < myTeam.roster.length) {
        let candidate = myTeam.roster[playerIndex];
        if(candidate && candidate.name.trim() === playerName.trim()) {
            playerIdx = playerIndex;
        }
    }
    if(playerIdx === null) {
        playerIdx = myTeam.roster.findIndex(p => p.name.trim() === playerName.trim());
    }
    if(playerIdx === -1 || playerIdx === null) return;
    if(myTeam.roster.length <= MIN_ROSTER_SIZE) {
        addTweet("CS2 News", `⚠️ Сделка по ${playerName} отменена: в составе должно оставаться минимум ${MIN_ROSTER_SIZE} игроков.`);
        return;
    }
    let sold = myTeam.roster.splice(playerIdx, 1)[0];
    if(buyerTeamId) {
        let buyerTeam = teamsData.find(t => t.id === buyerTeamId);
        if(buyerTeam && buyerTeam.roster.length < TEAM_ROSTER_LIMIT) {
            buyerTeam.roster.push(sold);
            addTweet("CS2 Transfers", `💰 ${sold.name} продан в ${buyerName} за $${price.toLocaleString()}. Он пополнил состав ${buyerName}.`);
        } else {
            addTweet("CS2 Transfers", `💰 ${sold.name} продан в ${buyerName} за $${price.toLocaleString()}.`);
        }
    } else {
        addTweet("CS2 Transfers", `💰 ${sold.name} продан в ${buyerName} за $${price.toLocaleString()}.`);
    }
    clubBalance += price;
    closeNegotiation();
    renderRoster(); updateHUD(); renderMarket(); renderManagePanel();
}

// ===== Выбор команды для предложения игрока =====
let currentSellContext = null;
function openSellToTeam(playerIdx) {
    if(!myTeam) return alert('Сначала выберите свою команду.');
    currentSellContext = { playerIdx };
    let p = myTeam.roster[playerIdx];
    document.getElementById('sell-player-name').innerText = p ? p.name : '';
    let list = document.getElementById('sell-to-team-list');
    list.innerHTML = '';
    let available = 0;

    teamsData.forEach(t => {
        if(!myTeam || t.id === myTeam.id) return;
        if(t.roster.length >= TEAM_ROSTER_LIMIT) return;
        available++;
        let item = document.createElement('div');
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'space-between';
        item.style.padding = '10px';
        item.style.border = '1px solid var(--border-color)';
        item.style.borderRadius = '12px';
        item.style.cursor = 'pointer';
        item.style.background = 'rgba(255,255,255,0.02)';
        item.onmouseover = () => item.style.background = 'rgba(255,255,255,0.06)';
        item.onmouseout = () => item.style.background = 'rgba(255,255,255,0.02)';
        item.innerHTML = `
            <div style="display:flex; gap:12px; align-items:center;">
                <img src="${t.logo}" style="width:50px;height:50px;object-fit:contain;border-radius:10px; border:1px solid rgba(255,255,255,0.08);">
                <div>
                    <strong>${t.name}</strong>
                    <div style="font-size:12px;color:var(--text-muted);">Состав: ${t.roster.length}/5 • Средний скилл ${Math.round(t.roster.reduce((sum, pl) => sum + pl.skill, 0) / t.roster.length)}</div>
                </div>
            </div>
            <button style="padding:8px 14px; border-radius:10px; background:var(--accent-cyan); color:#000; border:none; cursor:pointer;">Начать переговоры</button>
        `;
        item.onclick = function(event) {
            if(event.target.tagName.toLowerCase() === 'button') return; // обработаем кнопку отдельно
            let player = myTeam.roster[playerIdx];
            let price = getTransferOfferPrice(player);
            closeSellToTeam();
            openNegotiation(player.name, t.name, price, t.id);
        };
        item.querySelector('button').onclick = function(e) {
            e.stopPropagation();
            let player = myTeam.roster[playerIdx];
            let price = getTransferOfferPrice(player);
            closeSellToTeam();
            openNegotiation(player.name, t.name, price, t.id);
        };
        list.appendChild(item);
    });

    if(available === 0) {
        list.innerHTML = `<div style="color:var(--text-muted); font-size:14px; padding:12px;">Нет команд, готовых принять игрока. Попробуйте позже.</div>`;
    }
    document.getElementById('sell-to-team-modal').style.display = 'flex';
}

function closeSellToTeam() {
    document.getElementById('sell-to-team-modal').style.display = 'none';
    currentSellContext = null;
}

// ===== Team preview on hover and selection confirmation =====
let teamPreviewTimer = null;
function showTeamPreview(teamId, ev) {
    clearTimeout(teamPreviewTimer);
    let team = teamsData.find(t => t.id === teamId);
    if(!team) return;
    let popup = document.getElementById('team-preview-popup');
    if(!popup) return;
    // build content
    let html = `<div class="team-preview-title">${team.name}</div><div class="team-preview-avatars">`;
    team.roster.forEach(p => {
        html += `<div title="${p.name}"><img src="${getPlayerAvatar(p.name)}" onerror="this.src='https://liquipedia.net/commons/images/a/a2/No_avatar.png'"></div>`;
    });
    html += `</div>`;
    popup.innerHTML = html;
    popup.style.display = 'block';
    // position under the target element
    let rect = (ev && ev.target && ev.target.closest('.team-select-card')) ? ev.target.closest('.team-select-card').getBoundingClientRect() : (ev ? {left: ev.clientX, bottom: ev.clientY} : {left:0,bottom:0});
    let left = rect.left + window.scrollX;
    // try center align
    left = Math.max(12, left + (rect.width/2) - (popup.offsetWidth/2));
    let top = rect.bottom + window.scrollY + 8;
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
}
function hideTeamPreview() {
    teamPreviewTimer = setTimeout(() => {
        let popup = document.getElementById('team-preview-popup');
        if(popup) popup.style.display = 'none';
    }, 120);
}

function confirmSelectTeam(teamId) {
    let modal = document.getElementById('team-confirm-modal');
    if(!modal) {
        // fallback to immediate select
        selectTeam(teamId);
        return;
    }
    document.getElementById('confirm-team-name').innerText = teamsData.find(t=>t.id===teamId).name;
    document.getElementById('confirm-yes-btn').onclick = function() { openProfileModal(teamId); };
    document.getElementById('confirm-no-btn').onclick = function() { modal.style.display = 'none'; };
    modal.style.display = 'flex';
}

function openProfileModal(teamId) {
    document.getElementById('team-confirm-modal').style.display = 'none';
    let modal = document.getElementById('create-profile-modal');
    if(!modal) return;
    document.getElementById('profile-firstname').value = '';
    document.getElementById('profile-lastname').value = '';
    document.getElementById('profile-age').value = '';
    document.getElementById('profile-save-btn').onclick = function() { createProfileAndSelect(teamId); };
    modal.style.display = 'flex';
}

function createProfileAndSelect(teamId) {
    let first = document.getElementById('profile-firstname').value.trim();
    let last = document.getElementById('profile-lastname').value.trim();
    let age = parseInt(document.getElementById('profile-age').value.trim()) || 0;
    if(!first || !last || age <= 0) { alert('Пожалуйста, заполните Имя, Фамилию и возраст корректно.'); return; }
    // Save profile to global
    window.myManagerProfile = { firstName: first, lastName: last, age: age };
    document.getElementById('create-profile-modal').style.display = 'none';
    // proceed to select team
    selectTeam(teamId);
}

