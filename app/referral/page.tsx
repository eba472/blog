"use client";

import React, { useState } from "react";

export default function YourComponentOrPage() {
  const questions = [
    {
      question: `Hi Norikai hiih medeelel awii`,
      answer: `Sain baina uu, norikae hiihed 14,000 yen point uramshuulal baigaa.

Ta rakuten mobile-iin ali ch salbar deer ochood doorh linkeer orood norikae hiij bolno. 
hudaldagchid n楽天モバイル社員紹介キャンペーン gej heleerei 
Campaign link: https://r10.to/hUcUwu?openExternalBrowser=1

Hervee shoukai hiij baigaa hunii ner asuuwal: エンへバータル　ツェレンソドノム

Mon deerh linkeer orood 100% online-aar zahialah bas bolomjtoi
    `,
    },
    {
      question: `Zahialahad yu heregtei ve?`,
      answer: `Zahialahad zairyu card bolon tanii ooriin ner deerhi banknii medeelel eswel credit card baihad bolno. Mun Rakuten-iin accounttai boloh heregtei (email-eeree neene)`,
    },
    {
      question: `Point onoogoo herhen avah & yund hereglej boloh ve?`,
      answer: `Ta Rakuten Pay gedeg application ashiglaad Yaponii ihenh delguurt PayPay tei adilhan utasnaasaa tootsoo hiih bolomjtoi.
Ta doorh linkeer orj hereglej boloh delguuruudiig haraarai

https://pay.rakuten.co.jp/shop/
`,
    },
    {
      question: `Utas leasingdmeer baina?`,
      answer: `Yamar utasnaas hamaaraad norikae hiih ued 20000¥ - 32000¥ iin point cash back baigaa yum baina. 
Manaih utasnii leasing talaar medeelel uguh huudas bish uchraas delgerengui medeelel helj chadahgui n. Ta oort oirhon salbar luu yavahiig zuvluj bainaa 🙏

Ta norikae hiihdee 14,000 yen point awahiin tuld:
doorh linkeer orj burtguuleerei. 
Manai campaign ner: 楽天モバイル社員紹介キャンペーン
Campaign link: https://r10.to/hUcUwu?openExternalBrowser=1`,
    },
    {
      question: `Pocket wifi bii yu??`,
      answer: `Internet hyazgaargui bolohoor ta utsaaraa hotspot-oo asaagaad husseneeree data hereglej bolno. Gesen ch heregtei gevel pocket wifi medeelliin holboos yavuulay. https://network.mobile.rakuten.co.jp/product/internet/rakuten-wifi-pocket-2c/. Ene huudas maani zuvhun mobile-iin uramshuulliin medeelel hurgej baigaa tul pocket wifi delgerengui medeelliig uurt oirhon salbar deerees avaarai. Bayarlalaaa`,
    },
    {
      question: `Yaria unegui gedeg ni yamar uchirtai ve?`,
      answer: `Rakuten Link gedeg app-aar Yaponii yamarch dugaarluu unegui yarih bolomjtoi baigaa.`,
    },
    {
      question: `Hezee sim maan ireh ve?`,
      answer: `Biet sim zahialsnaas hoish 1 ees 2 odriin dotor gert tani ochih bolno.`,
    },
    {
      question: `MNP transfer hiined suljeegui bolohiig tailbarlah:`,
      answer: `MNP transfer tovchiig darsnaar, tanii omnoh sim idevhgui boloh baigaa. Enehuu process maani omnoh suljeegee tsutslaad, rakuten ruu shiljuulj baigaa ym. Tegheer heseg hugatsaand ta data, suljeegui yavah baigaa.`,
    },
    {
      question: `Delgerengui tailbar:`,
      answer: `Delgerengui medeelliig ta doorh linkeer orj uzeerei: https://www.facebook.com/61556603424412/videos/1554903518404051/`,
    },
  ];

  return questions.map((q, i) => (
    <div key={i}>
      <h3 className="p-1 border border-blue-500">
        {i + 1}. {q.question}
      </h3>
      <CodeSnippetWithCopy code={q.answer} />
    </div>
  ));
}

const CodeSnippetWithCopy = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <code>{code}</code>
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
      >
        Copy
      </button>
      {copySuccess && <div style={{ color: "green" }}>{copySuccess}</div>}
    </div>
  );
};
