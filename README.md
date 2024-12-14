/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

/*=============== VARIABLES CSS ===============*/
:root {
    --header-height: 3.5rem;
    --first-color: hsl(210, 100%, 50%); /* Azul */
    --first-color-alt: hsl(210, 100%, 40%); /* Azul Escuro */
    --title-color: hsl(0, 0%, 0%); /* Preto */
    --text-color: hsl(0, 0%, 10%); /* Preto Claro */
    --body-color: hsl(0, 0%, 100%); /* Branco */
    --container-color: hsl(210, 100%, 97%); /* Branco Azulado */

    /*========== Font and typography ==========*/
    --body-font: "Poppins", sans-serif;
    --biggest-font-size: 2rem;
    --bigger-font-size: 1.25rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    /*========== Font weight ==========*/
    --font-regular: 400;
    --font-medium: 500;
    --font-semi-bold: 600;

    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
}

/*========== Responsive typography ==========*/
@media screen and (min-width: 1152px) {
    :root {
        --biggest-font-size: 4rem;
        --bigger-font-size: 2rem;
        --h1-font-size: 2.25rem;
        --h2-font-size: 1.5rem;
        --h3-font-size: 1.25rem;
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
        --smaller-font-size: .813rem;
    }
}

/*=============== BASE ===============*/
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    scroll-behavior: smooth;
}

input,
textarea,
button,
body {
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
}

body {
    background-color: var(--body-color);
    color: var(--text-color);
}

input,
textarea,
button {
    outline: none;
    border: none;
}

h1,
h2,
h3,
h4 {
    color: var(--title-color);
    font-weight: var(--font-medium);
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

img,
svg {
    max-width: 100%;
    height: auto;
}

/*=============== REUSABLE CSS CLASSES ===============*/
.container {
    max-width: 1120px;
    margin-inline: auto;
}

.grid {
    display: grid;
    gap: 1.5rem;
}

.section {
    padding-block: 5rem 2rem;
}

.section__title,
.section__subtitle {
    text-align: center;
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}

.section__title {
    font-size: var(--h1-font-size);
    margin-bottom: 1.5rem;
}

.section__subtitle {
    font-size: var(--small-font-size);
    margin-bottom: .25rem;
}

.main {
    overflow: hidden;
}

/*=============== HEADER & NAV ===============*/
.header {
    position: fixed;
    width: 100%;
    background-color: var(--container-color);
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
}

.nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav__logo {
    width: 180px;
    height: 80px;
}

.nav__toggle,
.nav__close {
    display: flex;
    font-size: 1.25rem;
    color: var(--title-color);
    cursor: pointer;
}

/* Navegação para celulares */
@media screen and (max-width: 1023px) {
    .nav__menu {
        position: fixed;
        top: 0;
        right: -100%;
        background-color: hsla(210, 100%, 90%, 0.9);
        width: 75%;
        height: 100%;
        padding: 4.5rem 0 0 3rem;
        backdrop-filter: blur(24px);
        transition: right .4s;
    }
}

.nav__list {
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
}

.nav__link {
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: color .4s;
}

.nav__link:hover {
    color: var(--first-color);
}

.nav__close {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
}

/* Abrir menu */
.show-menu {
    right: 0;
}

/*=============== HOME ===============*/
.home {
    background-color: var(--container-color);
}

.home__container {
    padding-top: 2rem;
    row-gap: 2.5rem;
}

.home__content {
    display: grid;
    row-gap: 2rem;
}

.home__data {
    text-align: center;
}

.home__title {
    font-size: var(--biggest-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--first-color);
}

.home__description {
    margin-block: 1rem 1.5rem;
}

.home__social {
    display: flex;
    justify-content: center;
    column-gap: 1.25rem;
}

.home__social-link {
    display: flex;
    background-color: var(--first-color-alt);
    padding: .5rem;
    color: hsl(0, 0%, 100%);
    font-size: 1.5rem;
    transition: transform .4s;
    border-radius: 10px;
}

.home__social-link:hover {
    transform: translateY(-.25rem);
}

.home__image {
    justify-self: center;
}

/*=============== BUTTON ===============*/
.button {
    display: inline-block;
    background-color: var(--first-color);
    padding: 1rem 1.75rem;
    border-radius: .5rem;
    color: var(--body-color);
    font-weight: var(--font-medium);
    transition: box-shadow .4s;
}

.button:hover {
    box-shadow: 0 8px 24px hsla(210, 100%, 40%, .25);
}

/*=============== SOBRE NÓS ===============*/
.about__container {
    row-gap: 2.5rem;
}

.about__data {
    text-align: center;
}

.about__description {
    margin-bottom: 2rem;
}

/*=============== BENEFICIOS E RECURSOS ===============*/
.skills {
    background-color: var(--container-color);
}

.skills__container {
    padding-bottom: 2rem;
    row-gap: 3.5rem;
}

.skills__data {
    text-align: center;
}

.skills__description {
    padding: 20px;
    margin-bottom: 2rem;
}

.skills__content,
.skills__group {
    display: grid;
}

.skills__content {
    justify-content: center;
    align-items: baseline;
}

.skills__group {
    row-gap: 1rem;
    list-style: decimal-leading-zero;
}

.skills__item {
    font-weight: var(--font-medium);
    color: var(--title-color);
}

.skills__item::marker {
    color: var(--first-color);
}

/*=============== SERVIÇOS ===============*/
.services__container {
    row-gap: 2rem;
    padding-block: 1rem;
}

.services__card {
    text-align: center;
    background-color: var(--container-color);
    padding: 3rem 1.25rem;
    border-radius: 1rem;
    border: 2px solid var(--container-color);
    transition: border .4s;
}

.services__icon {
    display: block;
    font-size: 4rem;
    color: var(--first-color);
    margin-bottom: .75rem;
}

.services__title {
    font-size: var(--h2-font-size);
    margin-bottom: 1.5rem;
}

.services__card:hover {
    border: 2px solid var(--first-color);
}

/*=============== SUPORTE ===============*/
.services__car {
    text-align: center;
    background-color: var(--container-color);
    padding: 1rem 1.25rem;
    border-radius: 1rem;
    border: 2px solid var(--container-color);
    transition: border .4s;
}

.services__car:hover {
    border: 2px solid var(--first-color);
}

/*=============== FOOTER ===============*/
.footer {
    background-color: var(--container-color);
    padding-block: 3.5rem 2rem;
}
