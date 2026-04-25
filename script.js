const majorArcana = [
  { name: "愚者", keyword: "新的开始", upright: "勇于冒险、打开新机会、轻装前进", reversed: "鲁莽、判断失准、计划不稳", uprightScore: 1.2, reversedScore: -1.1 },
  { name: "魔术师", keyword: "主动创造", upright: "资源到位、执行力强、能把想法变现实", reversed: "分心、过度包装、行动与目标脱节", uprightScore: 1.1, reversedScore: -0.9 },
  { name: "女祭司", keyword: "直觉洞察", upright: "内在清明、适合观察、答案在心里", reversed: "犹疑、讯号混乱、容易忽略真实感受", uprightScore: 0.8, reversedScore: -0.7 },
  { name: "皇后", keyword: "滋养丰盛", upright: "人缘与资源增长、状态舒展、适合接收好运", reversed: "过度消耗、情绪黏着、节奏失衡", uprightScore: 1, reversedScore: -0.8 },
  { name: "皇帝", keyword: "稳定掌控", upright: "局势可控、规则清晰、适合做决定", reversed: "控制过度、压力上升、弹性不足", uprightScore: 0.9, reversedScore: -0.8 },
  { name: "教皇", keyword: "遵循经验", upright: "适合参考传统方法、得到帮助或指引", reversed: "被框架束缚、形式大于内容", uprightScore: 0.6, reversedScore: -0.6 },
  { name: "恋人", keyword: "关系与选择", upright: "沟通顺畅、关系助力、选择渐明", reversed: "犹豫拉扯、关系误解、难以下定决心", uprightScore: 1, reversedScore: -0.9 },
  { name: "战车", keyword: "推进胜利", upright: "势头强、适合主动争取、结果偏正向", reversed: "方向混乱、用力过猛、进展反复", uprightScore: 1.1, reversedScore: -0.9 },
  { name: "力量", keyword: "柔韧意志", upright: "耐心与信心能带来转机、状态稳定", reversed: "内耗、急躁、容易被情绪拖住", uprightScore: 0.8, reversedScore: -0.7 },
  { name: "隐者", keyword: "暂缓观察", upright: "适合独处整理、慢一点会更清楚", reversed: "封闭、拖延、与外界脱节", uprightScore: 0.2, reversedScore: -0.7 },
  { name: "命运之轮", keyword: "转机出现", upright: "外部机会增强、运势回升、容易遇到变化中的好消息", reversed: "节奏不稳、机会稍纵即逝、结果带波动", uprightScore: 1.2, reversedScore: -0.5 },
  { name: "正义", keyword: "结果公正", upright: "付出与回报对应、适合理性判断", reversed: "标准失衡、信息不全、判断可能偏差", uprightScore: 0.7, reversedScore: -0.7 },
  { name: "倒吊人", keyword: "换个角度", upright: "暂停是为了更好看清局势、需要耐心", reversed: "卡顿、抗拒改变、耗在原地", uprightScore: 0, reversedScore: -0.8 },
  { name: "死神", keyword: "结束更新", upright: "旧局面结束、新阶段将开启", reversed: "难以放下、变化被延迟、内心抗拒", uprightScore: 0.3, reversedScore: -0.9 },
  { name: "节制", keyword: "平衡修复", upright: "状态渐稳、适合循序推进、好运来自协调", reversed: "失衡、急于求成、能量分散", uprightScore: 0.9, reversedScore: -0.8 },
  { name: "恶魔", keyword: "欲望束缚", upright: "容易被焦虑、诱惑或惯性牵制", reversed: "开始看清束缚、逐步摆脱不利模式", uprightScore: -1.1, reversedScore: 0.5 },
  { name: "高塔", keyword: "剧烈变化", upright: "局势可能突变、需要准备应对", reversed: "震荡减弱，但旧问题仍需处理", uprightScore: -1.2, reversedScore: -0.6 },
  { name: "星星", keyword: "希望修复", upright: "运势回暖、适合许愿和行动、前景乐观", reversed: "信心不足、希望感暂时减弱", uprightScore: 1.2, reversedScore: -0.5 },
  { name: "月亮", keyword: "情绪迷雾", upright: "直觉强但信息不够透明、容易多想", reversed: "误会逐渐散去、真相会慢慢显现", uprightScore: -0.3, reversedScore: 0.4 },
  { name: "太阳", keyword: "明朗好运", upright: "结果积极、表现发光、好运指数高", reversed: "好运仍在，但需要先整理心态和细节", uprightScore: 1.3, reversedScore: 0.4 },
  { name: "审判", keyword: "觉醒决定", upright: "适合做出关键决定、迎来阶段性结果", reversed: "迟疑错过时机、心里知道却不敢行动", uprightScore: 0.8, reversedScore: -0.7 },
  { name: "世界", keyword: "圆满完成", upright: "结果成熟、整体支持度高、适合收获", reversed: "接近完成但还差最后一步", uprightScore: 1.2, reversedScore: 0.3 }
].map((card) => ({ ...card, arcana: "大阿尔卡那" }));

