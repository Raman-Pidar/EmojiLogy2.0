import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const EmojiDectionary = {
    "😀": "Grinning Face",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",

    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",

    "😚": "Kissing Face with Closed Eyes",
    "😙": "Kissing Face with Smiling Eyes",

    "😋": "Face Savoring Food",
    "😛": "Face with Tongue",
    "😜": "Winking Face with Tongue",
    "🤪": "Zany Face",
    "😝": "Squinting Face with Tongue",
    "🤑": "Money-Mouth Face",
    "🤗": "Smiling Face with Open Hands",
    "🤭": "Face with Hand Over Mouth",

    "🤫": "Shushing Face",
    "🤔": "Thinking Face",

    "🤐": "Zipper-Mouth Face",
    "🤨": "Face with Raised Eyebrow",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",

    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face",
    "🤥": "Lying Face",
    "😌": "Relieved Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face",
    "😴": "Sleeping Face",
    "😷": "Face with Medical Mask",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head-Bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face Vomiting",
    "🤧": "Sneezing Face",
    "🥵": "Hot Face",
    "🥶": "Cold Face",
    "🥴": "Woozy Face",
    "😵": "Face with Crossed-Out Eyes",
    "🤯": "Exploding Head",
    "🤠": "Cowboy Hat Face",
    "🥳": "Partying Face",

    "😎": "Smiling Face with Sunglasses",
    "🤓": "Nerd Face",
    "🧐": "Face with Monocle",
    "😕": "Confused Face",

    "😟": "Worried Face",
    "🙁": "Slightly Frowning Face",

    "😮": "Face with Open Mouth",
    "😯": "Hushed Face",
    "😲": "Astonished Face",
    "😳": "Flushed Face",
    "🥺": "Pleading Face",

    "😦": "Frowning Face with Open Mouth",
    "😧": "Anguished Face",
    "😨": "Fearful Face",
    "😰": "Anxious Face with Sweat",
    "😥": "Sad but Relieved Face",
    "😢": "Crying Face",
    "😭": "Loudly Crying Face",
    "😱": "Face Screaming in Fear",
    "😖": "Confounded Face",
    "😣": "Persevering Face",
    "😞": "Disappointed Face",
    "😓": "Downcast Face with Sweat",
    "😩": "Weary Face",
    "😫": "Tired Face",
    "🥱": "Yawning Face",
    "😤": "Face with Steam From Nose",
    "😡": "Enraged Face",
    "😠": "Angry Face",
    "🤬": "Face with Symbols on Mouth",
    "😈": "Smiling Face with Horns",
    "👿": "Angry Face with Horns",
    "💀": "Skull",
    "☠️": "Skull and Crossbones",
    "💩": "Pile of Poo",
    "🤡": "Clown Face",
    "👹": "Ogre",
    "👺": "Goblin",
    "👻": "Ghost",
    "👽": "Alien",
    "👾": "Alien Monster",
    "🤖": "Robot",
    "😺": "Grinning Cat",
    "😸": "Grinning Cat with Smiling Eyes",
    "😹": "Cat with Tears of Joy",
    "😻": "Smiling Cat with Heart-Eyes",
    "😼": "Cat with Wry Smile",
    "😽": "Kissing Cat",
    "🙀": "Weary Cat",
    "😿": "Crying Cat",
    "😾": "Pouting Cat",
    "💋": "Kiss Mark",
    "👋": "Waving Hand",
    "🤚": "Raised Back of Hand",
    "🖐️": "️ Hand with Fingers Splayed",
    "✋": "Raised Hand",
    "🖖": "Vulcan Salute",

    "👌": "OK Hand",

    "🤏": "Pinching Hand",
    "✌️": "Victory Hand",
    "🤞": "Crossed Fingers",

    "🤟": "Love-You Gesture",
    "🤘": "Sign of the Horns",
    "🤙": "Call Me Hand",
    "👈": "Backhand Index Pointing Left",
    "👉": "Backhand Index Pointing Right",
    "👆": "Backhand Index Pointing Up",
    "🖕": "Middle Finger",
    "👇": "Backhand Index Pointing Down",
    "☝️": "Index Pointing Up",

    "👍": "Thumbs Up",
    "👎": "Thumbs Down",
    "✊": "Raised Fist",
    "👊": "Oncoming Fist",
    "🤛": "Left-Facing Fist",
    "🤜": "Right-Facing Fist",
    "👏": "Clapping Hands",
    "🙌": "Raising Hands",

    "👐": "Open Hands",
    "🤲": "Palms Up Together",
    "🤝": "Handshake",
    "🙏": "Folded Hands",
    "✍️": "Writing Hand",
    "💅": "Nail Polish",
    "🤳": "Selfie",
    "💪": "Flexed Biceps",
    "🦾": "Mechanical Arm",
    "🦿": "Mechanical Leg",
    "🦵": "Leg",
    "🦶": "Foot",
    "👂": "Ear",
    "🦻": "Ear with Hearing Aid",
    "👃": "Nose",
    "🧠": "Brain",

    "🦷": "Tooth",
    "🦴": "Bone",
    "👀": "Eyes",
    "👁️": "️ Eye",
    "👅": "Tongue",
    "👄": "Mouth",
    "🫦": "Biting Lip",
    "👶": "Baby",
    "🧒": "Child",
    "👦": "Boy",
    "👧": "Girl",
    "🧑": "Person",
    "👱": "Person: Blond Hair",
    "👨": "Man",
    "🧔": "Person: Beard",
    "👭": "Women Holding Hands",
    "👫": "Woman and Man Holding Hands",
    "👬": "Men Holding Hands",
    "💏": "Kiss",
    "🗣️": "️ Speaking Head",
    "👤": "Bust in Silhouette",
    "👥": "Busts in Silhouette",

    "👣": "Footprints",
    "🧳": "Luggage",
    "🌂": "Closed Umbrella",
    "☂️": "Umbrella",
    "🎃": "Jack-O-Lantern",
    "🧵": "Thread",
    "🧶": "Yarn",
    "👓": "Glasses",
    "🕶️": "️ Sunglasses",
    "🥽": "Goggles",
    "🥼": "Lab Coat",
    "🦺": "Safety Vest",
    "👔": "Necktie",
    "👕": "T-Shirt",
    "👖": "Jeans",
    "🧣": "Scarf",
    "🧤": "Gloves",
    "🧥": "Coat",
    "🧦": "Socks",
    "👗": "Dress",
    "👘": "Kimono",
    "🥻": "Sari",
    "🩱": "One-Piece Swimsuit",
    "🩲": "Briefs",
    "🩳": "Shorts",
    "👙": "Bikini",
    "👚": "Woman’s Clothes",
    "👛": "Purse",
    "👜": "Handbag",
    "👝": "Clutch Bag",
    "🎒": "Backpack",

    "👞": "Man’s Shoe",
    "👟": "Running Shoe",
    "🥾": "Hiking Boot",
    "🥿": "Flat Shoe",
    "👠": "High-Heeled Shoe",
    "👡": "Woman’s Sandal",
    "🩰": "Ballet Shoes",
    "👢": "Woman’s Boot",
    "👑": "Crown",
    "👒": "Woman’s Hat",
    "🎩": "Top Hat",
    "🎓": "Graduation Cap",
    "🧢": "Billed Cap",
    "🪖": "Military Helmet",
    "⛑️": "Rescue Worker’s Helmet",
    "💄": "Lipstick",
    "💍": "Ring",
    "💼": "Briefcase",
    "🩸": "Drop of Blood"
  };

  var list = Object.keys(EmojiDectionary);
  var valueList = Object.values(EmojiDectionary);

  var [meaning, newtxt] = useState("");
  // var meaning = EmojiDectionary.find(
  //   (key) => EmojiDectionary[key] === event.target.value
  // );
  function txt(event) {
    var input = event.target.value;
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
          <b>EmojiLogy 😎</b>
        </h1>
      </nav>

      <textarea
        onChange={(event) => txt(event)}
        placeholder="Search your emoji "
      ></textarea>

      <h2>{meaning}</h2>

      <b style={{ fontFamily: "cursive", fontSize: "150%" }}>Our DataBase</b>
      <p
        style={{ backgroundColor: "rgba(3, 211, 248, 0.381", fontSize: "150%" }}
      >
        {list.map(function (item) {
          return (
            <span onClick={() => emojiClickHandler(item)} key={item}>
              {item}
            </span>
          );
        })}
      </p>

      <footer>
        <p>
          Confused about Emojis? Well we are here to help😉
          <br />
          Click on the given emojis to find out their meaning or just type for
          the one your are looking for
        </p>
      </footer>
    </div>
  );
}
