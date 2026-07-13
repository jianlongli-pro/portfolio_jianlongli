export const translations = {
  fr: {
    nav: ['Parcours', 'Projets', 'Blog', 'Contact'],
    kicker: 'Ingénieur E-Santé',
    tagline:
      "En recherche d'une thèse CIFRE au croisement du logiciel, des systèmes embarqués et de la biotechnologie.",
    cta: 'Voir les projets',
    parcours: 'Parcours',
    projets: 'Projets de recherche',
    blog: 'Blog',
    blogSub: 'Notes de recherche et de veille scientifique',
    contact: 'Contact',
    readMore: 'Lire',
    backHome: "Retour à l'accueil",
    allPosts: 'Tous les articles',
    publishedOn: 'Publié le',
  },
  en: {
    nav: ['Background', 'Projects', 'Blog', 'Contact'],
    kicker: 'Health-tech engineer',
    tagline:
      'Seeking an industrial PhD (CIFRE) at the intersection of software, embedded systems, and biotechnology.',
    cta: 'View projects',
    parcours: 'Background',
    projets: 'Research projects',
    blog: 'Blog',
    blogSub: 'Research notes and scientific watch',
    contact: 'Contact',
    readMore: 'Read',
    backHome: 'Back home',
    allPosts: 'All posts',
    publishedOn: 'Published on',
  },
  zh: {
    nav: ['履历', '研究项目', '博客', '联系方式'],
    kicker: '健康科技工程师',
    tagline: '正在寻找软件、嵌入式系统与生物科技交叉领域的产学研博士(CIFRE)项目。',
    cta: '查看项目',
    parcours: '履历',
    projets: '研究项目',
    blog: '博客',
    blogSub: '研究笔记与科学动态',
    contact: '联系方式',
    readMore: '阅读',
    backHome: '返回首页',
    allPosts: '全部文章',
    publishedOn: '发布日期',
  },
};

// Color-coded by discipline rather than by sequence — the three colors
// correspond to the three real threads running through the background:
// software/data, embedded/hardware, and health/bio.
export const DOMAIN = {
  software: { name: 'Logiciel', text: '#0F6E56', bg: '#E1F5EE', border: '#5DCAA5' },
  embedded: { name: 'Embarqué', text: '#854F0B', bg: '#FAEEDA', border: '#EF9F27' },
  health: { name: 'Santé', text: '#993556', bg: '#FBEAF0', border: '#ED93B1' },
};

export function domainFor(text) {
  const s = text.toLowerCase();
  if (/(cerveau|santé|biotechnolog|rgpd|clinique|médic)/.test(s)) return DOMAIN.health;
  if (/(arduino|embarqué|c\b|matlab|tkinter|piézo|haptique)/.test(s)) return DOMAIN.embedded;
  return DOMAIN.software;
}

export { timeline } from './timeline.js';

export const projects = [
  {
    title: 'BEATBox — Institut du Cerveau',
    stack: ['Python', 'MATLAB', 'Arduino', 'Tkinter'],
    desc: "Pilotage du cycle de développement d'une solution logicielle de configuration et de visualisation d'expérimentations sur la plasticité cérébrale animale.",
  },
  {
    title: "Moteur d'approximation polynomiale — Dassault Systèmes",
    stack: ['Python', 'C++', 'Random Forest'],
    desc: "Conception d'un moteur de calcul en 5 étapes et d'un modèle prédictif réduisant la complexité temps/stockage, intégré au workflow CATIA.",
  },
  {
    title: 'Gants haptiques médicaux — ESIEE Paris',
    stack: ['C', 'Arduino', 'Piézoélectrique'],
    desc: "Reproduction d'une main virtuelle avec retour haptique par accéléromètre et actionneurs piézoélectriques.",
  },
];

