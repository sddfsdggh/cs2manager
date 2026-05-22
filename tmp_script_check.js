
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
    seasonState.startSkill = Math.round(myTeam.roster.reduce((sum, p) => sum + p.skill, 0) / myTeam.roster.length);
    seasonState.startValue = myTeam.roster.reduce((sum, p) => sum + (p.price || getTransferOfferPrice(p)), 0);
    seasonState.startKD = calculateTeamAverageKD(myTeam);
    myTeam.roster.forEach(p => {
        p.startSkill = p.skill;
        p.startPrice = p.price || getTransferOfferPrice(p);
        p.startKD = parseFloat(p.kd) || 1.00;
    });
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

    let player = myTeam.roster[0] || { name: 'Игрок', price: 20000 };
    let buyer = teamsData.find(t => t.id !== myTeam.id) || teamsData[0];
    let sellPrice = Math.round((player.price || getTransferOfferPrice(player)) * 1.1);

    seasonOfferContext = {
        playerName: player.name,
        buyerName: buyer.name,
        sellPrice
    };

    content.innerHTML = `
        <div style="display:grid; gap:14px;">
            <div style="padding:14px; border:1px solid var(--border-color); border-radius:14px; background:rgba(255,255,255,0.02);">
                <div style="font-weight:700; margin-bottom:8px;">Продать ${player.name}</div>
                <div style="color:var(--text-muted); font-size:13px; margin-bottom:12px;">Команда ${buyer.name} предлагает выкупить ${player.name} за $${sellPrice.toLocaleString()}.</div>
                <button class="modal-option-btn" onclick="handleSeasonOffer('sell')">Принять предложение</button>
            </div>
            <div style="padding:14px; border:1px solid var(--border-color); border-radius:14px; background:rgba(255,255,255,0.02); display:flex; gap:12px; align-items:center;">
                <img src="${buyer.logo || 'https://liquipedia.net/commons/images/a/a2/No_avatar.png'}" style="width:64px; height:64px; object-fit:contain; border-radius:8px; border:1px solid rgba(255,255,255,0.04);">
                <div style="flex:1;">
                    <div style="font-weight:700; margin-bottom:6px;">Предложение возглавить: ${buyer.name}</div>
                    <div style="color:var(--text-muted); font-size:13px; margin-bottom:8px;">Организация ${buyer.name} прислала официальное предложение стать главным тренером. Срок вступления — следующий сезон.</div>
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
        openNegotiation(item.playerName, item.buyerName, item.sellPrice);
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