import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const EmojiDectionary = {
    "๐": "grinning face",
    "๐": "grinning face with smiling eyes",
    "๐": "beaming face with smiling eyes",
    "๐": "grinning squinting face",
    "๐": "grinning face with sweat",
    "๐คฃ": "rolling on the floor laughing",
    "๐": "slightly smiling face",
    "๐": "upside-down face",
    "๐": "face with tears of joy",
    "๐": "winking face",
    "๐": "smiling face with smiling eyes",
    "๐": "smiling face with halo",
    "๐ฅฐ": "smiling face with hearts",
    "๐": "smiling face with heart-eyes",
    "๐คฉ": "star-struck",
    "๐": "face blowing a kiss",
    "๐": "kissing face",
    "๐": "kissing face with closed eyes",
    "๐": "kissing face with smiling eyes",
    "๐": "face savoring food",
    "๐": "face with tongue",
    "๐": "winking face with tongue",
    "๐คช": "zany face",
    "๐": "squinting face with tongue",
    "๐ค": "money-mouth face",
    "๐ค": "smiling face with open hands",
    "๐คญ": "face with hand over mouth",
    "๐คซ": "shushing face",
    "๐ค": "thinking face",
    "๐ค": "zipper-mouth face",
    "๐คจ": "face with raised eyebrow",
    "๐": "neutral face",
    "๐": "expressionless face",
    "๐ถ": "face without mouth",
    "๐": "smirking face",
    "๐": "unamused face",
    "๐": "face with rolling eyes",
    "๐ฌ": "grimacing face",
    "๐คฅ": "lying face",
    "๐": "relieved face",
    "๐": "pensive face",
    "๐ช": "sleepy face",
    "๐คค": "drooling face",
    "๐ด": "sleeping face",
    "๐ท": "face with medical mask",
    "๐ค": "face with thermometer",
    "๐ค": "face with head-bandage",
    "๐คข": "nauseated face",
    "๐คฎ": "face vomiting",
    "๐คง": "sneezing face",
    "๐ฅต": "hot face",
    "๐ฅถ": "cold face",
    "๐ฅด": "woozy face",
    "๐ต": "face with crossed-out eyes",
    "๐คฏ": "exploding head",
    "๐ค ": "cowboy hat face",
    "๐ฅณ": "partying face",
    "๐": "smiling face with sunglasses",
    "๐ค": "nerd face",
    "๐ง": "face with monocle",
    "๐": "confused face",
    "๐": "worried face",
    "๐": "slightly frowning face",
    "โน๏ธ": "frowning face",
    "๐ฎ": "face with open mouth",
    "๐ฏ": "hushed face",
    "๐ฒ": "astonished face",
    "๐ณ": "flushed face",
    "๐ฅบ": "pleading face",
    "๐ฆ": "frowning face with open mouth",
    "๐ง": "anguished face",
    "๐จ": "fearful face",
    "๐ฐ": "anxious face with sweat",
    "๐ฅ": "sad but relieved face",
    "๐ข": "crying face",
    "๐ญ": "loudly crying face",
    "๐ฑ": "face screaming in fear",
    "๐": "confounded face",
    "๐ฃ": "persevering face",
    "๐": "disappointed face",
    "๐": "downcast face with sweat",
    "๐ฉ": "weary face",
    "๐ซ": "tired face",
    "๐ฅฑ": "yawning face",
    "๐ค": "face with steam from nose",
    "๐ก": "enraged face",
    "๐ ": "angry face",
    "๐คฌ": "face with symbols on mouth",
    "๐": "smiling face with horns",
    "๐ฟ": "angry face with horns",
    "๐": "skull",
    "โ ๏ธ": "skull and crossbones",
    "๐ฉ": "pile of poo",
    "๐คก": "clown face",
    "๐น": "ogre",
    "๐บ": "goblin",
    "๐ป": "ghost",
    "๐ฝ": "alien",
    "๐พ": "alien monster",
    "๐ค": "robot",
    "๐บ": "grinning cat",
    "๐ธ": "grinning cat with smiling eyes",
    "๐น": "cat with tears of joy",
    "๐ป": "smiling cat with heart-eyes",
    "๐ผ": "cat with wry smile",
    "๐ฝ": "kissing cat",
    "๐": "weary cat",
    "๐ฟ": "crying cat",
    "๐พ": "pouting cat",
    "๐": "kiss mark",
    "๐": "waving hand",
    "๐ค": "raised back of hand",
    "๐๏ธ": "๏ธ hand with fingers splayed",
    "โ": "raised hand",
    "๐": "vulcan salute",
    "๐": "ok hand",
    "๐ค": "pinching hand",
    "โ๏ธ": "victory hand",
    "๐ค": "crossed fingers",
    "๐ค": "love-you gesture",
    "๐ค": "sign of the horns",
    "๐ค": "call me hand",
    "๐": "backhand index pointing left",
    "๐": "backhand index pointing right",
    "๐": "backhand index pointing up",
    "๐": "middle finger",
    "๐": "backhand index pointing down",
    "โ๏ธ": "index pointing up",
    "๐": "thumbs up",
    "๐": "thumbs down",
    "โ": "raised fist",
    "๐": "oncoming fist",
    "๐ค": "left-facing fist",
    "๐ค": "right-facing fist",
    "๐": "clapping hands",
    "๐": "raising hands",
    "๐": "open hands",
    "๐คฒ": "palms up together",
    "๐ค": "handshake",
    "๐": "folded hands",
    "โ๏ธ": "writing hand",
    "๐": "nail polish",
    "๐คณ": "selfie",
    "๐ช": "flexed biceps",
    "๐ฆพ": "mechanical arm",
    "๐ฆฟ": "mechanical leg",
    "๐ฆต": "leg",
    "๐ฆถ": "foot",
    "๐": "ear",
    "๐ฆป": "ear with hearing aid",
    "๐": "nose",
    "๐ง ": "brain",
    "๐ฆท": "tooth",
    "๐ฆด": "bone",
    "๐": "eyes",
    "๐๏ธ": "๏ธ eye",
    "๐": "tongue",
    "๐": "mouth",
    "๐ถ": "baby",
    "๐ง": "child",
    "๐ฆ": "boy",
    "๐ง": "girl",
    "๐ง": "person",
    "๐ฑ": "person: blond hair",
    "๐จ": "man",
    "๐ง": "person: beard",
    "๐ญ": "women holding hands",
    "๐ซ": "woman and man holding hands",
    "๐ฌ": "men holding hands",
    "๐": "kiss",
    "๐ฃ๏ธ": "๏ธ speaking head",
    "๐ค": "bust in silhouette",
    "๐ฅ": "busts in silhouette",
    "๐ฃ": "footprints",
    "๐งณ": "luggage",
    "๐": "closed umbrella",
    "โ๏ธ": "umbrella",
    "๐": "jack-o-lantern",
    "๐งต": "thread",
    "๐งถ": "yarn",
    "๐": "glasses",
    "๐ถ๏ธ": "๏ธ sunglasses",
    "๐ฅฝ": "goggles",
    "๐ฅผ": "lab coat",
    "๐ฆบ": "safety vest",
    "๐": "necktie",
    "๐": "t-shirt",
    "๐": "jeans",
    "๐งฃ": "scarf",
    "๐งค": "gloves",
    "๐งฅ": "coat",
    "๐งฆ": "socks",
    "๐": "dress",
    "๐": "kimono",
    "๐ฅป": "sari",
    "๐ฉฑ": "one-piece swimsuit",
    "๐ฉฒ": "briefs",
    "๐ฉณ": "shorts",
    "๐": "bikini",
    "๐": "womanโs clothes",
    "๐": "purse",
    "๐": "handbag",
    "๐": "clutch bag",
    "๐": "backpack",
    "๐": "manโs shoe",
    "๐": "running shoe",
    "๐ฅพ": "hiking boot",
    "๐ฅฟ": "flat shoe",
    "๐ ": "high-heeled shoe",
    "๐ก": "womanโs sandal",
    "๐ฉฐ": "ballet shoes",
    "๐ข": "womanโs boot",
    "๐": "crown",
    "๐": "womanโs hat",
    "๐ฉ": "top hat",
    "๐": "graduation cap",
    "๐งข": "billed cap",
    "โ๏ธ": "rescue workerโs helmet",
    "๐": "lipstick",
    "๐": "ring",
    "๐ผ": "briefcase",
    "๐ฉธ": "drop of blood"
  };

  var list = Object.keys(EmojiDectionary);
  var valueList = Object.values(EmojiDectionary);

  var [meaning, newtxt] = useState("");
  // var meaning = EmojiDectionary.find(
  //   (key) => EmojiDectionary[key] === event.target.value
  // );
  function txt(event) {
    var tempInput = event.target.value;
    var input = tempInput.toLowerCase();
    console.log("text function run", input, valueList);
    const index = valueList.indexOf(input);

    if (index !== -1) {
      var mean = Object.keys(EmojiDectionary).find(
        (key) => EmojiDectionary[key] === input
      );
      newtxt(mean);
      console.log(mean);
    } else {
      newtxt("Data not found");
    }
  }

  function emojiClickHandler(item) {
    var meaning = EmojiDectionary[item];
    newtxt(meaning);
  }
  return (
    <div className="App">
      <nav>
        <h1>
          <b>
            EmojiLogy{" "}
            <span role="img" aria-label="emoji">
              ๐
            </span>
          </b>
        </h1>
      </nav>

      <textarea
        className="container"
        onChange={(event) => txt(event)}
        placeholder="Search your emoji "
      ></textarea>
      <br />

      {meaning && <b className="meaning">Means : {meaning}</b>}
      <br />

      <b
        style={{
          fontFamily: "cursive",
          fontSize: "130%",
          backgroundColor: "skyblue",
          borderRadius: "1rem",
          padding: "0.1rem 0.9rem"
        }}
      >
        Our DataBase
      </b>
      <div className="dataContainer">
        <p>
          {list.map(function (item) {
            return (
              <span onClick={() => emojiClickHandler(item)} key={item}>
                {item}
              </span>
            );
          })}
        </p>
      </div>

      <footer>
        <p>
          Confused about Emojis? Well we are here to help
          <span role="img" aria-label="emoji">
            ๐
          </span>
          <br />
          Click on the given emojis to find out their meaning or just type for
          the one your are looking for
        </p>
      </footer>
    </div>
  );
}
