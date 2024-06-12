import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from "./MyCard";

function Code() {
  return (
    <>
      <h1>Projects</h1>
      <div className="cards">
        <MyCard
          cardTopBackground={"rgba(2, 18, 44, .35)"}
          leftImage={"/altgenlogo.png"}
          rightImage={"/python-color.png"}
          title={"AI for Accessible Alt-Text"}
          caption={
            "Senior Design @ Stevens Institute of Technology w/ Free Ebook Foundation"
          }
          subCaption={
            "#python #beautifulsoup4 #ebooklib #pytorch #pypi #hatchling #replicateapi #googlevertexai #tesseract #openaiapi #privategpt #django #djangorestframework #openapi #r"
          }
          description={
            'The "AI for Accessible Alt-Text" project is dedicated towards using current AI technologies, such as machine vision and large language models, to assist in the creation of alternative text for images within Ebooks, pursuing the goal of making Ebooks more accessible.\n\nFor this project, we developed a PyPi package to generate alt-text for images within Ebooks using popular AI services, such as Google AI Platform, Replicate, and OpenAI.\n\nWe also created an OpenAPI documented REST API to wrap this package, allowing for the same functionality to be used in any web accessible technology.'
          }
          links={[
            [
              "Go to PyPi Package Code",
              "https://github.com/EbookFoundation/alt-text",
              "secondary",
            ],
            [
              "Go to API Code",
              "https://github.com/EbookFoundation/alt-text-backend",
              "secondary",
            ],
            [
              "Go to PyPi Package",
              "https://pypi.org/project/alt-text/",
              "warning",
            ],
            [
              "Go to Free Ebook Foundation",
              "https://ebookfoundation.org/exploration.html",
              "primary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(212, 74, 188, .35)"}
          leftImage={"/genedusa.png"}
          rightImage={"/tailwind.svg"}
          title={"GenEdUSA Website"}
          caption={"Commissioned by GenEdUSA"}
          subCaption={"#next #react #tailwindcss #nextui #nextthemes #vercel"}
          description={
            "GenEdUSA is a commissioned website designed to showcase their mission, background, and services.\n\nGenEdUSA is a Next based website deployed using Vercel."
          }
          links={[
            ["Go to Code", "https://github.com/genedusa/genedusa", "secondary"],
            ["Go to Deployment", "https://genedusa.com", "primary"],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(226, 61, 40, .35)"}
          leftImage={"/canvas.png"}
          rightImage={"/nodejs.png"}
          title={"Canvas Scraper CLI"}
          caption={"Personal Project"}
          subCaption={
            "#javascript #nodejs #puppeteer #commander #inquirer #canvas"
          }
          description={
            "Canvas Scraper CLI is a command-line tool for scraping and downloading data from Canvas (e.g. assignments and modules).\n\nCanvas Scraper CLI is developed using NodeJS and compiled using Nexe."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/xxmistacruzxx/canvas-scraper-cli",
              "secondary",
            ],
            [
              "Go to Download",
              "https://github.com/xxmistacruzxx/canvas-scraper-cli/releases",
              "primary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(255, 255, 255, .35)"}
          leftImage={"/coursehorse.png"}
          rightImage={"/typescript.png"}
          title={"Course Horse"}
          caption={"Web Development II @ Stevens Institute of Technology"}
          subCaption={
            "#typescript #next #react #mongodb #sass #bootstrap #ironsession #jquery #axios #vercel #mongoatlas #docker #dockercompose"
          }
          description={
            "Course Horse is a platform that allows educators to create courses for learners around the world to take asynchronously.\n\nCourse Horse is a Next based website deployed using Vercel and Mongo Atlas."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/Course-Horse/course-horse",
              "secondary",
            ],
            ["Go to Deployment", "https://course-horse.vercel.app/", "primary"],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(229, 134, 23, .35)"}
          leftImage={"/csgologo.png"}
          rightImage={"/puppeteer.png"}
          title={"CSView"}
          caption={"Personal Project"}
          subCaption={
            "#next #react #puppeteer #jquery #axios #oraclecloud #googlecloudrun #docker #browserless #csgostats #hltv"
          }
          description={
            "CSView focuses on delivery utilities to CS:GO players, such as a player stats search, a game/multi-player stats search, an upcoming eSports match listings, and a crosshair repository. Data is obtained from csgostats.gg and HLTV.\n\nCSView is a Next based website deployed using Vercel, Google Cloud Run, Docker."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/xxmistacruzxx/CSView",
              "secondary",
            ],
            ["Go to Deployment", "https://csview.vercel.app/", "primary"],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(17, 0, 28, .35)"}
          leftImage={"/coinwizard.png"}
          rightImage={"/cryptocompare.png"}
          title={"CoinWizard"}
          caption={"Personal Project"}
          subCaption={
            "#next #react #nextui #axios #recharts #marked #cryptocompareapi #blockchainapi #etherscanapi"
          }
          description={
            "CoinWizard is a website with various cryptocurrency related features, such as real-time market & blockchain viewing, real-time price conversions, and address lookups (for BTC & ETH).\nData is obtained using CryptoCompare API, Blockchain API, and Etherscan API.\n\nCoinWizard is a Next/React based website deployed using Vercel."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/xxmistacruzxx/CoinWizard",
              "secondary",
            ],
            ["Go to Deployment", "https://coin-wizard.vercel.app/", "primary"],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(88, 101, 242, .35)"}
          leftImage={"/coinwizardbot.png"}
          rightImage={"/discordpylogo.ico"}
          title={"CoinWizard Bot"}
          caption={"Personal Project"}
          subCaption={
            "#discord.py #py-cord #requests #cryptocompareapi #blockchainapi #etherscanapi"
          }
          description={
            "CoinWizard Bot is a Discord Bot with various cryptocurrency related commands, such as real-time market & blockchain viewing, real-time price conversions, and address lookups (for BTC & ETH).\nData is obtained using CryptoCompare API, Blockchain API, and Etherscan API.\n\nCoinWizard Bot is a discord.py/py-cord based Discord Bot deployed locally on David's home server."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/xxmistacruzxx/CoinWizardBot",
              "secondary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(255, 255, 255, 0.35)"}
          leftImage={"/favicon.ico"}
          rightImage={"/threejslogo.png"}
          title={"Portfolio Website"}
          caption={"Personal Project"}
          subCaption={
            "#vite #react #three.js #react-three-fiber #bootstrap #react-bootstrap #jquery #github-pages"
          }
          description={
            "Personal portfolio website for myself (you're looking at it!).\n\nUsed as an opportunity to explore various web development libraries and tools such as Vite, React, Three.js, and Bootstrap, deployed using Github Pages."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/xxmistacruzxx/xxmistacruzxx.github.io",
              "secondary",
            ],
            ["Go to Deployment", "https://xxmistacruzxx.github.io/", "primary"],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(247, 234, 161, .35)"}
          leftImage={"/bis.png"}
          rightImage={"/mongodb.png"}
          title={"Building Inventory System (BIS)"}
          caption={"Web Development I @ Stevens Institute of Technology"}
          subCaption={
            "#express #mongodb #express-session #handlebars #googlemapsAPI #axios #AJAX #jquery #bcrypt #multer #xss #mongoatlas #googlecloudrun"
          }
          description={
            "Final project for Professor Patrick Hill's Web Development I (CS546) course at Stevens Institute of Technology. Developed during the Spring 2023 semester.\n\nThe project an inventory management system website, designed to be used both for business and personal use. The main features include basic inventory management capabilities, cross-account sharing/collaboration, and browsing.\n\nThe project is an Express based website that uses MongoDB to store data. It's deployed using Google Cloud Run and Mongo Atlas."
          }
          links={[
            ["Go to Code", "https://github.com/xxmistacruzxx/BIS", "secondary"],
            [
              "Go to Deployment",
              "https://bis-tckwrctgwa-uc.a.run.app/",
              "primary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(58, 58, 58, .35)"}
          leftImage={"/keyboardHero.png"}
          rightImage={"/express.png"}
          title={"Keyboard Hero"}
          caption={
            "Human-Computer Interaction @ Stevens Institute of Technology"
          }
          subCaption={"#express #handlebars #jquery"}
          description={
            "Course project for Professor Gregg Vesonder's Human-Computer Interaction (CS545) course at Stevens Institute of Technology. Developed during the Spring 2023 semester.\n\nThe project a proof of concept web-based typing game, inspired by the likes of MonkeyType, TypeRacer, and Typing Derby. The main features include the typing game itself, personal bests and leaderboards, and cross-page theming.\n\nThe project is an Express based website."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/xxmistacruzxx/KeyboardHero",
              "secondary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(55, 81, 255, .35)"}
          leftImage={"/amaterasu.png"}
          rightImage={"/nextjslogo.png"}
          title={"Amaterasu"}
          caption={
            "Agile Methods for Software Development @ Stevens Institute of Technology"
          }
          subCaption={"#next #react #firebase #vercel #cypress"}
          description={
            "Course project for Professor Zhongyuan (Annie) Yu's Agile Methods for Software Development (CS555) course at Stevens Institute of Technology. Developed during the Spring 2023 semester.\n\nThe project a proof of concept project management system for solar panel installation companies. Main features include basic project organization tools, sharing/collaboration capabilities, and account type permission handling.\n\nThe project is a Next based website that uses Firebase to store data. It's also deployed using Vercel."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/EllaCrabtree/CS555-Women-in-STEM",
              "secondary",
            ],
            [
              "Go to Deployment",
              "https://cs-555-women-in-stem.vercel.app/",
              "primary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(117, 151, 222, .35)"}
          leftImage={"/ezimglogo.png"}
          rightImage={"/html5logo.png"}
          title={"EZImgHost"}
          caption={
            "Intro to Web Programming and Web Development @ Stevens Institute of Technology"
          }
          subCaption={"#html #javascript #css"}
          description={
            "Final project for Professor Enrique Dunn's Intro to Web Programming and Web Development (CS146) at Stevens Institute of Technology. Developed during the Fall 2022 semester.\n\nThe project a proof of concept image host website. Main features include uploading images, browsing by categories, and fluid/multi-platform page designs.\n\nThe project is a purley vanilla HTML, CSS, and Javascript designed site."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/xxmistacruzxx/CS146DCEJCZ",
              "secondary",
            ],
          ]}
        />
      </div>
    </>
  );
}

export default Code;