const suitProfiles = {
  wands: { name: "权杖", theme: "行动力、冲劲与创造火花", uprightTone: "说明事情更依赖主动推进与胆量", reversedTone: "提示热情可能被冲散，容易急躁或拖住节奏" },
  cups: { name: "圣杯", theme: "情绪、关系与内在感受", uprightTone: "说明情感流动顺畅，人际与直觉是关键", reversedTone: "提示情绪堆积或沟通失衡，需要先安顿内心" },
  swords: { name: "宝剑", theme: "判断、沟通与压力议题", uprightTone: "说明需要清晰思考、果断表达与直面事实", reversedTone: "提示念头过载、沟通摩擦或判断摇摆" },
  pentacles: { name: "星币", theme: "现实资源、工作成果与稳定感", uprightTone: "说明务实执行与资源积累会带来进展", reversedTone: "提示现实层面有卡点，效率与安全感需要重整" }
};

const minorRanks = [
  { label: "王牌", keyword: "机会萌发", uprightBase: "新的机会正冒出来，适合立刻捕捉第一个讯号", reversedBase: "机会存在但还不够稳，需要先聚焦和确认方向", uprightScore: 0.8, reversedScore: -0.3 },
  { label: "二", keyword: "平衡选择", uprightBase: "需要在两种可能之间拿捏平衡，慢一点反而更稳", reversedBase: "拉扯感偏强，容易在选择里耗掉行动力", uprightScore: 0.2, reversedScore: -0.5 },
  { label: "三", keyword: "扩张协作", uprightBase: "协作与外部支持正在形成，事情有增长空间", reversedBase: "配合度不足，计划容易出现分散或落差", uprightScore: 0.7, reversedScore: -0.4 },
  { label: "四", keyword: "稳定沉淀", uprightBase: "先稳住局面比急着冲刺更重要，适合打基础", reversedBase: "舒适区太强，容易停在原地不愿调整", uprightScore: 0.4, reversedScore: -0.4 },
  { label: "五", keyword: "冲突考验", uprightBase: "眼前有竞争、摩擦或短暂失衡，需要先处理阻力", reversedBase: "冲突正在累积，若继续回避会更消耗", uprightScore: -0.7, reversedScore: -0.9 },
  { label: "六", keyword: "恢复助力", uprightBase: "支持与回稳的迹象出现，适合顺势前进", reversedBase: "原本该到位的支持稍显延迟，别太快期待结果", uprightScore: 0.8, reversedScore: -0.2 },
  { label: "七", keyword: "拉锯评估", uprightBase: "需要边推进边观察，维持优势比盲目前冲更关键", reversedBase: "戒备过高或判断反复，容易让机会从手边滑走", uprightScore: 0.1, reversedScore: -0.6 },
  { label: "八", keyword: "加速投入", uprightBase: "事情开始提速，适合集中投入、迅速回应", reversedBase: "节奏乱掉或执行卡住，需要先重新排序", uprightScore: 0.7, reversedScore: -0.5 },
  { label: "九", keyword: "临门压力", uprightBase: "虽然压力不小，但已经接近阶段成果，别轻易放弃", reversedBase: "焦虑感偏重，容易在最后阶段被担忧牵制", uprightScore: 0.2, reversedScore: -0.7 },
  { label: "十", keyword: "阶段完成", uprightBase: "事情来到结果位，适合收尾、兑现或转入新阶段", reversedBase: "收尾压力偏大，若继续硬扛会显得负担过重", uprightScore: 0.6, reversedScore: -0.6 },
  { label: "侍从", keyword: "消息探索", uprightBase: "会有新的信息、邀请或学习机会出现", reversedBase: "消息不够稳定，想法有但执行力还没跟上", uprightScore: 0.5, reversedScore: -0.3 },
  { label: "骑士", keyword: "推动追逐", uprightBase: "能量正在往前冲，适合主动争取并推动结果落地", reversedBase: "推进方式容易过猛或失焦，需控制节奏", uprightScore: 0.7, reversedScore: -0.5 },
  { label: "皇后", keyword: "成熟滋养", uprightBase: "你有能力稳定局面，适合用成熟方式经营局势", reversedBase: "情绪或控制欲容易干扰判断，先照顾好自己的状态", uprightScore: 0.8, reversedScore: -0.4 },
  { label: "国王", keyword: "掌控决断", uprightBase: "掌控感增强，适合定方向、拍板并统筹资源", reversedBase: "权力感失衡，可能因为僵硬或武断而影响结果", uprightScore: 0.9, reversedScore: -0.5 }
];

