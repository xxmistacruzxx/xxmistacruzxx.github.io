import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewlineText from "./newlineText";
import MyCard from "./MyCard";

function Code() {
  return (
    <>
      <h1>Projects</h1>
      <div className="cards">
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
            "CoinWizard Bot is a Discord Bot with various cryptocurrency related commands, such as real-time market & blockchain viewing, real-time price conversions, and address lookups (for BTC & ETH).\nData is obtained using CryptoCompare API, Blockchain API, and Etherscan API.\n\nCoinWizard Bot is a discord.py/py-cord based Discord Bot."
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
            "#react #three.js #react-three-fiber #bootstrap #react-bootstrap #jquery #github-pages"
          }
          description={
            "Personal portfolio website for myself, deployed using Github Pages (you're looking at it!).\n\nUsed as an opportunity to explore various web development libraries and tools such as React, Three.js, and Bootstrap."
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
            "#express #mongodb #express-session #handlebars #googlemapsAPI #axios #AJAX #jquery #bcrypt #multer #xss"
          }
          description={
            "Final project for Professor Patrick Hill's Web Development I (CS546) course at Stevens Institute of Technology. Developed during the Spring 2023 semester.\n\nThe project an inventory management system website, designed to be used both for business and personal use. The main features include basic inventory management capabilities, cross-account sharing/collaboration, and browsing.\n\nThe project is an Express based website that uses MongoDB to store data and Express-Session to handle user sessions."
          }
          links={[
            [
              "Go to Code",
              "https://github.com/twang1905/CS-546-Final-Project",
              "secondary",
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
              "https://github.com/xxmistacruzxx/KeyboardHero",
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
              "https://github.com/xxmistacruzxx/KeyboardHero",
              "secondary",
            ],
          ]}
        />
      </div>
    </>
  );
}

export default Code;
