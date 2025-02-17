import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
"No",
"Jesteś pewien?",
"Na pewno?",
"Przemyśl to jeszcze raz!",
"Ostatnia szansa!",
"Chyba nie?",
"Możesz tego żałować!",
"Przemyśl to ponownie!",
"Jesteś absolutnie pewien?",
"To może być błąd!",
"Miej serce!",
"Nie bądź taki zimny!",
"Zmiana decyzji?",
"Nie chciałbyś się zastanowić jeszcze raz?",
"To twoja ostateczna odpowiedź?",
"Łamiesz mi serce ;(",
"To twoja ostateczna odpowiedź?",
"Łamiesz mi serce ;(",
"Proszę? :( Łamiesz mi serce",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy, send me a screenshot on mess!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://cdn.discordapp.com/attachments/1137469292691079188/1339688176876392580/IMG_6148.jpg?ex=67afa157&is=67ae4fd7&hm=99a27faaa66225ccb1a2641c6dbbfd59a4657163ea0487a3468c35cf612b93e8&"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my drinking partner?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Tak!
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://cdn.discordapp.com/attachments/1006274084860084364/1329254627274788957/IMG_3486.jpg?ex=67af3f17&is=67aded97&hm=f4aa4e00b2512b814a188fcf0aaf823a08e74fe6757b304a6381f4e55ae20879&"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