const spreadPositions = {
  single: ["核心指引"],
  triple: ["现状", "阻碍/助力", "发展趋势"]
};

const tarotDeck = [
  ...majorArcana,
  ...Object.values(suitProfiles).flatMap((suit) =>
    minorRanks.map((rank) => ({
      name: `${suit.name}${rank.label}`,
      keyword: `${rank.keyword} · ${suit.theme}`,
      upright: `${rank.uprightBase} ${suit.uprightTone}。`,
      reversed: `${rank.reversedBase} ${suit.reversedTone}。`,
      uprightScore: rank.uprightScore,
      reversedScore: rank.reversedScore,
      arcana: "小阿尔卡那"
    }))
  )
];

const form = document.querySelector("#tarot-form");
const questionInput = document.querySelector("#question");
const cardsGrid = document.querySelector("#cards-grid");
const drawButton = document.querySelector("#draw-button");
const readingCard = document.querySelector("#reading-card");
const readingTitle = document.querySelector("#reading-title");
const readingSubtitle = document.querySelector("#reading-subtitle");
const readingBlock = document.querySelector("#reading-block");

function shuffle(array) {
  const cloned = [...array];
  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [cloned[index], cloned[randomIndex]] = [cloned[randomIndex], cloned[index]];
  }
  return cloned;
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function drawCards(spread) {
  const count = spread === "triple" ? 3 : 1;
  return shuffle(tarotDeck).slice(0, count).map((card) => {
    const isReversed = Math.random() > 0.5;
    return {
      ...card,
      orientation: isReversed ? "逆位" : "正位",
      orientationClass: isReversed ? "reversed" : "upright",
      orientationArrow: isReversed ? "↓" : "↑",
      meaning: isReversed ? card.reversed : card.upright,
      score: isReversed ? card.reversedScore : card.uprightScore
    };
  });
}

function createPlaceholderCards(spread) {
  const positions = spreadPositions[spread];
  return positions.map((position) => ({ position }));
}

