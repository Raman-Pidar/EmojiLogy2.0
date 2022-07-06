import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const EmojiDectionary = {
    "😀": "grinning face",
    "😄": "grinning face with smiling eyes",
    "😁": "beaming face with smiling eyes",
    "😆": "grinning squinting face",
    "😅": "grinning face with sweat",
    "🤣": "rolling on the floor laughing",
    "🙂": "slightly smiling face",
    "🙃": "upside-down face",
    "😂": "face with tears of joy",
    "😉": "winking face",
    "😊": "smiling face with smiling eyes",
    "😇": "smiling face with halo",
    "🥰": "smiling face with hearts",
    "😍": "smiling face with heart-eyes",
    "🤩": "star-struck",
    "😘": "face blowing a kiss",
    "😗": "kissing face",
    "😚": "kissing face with closed eyes",
    "😙": "kissing face with smiling eyes",
    "😋": "face savoring food",
    "😛": "face with tongue",
    "😜": "winking face with tongue",
    "🤪": "zany face",
    "😝": "squinting face with tongue",
    "🤑": "money-mouth face",
    "🤗": "smiling face with open hands",
    "🤭": "face with hand over mouth",
    "🤫": "shushing face",
    "🤔": "thinking face",
    "🤐": "zipper-mouth face",
    "🤨": "face with raised eyebrow",
    "😐": "neutral face",
    "😑": "expressionless face",
    "😶": "face without mouth",
    "😏": "smirking face",
    "😒": "unamused face",
    "🙄": "face with rolling eyes",
    "😬": "grimacing face",
    "🤥": "lying face",
    "😌": "relieved face",
    "😔": "pensive face",
    "😪": "sleepy face",
    "🤤": "drooling face",
    "😴": "sleeping face",
    "😷": "face with medical mask",
    "🤒": "face with thermometer",
    "🤕": "face with head-bandage",
    "🤢": "nauseated face",
    "🤮": "face vomiting",
    "🤧": "sneezing face",
    "🥵": "hot face",
    "🥶": "cold face",
    "🥴": "woozy face",
    "😵": "face with crossed-out eyes",
    "🤯": "exploding head",
    "🤠": "cowboy hat face",
    "🥳": "partying face",
    "😎": "smiling face with sunglasses",
    "🤓": "nerd face",
    "🧐": "face with monocle",
    "😕": "confused face",
    "😟": "worried face",
    "🙁": "slightly frowning face",
    "☹️": "frowning face",
    "😮": "face with open mouth",
    "😯": "hushed face",
    "😲": "astonished face",
    "😳": "flushed face",
    "🥺": "pleading face",
    "😦": "frowning face with open mouth",
    "😧": "anguished face",
    "😨": "fearful face",
    "😰": "anxious face with sweat",
    "😥": "sad but relieved face",
    "😢": "crying face",
    "😭": "loudly crying face",
    "😱": "face screaming in fear",
    "😖": "confounded face",
    "😣": "persevering face",
    "😞": "disappointed face",
    "😓": "downcast face with sweat",
    "😩": "weary face",
    "😫": "tired face",
    "🥱": "yawning face",
    "😤": "face with steam from nose",
    "😡": "enraged face",
    "😠": "angry face",
    "🤬": "face with symbols on mouth",
    "😈": "smiling face with horns",
    "👿": "angry face with horns",
    "💀": "skull",
    "☠️": "skull and crossbones",
    "💩": "pile of poo",
    "🤡": "clown face",
    "👹": "ogre",
    "👺": "goblin",
    "👻": "ghost",
    "👽": "alien",
    "👾": "alien monster",
    "🤖": "robot",
    "😺": "grinning cat",
    "😸": "grinning cat with smiling eyes",
    "😹": "cat with tears of joy",
    "😻": "smiling cat with heart-eyes",
    "😼": "cat with wry smile",
    "😽": "kissing cat",
    "🙀": "weary cat",
    "😿": "crying cat",
    "😾": "pouting cat",
    "💋": "kiss mark",
    "👋": "waving hand",
    "🤚": "raised back of hand",
    "🖐️": "️ hand with fingers splayed",
    "✋": "raised hand",
    "🖖": "vulcan salute",
    "👌": "ok hand",
    "🤏": "pinching hand",
    "✌️": "victory hand",
    "🤞": "crossed fingers",
    "🤟": "love-you gesture",
    "🤘": "sign of the horns",
    "🤙": "call me hand",
    "👈": "backhand index pointing left",
    "👉": "backhand index pointing right",
    "👆": "backhand index pointing up",
    "🖕": "middle finger",
    "👇": "backhand index pointing down",
    "☝️": "index pointing up",
    "👍": "thumbs up",
    "👎": "thumbs down",
    "✊": "raised fist",
    "👊": "oncoming fist",
    "🤛": "left-facing fist",
    "🤜": "right-facing fist",
    "👏": "clapping hands",
    "🙌": "raising hands",
    "👐": "open hands",
    "🤲": "palms up together",
    "🤝": "handshake",
    "🙏": "folded hands",
    "✍️": "writing hand",
    "💅": "nail polish",
    "🤳": "selfie",
    "💪": "flexed biceps",
    "🦾": "mechanical arm",
    "🦿": "mechanical leg",
    "🦵": "leg",
    "🦶": "foot",
    "👂": "ear",
    "🦻": "ear with hearing aid",
    "👃": "nose",
    "🧠": "brain",
    "🦷": "tooth",
    "🦴": "bone",
    "👀": "eyes",
    "👁️": "️ eye",
    "👅": "tongue",
    "👄": "mouth",
    "👶": "baby",
    "🧒": "child",
    "👦": "boy",
    "👧": "girl",
    "🧑": "person",
    "👱": "person: blond hair",
    "👨": "man",
    "🧔": "person: beard",
    "👭": "women holding hands",
    "👫": "woman and man holding hands",
    "👬": "men holding hands",
    "💏": "kiss",
    "🗣️": "️ speaking head",
    "👤": "bust in silhouette",
    "👥": "busts in silhouette",
    "👣": "footprints",
    "🧳": "luggage",
    "🌂": "closed umbrella",
    "☂️": "umbrella",
    "🎃": "jack-o-lantern",
    "🧵": "thread",
    "🧶": "yarn",
    "👓": "glasses",
    "🕶️": "️ sunglasses",
    "🥽": "goggles",
    "🥼": "lab coat",
    "🦺": "safety vest",
    "👔": "necktie",
    "👕": "t-shirt",
    "👖": "jeans",
    "🧣": "scarf",
    "🧤": "gloves",
    "🧥": "coat",
    "🧦": "socks",
    "👗": "dress",
    "👘": "kimono",
    "🥻": "sari",
    "🩱": "one-piece swimsuit",
    "🩲": "briefs",
    "🩳": "shorts",
    "👙": "bikini",
    "👚": "woman’s clothes",
    "👛": "purse",
    "👜": "handbag",
    "👝": "clutch bag",
    "🎒": "backpack",
    "👞": "man’s shoe",
    "👟": "running shoe",
    "🥾": "hiking boot",
    "🥿": "flat shoe",
    "👠": "high-heeled shoe",
    "👡": "woman’s sandal",
    "🩰": "ballet shoes",
    "👢": "woman’s boot",
    "👑": "crown",
    "👒": "woman’s hat",
    "🎩": "top hat",
    "🎓": "graduation cap",
    "🧢": "billed cap",
    "⛑️": "rescue worker’s helmet",
    "💄": "lipstick",
    "💍": "ring",
    "💼": "briefcase",
    "🩸": "drop of blood"
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
              😎
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
            😉
          </span>
          <br />
          Click on the given emojis to find out their meaning or just type for
          the one your are looking for
        </p>
      </footer>
    </div>
  );
}
