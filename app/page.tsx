const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${base}${path}`;
const Flow = ({ items }: { items: string[] }) => <div className="flow" aria-label="项目流程">{items.map((item, i) => <div className="flow-item" key={item}><span>{String(i + 1).padStart(2, "0")}</span><b>{item}</b></div>)}</div>;

export default function Home() {
  return <main id="top">
    <header className="nav"><a className="brand" href="#top">ZHAO YIWEI</a><nav aria-label="作品集导航"><a href="#journal">数字手账</a><a href="#maoge">猫哥学建筑</a><a href="#research">研究</a><a href="#github">GitHub</a></nav><a className="pill" href={asset("/portfolio-zhaoyiwei.pdf")}>下载 PDF</a></header>
    <section className="hero page"><p className="kicker">PORTFOLIO · 2026</p><h1>把复杂项目，整理成<br />清晰、可落地的系统。</h1><p className="lead">赵艺薇｜产品设计 · 内容运营 · 城市研究</p><div className="hero-grid"><article><strong>04</strong><span>核心项目</span></article><article><strong>16</strong><span>建筑科普作品</span></article><article><strong>7,544</strong><span>街景采样点</span></article><article><strong>14+</strong><span>GitHub Stars</span></article></div><p className="hero-note">我关注的不只是“做出一个结果”，而是把需求、流程、数据与交付物连成一条可复用的证据链。</p></section>

    <section className="case page" id="journal">
      <div className="case-head"><p className="kicker">CASE 01 · PRODUCT</p><h2>数字手账空间</h2><p>从需求冻结到可验证 MVP：用一个完整页面闭环，验证本地优先的数字手账体验。</p></div>
      <div className="facts"><div><b>目标</b><span>保留真实纸张与文具的触感</span></div><div><b>角色</b><span>需求拆解 / UX / 产研协同</span></div><div><b>平台</b><span>H5 PWA · iPhone 竖屏</span></div></div>
      <div className="split"><div><h3>需求拆解</h3><ul><li><b>用户任务：</b>快速选本、翻页、编辑并可靠保存。</li><li><b>核心承诺：</b>照片不上传，离线仍可继续创作。</li><li><b>P0 边界：</b>暂不做登录、云同步、支付、分享与复杂动效。</li><li><b>数据真相：</b>Page + PageElement，PageRender 只做缓存。</li></ul></div><div><h3>流程优化</h3><p className="muted">把“大而全的手账产品”收敛为一条可验收主链路；每一步都有降级策略，避免局部能力阻断整条体验。</p><div className="callout">图片抠图失败 → 自动回退为拍立得样式<br />刷新或离线 → IndexedDB 恢复编辑状态</div></div></div>
      <Flow items={["书架选本","进入单页","导入照片","本地抠图","排版编辑","保存恢复"]}/>
      <div className="journal-gallery">
        <figure><img src={asset("/portfolio/journal-hifi-shelf.png")} alt="全部本子页高保真原型"/><figcaption>01 / 书架：全部本子与真实材质封面</figcaption></figure>
        <figure><img src={asset("/portfolio/journal-hifi-cover.png")} alt="封面浏览页高保真原型"/><figcaption>02 / 浏览：封面与翻页进度</figcaption></figure>
        <figure><img src={asset("/portfolio/journal-hifi-spread.png")} alt="双页浏览高保真原型"/><figcaption>03 / 内页：周计划双页浏览</figcaption></figure>
        <figure><img src={asset("/portfolio/journal-hifi-editor.png")} alt="编辑页高保真原型"/><figcaption>04 / 编辑：文具盒随取随用</figcaption></figure>
        <figure><img src={asset("/portfolio/journal-hifi-assets.png")} alt="官方素材库高保真原型"/><figcaption>05 / 素材库：官方素材包</figcaption></figure>
        <figure><img src={asset("/portfolio/journal-hifi-cutout.png")} alt="本地抠图成功高保真原型"/><figcaption>06 / 本地抠图：完成后立即使用</figcaption></figure>
      </div>
      <div className="mvp"><span>MVP</span><h3>一页能完成，比十页看起来完整更重要。</h3><p>两种固定尺寸手账本、三套官方素材包、图片 / 贴纸 / 文字 / 待办四类元素，形成可测试的最小产品。</p></div>
    </section>

    <section className="case dark page" id="maoge"><div className="case-head"><p className="kicker">CASE 02 · CONTENT SYSTEM</p><h2>猫哥学建筑</h2><p>把建筑知识做成能持续生产、可复盘迭代的短视频内容系统。</p><a className="link-button" href="https://www.douyin.com/user/self?from_tab_name=main" target="_blank" rel="noreferrer">访问抖音主页（登录后） ↗</a></div><div className="account-stats"><div><strong>16</strong><span>作品</span></div><div><strong>55</strong><span>粉丝</span></div><div><strong>404</strong><span>获赞</span></div><div><strong>5,344</strong><span>最高可见播放</span></div></div><img className="wide-shot" src={asset("/portfolio/maoge-profile.png")} alt="猫哥学建筑抖音主页"/><div className="split"><div><h3>可复用的创作 Skill</h3><p className="muted">围绕“猫哥 IP + 生活问题 + 建筑原理”，把资料核查、口播、封面、分镜和生成提示词收束到同一生产规范。</p></div><div><h3>创作原则</h3><ul><li>前 2 秒提出冲突，5–12 秒交付第一次答案</li><li>每条视频只解释一个核心问题</li><li>每 8–12 秒补充一个新信息点</li><li>一镜一任务，封面结构保持可识别</li></ul></div></div><Flow items={["知识核查","结构选择","口播迭代","竖屏分镜","封面与生成","发布复盘"]}/><div className="visual-pair landscape"><figure><img src={asset("/portfolio/video-cover.png")} alt="蒙古包主题视频封面"/><figcaption>统一封面语法：问题标题 + 建筑主体 + 猫哥角色</figcaption></figure><figure><img src={asset("/portfolio/video-dashboard.png")} alt="短视频数据后台"/><figcaption>播放、完播、跳出、互动与涨粉进入同一数据表</figcaption></figure></div><div className="data-note"><b>数据闭环</b><span>创作者中心 Excel → 自动合并清洗 → 单条作品诊断 → 钩子 / 节奏 / 选题回写 Skill</span></div></section>

    <section className="case page" id="research"><div className="case-head"><p className="kicker">CASE 03 · URBAN RESEARCH</p><h2>低空视角下的城市街区上空界面研究</h2><p>将街景、路网、空间形态与统计模型串联，建立从城市级采样到街段评价的完整方法。</p></div><div className="research-stats"><div><strong>7,544</strong><span>原始街景 FID</span></div><div><strong>6,788</strong><span>有效观测点</span></div><div><strong>1,002</strong><span>路网街段</span></div><div><strong>509</strong><span>最终分析样本</span></div></div><figure className="method"><img src={asset("/portfolio/thesis-flow.png")} alt="论文全流程技术路线"/><figcaption>从语义分割、道路匹配、指标聚合，到 PCA / K-means 与 GAM / GWR 分析。</figcaption></figure></section>

    <section className="case soft page" id="github"><div className="case-head"><p className="kicker">CASE 04 · OPEN SOURCE</p><h2>BaiduStreetViewSpider</h2><p>为建筑、城市研究与机器学习数据准备打造的百度街景批量采集工具。</p></div><div className="github-card"><div><span className="repo-icon">⌘</span><div><b>justeacupzhao / BaiduStreetViewSpider</b><p>按坐标批量采集街景 · WGS84 CSV 输入 · 按 FID 组织输出</p></div></div><div className="stars">★ 14+ Stars</div><a href="https://github.com/justeacupzhao/BaiduStreetViewSpider" target="_blank" rel="noreferrer">查看 GitHub 项目 ↗</a></div><div className="closing"><p>需求定义决定做什么，流程设计决定如何稳定做到，数据让每一次迭代都有依据。</p><h2>Thank you.</h2><span>赵艺薇 · 2026</span></div></section>
  </main>;
}