function renderPlaceholderCards(spread) {
  const placeholders = createPlaceholderCards(spread);
  cardsGrid.className = `cards-grid ${spread}`;
  cardsGrid.innerHTML = placeholders.map((item, index) => `
    <article class="tarot-card">
      <div class="tarot-flip-card">
        <div class="tarot-face tarot-back">
          <div class="back-copy">
            <div>
              <p>${item.position}</p>
              <span>待抽取</span>
            </div>
            <span>${spread === "single" ? "1 张牌" : `第 ${index + 1} 张`}</span>
          </div>
          <div class="back-art">
            <div class="card-back-core">
              <div>
                <p class="card-back-mark">TAROT</p>
                <p class="card-back-text">牌背常驻显示，等待翻开</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCards(cards, spread) {
  cardsGrid.className = `cards-grid ${spread}`;
  cardsGrid.innerHTML = cards.map((card, index) => `
    <article class="tarot-card is-${card.orientationClass}" data-index="${index}">
      <div class="tarot-flip-card">
        <div class="tarot-face tarot-back">
          <div class="back-copy">
            <div>
              <p>${spreadPositions[spread][index]}</p>
              <span>牌背已抽出，等待揭示</span>
            </div>
            <span>${card.arcana}</span>
          </div>
          <div class="back-art">
            <div class="card-back-core">
              <div>
                <p class="card-back-mark">TAROT</p>
                <p class="card-back-text">静心片刻，等待牌意显现</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tarot-face tarot-front">
          <div class="card-front-header">
            <div>
              <p class="card-position">${spreadPositions[spread][index]}</p>
              <h3 class="card-title">${card.name}</h3>
            </div>
            <span class="orientation-badge ${card.orientationClass}">${card.orientationArrow} ${card.orientation}</span>
          </div>
          <div class="art-frame">
            <div class="card-core">
              <p class="card-core-arcana">${card.arcana}</p>
              <h4 class="card-core-name">${card.name}</h4>
              <p class="card-core-keyword">${card.keyword}</p>
              <p class="card-core-hint">${card.orientation === "正位" ? "顺势展开" : "倒转提醒"}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function createConclusion(question, cards, spread) {
  const averageScore = cards.reduce((sum, card) => sum + card.score, 0) / cards.length;
  const threshold = spread === "triple" ? 0.12 : 0.08;
  const supported = averageScore >= threshold;
  const reversedCount = cards.filter((card) => card.orientation === "逆位").length;
  return `关于“${question}”，本次占卜结论为${supported ? "支持" : "不支持"}。${supported ? "牌面整体偏向正向，说明这件事有推进空间。" : "牌面整体更偏谨慎，说明当前条件尚未完全站在你这边。"}${reversedCount > 0 ? ` 本次出现 ${reversedCount} 张逆位牌，提示你特别留意节奏与判断。` : " 本次没有出现逆位牌，牌面态度相对直接。"}`;
}

function createDetail(question, cards, spread) {
  if (spread === "single") {
    const [card] = cards;
    return `<p>你抽到的是${card.name}${card.orientation}。这张${card.arcana}牌的核心特质是“${card.keyword}”，通常代表${card.orientation === "正位" ? "能量顺畅释放、主题更容易直接呈现" : "能量回收或受阻，主题会以提醒和修正的方式出现"}。放回到“${question}”这个问题里，它重点说明：${card.meaning}${card.orientation === "逆位" ? " 也就是说，这张牌不是单纯否定，而是在提醒你先处理卡住局面的那部分。" : " 也就是说，这张牌给出的态度比较直接，适合顺势行动。"} </p>`;
  }

  const cardSections = cards.map((card, index) => {
    const position = spreadPositions[spread][index];
    const orientationTone = card.orientation === "正位"
      ? "这张牌以正位出现，说明它的主题会更直接、更外显。"
      : "这张牌以逆位出现，说明它的主题会带着阻滞、延迟或内在拉扯。";
    return `${position}：${card.name}${card.orientation}。这张${card.arcana}牌的特质是“${card.keyword}”，${orientationTone} 放在这个位置上，它具体提示：${card.meaning}`;
  });

  const combinedAnalysis = (() => {
    const firstCard = cards[0];
    const secondCard = cards[1];
    const thirdCard = cards[2];
    const hasReversed = cards.some((card) => card.orientation === "逆位");

    return `综合来看，针对“${question}”，这组三张牌显示出一条清晰的推进链路：现状里的${firstCard.name}${firstCard.orientation}说明事情正围绕“${firstCard.keyword}”展开，代表你目前最真实的处境或起点；中间位置的${secondCard.name}${secondCard.orientation}把焦点拉到“${secondCard.keyword}”，说明问题真正的关键阻力或助力落在${secondCard.meaning}；最后的${thirdCard.name}${thirdCard.orientation}则把趋势落在“${thirdCard.keyword}”上，预示后续发展更可能表现为${thirdCard.meaning}。${hasReversed ? "由于牌阵中出现了逆位牌，说明这件事并不是单纯顺势推进就够了，你需要先处理牌面指出的卡点，再去承接后续机会。" : "三张牌之间衔接比较顺，说明你的问题有机会沿着当前方向继续展开，只要节奏稳住，结果会更清晰。"} `;
  })();

  return `
    <div class="detail-group">
      <p class="detail-label">逐张解读</p>
      ${cardSections.map((section) => `<p>${section}</p>`).join("")}
    </div>
    <div class="detail-group">
      <p class="detail-label">综合分析</p>
      <p>${combinedAnalysis}</p>
    </div>
  `;
}

function createAdvice(cards, spread) {
  const uprightCount = cards.filter((card) => card.orientation === "正位").length;
  const reversedCount = cards.length - uprightCount;
  if (uprightCount === cards.length) {
    return "总结来看，这次牌面整体顺畅，适合你继续推进。行动建议是：把注意力放在最想达成的一件事上，主动表达、主动争取，并在细节上保持稳定执行。";
  }
  if (reversedCount === cards.length) {
    return "总结来看，这次牌面更像强提醒。行动建议是：先放慢一步，核对信息与情绪状态，避免在焦虑、冲动或不确定的基础上做决定，等条件更清楚后再发力。";
  }
  if (spread === "triple") {
    return "总结来看，这次结果有机会也有变量。行动建议是：保留你想推进的方向，但给自己留出调整空间，先处理最明显的阻碍，再顺势推进下一步。";
  }
  return "总结来看，这次结果偏中性向上。行动建议是：可以开始行动，但不要只靠运气，最好先做一个小范围验证，再决定是否全面投入。";
}

function renderReading(question, cards, spread) {
  readingTitle.textContent = spread === "triple" ? "三张占卜结果解读" : "单张占卜结果解读";
  readingSubtitle.textContent = `问题：${question}`;
  readingBlock.innerHTML = `
    <article class="reading-section">
      <h3>结论</h3>
      <p>${createConclusion(question, cards, spread)}</p>
    </article>
    <article class="reading-section">
      <h3>详细解读</h3>
      ${createDetail(question, cards, spread)}
    </article>
    <article class="reading-section">
      <h3>总结与行动建议</h3>
      <p>${createAdvice(cards, spread)}</p>
    </article>
  `;
}

async function animateReveal(cards) {
  const cardElements = [...cardsGrid.querySelectorAll(".tarot-card")];
  for (let index = 0; index < cardElements.length; index += 1) {
    cardElements[index].classList.add("revealed");
    await sleep(360);
  }
}

function updateSpreadView() {
  const spread = new FormData(form).get("spread");
  renderPlaceholderCards(spread);
  readingCard.classList.add("is-hidden");
  readingSubtitle.textContent = "";
  readingBlock.innerHTML = "";
}

form.addEventListener("change", (event) => {
  if (event.target.name === "spread") {
    updateSpreadView();
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const question = questionInput.value.trim() || "今天运气怎么样";
  const spread = new FormData(form).get("spread");
  const cards = drawCards(spread);

  drawButton.disabled = true;
  drawButton.textContent = "正在翻牌...";
  renderCards(cards, spread);

  await sleep(380);
  await animateReveal(cards);
  await sleep(220);

  renderReading(question, cards, spread);
  readingCard.classList.remove("is-hidden");
  readingCard.scrollIntoView({ behavior: "smooth", block: "start" });

  drawButton.disabled = false;
  drawButton.textContent = "再次抽牌";
});

updateSpreadView();
