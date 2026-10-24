/**
 * Hungarian copy for the data that lives in `site.ts` as en/ru pairs.
 * `site.ts` merges these in at load time and fails the build if a project has no entry.
 */

type HuProject = { dates: string; role: string; summary: string; bullets: string[] };

const ongoing = 'Folyamatban';
const author = 'Szerző';

export const huProjects: Record<string, HuProject> = {
  juniper: {
    dates: '2019 — 2025',
    role: 'Core fejlesztő — backend, frontend, adatbázis',
    summary: 'Többcélú Discord-bot nagy közösségeknek — moderáció és segédeszközök.',
    bullets: [
      'Éles bot nagy léptékben; eddig: 1 291 495 szerver, 4 928 753 felhasználó, 198 M+ feldolgozott parancs.',
      'A p95 lekérdezési időt 1,4 s-ról 18 ms-ra (~77×), az adatbázis csúcs CPU-terhelését 85%-ról 15%-ra csökkentettem: az EXPLAIN ANALYZE a mély előzményoldalakon és a szezonális ranglistákon Seq Scant mutatott, ezért keyset lapozásra (WHERE id < last_seen_id) álltam át, és fedő indexet adtam a (server_id, created_at DESC) INCLUDE (user_id, points) oszlopokra.',
    ],
  },
  orbs: {
    dates: '2026 — jelenleg',
    role: 'Partnerfejlesztő — kódstruktúra',
    summary: 'Discord Quests a VALORANT számára partnerségben: a Discord Orbs és a VALORANT összekötése.',
    bullets: [
      'Partneri munka a VALORANT nevében futó Discord Questsen; megterveztem az Orbs-összekötés kódstruktúráját.',
    ],
  },
  cheterin: {
    dates: '2026 — jelenleg',
    role: 'Alapító és vezető fejlesztő',
    summary:
      'Nyilvános, több szerveres Discord-bot webes vezérlőpulttal, plusz a Lookup és a ChetMedia ugyanabban az ökoszisztémában.',
    bullets: [
      'Saját rendszer, alapítása óta én építem és üzemeltetem; a szerzőség a weboldalak credits oldalán szerepel. Nyilvános, több szerveres Discord-bot webes vezérlőpulttal, jelenleg 518 szerveren: az adminok a böngészőben kapcsolják be a modulokat szerverenként, a tagok slash parancsokat használnak, minden szerver elszigetelt. Nyílt forráskódú (Apache-2.0), 358 commit: github.com/Nanda070/Cheterin-Bot.',
      'Modulok: moderáció (naplók, antispam, automod, hitelesítés, antiraid), szintek és XP, gazdaság és bolt, nyereményjátékok és szavazások, VALORANT-eszközök (Premier jelentkezések, szerepkörpanelek, Customs lobbyk). EN/RU felület.',
      'Cheterin Lookup: különálló nyilvános szolgáltatás saját SPA-val és API-val, független folyamatként futva, Discord ID-k és profilok feloldására; itt található a Vencord userplugins is.',
      'ChetMedia: saját anime streaming termék (katalógus és nézés), napi kb. 270 000 megtekintéssel, csúcs 370 000.',
      'CI pytesttel és frontend buildekkel GitHub Actionsön; systemd egységekkel, nginx mögött telepítve.',
    ],
  },
  chetmedia: {
    dates: '2026 — jelenleg',
    role: 'Alapító',
    summary: 'Anime streaming a Cheterin stackben — katalógus, nézés, folyamatos működés.',
    bullets: ['Megépítettem és üzemeltetem a streaming terméket a Cheterin közönségének.'],
  },
  valqauym: {
    dates: '2026 — jelenleg',
    role: 'Alkotó, jelenleg a fejlesztőcsapat vezetője',
    summary: 'Discord-bot és weboldal a kazahsztáni VALORANT-közösségnek: sorok (queue) és eszközök.',
    bullets: [
      'Én hoztam létre a projektet; később egy másik személynek adtam át a tulajdonjogot, aki a nyilvános arca lett. A fejlesztőcsapatot továbbra is én vezetem. A szerzőség a valqauym.kz credits oldalán szerepel.',
      'Sorok és eszközök a kazahsztáni VALORANT-közösségnek.',
    ],
  },
  lookup: {
    dates: '2026 — jelenleg',
    role: author,
    summary: 'Discord-entitások keresője — ID-k, profilok és kontextus igény szerint.',
    bullets: ['A Cheterin stack része Discord ID-k és profilok feloldására.'],
  },
  'card-site': {
    dates: ongoing,
    role: author,
    summary: 'Személyes digitális névjegykártya — tömör nyilvános arc linkekkel és kapcsolatfelvétellel.',
    bullets: ['Könnyű nyilvános névjegykártya a nanda.is-a.dev címen.'],
  },
  vencord: {
    dates: ongoing,
    role: author,
    summary: 'Egyedi Vencord userpluginok — kliensoldali fejlesztések azoknak, akik testre szabják a Discordot.',
    bullets: [
      'Pluginok, például SoundboardToVoice, vc-followUser, vc-voiceChatUtilities, vc-betterActivities és vencord-antirickroll, külön nyilvános repókban.',
    ],
  },
  neptun: {
    dates: 'Egyetemi projekt',
    role: author,
    summary: 'Nem hivatalos Flutter kliens az ELTE Neptunhoz — órarend, jegyek, levelezés.',
    bullets: ['Egyetemi projekt: mobilkliens az ELTE hallgatói rendszerei köré.'],
  },
  lumen: {
    dates: ongoing,
    role: author,
    summary:
      'Local-first Flutter életvezetési rendszer — naptár, feladatok, szokások, pénzügyek. Az adatok az eszközön maradnak.',
    bullets: ['Személyes termék: iOS-first, helyi adatok, EN/RU.'],
  },
  'rp-state-mirror': {
    dates: ongoing,
    role: author,
    summary:
      'Discord-bot és webes vezérlőpult a GTA5RP Mirror szerverének állami frakcióinak, amelyet ott az állami szervezetek használnak. Dokumentumok, körözések, bírságok, jármű- és egyenruha-nyilvántartás, személyzeti audit, űrlapok és beadványok. 145 commit.',
    bullets: ['A GTA5RP Mirror szerverén állami szervezetek használják.'],
  },
  sofra: {
    dates: 'Fejlesztés alatt',
    role: author,
    summary:
      'Felhőalapú POS és back-office platform azerbajdzsáni éttermeknek és kávézóknak: pénztár, pincér-alkalmazás, konyhai kijelző, készlet, QR-asztalrendelés, multi-tenant, Open API. Felület AZ, RU, TR és EN nyelven.',
    bullets: ['Fejlesztés alatt; 33 commit.'],
  },
  'gta5rp-wiki-api': {
    dates: '2026',
    role: author,
    summary:
      'Nem hivatalos TypeScript kliens a GTA5RP wikihez: élő térkép és ingatlan-pillanatképek. MIT, dokumentáció EN és RU nyelven.',
    bullets: ['Típusos kliens dokumentációval, changelogkal és CI-vel.'],
  },
  astra: {
    dates: ongoing,
    role: author,
    summary: 'Négy Minecraft szerverplugin (SMP, építés, operátor és IP-eszközök) élő szervereknek.',
    bullets: ['AstraSMP, AstraBuild, AstraOP és AstraIP.'],
  },
  astrasmp: {
    dates: ongoing,
    role: author,
    summary: 'ASTRA Minecraft plugin — survival / SMP rendszerek élő szervereknek.',
    bullets: ['Szerveroldali rendszerek survival és SMP játékmenethez.'],
  },
  astrabuild: {
    dates: ongoing,
    role: author,
    summary: 'ASTRA építőeszköz-készlet — kreatív és építési segédek Minecraft-világokhoz.',
    bullets: ['Építési és kreatív segédek az ASTRA plugincsaládban.'],
  },
  astraop: {
    dates: ongoing,
    role: author,
    summary: 'Operátor ASTRA plugin — admin eszközök Minecraft szervereknek.',
    bullets: ['Operátori segédprogramok hamis, teljes admin panel nélkül.'],
  },
  astraip: {
    dates: ongoing,
    role: author,
    summary: 'IP / hálózati eszközök az ASTRA családban a Minecraft azonosításhoz és hozzáféréshez.',
    bullets: ['Hálózati és azonosítási segédek Minecraft szerverekhez.'],
  },
  idus: {
    dates: ongoing,
    role: author,
    summary: 'Otthoni AI-asszisztens kísérlet — hang, automatizálás, helyi intelligencia.',
    bullets: ['Self-hosted otthoni AI-asszisztens kísérletek.'],
  },
  pepegago: {
    dates: ongoing,
    role: author,
    summary: 'Helyalapú mobiljáték — a mémek mint teljes értékű játéküzemanyag.',
    bullets: ['Helyalapú mobiljáték a Pokémon GO szellemében.'],
  },
  arcana: {
    dates: ongoing,
    role: author,
    summary: 'Thaumcraft ihlette mod fork — régebbi mágiarendszerek újabb Minecraft-verziókon.',
    bullets: ['Minecraft mágia mod, amely a régebbi rendszereket újabb verziókra viszi át.'],
  },
  odysseus: {
    dates: '2026',
    role: author,
    summary:
      'Self-hosted AI munkatér: chat és ágensek eszközökkel és MCP-vel, deep research, dokumentumok, e-mail, jegyzetek, naptár. AGPL-3.0.',
    bullets: ['Helyben fut Docker Compose-szal.'],
  },
  'reverse-proxy': {
    dates: 'Korai fázis',
    role: author,
    summary:
      'Reverse proxy .NET 8-on, System.IO.Pipelines köré építve, célja nulla heap-allokáció a kéréselérési úton.',
    bullets: ['A benchmarkok és a terheléselosztás még a tervek között szerepelnek.'],
  },
  'tg-ds-bridge': {
    dates: '2026',
    role: author,
    summary:
      'Kétirányú Telegram ↔ Discord szinkron: üzenetek, média, szerkesztések és törlések, az üzenetazonosítók újraindítások között is megmaradnak.',
    bullets: [
      'A dinamikus webhookok a Telegram-üzeneteket a feladó nevével és avatarjával jelenítik meg.',
    ],
  },
  'casino-plugin': {
    dates: '2026',
    role: author,
    summary: 'Kaszinó plugin Minecraft 1.21.11 szerverekhez.',
    bullets: ['Szerveroldali kaszinójátékok survival szerverekhez.'],
  },
};

/** Labels for `stats`, in the same order. */
export const huStats: string[] = [
  'A Juniper által eddig kiszolgált szerverek',
  'A Juniper által eddig feldolgozott parancsok',
  'Cheterint futtató szerverek',
  'ChetMedia megtekintés naponta (csúcs 370 ezer)',
];

export const huContacts: Record<string, string> = {
  email: 'E-mail',
  phone: 'Telefon',
  telegram: 'Telegram',
  github: 'GitHub',
  discord: 'Discord',
  card: 'Névjegykártya',
};
