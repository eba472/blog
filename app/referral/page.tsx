"use client";

import React, { useState } from "react";

export default function YourComponentOrPage() {
  const questions = [
    {
      question: `Hi Norikai hiih medeelel awii`,
      answer: `Sain baina uu, norikae hiihed 14,000 yen point uramshuulal baigaa.

Ta rakuten mobile-iin ali ch salbar deer ochood doorh linkeer orood norikae hiij bolno. 
hudaldagchid n gej heleerei 楽天モバイル社員紹介キャンペーン
Campaign link: https://r10.to/hUcUwu?openExternalBrowser=1

Hervee shoukai hiij baigaa hunii ner asuuwal: エンフバータル　ツェレンソドノム

Mon deerh linkeer orood 100% online-aar zahialah bas bolomjtoi
    `,
    },
    {
      question: `Zahialahad yu heregtei ve?`,
      answer: `Zahialahad zairu card bolon tanii ooriin ner deerh banknii dewter bolon card baihad bolno.`,
    },
    {
      question: `Point onoogoo herhen avah & yund hereglej boloh ve?`,
      answer: `Ta Rakuten Pay gedeg application ashiglaad Yaponii ihenh delguurt PayPay tei adilhanaar utasnaasaa tootsoo hiih bolomjtoi.
Ta doorh linkeer orj jishee delguuruud haraarai

https://pay.rakuten.co.jp/shop/
`,
    },
    {
      question: `Utas leasingdmeer baina?`,
      answer: `her unetei utasnaas hamaaraad norikae hiih ued 20000¥ - 32000¥ iin point cash back baigaa. 
Manaih utasnii leasing talaar medeelel uguh huudas bish uchraas delgerengui medeelel helj chadahgui n. Ta oort oirhon salbar luu yavahiig zuvluj bainaa 🙏

Ta norikae hiihdee 14,000 yen point awahiin tuld:
doorh linkeer orj burtguuleerei. 
Manai campaign ner: 楽天モバイル社員紹介キャンペーン
Campaign link: https://r10.to/hUcUwu?openExternalBrowser=1`,
    },
    {
      question: `Pocket wifi bii yu??`,
      answer: `Manaid Pocket wifi baihgui baigaa. Gehdee manai internet hyazgaargui bolohoor ta hotspot-oo asaagaad husseneeree data hereglej bolno.`,
    },
    {
      question: `Yaria unegui gedeg ni yamar uchirtai ve?`,
      answer: `Ta manai dugaariig baridag bol Rakuten Link gedeg app-aar orj Yaponii yamarch dugaarluu unegui yarih bolomjtoi baigaa.`,
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
