/* 共通フッター：運営者・訂正の連絡先・注意・確認日・ほかのサイト。ページの言語（?lang= / <html lang>）に合わせて表示。 */
(function () {
  "use strict";
  var CHECKED = "2026-11-23";
  var MAIL = "arai-sarai-data@proton.me";
  var B = "https://arai-sarai-data.github.io/";
  var SITES = [
    ["zenreki", "土地の前歴", "Land history"], ["chiiki-seiji", "住所から見る政治とお金", "Politics by address"],
    ["yosan-zure", "予算と決算のズレ計", "Budget gap meter"], ["zenkoku-jichitai-db", "全国自治体DB", "Municipal finance DB"],
    ["juchu-kigyo", "国の発注と受注企業", "Govt contractors"], ["hoan-timeline", "法案の生涯タイムライン", "Bill timeline"],
    ["zeikin-sim", "生涯税金シミュレーター", "Lifetime tax"], ["tsushinbo", "日本の通信簿", "Japan's report card"],
    ["sedai-sa", "世代差データベース", "Generation gaps"], ["danjo-sa", "男女差データベース", "Gender gaps"],
    ["world-compare", "世界くらべ", "World, Compared"], ["world-public-db", "世界の公共データベース", "World public DBs"]
  ];
  var T = {
    ja: { src: "主な出典", lab: "ご注意", share: "このページをXでシェア", by: "運営：洗井 浚（個人・非営利）", fix: "数字の誤り・削除のご連絡", note: "公的機関などが公開しているデータを、このサイトが集計・加工したものです。正確さには気をつけていますが、大事な判断の前には必ず原本（出典）を確かめてください。", chk: "掲載内容の確認日", more: "ほかのデータサイト" },
    en: { src: "Main sources", lab: "Note", share: "Share this page on X", by: "Run by Arai Sarai (independent, non-profit)", fix: "Report an error or request removal", note: "Built by aggregating and processing data published by public bodies. We work to keep it accurate, but please check the original source before relying on any figure.", chk: "Last checked", more: "More data sites" },
    zh: { src: "主要出处", lab: "注意", share: "分享到X", by: "运营：洗井 浚（个人・非营利）", fix: "报告错误或申请删除", note: "本站汇总、加工了公共机构等公开的数据。我们力求准确，但在做重要判断前请务必核对原始出处。", chk: "内容核对日", more: "其他数据网站" },
    ko: { src: "주요 출처", lab: "주의", share: "X에 공유", by: "운영: 아라이 사라이(개인・비영리)", fix: "오류 신고・삭제 요청", note: "공공기관 등이 공개한 데이터를 이 사이트가 집계・가공한 것입니다. 정확성에 주의하고 있지만, 중요한 판단 전에는 반드시 원본(출처)을 확인해 주세요.", chk: "내용 확인일", more: "다른 데이터 사이트" }
  };
  function lang() {
    var q = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
    var l = q || (document.documentElement.lang || "ja").slice(0, 2);
    return T[l] ? l : (l === "ja" ? "ja" : "en");
  }
  function render() {
    var l = lang(), t = T[l], here = location.pathname.split("/")[1];
    var f = document.getElementById("aswk-foot") || document.createElement("footer");
    f.id = "aswk-foot"; f.setAttribute("data-no-i18n", "");
    var su = "https://x.com/intent/post?text=" + encodeURIComponent(document.title) + "&url=" + encodeURIComponent(location.origin + location.pathname);
    var SRC = window.ASWK_SOURCES || [];
    var srcHtml = SRC.length ? '<p class="aswk-src"><b>' + t.src + '：</b>' + SRC.map(function (x) { return '<a href="' + x[1] + '" target="_blank" rel="noopener">' + x[0] + "</a>"; }).join(" / ") + "</p>" : "";
    f.innerHTML = '<div class="aswk-in">' + srcHtml + '<p class="aswk-note"><b>' + t.lab + '：</b>' + t.note + '</p><p class="aswk-meta"><span>' + t.by + '</span>' +
      '<span><a href="mailto:' + MAIL + '">' + t.fix + '</a></span><span><a href="https://x.com/arai_sarai_data" rel="noopener" target="_blank">X @arai_sarai_data</a></span>' +
      '<span><a href="' + su + '" target="_blank" rel="noopener">' + t.share + '</a></span><span>' + t.chk + (l === "ja" || l === "zh" ? "：" : ": ") + CHECKED + '</span></p><p class="aswk-more"><b>' + t.more + '</b> ' +
      SITES.filter(function (s) { return s[0] !== here; }).map(function (s) {
        return '<a href="' + B + s[0] + '/' + (l === "ja" ? "" : "?lang=" + l) + '">' + (l === "ja" ? s[1] : s[2]) + "</a>";
      }).join(" ") + "</p></div>";
    if (!f.parentNode) document.body.appendChild(f);
  }
  var st = document.createElement("style");
  st.textContent = "#aswk-foot{border-top:1px solid rgba(127,127,127,.25);margin-top:48px;padding:22px 16px 70px;font:13px/1.7 system-ui,-apple-system,'Hiragino Sans','Noto Sans JP',sans-serif;color:inherit;opacity:.85}" +
    "#aswk-foot .aswk-in{max-width:960px;margin:0 auto}#aswk-foot p{margin:0 0 8px}#aswk-foot .aswk-meta span{display:inline-block;margin-right:14px}" +
    "#aswk-foot a{color:inherit;text-decoration:underline;text-underline-offset:2px}#aswk-foot .aswk-more a{display:inline-block;margin:0 10px 4px 0;white-space:nowrap}";
  document.head.appendChild(st);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
  window.addEventListener("load", function () { setTimeout(render, 300); });
})();