export const posts = [
  {
    slug: 'fhir-recherche-interoperabilite',
    title: 'Standardisation FHIR : un pont entre recherche et interopérabilité clinique',
    date: '2026-01-15',
    excerpt:
      "Pourquoi un projet de recherche en santé qui ignore les standards d'interopérabilité prend du retard avant même d'avoir commencé.",
    body: [
      "Un algorithme de recherche brillant qui ne sait pas lire les données d'un autre service hospitalier n'est, en pratique, qu'un prototype de laboratoire. C'est une leçon que j'ai retenue en travaillant sur des outils numériques de santé : la valeur d'un système ne se mesure pas seulement à sa performance, mais à sa capacité à dialoguer avec l'existant.",
      "FHIR (Fast Healthcare Interoperability Resources) propose un modèle de données commun pour les échanges cliniques. Ce n'est pas qu'une norme technique : c'est un langage partagé entre chercheurs, éditeurs de logiciels médicaux et institutions, qui permet à un jeu de données recueilli dans un service de cardiologie d'être exploité, sans traduction manuelle, par une équipe de recherche en génétique ou en neurophysiologie.",
      "Pour un profil comme le mien, qui vient du logiciel et de l'embarqué, l'enjeu est de concevoir des systèmes de mesure et d'acquisition (capteurs, dispositifs embarqués, pipelines data) pensés dès la conception pour produire des données interopérables — plutôt que de les rendre compatibles a posteriori, ce qui coûte toujours plus cher en temps de recherche.",
      "C'est une des raisons pour lesquelles je cherche une thèse CIFRE : produire de la recherche qui reste utilisable au-delà du papier, dans des environnements cliniques ou industriels réels.",
    ],
  },
  {
    slug: 'approximation-polynomiale-modelisation-vivant',
    title: "Ce que l'approximation polynomiale enseigne sur la modélisation du vivant",
    date: '2025-11-02',
    excerpt:
      "Un parallèle entre l'ingénierie du calcul industriel et la modélisation de systèmes biologiques complexes.",
    body: [
      "Chez Dassault Systèmes, j'ai travaillé sur un moteur de calcul d'approximation polynomiale pour le logiciel de modélisation 3D CATIA. L'objectif : remplacer un calcul exact, coûteux en temps et en mémoire, par une approximation suffisamment fidèle pour être exploitable en conception industrielle.",
      "Le vivant pose un problème analogue. Un signal cardiaque, une trace EEG ou l'expression d'un gène ne se laissent jamais décrire par une formule exacte — on cherche plutôt le modèle le plus simple qui capture l'essentiel du phénomène, sans le noyer dans le bruit ni le simplifier à l'excès.",
      "Le modèle prédictif Random Forest que j'ai intégré en amont du calcul d'approximation servait à anticiper les bons paramètres avant même de lancer le calcul complet — un principe transposable à la santé : prédire quels paramètres physiologiques méritent d'être mesurés finement, et lesquels peuvent être approximés sans perte d'information utile.",
      "C'est ce pont entre rigueur algorithmique et pragmatisme de terrain que je veux approfondir en thèse, appliqué à des données biologiques ou physiologiques réelles plutôt qu'à des surfaces géométriques.",
    ],
  },
  {
    slug: 'piloter-experimentation-neurophysiologique-arduino',
    title: 'Piloter une expérimentation neurophysiologique avec Arduino : retour de terrain',
    date: '2025-09-20',
    excerpt:
      "Retour d'expérience sur le pilotage logiciel d'expérimentations comportementales animales à l'Institut du Cerveau.",
    body: [
      "Le projet BEATBox, à l'Institut du Cerveau, consistait à développer une solution logicielle pour configurer et visualiser les résultats d'expérimentations sur le comportement et la plasticité cérébrale animale — cinq boîtes de recherche pilotées en parallèle, avec des contraintes temps réel strictes.",
      "Le choix technique s'est porté sur Python pour la logique de contrôle et l'interface (Tkinter), MATLAB pour le traitement du signal, et Arduino Uno pour l'acquisition physique — accompagné de circuits imprimés dédiés. Faire dialoguer ces trois mondes (logiciel haut niveau, calcul scientifique, électronique embarquée) a été le vrai sujet du stage, bien plus que l'algorithmie elle-même.",
      "Travailler avec une équipe internationale de doctorants et post-doctorants (NERB Team) m'a aussi appris que la partie la plus critique d'un outil de recherche n'est pas son architecture logicielle, mais les ateliers de recueil de besoins : comprendre ce qu'un chercheur a réellement besoin de configurer, versus ce qu'il pense avoir besoin de configurer.",
      "C'est cette double compétence — rigueur d'ingénieur embarqué et écoute du besoin scientifique — que je veux mettre au service d'un sujet de thèse CIFRE.",
    ],
  },
];
