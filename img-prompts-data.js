/* 生圖指令庫資料
   來源：
   - bnext: 數位時代《18組AI生圖提示詞收藏》https://www.bnext.com.tw/article/91430/ai-image-prompt-style-guide
   - mrmad: 瘋先生《ChatGPT公仔指令大全指南》https://mrmad.com.tw/chatgpt-doll-command-list
   - mgrtoday: 經理人《Threads 爆紅 5 組 AI 生圖指令》https://www.managertoday.com.tw/articles/view/72882
*/
window.IMG_PROMPTS = [

/* ========== bnext：日系海報 / 拼貼 / 九宮格 / 活動海報 / 字體海報（18組） ========== */
{ id:'bx-cinematic-poster', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/2kcg-1783324400.jpg?w=600&output=webp', ico:'🎞️', title:'超大字體電影感海報', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'適合想做個人品牌視覺、活動宣傳，或純粹想要一張有質感的個人海報。',
  note:'需上傳一張清楚的人物照片，並把提示詞中的「我是龐德」換成你自己的姓名或品牌字。',
  prompt:`參考圖片人物，一幅現代日本戲劇海報設計。畫面呈現街頭攝影風格，背景是東京街頭的人行道，配有溫暖的奶油黃色瓷磚牆面和商店櫥窗。

畫面中央焦點清晰，一位扎著高髮髻的時尚日本年輕女子正轉身回眸，目光銳利地直視鏡頭。她穿著優雅寬鬆的寶藍色長裙，裙子隨動作飄逸擺動，腳穿著深灰色襪子和黑色短靴。

在最前景處，大膽疊加了一個覆蓋整個畫面的超大版式設計框架，由巨大的寶藍色「我是龐德」繁體字構成。這些大號文字的顏色與她身上的藍色長裙完美呼應。

右上角整齊排列著小巧精緻的紅白配色活動資訊文字。明亮的街頭自然光投射出逼真的陰影，色彩呈現豐富的高調（high-key）風格，整體堪稱電影感與先鋒平面設計相結合的傑作。--ar 9:16` },

{ id:'bx-3d-text-trap', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/6j4b-1783324400.jpg?w=600&output=webp', ico:'🎞️', title:'3D立體文字包圍人物', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'字體變成三維空間中的物理實體，把人「困住」，製造都市喜劇感。',
  note:'需上傳一張清楚的人物照片，把提示詞中的「我是龐德」換成你自己的名字。',
  prompt:`參考人物圖片。姿態與困境：她被困在一個由文字組成的狹小、封閉的立方體空間（Box/Room）中央，身體呈現被迫蜷縮、蹲坐的姿態，雙手張開試圖撐住兩側牆面，眼神直視鏡頭，帶著一絲驚慌與無奈。巨大文字元素：畫面最前方漂浮著一組巨大的、立體（3D）且粗厚的橘黃色「我是龐德」繁體字體。字體巨大到幾乎與人同高，以不規則的角度立體地環繞在女性周圍。

藝術風格：日本當代排版主義海報（Contemporary Japanese Typographic Poster），將「文字」轉化為三維空間的物理實體與核心視覺道具。超現實幽默喜劇風（Surreal Whimsical Comedy Style），透過誇張的字體比例、幽默的受困姿態，傳達出強烈的都市喜劇與內心小劇場氛圍。

鏡頭構圖：中央聚焦與一點透視，四周牆面、天花板與地板向中央匯聚，形成強烈的包圍感。最前景：巨大的3D橘黃色立體字體，帶有明顯的厚度。中景（焦點）：蜷縮在正中央的女性主角。背景：密密麻麻寫滿黑色日文平面字體的立方體內部空間。

光影：整個白色文字方塊空間內部光線充足，前景巨大橘黃色立體字具有明顯的側向光源，在字體自身厚度結構上留下深色陰影，彷彿隨時會壓向主角。

色調：純白色空間為底，密麻的黑色字體鋪滿牆面，前景鮮明高飽和度橘黃色字體形成強烈對比。3D字體呈現微微的啞光塑料或泡沫塑膠質感。情緒氛圍：被資訊與思緒淹沒、滑稽、內心掙扎（Overwhelmed, Whimsical, Trapped, Chaotic）。` },

{ id:'bx-collage-editorial', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/me71-1783322474.jpg?w=600&output=webp', ico:'🧷', title:'前衛時尚雜誌拼貼', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'混合攝影、貼紙、排版設計疊在一起，視覺層次最豐富，適合社群內容。',
  prompt:`A Mixed media collage artwork featuring a young Asian woman with short wavy black hair, wearing a dark denim jacket, looking directly at the camera. One hand is stretching out dramatically towards the camera, creating an intense foreshortening and dynamic motion blur effect. The background is a graphic poster design combining high-saturation red vertical bars, bright orange circles, black and white halftone patterns, and sketchy illustrations of birds. The layout includes bold typography with Japanese text "知覺する" and English words "POUNND AI." Warm sunset lighting accents her face, creating a cinematic mood. Avant-garde fashion editorial style, magazine cover aesthetics, vintage film grain texture, 35mm lens photography --ar 3:4` },

{ id:'bx-collage-variety', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/eycv-1783327211.jpg?w=600&output=webp', ico:'🧷', title:'綜藝節目普普漫畫海報', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'適合做個人品牌主視覺、社群活動宣傳，把真人照片放進漫畫分鏡、半色調點陣，做出高對比、強娛樂感的視覺。',
  note:'把提示詞裡的「我是龐德」換成你自己的標題文字。',
  prompt:`採用漫畫普普藝術風格的商業海報，比例為 9:16。

參考圖片中的真實女性，留著波浪短髮，頭上別著一個精緻的黑色蝴蝶結髮夾。她面帶溫暖微笑，雙手托腮，穿著一件飾有明顯白色滾邊的黑色休閒西裝外套。

背景使用充滿活力的亮粉色，疊加黑白漫畫分鏡格、復古半色調點陣圖案（Halftone）、動感速度線，以及亮黃色閃電圖案，營造出誇張、熱鬧的視覺節奏。

畫面左下角加入一隻戴著太陽眼鏡的可愛紫色卡通兔子，作為綜藝節目感的視覺亮點。

標題文字為「我是龐德」，採用粗黑輪廓線，帶有像貼紙一樣的白色鏤空邊框。文字色彩明亮，混合粉紅色、黃色與紅色，與背景形成高對比。

這是一張高對比度的綜藝節目風格海報，結合真實人物攝影與平面圖形插畫，呈現動感、活潑、專業又帶有娛樂感的視覺效果。--ar 9:16` },

{ id:'bx-collage-taiwan', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/nrgm-1783324401.jpg?w=600&output=webp', ico:'🧷', title:'台灣特色旅遊拼貼', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'「剪貼簿」美學，融合分層照片、手繪炭筆線條與粗體幾何色塊，適合台灣旅遊主題貼文。',
  prompt:`參考圖片中人物，一張精緻的台灣混合媒體旅遊圖。一位穿著現代街頭服飾的時尚遊客在超現實拼貼中探索。視覺元素包括：九份的阿妹茶樓、高雄駁二的工業藝術美學、台東的太平洋海岸線，以及宜蘭的溫泉。風格採用「剪貼簿」美學，融合分層照片、手繪炭筆線條與粗體幾何色塊。包含蘭花、機車剪影與繁體中文霓虹燈招牌。具有高級時尚雜誌質感，色彩鮮豔，層次豐富。` },

{ id:'bx-collage-y2k', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/nq12-1783322475.jpg?w=600&output=webp', ico:'🧷', title:'Y2K日系少女雜誌拼貼', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'剪貼簿多圖拼貼、拍立得與柯達膠卷邊框，清新底片與2000年代復古數位相機質感。',
  prompt:`風格與排版：
Y2K日系少女雜誌風，剪貼簿多圖拼貼（Scrapbook collage），拍立得與柯達膠卷邊框，人物邊緣帶有手繪白色貼紙粗輪廓線。畫面中央疊加一個復古數位相機螢幕的顯示畫面。畫面上點綴著綠色標籤文字貼紙、可愛手繪愛心與白色閃爍星星特效。

主體與服裝：
參考圖片主體人物，留著黑色齊瀏海短髮，眼神清澈微笑。身穿白色細肩帶荷葉邊連身裙，頭戴裝飾有黑色緞帶的草編平頂帽。

環境與光影：
背景為夏日綠意盎然的花園與樹木，陽光明媚，柔和的自然光，整體呈現清新的底片與2000年代復古數位相機質感，高畫質。格式3:4` },

{ id:'bx-collage-vlog', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/1dec-1783325839.jpg?w=600&output=webp', ico:'🧷', title:'旅行vlog貼紙封面', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'「卡哇伊」數位貼紙與手繪插畫，風格類似社交媒體旅行vlog的封面。',
  prompt:`參考圖片人物，一張年輕女旅行者背著大背包走在陽光明媚的街道上的高品質照片，搭配「卡哇伊」風格的數位貼紙和手繪插畫，風格類似社交媒體旅行vlog的封面。明亮的自然光線，柔和的戶外咖啡館背景。疊加元素包括色彩鮮豔的泡泡字體、可愛的愛心、相機圖示以及人物周圍的白色粉筆風格輪廓線。整體色調明亮柔和。` },

{ id:'bx-collage-polaroid', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/sjfd-1783326865.jpg?w=600&output=webp', ico:'🧷', title:'復古拍立得牆面', cat:'jpstyle', source:'數位時代・我是龐德',
  desc:'超寫實Y2K時尚社論，由別在臥室牆上的重疊拍立得照片組成，懷舊的全球時尚日記風格。',
  prompt:`超寫實的Y2K時尚社論，完全由別在臥室牆上的重疊拍立得照片組成，風格如同懷舊的全球時尚日記。參考圖片亞洲美女模特兒出現在多張即時顯影膠卷快照中，從不同的角度、情緒和抓拍姿勢中捕捉，營造出跨越時間的動感和個性感。有些拍立得照片略微傾斜，隨意疊放並自然重疊，形成了一種生活化的美學。環境感覺像是一個復古的創意工作室臥室，充滿了報紙質感、撕下的雜誌剪報、手寫的時尚筆記、塗鴉、貼紙和磨損的紙膠帶細節。自然閃光燈攝影，真實的即時顯影膠片瑕疵，細微的漏光，類柯達色彩分級，柔和的顆粒感。一種夢幻、懷舊又現代的時尚美學，感覺全球通用、高端社論且在視覺上極具吸引力。模特兒在所有畫面中始終穿著奶油色圖案短上衣、寬鬆破洞牛仔褲和格子運動鞋。` },

{ id:'bx-grid-doodle', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/dtpc-1783325791.jpg?w=600&output=webp', ico:'🔳', title:'手繪塗鴉九宮格（任意主題可套用）', cat:'grid9', source:'數位時代・我是龐德',
  desc:'圍繞主題物件產生連續分格拼貼，在真實影像上疊加手繪線描，主角欄位可自行替換。',
  note:'把「本次角色主角：參考圖1中的狗狗」換成你自己的主角（人物、寵物、商品皆可）。',
  prompt:`圍繞任意主題物件產生一組連續分格拼貼，讓核心內容在每個小畫面中以近距離、輕鬆、可親的狀態出現，畫面之間用均勻白邊分隔，形成像生活速寫簿一樣的節奏。每個格都保留真實影像的柔和質感和輕微膠片顆粒，主體不必端正擺拍，而是透過不同角度、表情、遮擋、手勢、局部裁切或主題動作製造變化；在真實畫面上疊加厚度不均的近白手繪線描，線條像隨手畫上去的塗鴉，圍繞著主體邊緣、頭頂、手部、道具輪廓和空白區域延展，生成主題派生的小圖標、情緒符號、短促手寫詞和誇張輪廓，使現實內容被二次註釋，第一眼讀到的是清爽分格與手繪覆蓋的俏皮互動。背景保持簡潔、淺亮、通風，留出足夠乾淨空白承接線條；文字若出現，只作為鬆散手寫節奏和情緒標記，字距不齊、筆觸圓潤，不承擔說明書式信息。色彩從主題本身的材質、情緒和敘事中提取，映射為大面積高明度乾淨底色、柔和低飽和主體色、清晰明暗結構、少量主題強調色與近白信息線，保持明亮輕快、清透潔淨的視覺感受；強調色只在關鍵小物、符號或手繪節點上點到為止，整體避免厚重、渾濁的陰影，讓每格鏡頭啟用。本次角色主角：參考圖1中的狗狗。格式4:3` },

{ id:'bx-grid-doodle-white', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/yq6k-1783325790.jpg?w=600&output=webp', ico:'🔳', title:'可愛白線塗鴉九宮格', cat:'grid9', source:'數位時代・我是龐德',
  desc:'同一主題主角在九個等距分格中以不同狀態連續出現，白色手繪線條貫穿全圖。',
  prompt:`圍繞任意主題物件產生一組九宮格照片式拼貼，讓同一主題主角在九個等距分格中以不同狀態連續出現，畫面第一眼讀到的是輕快、明亮、像手帳塗鴉一樣被重新「點亮」的生活瞬間。每一格都保留真實攝影感與自然光，主體佔據清晰視覺中心，姿態、角度和遠近有節奏變化，背景保持開闊、乾淨、空氣感強，分格之間用細白邊形成清爽秩序。以高明度白色手繪線條作為貫穿全圖的核心圖形機制：線條圍繞主體輪廓、手勢、動作軌跡和背景空處生長，形成愛心、弧線、閃光、波紋、短線、氣泡、簡短擬聲字或主題派生符號；這些塗鴉要像現場隨手畫上去，卻與主體動作準確呼應，既強調表情和動作互動，也強調表情與動作互動。色彩從主題本身的材質、環境和情緒中提取，保持大面積明亮通風底色、主體中等明度色塊、少量清晰強調色與白色訊息線條的角色關係；整體高明度、飽和度清爽、冷暖關係乾淨，情緒明亮輕快、清透有活力，避免沉悶、復古灰黃或渾悶暗調。最終效果應像一組被統一白線塗鴉串聯起來的主題記憶切片，真實、親近、活潑，九格各自成立又共同形成連續的視覺節奏。` },

{ id:'bx-grid-bw-fashion', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/74et-1783325791.jpg?w=600&output=webp', ico:'🔳', title:'黑白高對比時尚3×3網格', cat:'grid9', source:'數位時代・我是龐德',
  desc:'Irving Penn / Avedon攝影風，適合打造個人品牌的高質感視覺。JSON格式提示詞。',
  note:'需上傳清楚的人像參考照片，AI 才能維持九格中臉部一致。',
  prompt:`{ "Objective": "Create a 3x3 grid photo collage with high contrast black and white aesthetics", "FaceReference": { "Mode": "Strict face preservation", "Instruction": "Use uploaded reference for exact facial features", "Consistency": "Face identical across all nine frames" }, "GridComposition": { "Layout": "3x3 grid", "PoseVariety": [ "Intense direct stare", "Silhouette backlit", "Hands covering face peek", "Profile strong jaw", "Full body power stance", "Eyes only close-up", "Motion blur", "Contemplative downward", "Laughing candid" ] }, "PersonaDetails": { "Subject": { "Type": "Same as reference", "Wardrobe": "Simple black turtleneck", "OverallPresence": "Timeless, artistic" } }, "Environment": { "Setting": "Minimal studio", "Background": "Grey gradient or geometric", "Lighting": { "Style": "Dramatic directional", "Quality": "Hard shadows, extreme contrast" } }, "ImageQuality": { "Resolution": "8K black and white", "Details": "Fine art grain", "Aesthetic": "Irving Penn/Avedon portrait" }, "NegativePrompt": [ "color", "flat lighting", "different face", "altered facial features" ], "ResponseFormat": { "Layout": "3x3 grid", "AspectRatio": "1:1" } }` },

{ id:'bx-grid-influencer', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/h3u4-1783326227.jpg?w=600&output=webp', ico:'🔳', title:'AI網紅大頭貼（1主圖＋8小圖）', cat:'grid9', source:'數位時代・我是龐德',
  desc:'想打造社群個人形象頁必收。小圖數量固定為8張，是這組提示詞裡限制最嚴格的一個。',
  note:'請上傳清楚的自拍照作為 @Image1 參考；生成後務必確認小圖數量剛好是 8 張。',
  prompt:`【風格】豎幅3:4，INS韓版極簡拼貼風照片海報。背景使用淺色紙張或輕微褶皺紙質感，乾淨柔和，留白充足。

【主圖】畫面中央放置一張人物對鏡頭的自拍照，人物形象參考@Image1，主圖面積最大，表情俏皮鬆弛，具日系雜誌感的自然神態。

【小圖佈局】主圖周圍嚴格固定環繞八張小尺寸照片，數量必須為八張，不得多或少。八張小圖尺寸皆小於主圖，各自對應的姿勢如下：手伸向鏡頭的衝擊感構圖、wink特寫、側臉、俯拍效果、捧臉大頭照、自然站姿、走動抓拍、側身回頭。小圖可有輕微旋轉、疊壓、錯位，邊緣可帶有白邊、極細描邊或淡淡陰影。照片之間保持適度留白與呼吸感，緊湊但不擁擠，排列看似隨意但整體平衡有序。八張小圖中的人物皆使用@Image1的形象，臉部特徵保持一致。

【人物姿態與神情】所有照片中人物姿勢、角度、景別、神態均有變化，可看鏡頭也可不看，體現日常抓拍的真實感。表情自然鬆弛，神態或無辜或俏皮或搞怪或安靜微笑，風格偏向INS生活感、韓系淡顏氛圍。所有人物肢體必須完整、比例正常，禁止出現手指缺失、多指、手臂扭曲、腿部變形、頭部錯位等任何身體崩壞情況。

【服裝】白色上衣，藍色牛仔褲，無配件。

【色調】整體淡藍色系為主，柔和乾淨，低飽和度，帶有輕微膠片感或韓系濾鏡氛圍。

【裝飾元素】畫面上散佈少量手繪細線條塗鴉（如波浪線、圓圈、箭頭等），以及極簡風格的星星或愛心圖案，數量克制，分佈自然，不可雜亂，強化韓版手帳或雜誌排版感。禁止出現任何文字、短句或數字。

【負向提示】禁止八張小圖數量偏差，禁止小圖尺寸大於或等於主圖，禁止對稱構圖，禁止人物比例失調，禁止手指變形、多指、缺指，禁止姿勢僵硬，禁止表情單一或無變化，禁止身體部位缺失或扭曲，禁止過度裝飾導致畫面雜亂，禁止出現文字或數字元素。` },

{ id:'bx-event-windfest', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/i31a-1783325840.jpg?w=600&output=webp', ico:'🎪', title:'風神音樂祭像素海報', cat:'poster', source:'數位時代・我是龐德',
  desc:'像素風格設計，適合音樂祭、展覽宣傳，帶有數位龐克感。',
  note:'把地點、日期、社群帳號、主辦單位換成你自己的活動資訊。',
  prompt:`頂部標題：字體選用具點矩陣感的像素體。後製處理：文字水平切成三段，進行輕微左右位移，並在斷裂邊緣填入螢光綠（#00FF41）與電光藍（#00E0FF）的極小像素塊，模擬損壞的液晶螢幕。

主體影像：新竹縣立體育場鋼骨結構局部特寫，黑白高對比風格，移除群眾喧囂，只留建築肅穆感。位於畫面中心偏上，被下方斜向色塊承托。

結構底板：冰晶黃（#E6FF00）幾何色塊，45度角從右下角切入，疊加在黑白影像之上，讓部分建築鋼骨紋理透出螢光色。

文字資訊排版：副標「風之覺醒」使用極細線框方括號；日期「2026/06/27 - 06/28」採Helvetica Bold，字級最大；地點「新竹縣立體育場」大字，下方「新竹縣竹北市福興東路一段1號」小字加大字間距；左下角「Social: @windtopfest」，右下角「Presented by Bamboo Crew」全大寫垂直排列。` },

{ id:'bx-event-mummy', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/mw64-1783325840.jpg?w=600&output=webp', ico:'🎪', title:'埃及木乃伊展像素海報', cat:'poster', source:'數位時代・我是龐德',
  desc:'像素風展覽海報，適合博物館、展覽宣傳，古老文明與現代數位檔案感並存。',
  note:'把展覽名稱、日期、地點、票價換成你自己的活動資訊。',
  prompt:`頂部：巨大黑色字塊橫跨畫面頂部「埃及木乃伊險」，字體由微小方塊堆疊而成，帶低像素切割感。在「險」字右側斷裂處、「埃」字轉角嵌入極小面積的亮綠松石色（Turquoise）像素點，暗示古老文明在現代數位檔案中的存在感。

主體：畫面中上部偏左，極高對比黑白攝影，呈現木乃伊側影或法老面具輪廓，邊緣裁切平整，像被精密剪裁貼在白紙上的考古檔案。

結構：畫面右側至底部，淺沙黃色（Sandy Ochre）幾何色塊以15度角斜向穿過畫面，承載所有文字信息，對左側黑白圖像形成擠壓感。

文字資訊：日期「2026/6/18 - 2026/9/28」採粗壯無襯線體；地點「[ 國立歷史博物館 ]」置於方括號細線框中；下方「展覽票價：單人票$500」字間距拉大；底部留一道極窄淺灰帶，放置模擬條碼或檔案編號符號。

色彩：背景紙張白（Off-white），結構色淺沙黃，文字100%純黑，強調色極小面積亮綠松石。` },

{ id:'bx-event-calendar', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/zb9r-1783325838.jpg?w=600&output=webp', ico:'🎪', title:'城市清新日曆問候圖', cat:'poster', source:'數位時代・我是龐德',
  desc:'桌曆風格早安問候圖，適合每日社群貼文、店家日常經營。',
  note:'把「高雄」「早安你好」與日期換成你自己的城市與日期文字。',
  prompt:`A bright, transparent daily desk calendar style poster, ratio 9:10. Theme: Kaohsiung Music Center morning greeting, June 22, 2026. The composition is airy and high-key. At the top, the Chinese characters「高雄」and「早安你好」are written in a tall, slim, relaxed handwritten style with plenty of white space, offsets, and breathing room. A single, slender gold line enters from the edge, winds gracefully around the text and the distant Kaohsiung Music Center building, as if threading the air together. The Kaohsiung Music Center building is a small, distinct architectural subject in the mid-lower section of an open coastal background. Foreground features slightly blurred tropical plant textures for depth. The bottom contains a structured information area: large elegant serif English 'Good Morning', the date '2026.06.22', a brief passage of fine-print text, and a small circular red seal stamp. Colors are clean sky blue, brilliant white, and soft architectural grays with transparent shadows. Top edge has subtle torn paper textures. The mood is ritualistic, quiet, and fresh.` },

{ id:'bx-typo-graduation', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/aw62-1783325840.jpg?w=600&output=webp', ico:'🔤', title:'鏤空字體海報（畢業季主題）', cat:'poster', source:'數位時代・我是龐德',
  desc:'把字體變成「景框」，讓建築、風景、人物從筆劃裡透出來。以高雄流行音樂中心為背景做出畢業季海報。',
  note:'需上傳一張畢業生人物照片作參考。',
  prompt:`視覺設計構想：日式清透 × 建築幾何

核心大字（結構骨架）：
字體選用具有人文氣息的日式粗明體（Mincho）或粗壯但邊角圓潤的黑體。
「畢業季」三個大字以鏤空形式佔據畫面中心。

文字內部景象：
呈現高雄流行音樂中心獨特的白色六角形蜂巢建築紋理、愛河灣波光粼粼的海面、以及在海風中飛揚的學士帽剪影。

主體人物（層次穿插）：
一位著裝乾淨、日系鹽系風格的成年畢業生，懷抱一束淡色系的洋桔梗或洋甘菊。
人物從「畢」字的筆劃中向觀者走來，身體部分遮擋字體邊緣，產生強烈的「從文字中浮現」的立體感。
光線採用日系的「高調自然光（High-key）」，帶有輕微的過曝感，顯得清新而富有朝氣。

色彩與質感：
主色調：蘇打藍（海與天）、純淨白（KMC建築）、輕盈的草綠。
強調色：畢業生花束的淡黃色或粉色，作為情感焦點。
質感：保留細膩的紙張纖維感或極輕微的膠片顆粒，邊緣銳利，畫面極度乾淨。` },

{ id:'bx-typo-press', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/igng-1783325873.jpg?w=600&output=webp', ico:'🔤', title:'字體壓制主體海報（任意主題可套用）', cat:'poster', source:'數位時代・我是龐德',
  desc:'巨大字塊壓住主體，讀者先看到文字的重量，再從縫隙中發現主體細節。主題欄位可自行替換。',
  note:'把「主題：大喬」換成你自己的主題文字，並上傳對應的參考圖片。',
  prompt:`上傳一張圖片當參考，圍繞任意主題物件產生一張強圖形編輯感影像：主體物件以近距離真實影像主形體出現，被放大到幾乎貼近觀看者，局部被邊界切斷，最有情緒或最能代表主題的細節位於視覺中心；畫面疊加一組極粗、極大的標題或主題符號，讓字形既是發資訊層也是遮擋層，拉扯筆畫穿過、壓住主體。主要閱讀順序先看到巨大抽象字塊的重量，再在字形縫隙中發現主題主形體的關鍵表情、材質或結構，右側或邊緣保留安靜空場，放置少量細小正文式信息，形成大聲標題與低聲註釋的節奏反差。色彩從主題本身的材質、情緒和敘事語境中提取，映射為大面積明亮乾淨底色、清晰深色結構、低飽和影像層和小面積資訊強調色；保持高明度留白、冷靜清透、乾淨色階和明確明暗階梯，深色必須清澈有力，淺色必須通風潔淨，避免臟灰、煙熏、復古泛黃或濁覆蓋。整體質感應像嚴肅出版物與公共海報之間的混合：黑白攝影感或主題派生的克制影像質地、硬邊幾何字形、精確排版、緊張留白、強烈圖底關係，最終讓主題被文字結構重新組織成一種有壓迫感但清醒、克制、可記憶的視覺聲明。主題：大喬，將長寬比設為 9:16` },

{ id:'bx-typo-deity', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-07/e1ij-1783325874.jpg?w=600&output=webp', ico:'🔤', title:'神像造像信息海報', cat:'poster', source:'數位時代・我是龐德',
  desc:'把傳統神像的冠冕、法器、甲胄轉譯成線描主形體，兼具東方秩序感與現代設計語言。',
  note:'需上傳一張神像參考圖片。',
  prompt:`圍繞著「傳統神像造像藝術與木料解構」主題生成一張冷靜、精密、具有東方秩序感的信息海報：把圖中神像（冠冕、法器、甲胄與飄帶的結合體）轉譯成巨大的線描主形體，讓主形體像被層層剖開的木雕原材體積、漆線雕的鱗甲陣列、混天綾（飄帶）的拓撲曲面、面部「開臉」的幾何比例網格與法器構件互相咬合，佔據畫面主要視覺重量；

一側保留大塊深色負空間作為資訊場，標題（如：造像法度／軀體的拓撲）、日期、雕刻師／造像主、木材與大漆參數說明文字以細窄字重分級排布，行距克制，形成清晰閱讀路徑。主體邊緣要有強烈裁切感，宛如極具張力的飄帶弧線或尖銳的槍尖／乾坤圈局部伸入訊息場又被暗場切斷，產生影像與留白互相嚙合的張力；

內部使用大量高密度平行細線（模擬木材的天然肌理與底漆打磨痕跡）、重複短豎線（模擬金甲的微觀陣列與植髮的接縫）、層疊輪廓線（模擬神像軀體與衣褶的三維等高線放樣）和微小間隔，呈現像建築製圖、白描底稿與現代建築製圖的混合質感。

色彩從神像自身的漆木材質與法器鑲嵌中提取：保留大面積結構暗場（深邃的大漆黑或沉澱的暗琥珀色）、明亮乾淨的主形體（原木的溫潤本色與白描的米白）、清晰高明度線條（貼金工藝的亮金或白描的銀灰）、低飽和輔助層和極少強調色的角色關係（從法器提取一抹極純的硃砂紅，或寶石的翠綠），暗部要純淨有深度，亮部要清透鋒利，整體情緒冷靜、莊重、理性而不灰臟。

文字不是裝飾，而是與主形體共同構成節奏和尺度；畫面絕對避免普通宗教插畫的敘事（剝離香火氣與寫實的具象面龐，轉化為幾何與結構的理性質感），追求高密度線性細節（造像工藝的微觀宇宙）、強烈正負形對抗、精確排版和安靜但壓迫感很強的視覺記憶。` },

/* ========== mrmad：ChatGPT公仔指令大全（約70組，上傳照片後使用） ========== */
{ id:'mm-boxed-figure', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a4.jpg', ico:'🧸', title:'裝盒版Q版公仔模型指令', cat:'doll', source:'瘋先生',
  desc:'公仔包裝為零售陳列樣式，外面有大盒裝，人物外貌依上傳照片訂製，像潮玩一樣精緻可愛。',
  note:'需上傳一張清楚的人物照片；穿搭、配件、文字與包裝盒顏色可自行替換。',
  prompt:`請產生一張公仔的圖片，該公仔包裝為零售陳列樣式，外面有大盒裝，人物外貌請根據上方圖片訂製，讓角色像潮玩一樣精緻可愛！
穿搭：牛仔外套上衣＋白色工裝長褲＋紅色長靴＋小耳環＋細項鍊
個性特徵：皮膚白、雙眼皮
配件：綠茶手搖飲、iPhone手機背面、AirPods、單個羽球、行李箱
文字：上方標有MRMAD，請用白色字體
包裝盒顏色：莫蘭迪粉色，背景要有爬山情境
整體設計要有吸引力` },

{ id:'mm-polly-pocket-transparent', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a3.webp', ico:'🧸', title:'Polly Pocket透明展示公仔盒', cat:'doll', source:'瘋先生',
  desc:'全透明立體盒，四面與頂面皆為水晶般清澈材質，圓形木質底座搭配街頭背景。',
  note:'把「MRMAD」換成你自己的站台文字，穿搭與配件依照片替換。',
  prompt:`Polly Pocket風格公仔擺設x全透明展示盒
整體風格設定：
展示盒設計：全透明立體盒，四面與頂面皆為水晶般清澈材質，前側無印刷，讓角色與道具完全一覽無遺，盒體邊角帶些微金邊，提升質感，角色擺放在站台上面
主題名稱：MRMAD
站台造型：圓形木質底座，呈現陽光質感，搭配街頭背景
站台文字：
第一行（全大寫）：MRMAD
第二行（小字）：By MRMAD.com.tw, Taiwan
⸻
人物公仔設計
• 風格：夢幻日系Q版公仔，溫柔可愛風格
• 造型：如我提供的照片，穿著深灰色無印風落肩T恤+卡其色九分錐形西裝褲+米色帆布鞋，手上拿著一台MacBook，臉上帶著淡淡微笑，眼神溫柔
⸻
背景場景在街頭，看起來很熱鬧` },

{ id:'mm-single-figure', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a10.jpg', ico:'🧸', title:'單獨公仔模型指令', cat:'doll', source:'瘋先生',
  desc:'Q版人物玩偶呈現，朝向45度角位置，戲劇性打光與明亮背景。',
  prompt:`利用Q版人物玩偶呈現，人物外貌請根據上方圖片訂製，讓角色像潮玩一樣精緻可愛，朝向45度角位置
穿搭：牛仔外套上衣＋白色工裝長褲＋紅色長靴＋小耳環＋細項鍊
個性特徵：皮膚白、雙眼皮
人物配件：左手拿綠茶手搖飲、脖子上掛AirPods Max和右手拉白色行李箱
背景是在戲劇性打光與明亮背景` },

{ id:'mm-glass-box-theme', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a4.webp', ico:'🧸', title:'主題型高質感透明玻璃公仔盒指令', cat:'doll', source:'瘋先生',
  desc:'3D Q版立體場景盒，直立式9:16壓克力展示盒，完全依照參考照片打造，僅能更動指定部分。',
  note:'把{MRMAD}與{大笑}換成你要的文字/表情，背景主題可自行替換（範例為日本櫻花神社）。',
  prompt:`製作一個 3D Q版風格立體場景盒，使用直立式 9:16 壓克力展示盒，並完全依照參考照片打造。
人物的外觀、服裝、配件、背景與布局必須與照片100%一致，不進行任何重新設計。
僅能更動三個部分：
・{MRMAD}（用於上方橫幅及展示盒正面銘牌）
・{大笑}（可保持不變或微調為更可愛的版本）
・背景要有日本的櫻花樹和神社。
⸻
【壓克力展示盒】
・透明展示盒，圓角設計，帶有玻璃反光與柔和光暈效果
・整體為約30°傾斜角度，營造立體深度
・頂部懸浮橫幅寫有 {TOKYO}，使用糖果色字體
・展示盒外側貼滿旅行主題貼紙（依照片中物品，如行李箱、飲料、冰淇淋等）
・正面有兩個人物的Q版圓形臉部徽章
底部加上金屬銘牌文字：「MRMAD, 2025」
⸻
【盒內場景】
・背景：精準重現照片場景
・中景：Q版人物以 30° 角度排列，保留人物姿勢
・前景：包含拍立得相框架、地面紋理、以及照片中出現的小道具
⸻
【人物設計與風格】
・公仔風格的 Q 版角色：大頭、亮面材質、可愛表情
・眼睛要閃亮、有神
・角色服裝要改成日本和服風格
・髮型、比例等完全依照照片呈現` },

{ id:'mm-gundam-parts', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a5.jpg', ico:'🧸', title:'鋼彈版公仔模型零件指令', cat:'doll', source:'瘋先生',
  desc:'日本BAN DAI鋼彈組合零件板，板子左邊為人物、右邊為零件，全彩色同照片色彩。',
  prompt:`請產生一張日本BAN DAI的鋼彈組合零件板，人物外貌請根據上方圖片訂製
板子左邊為人物
板子右邊零件
穿搭：牛仔外套上衣＋白色工裝長褲＋紅色長靴＋小耳環＋細項鍊
個性特徵：皮膚白、雙眼皮
零件：綠茶手搖飲、iPhone手機背面、AirPods、單個羽球、行李箱
玩具公仔模型偏機械風格
全彩色同照片色彩
人物玩偶雙手雙腿自然垂放
左上角要有BING文字（或面板上BANDAI文字請改成自己喜愛文字）
請生成組合面板` },

{ id:'mm-pet-box', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a6.jpg', ico:'🧸', title:'寵物公仔包裝盒模型指令', cat:'doll', source:'瘋先生',
  desc:'參考日本 Takara Tomy 風格，乾淨簡約紅白配色，主體角色站在透明視窗展示盒中。',
  note:'需上傳一張寵物照片。',
  prompt:`依照以上這張圖片產生一張包裝盒設計，需參考日本 Takara Tomy 的風格，乾淨簡約的紅白配色，上面有日文標題與狗狗照片，模擬真實商品的攝影棚拍攝風格。
主體角色需要站在一個透明視窗展示盒中，並且改用Q版風格呈現。` },

{ id:'mm-blindbox', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a11.jpg', ico:'🧸', title:'盲盒公仔模型指令', cat:'doll', source:'瘋先生',
  desc:'3D渲染Q版盲盒公仔，旁邊有精緻長方形盲盒包裝盒，盒內也有角色插圖。',
  prompt:`一款3D渲染的Q版盲盒公仔，角色可愛精緻，參考提供的圖片風格製作。角色右手拿著白色iPhone三鏡頭自拍，左手拿一杯有星巴克Logo的咖啡杯。穿著白色外套、咖啡色長褲、黑色愛迪達球鞋。
旁邊有一個精緻長方形盲盒包裝盒，盒內也同樣有角色插圖與MRMAD，配色為玫瑰藍與曜石灰。` },

{ id:'mm-tomica-cbr', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a14.jpg', ico:'🧸', title:'日本Tomica玩具包裝盒指令', cat:'doll', source:'瘋先生',
  desc:'真實Q版塑膠包裝盒設計，角色站在重型機車旁邊，輪廓清晰、色彩飽和但柔和。',
  prompt:`設計一個真實Q版塑膠包裝盒設計，背景為米白色，盒中包含一名外貌根據圖片訂製卡通人物，站在一輛Honda CBR1000RR重型機車旁邊。
角色和摩托車為立體模型質感，輪廓清晰，色彩飽和但柔和。
包裝盒左上角為紅底白字的『TOMICA』Logo，右下角標示『MRMAD』，左下角寫有『CBR1000RR』。整體設計乾淨、對稱，富有收藏價值與視覺懷舊感。` },

{ id:'mm-tomica-classic', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a17.jpg', ico:'🧸', title:'實體Tomica風格的玩具包裝盒', cat:'doll', source:'瘋先生',
  desc:'融合實體Tomica風格的玩具包裝盒，簡潔明亮的攝影棚風格呈現。',
  prompt:`設計一款融合實體Tomica風格的玩具包裝盒，整體構圖以簡潔明亮的攝影棚風格呈現，人物外貌請根據上方圖片訂製。
穿搭：牛仔外套上衣＋白色工裝長褲＋紅色長靴＋小耳環＋細項鍊
個性特徵：皮膚白、雙眼皮
角色腳下的包裝盒為Tomica經典風格設計：左側為大紅底白字的『トミカ』Logo，編號「001」清楚標示，右側印有實物照片與品牌『TOMICA TOMY』藍底白字Logo。` },

{ id:'mm-barbie-box', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a12.jpg', ico:'🧸', title:'芭比娃娃包裝盒模型指令', cat:'doll', source:'瘋先生',
  desc:'時尚洋娃娃盒裝套組，粉色與玫瑰金調，側面印有娃娃插畫肖像，商業攝影燈光效果。',
  prompt:`產生一個時尚洋娃娃的盒裝套組，娃娃造型依照提供的圖片風格製作，穿著現代流行的穿搭：粉紅色毛衣、破洞牛仔褲和高跟鞋。她戴著太陽眼鏡，手提一個精品風格的手提包。
盒子內還包含多種時尚配件，例如唇膏、眼影盤、太陽眼鏡、香水瓶和飾品。包裝盒設計精美，整體風格為粉色與玫瑰金調，側面印有娃娃的插畫肖像，右上角印有金色BING時尚字體。
盒子放置在一張白桌上，背景是時尚商店的貨架。整體風格真實且精緻，有商業攝影的燈光效果。` },

{ id:'mm-tomica-display', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a16-1.jpg', ico:'🧸', title:'Tomica系列擬真玩具公仔展示盒', cat:'doll', source:'瘋先生',
  desc:'擬真風格的玩具公仔包裝展示盒，公仔擺放在盒子外面上方，如商品攝影般的擬真效果。',
  prompt:`製作一個擬真風格的玩具公仔包裝展示盒，產品為上傳圖片造型塑膠公仔。
包裝設計請參考 Takara Tomy 的 Tomica 系列風格，搭配日文標題文字與紅白配色塊設計。產品名稱為：「眾量級絕版收藏款」。
請將實體公仔擺放在盒子外面上方，呈現出如商品攝影般的擬真效果。
盒子外觀需完整展現產品樣貌與品牌視覺，背景為純白攝影棚風格，整體氛圍乾淨、專業、具高質感的展示感。` },

{ id:'mm-tomica-display-alt', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a15-1.jpg', ico:'🧸', title:'Tomica擬真公仔包裝展示盒（簡化版）', cat:'doll', source:'瘋先生',
  desc:'同樣參考 Takara Tomy Tomica 風格，人物模型放置在盒子上展示，白色攝影棚背景。',
  prompt:`一個擬真風格的玩具包裝展示盒，產品為上傳圖片做成塑膠製公仔模型，盒子模仿 Takara Tomy 的 Tomica 系列風格、日文文字與紅白色塊設計，產品名稱為「眾量級絕版收藏款」。
並將人物模型放置在盒子上展示，盒子外觀需要有跟模型一樣的照片，背景為白色攝影棚風格，整體呈現乾淨俐落的商品攝影感。` },

{ id:'mm-polaroid-3d', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a30.jpg', ico:'🧸', title:'拍立得3D立體照片公仔風格', cat:'doll', source:'瘋先生',
  desc:'角色轉化為3D Q版風格，從拍立得照片走出，呈現突破二維相片邊框、進入現實世界的視覺效果。',
  prompt:`將場景中的角色轉化為3D Q版風格，放在一張拍立得照片上，相紙被一隻手拿著。照片中的角色正從拍立得照片走出，呈現突破二維相片邊框，進入二維現實世界的視覺效果。` },

{ id:'mm-polaroid-dynamic', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a9.webp', ico:'🧸', title:'動態寫實拍立得照片公仔風格', cat:'doll', source:'瘋先生',
  desc:'手拿相機，主角生成Q版3D公仔跳出立可拍邊框，一腳踩在照片裡、一腳踏出照片外，展現動感。',
  prompt:`用手拿著一台Canon單眼相機，照片主角 （如附檔所示）生成Q版3D公仔圖並突破立可拍照片的邊框跳出來，像掙脫出來一樣，一隻腳踩在立可拍照片裡，一隻腳已經踏出來照片外面，展現動感。表情充滿期待及冒險感，嘴角上揚，轉頭回望的動作。
立可拍照片後面出現真實世界背景為公園或櫻花樹下，背景停一台，身旁還有許多觀葉植物 如大型龜背芋、雞蛋花、及積水鳳梨，突顯從「日常感」中走出的創意。` },

{ id:'mm-retro-action-figure', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a25.jpg', ico:'🧸', title:'復古公仔玩具風格', cat:'doll', source:'瘋先生',
  desc:'逼真的1980年代風格塑膠動作人偶，關節清晰可見，復古80年代動作人偶盒子包裝。',
  note:'把「MRMAD」與「severance」標誌換成你想要的文字。',
  prompt:`這張照片中的人做成一款逼真的1980年代風格的塑膠動作人偶，肩膀、手肘、膝蓋和臀部的關節要看得清楚。這個人偶看起來粗獷、英雄氣概十足。
玩具包裝在一個復古的80年代動作人偶盒子裡，盒子有大膽的圖形設計、螢光綠的配色，還有一個透明的塑膠窗口，可以看到裡面的人偶，外觀需要顯示完整。
盒子的背面有角色的戰鬥畫面、角色屬性以及漫畫風格的插圖，上面有個獨特的名字"MRMAD"，還在右上角有個小小的"severance"標誌。
衣服要完全照著照片裡的穿著來做。整體風格是復古的"Severance"風格，色彩鮮豔、逼真、爆炸感十足，典型的80年代動作人偶品牌風格。記得用這張照片作參考，不能替換成其他圖片。` },

{ id:'mm-blindbox-accessories', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a21.jpg', ico:'🧸', title:'公仔盲盒與配件風格', cat:'doll', source:'瘋先生',
  desc:'公仔包裝為零售陳列盲盒樣式，盒子與公仔必須分開，韓式精緻妝容、日系Q萌風格。',
  note:'配件可換成你想要的韓式主題道具。',
  prompt:`請參考照片產生一張公仔的圖片
該公仔包裝為零售陳列盲盒樣式
盒子與公仔必須分開
公仔和服圖案請接近原圖
人物臉部盡量還原真人Q版可愛
韓式精緻妝容
盒子外面上方寫BING，背景有XX風格
旁邊配件請附上：
1個韓式扇子
1個韓式銅鍋
1個韓式湯匙
1瓶復古真露酒
包裝和整體設計要日系Q萌風格` },

{ id:'mm-polly-pocket-round-couple', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a22.jpg', ico:'🧸', title:'圓形Polly Pocket風格公仔玩具盒指令', cat:'doll', source:'瘋先生',
  desc:'圓形開蓋式玩具盒，垂直9:16構圖，盒蓋為旅行地山脈背景，盒底人物縮小成可愛人偶。',
  note:'把「MRMAD」換成你想標示的地點文字。',
  prompt:`幫我根據附上的照片，生成一張像Polly Pocket風格的玩具盒圖片：
盒子形狀：圓形，開蓋式，放置在桌上有攝影感
盒子色系：明亮系氣息
整體比例：9:16，垂直長方形設計
盒蓋背景：呈現旅行地的日本山脈背景，有樹林與小屋
盒內場景：森林地區，照片中兩個人物中間有石頭陣，旁邊有小物動物
盒底人物：照片中人物變成1/5～1/6比例可愛人偶，人物配件要與照片中一致
盒蓋上顯示地點文字：MRMAD` },

{ id:'mm-polly-pocket-single', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a63.webp', ico:'🧸', title:'Polly Pocket風格單人公仔玩具盒指令', cat:'doll', source:'瘋先生',
  desc:'淺抹茶色系圓形上掀式玩具盒，盒蓋為富士山、櫻花樹背景，公仔正享用早午餐拼盤。',
  prompt:`幫我根據照片，生成Polly Pocket風格的公仔盒圖片
盒子形狀：圓形，上掀開蓋式，放在桌上
盒子色系：淺抹茶色系
整體比例：3:4，垂直長方形
盒蓋背景：有富士山、盛開的櫻花樹、運河、獨木舟、高速火車、藍天白雲、開滿白色小花的草皮
盒內場景：第3張相片內的3 D擬真人物正開心享用早午餐拼盤餐點，坐在露營桌前
盒底：開滿白色小花的草皮
盒蓋上顯示文字：MRMAD` },

{ id:'mm-gashapon-round', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a5.webp', ico:'🧸', title:'圓形透明扭蛋公仔指令', cat:'doll', source:'瘋先生',
  desc:'把照片中的動物轉成Q版扭蛋，透明扭蛋殼內放入寵物與代表性小物。',
  note:'適合寵物照片，可替換扭蛋內的小物。',
  prompt:`幫我用照片中的動物轉成Q版，做一個扭蛋，圓形的。扭蛋殼的顏色是透明的，並且在扭蛋內有一隻照片中的柴犬、一隻雞腿。` },

{ id:'mm-crystal-ball', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a6.webp', ico:'🧸', title:'水晶球3D立體Q版公仔指令', cat:'doll', source:'瘋先生',
  desc:'3D立體Q版人物的街道水晶球，內有山城、海景、老街背景，底座有燈籠與紙傘裝飾。',
  note:'把「九份」與「MRMAD」換成你自己的地點與文字。',
  prompt:`請幫我生成3D立體Q版人物的九份街道水晶球
水晶球有水的感覺
1.水晶球內人物：以照提供的照片人物呈現，旁邊站著一隻小柴犬（我提供的照片右邊小狗），狗的比例大約到人物的小腿中間
【人物設計風格】
•　公仔以我提供的照片，有著可愛表情
•　雙眼閃亮有神、富有情感
•　服裝、髮型、比例等皆需完全忠實於照片
2.水晶球背景：有山城、海景、阿妹酒樓的九份老街
3.水晶球底部：石磚路
4.底座：橙色氣息(橘色系/紅色系/咖啡色系）燈籠、紙傘、可愛的茶點圖案
5.底座文字：MRMAD` },

{ id:'mm-disney-crystal-ball', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a8.webp', ico:'🧸', title:'迪士尼香檳金水晶球公仔指令', cat:'doll', source:'瘋先生',
  desc:'奶茶色系迪士尼氛圍水晶球，盤腿坐姿、一手拿星巴克，香檳金底座，45度角立體呈現。',
  prompt:`服裝風格、髮型依照提供的照片生成，特色眼睛大，Q版
配件：一手拿著星巴克，盤腿坐著姿勢，旁邊要禮物盒堆一疊，以及鈴鐺擺設
風格顏色：奶茶色系為主，在迪士尼裡面的感覺（有迪士尼城堡圖樣）
【包裝設計】
整體放在 香檳金底座水晶球中，前面草寫「xxxx」
全景以 45 度角立體感呈現
水晶球設計：加入迪士尼裡的場景插畫
裝飾元素：迪士尼場景，提升精緻感` },

{ id:'mm-pet-realistic-diorama', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a7.webp', ico:'🧸', title:'寵物公仔寫實展示盒風格指令', cat:'doll', source:'瘋先生',
  desc:'四步驟教學：上傳毛小孩照片→擬真微縮公仔→AI提案系列主題→六款公仔陳列展示盒。',
  note:'建議每次生圖前都提醒AI要維持相同的公仔風格。',
  prompt:`1.上傳幾張毛小孩清楚的照片（可以有些背景物件，讓AI在設計時可以有場景跟配件的靈感）
2.請ChatGPT用擬真寫實的風格將照片中的動物設計成公仔，並讓整體有「微縮袖珍」的感覺。（可額外指定場景要建構在漂流木上）
3.設計出滿意的第一款公仔之後，請AI幫忙提案設計做成一系列的主題公仔。（不修改它的提案，就請它一款一款設計出來，但建議每一次生圖之前都要提醒AI要維持相同的公仔風格）
4.最後一張擺在一起的圖，指令是「請將上面六款公仔陳列在一起，像是擺在商場的公仔展示盒裡面」` },

{ id:'mm-tamagotchi-diorama', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a32.webp', ico:'🧸', title:'電子機公仔風格指令', cat:'doll', source:'瘋先生',
  desc:'極簡主義3D電子寵物機微縮景觀模型，90年代電子寵物螢幕顯示Q版人物在遊樂場玩耍。',
  prompt:`生成一個極簡主義的3D電子寵物機微縮景觀模型，在大型電子寵物機裡面有經典風格裝飾，內有一個大型90年代電子寵物螢幕，顯示如圖片Q版人物在遊樂場玩耍，背後有摩天輪，旁邊有氣球、娛樂場設施。` },

{ id:'mm-wood-house-doll', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a32.jpg', ico:'🧸', title:'木盒Q版人偶風格', cat:'doll', source:'瘋先生',
  desc:'半開放式方形小木屋公仔盒，木紋牆面，配件用束帶固定於牆上如展示型錄。',
  note:'穿搭與配件清單可依照片內容自行調整。',
  prompt:`人物以這張照片實際模樣繪製成Q版風格。
衣著描述：以照片實際模樣繪製Q版風格，戴圓形框眼鏡，手持白色三鏡頭iPhone，穿淡藍色的短袖T恤、白色短褲，揹著​PORTER經典黑色後背包，白色球襪、穿NIKE慢跑鞋。
公仔盒風格：在一個半開放式方形小木屋內，木屋上面有三角形屋頂
公仔放置於盒內中間靠左位置。
風格：小木屋、牆面木紋、木質顏色偏淡色系，夾板元素。
配件置於公仔和靠右位置，用束帶固定於牆上。
配件：一個「ACCESSORIES」的木質名牌。
一個AirPods Max
一個MacBook
一個法國可頌麵包
一個冰淇淋
一個炸雞桶
一個日本拉麵
一個啤酒
氛圍：希望盒子有光線，盒子角度斜放20度
文字：盒子上方寫著"MRMAD.com.tw"` },

{ id:'mm-milk-cup-station', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a23.jpg', ico:'🧸', title:'微型牛奶杯小盒風格', cat:'doll', source:'瘋先生',
  desc:'微型火車站裝在牛奶杯內，牛奶液面漂浮泡沫如雲霧，搭配真實火車票、地圖等現實對比物。',
  prompt:`微型火車站（裝在牛奶杯內）
小人偶：依照上傳圖片風格呈現，縮小至與模型同樣尺寸
場景：一個迷你火車站，微縮火車停在軌道上，小人偶在候車，站台上還有微型行李箱。
地板：牛奶液面，漂浮著微小的泡沫，彷彿雲霧。
現實對比：牛奶杯放在木桌上，旁邊有真實的火車票、地圖或背包。` },

{ id:'mm-coconut-beach', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a24.jpg', ico:'🧸', title:'微型海灘度假村風格', cat:'doll', source:'瘋先生',
  desc:'微型海灘度假村裝在椰子殼內，椰汁液面漂浮浪花泡沫，搭配真實墨鏡或防曬霜對比。',
  prompt:`微型海灘度假村（裝在椰子殼內）
場景：迷你海灘，微縮躺椅上有小人偶曬太陽，旁邊有微型遮陽傘和衝浪板。
地板：椰汁液面，漂浮著微小的"浪花"泡沫。
現實對比：椰子殼放在沙灘毛巾上，旁邊有真實的墨鏡或防曬霜。` },

{ id:'mm-soda-amusement', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a10.webp', ico:'🧸', title:'微型遊樂園風格', cat:'doll', source:'瘋先生',
  desc:'微型遊樂園裝在汽水杯內，氣泡像遊樂園煙火，搭配真實薯條或漢堡的現實對比。',
  prompt:`生成一個微型遊樂園（裝在汽水杯內）
- 場景：迷你遊樂場，有微縮摩天輪、旋轉木馬，小人偶在排隊或玩耍，地上有微型氣球。
- "地板"：汽水液面，氣泡像是遊樂園的"煙花"。
- 現實對比：汽水杯放在野餐桌上，旁邊有真實的薯條或漢堡。` },

{ id:'mm-3d-app-icon', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a31.jpg', ico:'🧸', title:'個人化Q版大頭照', cat:'doll', source:'瘋先生',
  desc:'把照片設計成3D風格Q版APP圖標，邊框立體，頭像稍稍超出圖標背景框效果。',
  prompt:`把這張照片設計成一個3D風格Q版 APP 圖標，並且邊框也是立體的，需要人物保持特徵並且很像本人，可愛一謝，整個頭像稍稍超出APP圖標立體背景框的效果。` },

{ id:'mm-esports-avatar', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a36.webp', ico:'🧸', title:'電競風格版大頭貼', cat:'doll', source:'瘋先生',
  desc:'3D風格Q版App圖示，電競鮮豔攝影燈光源，類似迷你公仔或黏土人（Nendoroid）風格。',
  prompt:`依照提供的照片設計一款 3D 風格的 Q 版 App 圖示，保留角色的外貌特徵。
使用電競鮮豔攝影燈的光源，營造出細緻高質感的效果。角色的造型應稍微突破 App 圖示的邊框，增強立體感並帶來俏皮感。
整體風格應呈現出可愛、具有收藏價值的氛圍，類似迷你公仔或黏土人（Nendoroid）的風格。` },

{ id:'mm-gashapon-machine', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a29.jpg', ico:'🧸', title:'立體3D扭蛋機公仔風格', cat:'doll', source:'瘋先生',
  desc:'卡通風格紅色扭蛋機，人偶雙手抱著多顆彩色扭蛋球，3D渲染、擬真玩具感、工作室燈光。',
  prompt:`一個卡通風格的紅色扭蛋機，內部坐著一位如附件圖片Q版人偶，雙手抱著多顆彩色扭蛋球（紅、藍、黃、綠、白），同時人物後面填滿多顆扭蛋球。
扭蛋球具有光滑塑膠質感，人偶皮膚與衣物呈現軟膠公仔質感。
扭蛋機整體機台為磨砂金屬與透明壓克力材質，背景簡單淺色。
整體風格為 3D 渲染、擬真玩具感、工作室燈光、淺景深，攝影風格參考靜物攝影與玩具產品展示照，可愛日系極簡風。` },

{ id:'mm-claw-machine', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-generation-tutorial-a28.jpg', ico:'🧸', title:'立體3D夾娃娃機公仔風格', cat:'doll', source:'瘋先生',
  desc:'卡通風格夾娃娃機裡坐著人物，機內有毛絨玩具，3D公仔風格搭配日系柔和逼真攝影燈光。',
  note:'把「MRMAD」換成你想標示的文字。',
  prompt:`一個卡通風格的夾娃娃機裡面坐著如附件內照片中的人物，穿著白色棒球外套、紅鞋、咖啡色皮革褲子。
人物坐在夾夾娃娃機內，且娃娃機有很多可愛的毛絨玩具，包括兔子、熊、小汽車等，背景是暖色調，機台底下寫著「MRMAD」，以 3D 公仔風格和搭配日系柔和逼真攝影燈光呈現，且夾娃娃機內燈光比較明亮，外面還有控制手把和按鈕。` },

{ id:'mm-gashapon-cute', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a13.webp', ico:'🧸', title:'可愛的3D扭蛋機風格', cat:'doll', source:'瘋先生',
  desc:'白紫柔和色調扭蛋機，內裝多個兔兔造型扭蛋，頂部有酷洛米造型大公仔。',
  prompt:`1台可愛的3D扭蛋機，比例9:16，使用白色、紫色的柔和色調。扭蛋機裡裝滿了多個兔兔造型的公仔扭蛋。每隻都被完整包覆在透明的圓形扭蛋殼內。扭蛋機頂部有一隻酷洛米造型的大公仔。
機器前右邊，請把照片女孩依據照片五官長相,特徵變成可愛Q版公仔。
這個公仔風格、五官精緻，酷洛米造型的髮圈，上身穿著白色蕾絲襯衫，下身穿著淺紫色吊帶百褶裙。坐在打開的紫色扭蛋殼內，雙腳自然踩放在地上。懷裡抱著酷洛米布偶娃娃。` },

{ id:'mm-handshake', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a11.webp', ico:'🧸', title:'3D立體公仔握手風格', cat:'doll', source:'瘋先生',
  desc:'皮克斯風格渲染Q版人物，從畫作中伸出手，與一隻真實的手牽手，背景簡潔突出人物。',
  prompt:`生成一幅 9:16 的畫作，畫中包含 Q版人物，以皮克斯風格渲染，呈現 c4d 渲染效果。人物從畫作中伸出手，與一隻真實的手牽手，背景保持簡潔以突出人物。` },

{ id:'mm-birthday-box', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a12.webp', ico:'🧸', title:'半開生日快樂主題盒風格', cat:'doll', source:'瘋先生',
  desc:'前面切開的盒子變成舒適房間，一歲生日主題，氣球、蛋糕、禮物，粉紅蝴蝶結外盒。',
  prompt:`創作可愛的3D立體插圖，前面切開的盒子變成舒適的房間，主題風格為一歲生日，有氣球、蛋糕、禮物，外盒最上面有粉紅蝴蝶結。
背景、人偶、飾品全部以 3d 方式呈現，人偶依照圖片內人物呈現。` },

{ id:'mm-storybook-japan', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a14.webp', ico:'🧸', title:'立體書造型公仔風格（日本旅行版）', cat:'doll', source:'瘋先生',
  desc:'立體書造型公仔，左頁是旅行封面加上標題文字與富士山，搭配電車軌道元素。',
  note:'可依此格式自行替換每年不同的旅遊主題與地標。',
  prompt:`幫我做成一本立體書的造型公仔 左邊書頁是這次旅行的封面，上面文字Japan Travel (主標題）MRMAD（副標題） 加上日本鎌倉江之電，背景是富士山。人物公仔起參考附件圖片長相。
搭配電車軌道的元素，公仔在書本裡面有搭乘電車的感覺，江之電電車請參考第2張圖。` },

{ id:'mm-storybook-vietnam', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a16.webp', ico:'🧸', title:'立體書造型公仔風格（越南旅行版）', cat:'doll', source:'瘋先生',
  desc:'同一系列的立體書造型公仔，主題換成越南下龍灣驚訝洞，人物公仔擺出同樣姿勢。',
  prompt:`幫我做成一本立體書的造型公仔 左邊書頁是這次旅行的封面，上面文字Vietnam Travel (主標題）2025.03（副標題） 加上下龍灣 Sung Sot 洞，背景是越南河內下龍灣。人物公仔起參考附件圖片長相。
搭配的元素，公仔都是擺出同樣姿勢，驚訝洞（Sung Sot Cave ）請參考背景畫面。` },

{ id:'mm-proposal-scene', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a17.webp', ico:'🧸', title:'Q版公仔求婚3D場景', cat:'doll', source:'瘋先生',
  desc:'兩人轉換成Q版3D人物，場景換成求婚，五彩花瓣拱門，Q版人物加真實寫實環境。',
  prompt:`將照片裡的兩個人轉換成Q版3D人物，場景換成求婚，背景換成淡雅五彩花瓣做的拱門，背景換成浪漫顏色，地上散落著玫瑰花瓣。除了人物採用Q版3D人物風格，其他環境採用真實寫實風格。` },

{ id:'mm-room-diorama', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a18.webp', ico:'🧸', title:'特殊個人化3D公仔場景與房間', cat:'doll', source:'瘋先生',
  desc:'可愛3D居家房間設計，床、書架、沙發、電腦桌，軸測圖呈現，小型人偶轉成Q版人物。',
  prompt:`幫我生成一個居家房間設計，裡面有床、書架、沙發、電腦桌和電腦、牆上掛著繪畫、綠植，窗外是城市夜景，用可愛 3d 風格和c4d 渲染，軸測圖呈現。
裡面的小型人偶依照附加的圖片轉成Q版人物。` },

{ id:'mm-jewelbox-couple', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a19.webp', ico:'🧸', title:'紀念收藏Q版公仔盒', cat:'doll', source:'瘋先生',
  desc:'萌趣可愛3D渲染收藏擺件，珠寶盒展示盒打開後呈現兩位Q版角色甜蜜相望的浪漫場景。',
  note:'把「MRMAD」換成你要的字樣，比例9:16。',
  prompt:`根據照片上的內容打造一款細緻精美、萌趣可愛的3D渲染收藏擺件，裝置在柔和粉彩色調、溫馨浪漫的展示盒中。展示盒為淺奶油色搭配柔和的金色裝飾，形狀像精緻的便攜珠寶盒。打開盒蓋，呈現出一幕溫暖浪漫的場景：兩位Q版角色正甜蜜相望。盒頂雕刻著「MRMAD」的字樣，周圍點綴著小巧精緻的星星與愛心圖案。
盒內站著照片上的女性，手中捧著一束小巧的白色花束。她的身旁是她的伴侶，照片上的男性。兩人都擁有大而閃亮、充滿表現力的眼睛，以及柔和、溫暖的微笑，傳遞出濃厚的愛和迷人的氣質。
他們身後有一扇圓形窗戶，透過窗戶能看到陽光明媚的景色和輕柔飄浮的雲朵。盒內以溫暖的柔和光線進行照明，背景中漂浮著花瓣點綴氣氛。整個展示盒和角色的色調優雅和諧，營造出一個奢華而夢幻的迷你紀念品場景。
尺寸：9:16` },

{ id:'mm-jewelbox-love-story', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a33.webp', ico:'🧸', title:'紀念收藏Q版公仔盒（LOVE Story珠寶盒版）', cat:'doll', source:'瘋先生',
  desc:'可開啟的珠寶盒設計，奶油白搭配霧金邊，盒蓋雕有「LOVE Story」字樣，兩位Q版角色對望微笑。',
  prompt:`請以3D渲染風格創作一件夢幻細緻的收藏擺件，構圖比例為 9:16。
擺件形式為一款可開啟的珠寶盒設計，整體外觀採用奶油白搭配柔霧金邊，盒身質地為絲絨與霧面金屬，呈現高雅柔和質感。盒蓋上雕有「LOVE Story」字樣，周圍點綴細緻的小星星與立體愛心圖騰，散發輕奢溫柔氛圍。
盒內場景以柔和的暖白與粉米色為基調，背景為淡雅花瓣飛舞的室內景。中間站著一位Q版女孩，參考照片中的人物：齊瀏海、圓眼睛、穿著冬季毛呢外套與紫紅色貝蕾帽，雙手托腮微笑，神情溫柔自然，呈現出靜謐可愛的氣質。
她手中捧著一束細小的白色花束，一旁站著她的伴侶（可創造為一位氣質斯文、身穿簡約外套的Q版男生角色），兩人雙眼對望，彼此微笑，營造出浪漫溫馨的氛圍。
場景後方設有一扇圓形窗戶，透出柔和陽光與海洋風格的海邊，雲朵緩緩飄過，背景與光線柔和和諧。
整個盒內燈光為溫暖柔霧光，角色表面略帶光澤，呈現陶瓷質感，並有細節如衣物摺痕、眼神高光、花束細節等。整體為一件極具收藏價值的夢幻小型藝術裝置，具少女感、浪漫感與細節感兼具的精緻風格。` },

{ id:'mm-funko-pop', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a20.webp', ico:'🧸', title:'Funko Pop 公仔製作', cat:'doll', source:'瘋先生',
  desc:'Funko Pop 公仔包裝盒風格，等距視角呈現，包裝盒旁展示公仔實物的逼真渲染。',
  prompt:`把照片中的人物變成 Funko Pop 公仔包裝盒的風格，以等距視角（isometric）呈現，並在包裝盒上標註標題為"MRMAD"。包裝盒內展示的是照片中人物形象，旁邊搭配有人物的必備物品（手槍、手錶、西裝、其他）同時，在包裝盒旁邊還應呈現該公仔本體的實物效果，採用逼真的、具有真實感的渲染風格。` },

{ id:'mm-pixar-3d', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a31.webp', ico:'🧸', title:'皮克斯3D人物公仔指令', cat:'doll', source:'瘋先生',
  desc:'以皮克斯3D風格重繪照片，人物用可愛公仔呈現。最簡短好上手的一組指令。',
  prompt:`以皮克斯3D風格重繪這張照片，人物用可愛公仔呈現。` },

{ id:'mm-photo-frame-wedding', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a21.webp', ico:'🧸', title:'相框公仔人偶', cat:'doll', source:'瘋先生',
  desc:'轉換成Q版3D人物的西式婚禮場景，父母禮服、孩子是花童，整體放在一個相框裡。',
  prompt:`將照片裡的轉換成Q版 3D人物，父母婚禮服飾，孩子是美麗的花童。 父母，西式婚禮服飾，父親禮服，母親婚紗。孩子手捧花。 背景是五彩鮮花做的拱門。 除了人物是3D Q版，環境其他都是寫實。 整體放在一個相框裡。` },

{ id:'mm-tilt-shift-diorama', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a22.webp', ico:'🧸', title:'微型立體場景', cat:'doll', source:'瘋先生',
  desc:'運用移軸攝影技法，把照片內人物Q版化，依照原本角色造型、穿著和動作呈現。',
  prompt:`微型立體場景呈現，運用移軸攝影的技法，將照片內人物Q版，並且依照原本角色造型、穿著和動作呈現` },

{ id:'mm-rpg-card', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a23.webp', ico:'🧸', title:'RPG風格角色對應製作', cat:'doll', source:'瘋先生',
  desc:'RPG收藏卡片風格數位角色卡，含技能條、頂部標題橫幅與底部姓名牌，配色貼合職業主題。',
  note:'把【Programmer】換成你的職業，技能數值可自行調整。',
  prompt:`Create a digital character card in RPG collectible style.
The subject is a 【Programmer】, standing confidently with tools or symbols relevant to their job.
Render it in 3D cartoon style, soft lighting, vivid personality.
Include skill bars or stats like [Skill1 +x], [Skill2 +x, e.g., Creativity +10, UI/UX +8].
Add a title banner on top and a nameplate on the bottom.
Frame the card with clean edges like a real figure box.
Make the background fit the profession's theme.
Colors: warm highlights, profession-matching hues.` },

{ id:'mm-titanic', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a24.webp', ico:'🧸', title:'鐵達尼號Q版人偶浪漫畫面製作', cat:'doll', source:'瘋先生',
  desc:'人物轉換成可愛Q版3D造型，站在豪華遊輪船頭經典場景，黃昏暖色調，其他環境為實體。',
  prompt:`將附圖中的人物轉換成可愛Q版3D造型
場景：在豪華遊輪最頂尖的船頭，船頭是尖的。
男士帶著女士站在泰坦尼克號船頭，男士雙手摟著女士的腰，女士雙臂伸展穿著連身裙，迎著風，臉上洋溢著自由與暢快。
此時天色呈現黃昏的暖色調，大海在船下延展 。
除了人物用Q版3D造型以外，其他環境都是實體。` },

{ id:'mm-airpods-case', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a27.webp', ico:'🧸', title:'AirPods耳機殼公仔指令', cat:'doll', source:'瘋先生',
  desc:'立體AirPods Pro充電盒，角色探出盒外雙手扶著邊緣，45度角擺放呈現內部結構。',
  prompt:`設計一個立體 AirPods Pro充電盒如，盒內包含 1 位角色，角色探出盒外，雙手扶著 AirPods 充電盒邊緣，呈現「探頭出來看」的感覺，用45度角擺放。

角色來源：依照圖片1內
服裝與配件：依照圖片1內生成
角色姿勢：
角色探出 AirPods 充電盒，雙手扶著盒子邊緣。
臉部表情可自然微笑，營造可愛且俏皮的感覺。
AirPods 充電盒設計
質感：整體設計應與 Apple AirPods 充電盒 相似，保持簡約、質感的風格。
擺放角度：45 度角 擺放，讓內部結構更清楚。
內部擺放順序：
角色（女孩）
AirPods 耳機（共 2 個，擺放於盒內）也可以只放單耳` },

{ id:'mm-sanrio-tv', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a25.webp', ico:'🧸', title:'微縮袖珍立體電視場景公仔指令', cat:'doll', source:'瘋先生',
  desc:'以Hello Kitty和三麗鷗小夥伴為主角做成「微縮袖珍立體場景」盒玩，裝進電視機內展示。',
  prompt:`以Hello Kitty和類似三麗鷗小夥伴為主角，
做成「微縮袖珍立體場景」的盒玩，
並將整個場景裝進電視機內，
讓電視機變成公仔展示盒的感覺。` },

{ id:'mm-carousel-music-box', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a26.webp', ico:'🧸', title:'木質旋轉音樂盒公仔指令', cat:'doll', source:'瘋先生',
  desc:'立體旋轉音樂盒風格設計圖，全家去遊樂園坐旋轉木馬主題，圓形底座、童趣色系。',
  note:'主題、家庭成員與文字可依需求自行替換。',
  prompt:`請幫我畫一個立體旋轉音樂盒風格的設計圖：
我的風格主題是：「全家去遊樂園坐旋轉木馬」
底座為「圓形」＋「繽紛童趣色系」
角色包含：爸爸（微笑）、媽媽（開心打招呼）、小孩（開心抓著旋轉木馬柱子）
每個人坐在不同顏色和大小的旋轉木馬上
額外加上兩匹空著的小馬
加入兒童樂園氛圍的小物件（如氣球、彩旗、糖果、星星吊飾、歡樂拱門）
整體風格像木頭音樂盒擺飾，有立體感、擺設感
音樂盒上寫上文字：「Happy MRMAD Day」` },

{ id:'mm-popsicle', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a28.webp', ico:'🧸', title:'夏天冰棒公仔指令', cat:'doll', source:'瘋先生',
  desc:'仿造Q版人物造型的冰棒，冰霜質感與冷凍效果，旁邊放置彩色冰棒外盒仿廣告海報。',
  note:'把品牌文字換成你想要的字樣。',
  prompt:`請生成畫面中有一支仿造一位Q版人物造型的冰棒（如照片），整體呈現出冰霜質感與冷凍效果。
冰棒旁邊放有一個冰棒外盒，外盒設計為彩色，封面是照片平面卡通樣子。
外盒上的文字為「Häagen-Dazs」，下方兩行文字分別為：「MRMAD」、「NEW」。整體畫面風格仿廣告海報，構圖為3:4比例，背景為冷色系冰霜質感。` },

{ id:'mm-lego-diorama', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a29.webp', ico:'🧸', title:'樂高LEGO公仔指令', cat:'doll', source:'瘋先生',
  desc:'LEGO風格四分之三視角立體場景，角色站在日本街頭，LEGO盒子雨棚與標誌構成畫面框架。',
  prompt:`請以LEGO風格繪製一幅四分之三視角的立體場景（Diorama），名稱為《MRMAD》，場景建立在一個長方形底座上。畫面中包含一個用樂高品成的Q版角色版本，角色依照附加圖片生成。
角色站在日本街頭，旁邊有日式建築和場景，畫面上方由一個部分切開的LEGO盒子雨棚與LEGO標誌構成，形成整個場景的框架。` },

{ id:'mm-lego-baggie', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a42.webp', ico:'🧸', title:'透明塑膠袋樂高公仔指令', cat:'doll', source:'瘋先生',
  desc:'樂高風格公仔圖片，吊掛式透明塑膠袋包裝，標籤卡印有『LEGO CITY MINI』字樣。',
  prompt:`生成一張樂高風格的公仔圖片，包裝形式為吊掛式透明塑膠袋。袋子內有一個Q版樂高人物，角色依照附加圖片生成。公仔被裝在塑膠袋內，背景有簡單的城市圖案插畫。塑膠袋上方有標籤卡，印有『LEGO CITY MINI』的字樣，整體呈現玩具店販售用的商品風格，強調亮面塑膠與樂高質感。` },

{ id:'mm-lego-box', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a43.webp', ico:'🧸', title:'樂高外盒指令', cat:'doll', source:'瘋先生',
  desc:'模仿LEGO樂高Creator系列的3D包裝盒圖片，傾斜45度角呈現，聖誕市集主題。',
  note:'把「MRMAD」「Christmas」與零件編號換成你想要的主題。',
  prompt:`請生成一張模仿 LEGO 樂高 Creator 系列的 3D 包裝盒圖片。包裝盒傾斜45度角呈現正面與左側角度。
整體風格需符合 LEGO 樂高設計，色彩鮮明、積木質感強烈，外盒左上角顯示「LEGO 」標誌，下方寫上「8+」、「40602」、「Winter Market Stall」、「271 pcs/pzs」資訊，採用樂高風格的專屬字體與版面。
樂高盒子上方顯示主題字「MRMAD」第二行顯示「Christmas」，畫面中包含一個用樂高品成的Q版角色，臉形依附加圖片生成轉為樂高風格，中央包含積雪覆蓋的節慶攤位、紅綠裝飾、兩個樂高人偶（1 位小孩、1 位大人）、一個雪人，以及一棵裝飾好的聖誕樹。背景為夜晚下飄雪的村莊，遠處有溫暖燈光的小屋與閃爍星空。` },

{ id:'mm-lego-miniature', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a32-1.webp', ico:'🧸', title:'樂高公仔風格縮影指令', cat:'doll', source:'瘋先生',
  desc:'經典樂高人偶風格微縮場景，透明玻璃立方體內，木質底座配銀色裝飾，簡約時尚。',
  note:'把「MRMAD travel」換成你自己的標籤文字。',
  prompt:`經典樂高人偶風格，一個微縮場景，依照上傳圖片內人物和造型相匹配
整個場景設在一個透明玻璃立方體內，布景極簡。
微縮場景的底座是木質感，配以銀色裝飾，風格簡約且時尚。
底座上有一塊優雅雕刻的標籤牌，字體為精緻的襯線體，上面寫著「MRMAD travel」。
底部設計中還巧妙融入了類似自然歷史博物館展示資訊，以精細蝕刻的方式呈現。
整體構圖像是一件高端收藏藝術品：精心打造、策展般呈現、燈光細緻。
構圖重在平衡。
背景為漸層色，從深色到淺色過渡。` },

{ id:'mm-bandai-gundam', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a30.webp', ico:'🧸', title:'萬代鋼彈模型指令', cat:'doll', source:'瘋先生',
  desc:'高度寫實動作公仔，90年代風格超級英雄，融合現代鋼彈街頭風格戰鬥服，攝影棚光效。',
  note:'把「MRMAD STREET」換成你想要的底座文字。',
  prompt:`一款高度寫實的動作公仔，頭像依上傳的圖片產生，角色是受到 90 年代風格啟發的超級英雄，穿著融合現代鋼彈街頭風格的戰鬥服。公仔站在印有角色插畫的包裝盒前，戰鬥服結合了鋼彈機甲裝甲與都會街頭時尚風格 —— 特色包括多層次金屬裝甲片、飛行外套質感、戰術褲，以及未來感運動鞋。配色則採用與鋼彈（Strike Freedom Gundam）相似的白色、紅色、藍色與金屬灰。
這款公仔單手抱著一頂風格化的鋼彈頭盔，底座上刻有「MRMAD STREET」字樣。背後的包裝盒上印有角色的漫畫風插畫，搭配塗鴉元素與賽博龐克城市氛圍。整體採用攝影棚光效、玩具般的光滑質感，以及電影感的構圖風格。` },

{ id:'mm-outfit-breakdown', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a34.webp', ico:'🧸', title:'Q版穿搭公仔風指令', cat:'doll', source:'瘋先生',
  desc:'上傳全身照後由AI自動拆解上衣、褲子和配件，左側Q版人物、右側單件展示。',
  prompt:`直接將全身照片上傳後，透過ChatGPT自動分析拆解上衣、褲子和配件，不需要自訂全由GPT幫你生成。

構圖設定
畫面比例為 9:16
上方文字：「SHOW」
左側：Q版人物形象（保持姿勢、臉部特徵）
右側：對應穿搭的單件展示（服飾、配件等）

人物設計
人物風格為Q版3D，比例偏長腿
採用C4D渲染質感，精緻光感與立體度
穿搭主題為：時尚街頭穿搭風格
背景為與人物配色相符的純色背景（無圖案、無陰影）
保持原人物姿勢與臉部特徵辨識度` },

{ id:'mm-city-model', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a35a.webp', ico:'🧸', title:'公仔風格城市模型指令', cat:'doll', source:'瘋先生',
  desc:'公仔風格城市模型，泰式服裝公仔配泰國皇宮廟宇、大象、河流的橘色半圓形立體地塊。',
  note:'把主題、城市與天氣資訊換成你自己的旅遊主題。',
  prompt:`請製作一款公仔風格的城市模型，主題為「Luna in MRMAD」需要包含以下元素：
• 公仔人物：精緻可愛有微光澤感的公仔有著棕色丸子頭與雙眼皮大眼、耳朵旁有雞蛋花裝飾、穿著傳統泰式服裝、手上有很多金手鐲、搭配夾腳拖鞋、臉上有微紅曬傷
• 氣候與溫度：大太陽、42°C
• 基座為橘色半圓形立體地塊設計，顯示泰國皇宮廟宇、泰國象、河流，底部要有金色金屬質感的「Bangkok」標示
• 背景為白色、模型整體色調柔和、可愛、立體、像是Poly製成的感覺、有精緻細節
圖面上方以黃色的字標示「Luna in MRMAD」搭配活潑的字型
、藍白色小飛機、天氣資訊` },

{ id:'mm-gashapon-capsule', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a37.webp', ico:'🧸', title:'扭蛋膠囊公仔風格指令', cat:'doll', source:'瘋先生',
  desc:'詳細寫實肖像圖，全玻璃材質扭蛋膠囊被兩根手指夾住，膠囊內是迷你版Q版本人。',
  note:'服裝品牌可依你的喜好替換。',
  prompt:`生成一張詳細寫實的肖像圖片，畫面中是一顆全玻璃材質的扭蛋膠囊，被兩根手指夾住。
膠囊內部是一個迷你版的我本人，臉部造型與附加照片中的人物相同，採用Q版風格，等比例呈現。
Q版角色穿著：白色「Nike」T 恤、印有「Air Max」標誌的黑色短褲、Air Max鞋款、白色 Nike 襪子
整體設計需強調膠囊的寫實質感與膠囊內Q版公仔的收藏魅力。` },

{ id:'mm-isometric-room', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a38.webp', ico:'🧸', title:'極簡等距風格的3D模型指令', cat:'doll', source:'瘋先生',
  desc:'極簡等距3D插畫，藏在「MRMAD Room」中的音樂工作室房間，Y2K糖果色半透明質感。',
  prompt:`使用這張照片，製作一個極簡等距風格的 3D 插畫，主題是一間藏在「MRMAD Room」中的舒適音樂工作室房間。

外觀設計帶有柔和的曲線、經典細節與懷舊元素，整體採用柔塑膠質感，並以霓虹綠、紅、黃等顏色呈現。香菸盒內部是一間小型音樂室，照片中的男子坐著看著他的 MacBook，姿勢請協助構想。旁邊有一盞復古風格的檯燈，散發柔和的漫射光。牆上設有漂浮層架，擺放著仙人掌與一個小型的魔術方塊` },

{ id:'mm-cola-bottle', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a39.webp', ico:'🧸', title:'可口可樂瓶公仔指令', cat:'doll', source:'瘋先生',
  desc:'可愛Q版收藏公仔封存在透明可口可樂瓶中，盤腿坐在藍色冰塊上，瓶內擺放台啤與Oreo。',
  prompt:`製作一款可愛的Q版收藏公仔，主角如附件照片轉成Q版人物，被封存在一個透明的可口可樂瓶中，瓶蓋為紅色。角色盤腿坐在一顆藍色冰塊上，身穿白色的 Nike 上衣、黑色短褲搭配黑色緊身褲，以及紅色球鞋。瓶內四周擺放著一罐台灣啤酒、一包 Oreo 餅乾，以及兩顆帶有可愛笑臉的發光方塊。` },

{ id:'mm-arcade-cabinet', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a40.webp', ico:'🧸', title:'90年代大型街機公仔指令', cat:'doll', source:'瘋先生',
  desc:'極簡主義3D微縮景觀，仿90年代格鬥遊戲機的巨大街機，螢幕內是科技感十足的3C主題房間。',
  note:'把「MRMAD」換成你自己的招牌文字。',
  prompt:`一個極簡主義風格的 3D 微縮景觀，主體為一台巨大街機裝飾，風格仿 90 年代格鬥遊戲機。街機外觀為白色霧面質地，邊框和細節為金屬灰與霧銀色材質，搖桿區域為透明壓克力，底部有 RGB 彩光燈條，並帶有發光按鍵與復古紅色搖桿。
螢幕中是一間科技感十足的 3C 主題房間，牆面為淺灰與銀白色調，搭配藍色 LED 光條裝飾，背景牆面顯示虛擬螢幕介面資訊。房間內有懸浮層架，擺放iPhone、Sony PS5主機與 AirPods max。
房間內坐著一位男孩，造型如圖片所示。街機上方漂浮著「MRMAD」霓虹燈文字，排列成一個螺旋環繞構圖。
背景為黑色至電光紫的漸層色，整體帶有柔光粒子與淡淡科技光暈。街機底座正面有「MRMAD」字樣，字體為粗體無襯線、發光青銅色，呈現出融合復古懷舊與未來科技感的視覺風格。` },

{ id:'mm-plush-doll', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a41.webp', ico:'🧸', title:'Q版短毛玩偶公仔指令', cat:'doll', source:'瘋先生',
  desc:'細緻短毛的Q版玩偶圖片，臉部細節相似，毛茸茸娃娃感，景色也轉成相同材質。',
  prompt:`成為一張有細緻短毛的Q版玩偶圖片，裡面人物依照附件圖片動作和姿勢生成，臉部細節要類似，並且要像是毛茸茸娃娃感覺，旁邊的景色也都要相同材質。
背景換成小型模型場景，轉成45度角，裡面有櫻花和日式廟宇等文化風格` },

{ id:'mm-collectible-office', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a42-1.webp', ico:'🧸', title:'高端收藏等級模型指令', cat:'doll', source:'瘋先生',
  desc:'極簡風格未來辦公空間，無屋頂剖面結構，如高端收藏等級模型，融合極簡主義與科技感。',
  prompt:`生成一幅個人專屬的極簡風格的未來辦公空間圖片，房間以正面45度視角、無屋頂的剖面結構呈現，如同一件高端收藏等級的模型，透過建築級的清晰感與設計精度，完美展現整體空間。

場景中的主角根據附件圖片生成為 3D 卡通形象。
房間佈置、人物造型、桌面設備、牆面裝飾等細節，請自行產生，需整體風格融合極簡主義、科技感與視覺美學，呈現一個專注、高效、充滿創造力的工作環境。` },

{ id:'mm-inflatable', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a43-1.webp', ico:'🧸', title:'充氣娃娃模型指令', cat:'doll', source:'瘋先生',
  desc:'高解析度3D渲染圖，設計為可充氣的蓬鬆物件，霧面紋理搭配細微織物褶皺與縫線。',
  prompt:`建立如附件圖片的高解析度 3D 渲染圖，將設計為可充氣的蓬鬆物件。
形狀應看起來柔軟、圓潤且充滿空氣，就像毛絨氣球或充氣玩具一樣。
使用光滑的霧面紋理，並搭配細微的織物褶皺和縫線，以強調其充氣效果。
其形狀應略微不規則且柔軟，並配以柔和的陰影和燈光，以突出其體積感和真實感。將其放置在乾淨簡約的背景（淺灰色或淡藍色）上，並保持俏皮的雕塑美感。` },

{ id:'mm-card-illustration', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a52.webp', ico:'🧸', title:'卡牌人像插畫模型指令', cat:'doll', source:'瘋先生',
  desc:'超寫實電影感插畫，角色撞穿「考古探險」集換卡牌邊框，能量裂紋與維度破裂特效。',
  note:'標題與名字可依你想要的主題自行替換。',
  prompt:`一幅超寫實、電影感的插畫，描繪了撞穿一張「考古探險」集換卡牌的邊框，人像依照圖片內轉成，角色正處於跳躍中或用繩索擺動，穿著標誌性的冒險裝備，可能正在使用雙槍射擊，槍口的火焰幫助將卡牌古老的石雕邊框震碎，在破口周圍製造出可見的維度破裂效果，如能量裂紋和空間扭曲，使灰塵和碎片四散飛濺。
角色的身體充滿活力地向前衝出，帶有明顯的運動深度，突破了卡牌的平面，卡牌內部（背景）描繪著茂密的叢林遺跡或佈滿陷阱的古墓內部。
卡牌的碎屑與crumbling 的石頭、飛舞的藤蔓、古錢幣碎片和用過的彈殼混合在一起。
「Archaeological expeditions」的標題和「MRMAD」的名字（帶有一個風格化的文物圖標）在卡牌剩餘的、佈滿裂紋和風化痕蹟的部分上可見。充滿冒險感的、動態的燈光突顯了她的運動能力和危險的環境。
整體卡片風格轉向40度角，並且有攝影質感的強烈光影，人物能夠呈現更逼真立體質感。` },

{ id:'mm-polaroid-camera-3d', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a53.webp', ico:'🧸', title:'拍立得3D數位公仔模型指令', cat:'doll', source:'瘋先生',
  desc:'3D風格數位插畫，粉紅色Instax拍立得相機鏡頭內是高級時尚小客廳，主角坐在白色沙發上。',
  note:'第一張上傳個人照，第二張可用網路上喜愛的拍立得相機圖片。',
  prompt:`生成一張3D風格的數位插畫，畫面為一台粉紅色的 Instax
拍立得相機（生成像照片2），鏡頭內部空間被改造成一個高級時尚的小客廳。
主角是一位年輕女孩（照片1），有齊瀏海和深棕色長髮，頭上戴著白色太陽眼鏡，臉部帶著自然開心的微笑，穿著米白色針織上衣和白色短褲，下身搭配黑色高筒靴，坐在一張精緻白色沙發上。她的臉、表情與服裝維持寫實可愛的風格。
沙發周圍放有高級精品作為裝飾，例如精品服飾、香水、化妝品、包包和鞋子，整體畫面明亮且有時尚度假感，畫面比例為3:4，風格可愛又富有質感。` },

{ id:'mm-ramen-diorama', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a54.webp', ico:'🧸', title:'豚骨拉麵微景觀公仔模型指令', cat:'doll', source:'瘋先生',
  desc:'在一碗豚骨拉麵的大碗上創造微型景觀，3D Q版人物公仔鬆弛地吃著拉麵，旁邊坐著可愛公仔。',
  prompt:`請幫我在一碗豚骨拉麵的大碗上創造一個微型景觀。
主題3D Q版人物公仔（根據圖1的照片），很鬆弛的吃著碗裡的拉麵，旁邊坐著一隻可愛的公仔。` },

{ id:'mm-chanel-dollhouse', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a55.webp', ico:'🧸', title:'迷你豪華娃娃屋指令', cat:'doll', source:'瘋先生',
  desc:'香奈兒風格迷你豪華娃娃屋，黑金配色多層樓房間，Q版女孩站在底下，白色搖搖馬與禮盒。',
  note:'把「MRMAD」換成你想要的金色大字。',
  prompt:`生成一整棟迷你豪華娃娃屋，設計靈感來自香奈兒，屋頂上有［MRMAD］金色大寫字，整棟房子以黑色主，搭配金色細節，有多層樓與多個房間。
屋內擺滿香奈兒風格的小物：香水、口紅、購物袋、保養瓶罐與精品包，全部整齊擺放在黑金配色的家具上。
一位Q版風格的女孩站在底下，人物以附件照片生成，有著大眼睛、深棕色短髮（盡量接近真人）穿著奶油色針織毛衣、千鳥格迷你群、黑色短靴，搭配紅色香奈兒包。房間包括臥室、浴室（有浴缸）、化妝室、廚房與精品展示區。
最底層有一匹白色搖搖馬，周圍擺放多個香奈兒禮盒。整體氛圍溫馨優雅，背景為柔和的奶油米色，呈現精品展示般的對稱與精緻質感。` },

{ id:'mm-city-weather', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a56.webp', ico:'🧸', title:'小型3D城市氣象圖指令', cat:'doll', source:'瘋先生',
  desc:'垂直構圖3D城市氣象圖，45°俯視等距微縮模型，天氣效果融合進場景，逼真光影純色背景。',
  note:'把城市與天氣狀況換成你想要的資訊。',
  prompt:`幫我產生一張垂直構圖的 3D城市氣象圖：
45°俯視等距微鏥模型，清楚顯示城市剖面
天氣效果（如☀️☁️🌧️❄️）巧妙融合進場景
逼真光影＋純色背景，簡約精緻
圖片上方顯示城市名稱+天氣訊息
城市：台灣101
天氣狀況：37°C，晴天熱` },

{ id:'mm-imac-scene', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a57.webp', ico:'🧸', title:'3D立體iMac場景公仔指令', cat:'doll', source:'瘋先生',
  desc:'極簡主義糖果色半透明iMac G3立體場景，90年代末蘋果風格桌面，Q版角色坐在鍵盤上。',
  prompt:`幫我生成3D Q版風格立體場景盒，以極簡主義為主題圖片，圖內有一台糖果色、半透明的 iMac G3 立體場景，標誌性的半圓弧造型，透明塑膠外殼內部可見彩虹色電路板細節。

螢幕顯示著90年代末蘋果風格的桌面環境：彩虹蘋果標誌的桌布、浮動的 Mac OS 9 系統圖示、復古的軌跡球滑鼠和條紋 iBook。一名Q版男性角色坐在半透明鍵盤上，臉型依附件照片轉成3D可愛頭像。

穿著科技感銀灰色機能外套，內搭黑色T恤，下身是剪裁俐落的黑色休閒運動長褲，搭配白色厚底運動鞋。頭髮為俐落的深黑色短髮，佩戴細框透明墨鏡風格眼鏡，耳上有無線耳機。配件是手腕上的智能手錶，手裡拿著一台 Newton MessagePad。周圍漂浮著發光的軟碟、彩虹螺旋電話線，以及半透明的第一代 iPod。

冰藍色磨砂底座上，用 Apple Garamond 粗體新潮字體標示 "Think Different"，背景由 iMac Bondi Blue 漸層過渡到 Tangerine（橘色）。整體強調半透明材質與螢光色彩，展現 Y2K 千禧年科技美學。` },

{ id:'mm-gameboy-room', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a58.webp', ico:'🧸', title:'GameBoy遊戲主機立體場景指令', cat:'doll', source:'瘋先生',
  desc:'極簡主義3D Gameboy場景模型，螢幕內是90年代主題房間，男孩坐在裡面玩耍，像素生物漂浮。',
  note:'把「MRMAD」換成你想要的底座文字。',
  prompt:`幫我直接生成極簡主義3D Gameboy場景模型，一台巨大的Gameboy，以經典復古風格設計。在螢幕內，是一個90年代主題的房間，裝飾有復古海報、遊戲主機，以及一台CRT電視。

一位Q版男孩坐在裡面玩耍，穿著白色帽T、咖啡色短褲、NIKE球鞋，以及龐克頭，臉型依附件照片轉成3D可愛頭像。Gameboy風格的像素生物漂浮在他身邊。

底座為黑色霧面材質，上面以無襯線銅色粗體字標示「MRMAD」。背景是由深至淺的漸層，以黑紫色調為主。整體以柔和的3D風格渲染，並結合霧面塑膠與像素美術質感，呈現懷舊90年代玩具的氛圍。` },

{ id:'mm-tamagotchi-egg', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a59.webp', ico:'🧸', title:'立體寵物蛋公仔指令', cat:'doll', source:'瘋先生',
  desc:'極簡風格3D電子雞場景模型，螢幕內是90年代電子雞主題房間，Q版時尚男孩在房間內玩遊戲。',
  note:'把「MRMAD」換成你想要的底座文字。',
  prompt:`一個極簡風格的 3D  電子雞（Tamagotchi）場景模型，巨大的電子雞以經典風格裝飾。螢幕內是一個 90 年代電子雞主題的房間，擺設有海報、遊戲主機、CRT老電視、現代筆電、平板、智慧音響。房裡坐著Q版時尚男孩：淺灰連帽外套、白T、黑運動褲、潮流運動鞋、俐落短髮，在房間內玩遊戲。周圍漂浮像素風MacBook、PS5手把、iPhone背面。下方霧黑色底座，粗體無襯線青銅字「MRMAD」。背景深淺紫藍漸層，整體呈現電競和科技氛圍。` },

{ id:'mm-round-openbox', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a60.webp', ico:'🧸', title:'開盒狀態的圓形公仔盒指令', cat:'doll', source:'瘋先生',
  desc:'以開盒狀態的圓形公仔盒為樣本，人物盡量擬真，湖水中有鴛鴦、天鵝，三個熱氣球背景。',
  prompt:`以開盒狀態的圓形公仔盒為樣本打造
角色為圖片中人物
請以圖片中人物為原形
比例同圖片中人物比例大小
服飾同圖中並盡量擬真
表情為可愛開心微笑並眨一眼
背景請以圖片為藍圖
有3個熱氣球（其中一個比例是其他的3倍大）、湖水、山脈，湖水中有鴛鴦、天鵝
人物站的盒底為淺抹茶色草皮
身上背著相機與米色斜背包
人物為半身` },

{ id:'mm-couple-egypt', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a61.webp', ico:'🧸', title:'情侶公仔搭配景點外盒指令', cat:'doll', source:'瘋先生',
  desc:'相片中人物以3D擬真方式換成兩位公仔，埃及傳統服飾配沙漠場景與金字塔、人面獅身像。',
  note:'把地點與服飾換成你們想要的旅遊主題。',
  prompt:`請將相片中的人物以3D擬真方式更換成兩位公仔人物，人物比例皆相同，服裝為埃及傳統服飾
背景更換成沙漠場景，加上埃及金字塔以、人面獅身像以及駱駝和仙人掌
公仔外盒配色為淺抹茶色搭配米色
盒底配色為沙漠綠洲有仙人掌
外盒加上 "MRMAD" 字樣` },

{ id:'mm-dead-sea-coconut', img:'https://mrmad.com.tw/wp-content/uploads/2025/04/chatgpt-doll-command-list-a62.webp', ico:'🧸', title:'擬真泡澡椰子殼公仔指令', cat:'doll', source:'瘋先生',
  desc:'3D擬真公仔飄浮在死海上，外觀為桌上的椰子殼，公仔穿著比基尼泳衣、戴墨鏡看雜誌。',
  note:'把「MRMAD」換成你想要的名字文字。',
  prompt:`用提供的相片人物設計3D擬真公仔飄浮在死海上
外觀為桌上的椰子殼
死海與公仔在椰子殼內
海岸邊有山有綠樹
死海面積佔整體2/3
公仔比例為椰子殼1/2
公仔穿著白色比基尼泳衣
短髮 戴墨鏡 手拿雜誌正在閱讀
動作與相片相似
藍天白雲的好天氣
岸邊有躺椅與其他遊客
還有兩隻可愛的柴犬與柯基犬
椰子殼外寫上公仔名字「MRMAD」` },

/* ========== 經理人：Threads 爆紅 5 組 AI 生圖指令（8組，含中英版） ========== */
{ id:'mt-tamagotchi', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/94hj-1788775212.png?w=600&output=webp', ico:'🐣', title:'專屬電子雞合照', cat:'threads', source:'經理人',
  desc:'保留原始人物照片，只在不遮擋主角的邊角加入一台由本人穿搭延伸設計的專屬電子雞。',
  note:'適合人物臉部、髮型與穿搭清楚，且畫面至少有一處留白的照片。若電子雞遮住人物，可補充：「保留上一版的電子雞設計，將機身縮小並移至不遮擋人物的角落。不得修改人物、場景及其他區域。」',
  prompt:`請以我上傳的照片為底圖，製作一張「我的專屬電子雞與本人合照」。
【保留原照】
保留照片人物的臉部特徵、表情、髮型、膚色、身形、穿搭、姿勢，以及原本的場景、構圖和長寬比例。
僅在合適的畫面邊角加入一台專屬電子雞。避免改動其他區域，不得重新美化、移動或改畫原照人物。
【電子雞的定義】
電子雞是具有實體外殼、LCD 螢幕、三顆按鍵與吊環的復古掌上電子寵物機，不是雞形玩偶，也不是平面貼圖。
【電子雞螢幕：把本人變成像素角色】
電子雞螢幕內的電子寵物，就是照片主角的 Q 版像素分身：
・保留人物最具代表性的髮型、服裝輪廓、配件與姿勢，讓人能立即看出角色對應照片中的本人。
・使用可愛、簡潔、清楚可辨的低解析度像素圖。
・採用復古灰綠色 LCD 底色與深色單色像素。
・優先呼應人物在照片中的動作。
・若人物手持重要物品，可將該物品簡化成像素道具。
・角色必須完整位於電子雞螢幕內，不得出現在外殼或原照其他位置。
【電子雞外殼：把穿搭轉化成產品設計】
根據照片中可見的服裝與配件，提取主要配色、材質、圖案、線條與裝飾元素，設計專屬機身。
把穿搭特色轉化為外殼顏色、材質、螢幕邊框、按鍵、吊環與少量裝飾，不要把人物照片直接印在外殼上。
例如：
・丹寧可轉化為靛藍色、車縫線或霧面布料紋理。
・金屬配件可轉化為鍍鉻按鍵、吊環或邊框。
・蕾絲可轉化為細緻的邊緣紋樣。
・格紋可轉化為局部外殼圖案。
・運動服裝可轉化為橡膠、碳纖維或流線裝飾。
・皮革配件可轉化為皮革質感的側邊或按鍵細節。
只採用符合這張照片的元素，不要固定套用粉色、蝴蝶結、蕾絲或任何性別化風格。
機身具有圓潤蛋形輪廓、一個清楚的螢幕、三顆實體按鍵，以及精緻吊環或短珠鏈。整體必須具有真實厚度、材質、反光、陰影與細節，像一件立體收藏玩具。
【位置與大小】
先判斷照片四個角落的可用空間，選擇最不干擾主角的位置加入電子雞。
・不得遮住人物的臉、頭髮、身體、手部、寵物或重要物品。
・以照片寬度約 25%～35% 作為起始大小，再依實際留白調整。
・不遮擋人物的重要性高於電子雞尺寸。
・若空間不足，縮小電子雞，不要移動人物或改變原照構圖。
・機身與螢幕必須完整可見。
・吊鏈可以自然延伸至畫面外。
・電子雞呈現靠近鏡頭的吊飾效果。
・光線方向、色溫、透視、景深與清晰度必須與原照協調。
・電子雞必須像真正存在於拍攝現場，不能像平面貼紙。
【完成效果】
整張圖仍是一張真實人物照片，只在合適的邊角多了一台由本人形象與穿搭延伸設計的專屬電子雞。
只有螢幕內的人物是像素風，原照人物維持攝影質感。
不要加入額外人物、多台電子雞、品牌標誌、浮水印、無意義文字或與照片無關的裝飾。
直接輸出完成圖片。` },

{ id:'mt-y2k-lowangle', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/nqsy-1788775199.png?w=600&output=webp', ico:'📸', title:'Y2K仰拍超廣角照片', cat:'threads', source:'經理人',
  desc:'不把照片當成完整底圖，而是當成人物身分與穿搭參考，重新模擬一次近距離低機位仰拍。',
  note:'需替換【請在此填入要顯示的正式文字】為你要的金句。若生成結果缺乏仰拍感，可補充：「重新生成整張照片。降低相機位置，使鏡頭位於人物下巴以下並明顯朝向天空。人物臉部與肩膀靠近鏡頭，不能將人物縮小後放在畫面底部。」',
  prompt:`請使用我上傳的照片作為「人物身分、髮型、穿搭與配件參考」，重新建構一張全新的 Y2K 仰拍超廣角人物照片。
重要：不要直接把原照片縮小、下移或貼在畫面底部，也不要只在原照片上方延伸天空。這不是擴圖或加背景任務，而是依照參考人物重新模擬一次近距離仰拍。
【使用者提供資料】
金句：［請在此填入要顯示的正式文字］
使用前必須替換中括號中的提示。成品不得出現中括號、填寫提示或其他文字。
【人物保留】
準確保留參考照片中人物可辨識的臉部特徵、髮型、髮色、膚色、服裝配色、服裝特色與主要配件。
允許為了新的仰拍構圖，重新安排人物的姿勢、身體角度、視線、手部位置、背景與透視。人物仍須明顯看得出是參考照片中的同一人。
不要把原照片當成完整背景貼入新畫面，也不要保留與新視角矛盾的原始地面、牆面或空間關係。
【相機視角】
生成 9：16 直式手機照片。
相機位於人物胸口或下巴以下，距離人物約 30～60 公分，鏡頭以約 35～50 度角明顯朝向天空。
使用相當於全片幅 14～18mm 的超廣角鏡頭，整張照片具有自然、可見但不誇張的魚眼桶狀變形。
必須清楚呈現真正的低機位仰拍特徵：
・人物臉部與上半身靠近鏡頭，占畫面下方約 35%～45%。
・人物不可被縮小後放在畫面最底端。
・靠近鏡頭的肩膀、手臂、膝蓋、手持物或其他前景略微放大。
・人物頭部後方直接連接天空。
・畫面邊緣的建築、樹木或牆面略微向外彎曲。
・背景線條向上匯聚，呈現鏡頭朝天拍攝的透視。
・地平線位於很低的位置，或完全不出現在畫面中。
・天空約占整張照片的 50%～60%。
避免俯拍、平視、遠距離全身照，以及「人物小小地放在畫面底部、上方全部補成天空」的版型。
【場景與攝影質感】
背景是自然晴朗的鮮藍天空。可以在左右邊緣出現少量白色建築、樹梢、棕櫚樹或薄雲，作為仰拍透視線索，但不要搶走人物焦點。
整體像 2000 年代以消費型數位相機或早期手機拍攝的名人隨手照：Y2K 千禧年代、2000s celebrity candid、Tumblr、early Instagram、自然日光、輕微數位相機顆粒、自信、自由、毫不費力，帶有 playful、bratty、main-character energy。
保留自然皮膚與真實照片質感，不要過度磨皮、精緻商業打光、電影感調色或攝影棚效果。
【文字】
在人物上方的藍天空間加入我提供的金句。只顯示金句本身，不顯示引號、中括號或提示文字。
根據句子長度自然分成 3～4 行，置中排列。文字不可遮住人物的臉、頭髮或身體。
使用大型 Y2K fashion editorial 風格的高對比襯線字體。中文字使用具有明顯粗細對比與三角形襯線的宋體／明體設計；英文字使用 Didone 類時尚雜誌襯線字。
文字使用高彩度暖粉紅或櫻桃紅，與藍天形成鮮明對比。
文字本身沿著魚眼鏡頭的凸球面排列：
・中央字元較大、較靠近觀者。
・左右兩側逐漸縮小並向後彎曲。
・每行基線呈現自然弧度。
・整組文字像懸浮在仰拍天空的弧形表面。
・文字與照片共用同一套超廣角視覺透視。
・扭曲必須明顯，但所有文字仍須完整、正確且容易閱讀。
【避免事項】
不要把原照片縮小後貼在畫面下方。
不要只延伸或替換原照片上方的背景。
不要使用平視或俯拍視角。
不要讓人物只占畫面底部的一小部分。
不要將魚眼效果只套用在文字上。
不要生成額外人物、動物或原照不存在的重要物件。
不要加入其他文字、Logo、Instagram UI、浮水印、邊框或裝飾圖示。
不要產生無意義文字或錯誤中文字。
直接輸出完成圖片。` },

{ id:'mt-stamp-zh', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/22e7-1788775197.png?w=600&output=webp', ico:'📮', title:'橡皮章旅行田野筆記（繁中版）', cat:'threads', source:'經理人',
  desc:'左側完整保留原始照片，右側是暖米白舊紙搭配小型手工套色橡皮章與英文打字機記錄文字。',
  note:'需替換地點、日期、起始編號欄位。適合具代表性建築、海岸、山景、街道的旅行照片。',
  prompt:`請將我上傳的每張原始照片，各自製作成一張「橡皮章旅行田野筆記海報」。
每張照片都必須獨立輸出成一張完整作品，不要將多張照片拼貼、合併或排列在同一張海報中。
【使用者提供資料】
地點或主題名稱：［請填寫；不知道可留白］
日期：［請填寫，例如 2026-09-07；僅需年份可填 2026］
起始編號：［預設為 001；多張照片依序遞增］
若另外附上風格參考圖，只參考其版面、紙張、印章與文字質感，不要把參考圖中的景物、動物、地名或日期套用到我的照片。
【整體版面】
採用 4：3 橫式構圖，左右並置，不額外繪製分隔線。
左側約占畫面寬度的 58%，放置原始照片；右側約占畫面寬度的 42%，使用暖米白色舊紙作為背景。
照片與紙張直接相接，交界乾淨自然，不使用漸層融合、撕紙邊緣或裝飾邊框。
【左側照片】
左側必須保留原始照片的攝影質感。準確維持主要人物或動物的辨識特徵，以及地形、建築、植物、物件、姿勢、空間關係、自然光影、真實材質與原有色彩氣氛。
只做克制的藝術刊物式調色，加入極細微、幾乎不易察覺的底片顆粒。
為配合版面，可以適度自然裁切，但不得拉伸、扭曲、移動、替換或重新繪製主體。
若裁切會移除主要地標、人物、動物或重要場景關係，優先保留完整內容，允許左區適度留白或自然延伸低細節背景。
【右側紙張】
使用暖米白色、略帶年代感的霧面紙張，呈現細緻紙纖維、自然紋理、輕微使用痕跡，以及柔和不均勻的紙色變化。
右側上半部保留大片未印刷的紙面。不要因為空白較多就自行加入裝飾或資訊。
【印章內容】
分析原始照片，找出最能代表這張照片的主體輪廓、結構與空間關係，將它們濃縮成一枚小型、多色套印的橡皮章圖像。
只保留足以辨認原始地點、主體與場景的必要資訊，不要逐一複製照片中的所有元素。
・代表性建築：保留最鮮明的外輪廓、屋頂、圓頂、拱門、塔樓或主要結構。
・山城聚落：將建築濃縮成少數順著地形排列的階梯狀色塊。
・海岸風景：保留山形、聚落層次、海岸線及少量斷續水紋。
・城市全景：保留主要天際線、一座代表性建築及必要遠山。
・自然景觀：保留主要山形、樹形、岸線或道路方向。
・人物或動物：保留可辨識的髮型、服裝輪廓、體態、姿勢，或動物的耳形、毛色分布與站姿；搭配少量有意義的場景線索。
・重要前景：若欄杆、坡道、樹木或門框是原照敘事的一部分，保留其簡化輪廓與前後關係。
刪除與主題無關的人群、車輛、密集窗戶、重複建築、零碎植被及裝飾性背景。若人物或車輛本身就是照片主角，則必須保留。
不得加入照片中不存在的地標、山景、植物或其他場景元素。
【印章位置與大小】
將印章放在右側紙張的中下方。印章圖像高度約占右側紙張高度的 30%～38%，寬度依圖像比例自然調整，四周保留充足留白。
不要把印章放大成滿版插畫、完整風景畫、品牌標誌或海報主視覺。
【印章配色與質感】
從原始照片提取 2～4 種代表性色彩作為專色油墨。可以使用炭黑、深綠、磚紅、赭黃、石板藍或灰褐，但必須依照片選色。
每種顏色都要像分別雕刻、上墨，再以手工蓋印到紙上，呈現：
・手工雕刻痕跡與不規則線條。
・粗細不均的線寬。
・輪廓缺口與斷裂邊緣。
・乾墨造成的局部缺色及紙色露出。
・顆粒狀油墨與不均勻按壓。
・少量局部重影。
・不同色層之間輕微、可察覺的套印錯位。
圖像應像真正刻好的橡皮章蓋在舊紙上，不是照片濾鏡、平滑向量插畫、精準線稿或數位 Logo。
【文字內容】
在印章下方或旁邊，以小型英文打字機字體排入：
［地點英文名稱或簡短英文主題］
No. ［編號］
［關鍵詞一］, ［關鍵詞二］, ［關鍵詞三］
［使用者提供的日期］
優先使用我提供的地點。若未提供而且無法可靠辨認，使用中性的英文場景主題，不要猜測城市或店名。
編號未填寫時從 001 開始，多張照片依序遞增。日期完全依照我提供的格式；未提供日期時省略日期行。
文字採低調炭黑或深褐色，靠左排列並與印章對齊。確保拼字、地名、編號和日期正確，不加入廣告口號或品牌。
【避免事項】
不要加入明顯分隔線、圓形印鑑、中式紅色印章、郵票齒孔、火漆章、貼紙拼貼、觀光紀念品模板、通用城市圖示、平滑向量 Logo、過密細節、童趣勞作感、卡通風格、3D 渲染、塑膠質感、亮面數位漸層、過度飽和、過多文字、無關標語、品牌、浮水印或裝飾雜物。
不要改畫左側原始照片，不要把右側印章做成左側照片的完整縮小複製，也不要用裝飾填滿留白。
【最終輸出】
每張原始照片各自輸出一張 4：3 橫式海報。左側是忠實的現場攝影紀錄；右側是暖米白紙張、大量留白、一枚小型手工套色橡皮章，以及低調的英文田野紀錄文字。
直接輸出完成圖片。` },

{ id:'mt-stamp-en', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/22e7-1788775197.png?w=600&output=webp', ico:'📮', title:'橡皮章旅行田野筆記（英文原版）', cat:'threads', source:'經理人',
  desc:'英文原版 Prompt，模型對英文指令的理解通常更穩定，效果可能優於中文版。',
  note:'把 {여기에 날짜를 입력해주세요} 換成你要顯示的日期。',
  prompt:`Please create a separate "Rubber Stamp Travel Field Notes Poster" for each photo I upload, outputting each photo individually without collage or multi-image combinations.
Overall, use a 4:3 landscape composition, dividing the frame into left and right regions, but without drawing an obvious dividing line.
The left side takes up about 58% of the frame, faithfully preserving the original photo. Accurately maintain the main subject identity, terrain, architecture, plants, people, spatial relationships, natural lighting and shadows, authentic textures, and the original color atmosphere; apply only restrained art publication-level photo color grading, and add extremely subtle, fine-grained film noise. For layout adaptation, natural cropping is allowed, but do not stretch, distort, shift, replace, or redraw the main subject.
The right side takes up about 42% of the frame, using a warm off-white aged paper as the background. The paper features subtle fibers, natural grain, light usage marks, and a matte texture, while preserving large areas of unprinted paper whitespace, making the blank space an essential part of the layout.
Analyze the original photo and extract the most location-distinctive subject outlines, architectural structures, terrain contours, plant forms, roads, shorelines, or other key visual relationships, compressing them into a small multi-color rubber stamp image.
Do not replicate every single element from the photo item by item. Retain only the minimal information necessary to instantly recognize the original location, subject, and scene relationships. Remove crowds, vehicles, dense windows, repetitive buildings, fragmented vegetation, decorative elements, and irrelevant backgrounds.
The stamp is positioned in the lower-middle of the right-side paper area, occupying only about 30%–38% of the right region's height, with ample whitespace preserved around it. The stamp must not be enlarged into a standard illustration, full landscape painting, or brand logo.
Determine the stamp's organization based on the original photo's composition:
- Iconic architecture: Retain the most distinctive outer contours, roofs, domes, arches, towers, or main structures.
- Mountain settlements: Compress buildings into a few terraced color blocks aligned along the terrain.
- Coastal scenery: Retain mountain contours, settlement layers, shorelines, and sparse intermittent water ripples.
- City panoramas: Retain the main skyline, one iconic building, and one or two layers of distant mountains.
- Natural landscapes: Retain primary mountain forms, trees, shorelines, or road orientations.
- Foreground occlusions: If narratively important in the original photo, retain as foreground stamp outlines.
Extract 2–4 spot inks from the original photo. Prioritize desaturated colors like carbon black, deep green, brick red, ochre yellow, slate blue, or taupe brown, but do not force a fixed palette. Preserve the most distinctive color character from the original photo, allowing only a small area of color for visual emphasis.
Render each color as a separately hand-stamped effect:
Authentic rubber stamp carving texture, hand-engraved marks, uneven line widths, contour notches, fractured edges, dry ink shortages, paper show-through, granular ink, uneven pressure, partial ghosting, and about 1–2 mm of subtle misregistration.
Allow natural misalignment between color layers; edges must not be digitally smoothed. The print should resemble a real carved stamp pressed onto aged paper, not a filtered photo, smooth vector illustration, or line-art logo.
Generate text based on the photo's location, theme, and visual imagery:
Location English name
No. Number
Three short English keywords
Gregorian calendar year
Place the text below or adjacent to the stamp in the whitespace, using a small, restrained, slightly mechanically imperfect typewriter font. The typography should evoke a traveler's field record, not an ad headline. Ensure all text is spelled accurately, without adding irrelevant slogans, brands, or decorative copy.
The overall vibe is like field notes kept by an architect, travel writer, or natural observer: quiet, restrained, tactilely real, regionally specific, with handmade imperfections and a collectible feel. The photo handles the on-site record; the stamp captures the most recognizable fragments of memory.
The date should display the date I enter: {여기에 날짜를 입력해주세요}
Avoid: Obvious central dividing lines, circular seals, Chinese red stamps, postage stamp perforations, wax seals, sticker collages, tourist souvenir templates, smooth vector logos, generic city icons, full replication of all architecture, dense detailing, childlike craftiness, cartoon style, 3D rendering, plastic textures, glossy digital gradients, oversaturation, excessive text, decorative clutter, and redrawing or altering the left-side original photo.` },

{ id:'mt-illustration-zh', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/1aqg-1788775199.png?w=600&output=webp', ico:'🖌️', title:'極簡手繪藝術出版海報（繁中版）', cat:'threads', source:'經理人',
  desc:'3:4直式畫面上下對半，上半部保留原始照片，下半部濃縮成一幅小型手繪插畫。',
  note:'適用範圍最廣：人像、寵物、食物和風景都能使用。作品文字、地點、年份、編號欄位選填。',
  prompt:`請將我上傳的每一張原始照片，分別製作成一張「極簡手繪藝術出版海報」。
每張照片都必須獨立生成並單獨輸出，不要將多張照片拼貼、合併或排列在同一張海報中。
若另外提供風格參考圖，只參考其上下版面比例、留白、紙張質感、插畫大小、筆觸及整體氣氛。不要複製參考圖中的人物、景物、地點、文字或配色。

【使用者提供資訊】
作品文字：［選填；未填寫時省略］
地點：［選填；未填寫時省略］
年份：［選填；未填寫時省略］
編號：［選填；未填寫時省略］
除上述由我提供的文字外，不要自行創作標題、地名、年份、編號、標語或其他文字。

【整體格式】
製作寬高比為 3：4 的直式海報。沿水平方向精確分成上下兩個等高區域：上半部占 50%，下半部占 50%，交界位於畫面高度中央。
上下兩區直接、乾淨相接，不加入分隔線、陰影、相框、漸層、撕紙邊緣、膠帶或裝飾邊框。人物、物件及插畫不得跨越交界。

【上半部：忠實原始照片】
保持原始照片的真實攝影質感，準確保留主體身分、臉部、髮型、比例、數量、姿勢、表情、服裝、配件、重要物件、環境、空間關係、自然光影、材質與原始色彩氣氛。
只進行非常克制的藝術刊物式調色，加入極細微底片顆粒。不可使用強烈復古濾鏡、過度褪色、高反差、電影感調色或人工銳化。
不得重新設計、拉伸、扭曲、替換或重畫主要人物、動物及重要物件。

【照片比例處理】
完整海報為 3：4，但上半部本身為 3：2 橫向區域。
・橫式原照：以最少裁切方式置入，優先保留全部主要人物、動物、地標與重要物件。
・直式或正方形原照：優先完整保留主體，向左右自然延伸天空、牆面、地面、水面、樹木或其他既有環境。
・只有不影響主體時才允許少量裁切。
・背景延伸必須符合原始透視、焦距、景深、光線方向、陰影、材質與色溫。
・不得透過壓扁、拉寬、縮短人物或改變肢體比例來填滿畫面。
若填滿畫面與完整保留主體衝突，優先保留主體，再延伸背景。

【下半部：極簡手繪紙本插畫】
使用暖白色、米白色或淡自然紙色，呈現細緻紙纖維、霧面微粗糙書封紙、淡紙色變化與少量克制的手工痕跡。
分析上半部照片，提取最具辨識度的主體輪廓、比例、髮型、服裝色塊、姿勢、動作、重要物件及核心敘事關係，重新詮釋成小型極簡手繪插畫。
若多位人物或多隻動物共同構成主題，保留正確數量、大致位置、動作方向與彼此關係。
不需要精細描繪五官，以髮型、服裝、姿勢、比例、色塊及物件關係建立辨識度。
高度簡化背景，只使用少量線條、淡色塊或乾刷痕跡暗示水面、海岸、沙地、牆面、道路、樹影、桌面或室內輪廓。不要將下半部畫成照片的完整縮小版。

【手繪材質】
使用纖細而略不規則的手繪線條、少量不透明霧面壓克力平塗色塊、克制乾刷、紙張露白、不完整輪廓、粗細不一致線條及自然不對稱邊緣。
顏料應像直接畫在粗糙書封紙上，不是光滑精準的數位插畫。

【插畫位置與大小】
整組插畫放在下半部中央偏上位置：
・高度約占下半部的 32%～45%。
・寬度約占下半部的 35%～55%。
・主體保持小巧，不放大成滿版人物。
・四周保留大量未印刷紙張。
核心概念是「一個小小的主體，被大片安靜的空白包圍」。

【配色】
從上半部照片提取最多 4 種主要插畫色彩，不包含紙張底色。優先使用主體代表色、重要物件色、環境主要色及一種深色輪廓色。
使用大膽但克制的不透明平面色塊，不加入照片中不存在的鮮豔色、彩虹色、過多漸層或大量細碎色彩。

【文字】
只有在我提供確切文字時才加入。文字放在插畫下方，以小型、低調、細字重、稍寬字距的襯線字或人文無襯線字排版。
若未提供文字，保持空白，不猜測地點、年份或文案。

【避免事項】
不要使用彩色鉛筆、蠟筆、油畫棒、暈染水彩、純線稿、複雜寫實插畫、厚重油畫、光滑數位插畫、向量 Logo、3D 渲染、塑膠質感、商業卡通、吉祥物、電商廣告、制式模板、過多裝飾、繁忙構圖、過量文字、分隔線、撕紙、膠帶或拼貼效果。

【最終輸出】
每張照片各自輸出一張 3：4 直式海報。上半部是忠實、自然的高級刊物攝影；下半部是暖白紙張、大量留白，以及從照片提煉而成的小型極簡手繪插畫。

直接輸出完成圖片。` },

{ id:'mt-illustration-en', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/1aqg-1788775199.png?w=600&output=webp', ico:'🖌️', title:'極簡手繪藝術出版海報（英文原版）', cat:'threads', source:'經理人',
  desc:'英文原版 Prompt，上半部照片、下半部手繪插畫，適用範圍最廣的一組。',
  prompt:`Create one independent high-end editorial poster for each uploaded photo. Do not combine multiple photos into a collage. Each photo must be processed and output as a separate poster.

OVERALL FORMAT
Strict 3:4 vertical composition. Divide the canvas horizontally into two exactly equal sections, with a precise 1:1 height ratio.
The top half occupies exactly 50% of the canvas.
The bottom half occupies exactly 50% of the canvas.
The two sections should feel visually connected as one refined art publication cover.

TOP HALF — ORIGINAL PHOTOGRAPH
Preserve the original photograph as faithfully as possible. Keep the main composition, subjects, identity, facial features, body proportions, poses, expressions, clothing, objects, and spatial relationships unchanged.
Preserve the realistic photographic texture, natural lighting, shadows, atmosphere, and original color mood.
Apply only subtle, sophisticated editorial color grading, creating the feeling of a premium magazine photograph, contemporary art book, or high-end independent publication.
The image should remain photorealistic and authentic, never overly retouched or artificially stylized.
If necessary to fit the 3:4 composition naturally, extend the sky, ground, walls, or surrounding environmental background. Background extension must feel seamless and photographic.
Never stretch, distort, reshape, replace, or alter the main subject.

BOTTOM HALF — MINIMAL HAND-DRAWN PAPER ILLUSTRATION
Extract the most recognizable visual elements from the original photograph and reinterpret them as a minimalist hand-drawn paper-cover illustration.
Preserve:
The most recognizable subject
Essential silhouette and proportions
Key pose or gesture
Important objects
The core narrative relationship between people and objects
Highly simplify the image. Remove unnecessary details and retain only the visual information needed for immediate recognition.
Use:
Delicate, slightly imperfect hand-drawn lines
A small number of bold, clearly defined acrylic-style flat color shapes
Rough paper texture
Visible handmade brush marks
Slightly irregular, organic edges
Subtle imperfections that make it feel genuinely handmade
The main illustrated subject should be small, centered, and carefully composed, occupying approximately 10–20% of the bottom half.
Leave a large amount of negative space around the illustration.
The background should primarily resemble:
Rough white paper
Warm off-white paper
Pale natural paper
Minimal editorial book-cover stock
Use only a few lines or small color shapes to suggest the surrounding environment.

COLOR PALETTE
Extract the dominant colors directly from the original photograph.
Compress the palette into no more than 4 main colors.
Keep the colors restrained, sophisticated, and harmonious.
Use bold but controlled flat color blocks.
Avoid excessive color variation.
Preserve subtle paper grain and handmade brush texture.
The illustration should visually feel like a simplified color interpretation of the photograph.

TYPOGRAPHY
A small amount of simple typography may be included when appropriate.
Possible elements:
A short title
Keyword
Object name
Location
Year
Number
Short phrase
Text should be minimal, understated, and editorial.
Typography should naturally interact with the large areas of negative space and the small illustration, evoking:
Art book covers
Independent publishing
Contemporary editorial design
Thoughtful children's picture books
Do not force text into the composition if it does not naturally fit the photograph.

VISUAL LANGUAGE
The final poster should feel:
Quiet · Poetic · Refined · Minimal · Innocent · Relaxed · Artistic · Thoughtful · High-recognition · Premium
The visual concept should be: "A small subject surrounded by a large amount of empty space."
The result should resemble a carefully designed independent art publication cover, rather than a commercial advertisement.

AVOID
Do not use:
Colored-pencil aesthetics
Crayon textures
Bleeding watercolor
Pure line-art illustration
Complex realistic illustration
Heavy oil-painting effects
Smooth polished digital illustration
3D rendering
Glossy 3D textures
Commercial cartoon aesthetics
Cute commercial character design
E-commerce advertising aesthetics
Generic poster templates
Excessive decorative elements
Busy compositions
Excessive typography

FINAL ART DIRECTION
The top half should feel like a beautiful, authentic editorial photograph.
The bottom half should feel like a small, handmade visual poem derived from that photograph.
The two halves should clearly belong to the same visual story, while maintaining a strong contrast between photographic realism above and minimal handmade illustration below.
Prioritize recognition, restraint, negative space, material texture, subtle imperfection, editorial sophistication, and artistic storytelling over decorative complexity.` },

{ id:'mt-vintage-poster-zh', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/gi7t-1788775199.png?w=600&output=webp', ico:'🚄', title:'復古日本觀光海報（繁中版）', cat:'threads', source:'經理人',
  desc:'重新繪製成1960～1970年代日本鐵道觀光海報平面插畫，保留原場景輪廓與透視，非套用濾鏡。',
  note:'目的地英文名稱為必填；副標題、地名景點、年份、編號可選填。若出現原照不存在的景物，可補充：「保留目前的平面印刷風格，刪除原始照片中不存在的地標、交通工具與植物。依照原照重新建立正確的建築輪廓、透視方向與前後關係。」',
  prompt:`請將我上傳的每一張原始照片，分別重新繪製成一張「復古日本鐵道觀光海報風格」的高級旅行插畫。
每張照片必須獨立生成並單獨輸出，不要將多張照片拼貼、合併或排列在同一張海報中。
若另外附上風格參考圖，只參考其平面構成、幾何造型、印刷質感、配色邏輯、字體比例與版面層級。不要複製參考圖中的車站、列車、橋梁、人物、地名、招牌或其他具體內容。

【使用者提供資料】
目的地英文名稱：［必填，例如 OSAKA、BUSAN、TAIPEI］
英文副標題：［選填］
地名景點名稱：［選填］
年份：［預設 2026］
編號：［預設 No.01］
成品中不得出現中括號、填寫提示或示例文字。只顯示我提供的文字；未填寫的選填欄位直接省略。不要自行猜測地名、翻譯或增加其他語言。

【整體格式】
製作寬高比為 3：4 的直式旅行海報。整體接近 1960～1970 年代日本國鐵與私鐵觀光海報、昭和旅行宣傳印刷品、中世紀現代主義設計及經典網版旅行海報。
這些參考只用於平面設計、印刷、色彩與排版。若原照中沒有火車、鐵軌、車站、富士山、鳥居、寺廟或日本地標，不得自行加入。
海報外圍保留約 2%～3% 的暖米白紙張邊界。

【版面比例】
・上方約占畫面高度 74%～78%，作為主要旅行插畫。
・下方約占 22%～26%，作為目的地文字及出版資訊區。
插畫與文字區屬於同一張完整海報，不加入厚重分隔線、陰影、立體框架、撕紙或拼貼效果。

【場景保留】
分析原照並找出最能代表地點的視覺結構。
必須保留主要地標外輪廓、代表性屋頂或立面、街道／鐵軌／道路／海岸線方向、主要消失點、建築及前景物件的高度關係、重要遮擋與空間層次，以及原照最具辨識度的色彩。
可以簡化密集窗戶、重複欄杆、磁磚、小紋理、相似建築、零碎植被、路人五官、車輛內部及不重要廣告。
不得改變主要地標的基本輪廓，也不得將原場景替換成另一座城市或國家。

【比例與構圖】
將原照重新組織成 3：4 直式海報。
橫式原照應優先保留地標、消失點與重要前景；可以延伸天空、道路、海面、牆面或低細節背景，只裁除不重要邊緣。
直式原照應保留原始上下關係與透視，調整天空、地標及前景比例，不得壓扁建築或人物。

【照片類型】
・建築街景：保留建築輪廓、立面節奏、道路及消失點。
・車站交通：保留鐵軌、月台、列車、屋頂、號誌、指示牌及人群關係。
・橋梁海岸：保留橋塔、跨距、海岸線、水平面及重要前景。
・山景自然：保留山形、樹木剪影、道路、岸線或步道。
・人物物件：若人物、食物、寵物或物件是主角，保留姿勢、服裝輪廓、配色、手持物及環境關係。
・人群：若只是場景元素，簡化成比例正確的幾何剪影。

【平面插畫】
不要套用照片濾鏡。請用大膽幾何形狀、硬邊剪影、簡化建築、清楚景深層次、強烈透視、大面積平塗、獨立陰影色塊及經過設計的負空間，重新構成整個場景。
天空、海水、建築及陰影均使用純色或少數色階，不使用柔和模糊陰影或數位漸層。

【配色】
整張海報使用最多 4～5 種專色油墨，不包含紙色：深海軍藍、暖米白、復古天藍或石板藍、低彩度金黃，以及朱紅。
可以保留一種原照最重要的特色專色，例如抹茶綠、海水青藍、磚紅、粉色、森林綠或沙灘赭黃，但應取代一種非必要基礎色，使總色彩仍不超過 5 種。

【網版印刷】
呈現細緻紙纖維、略不均勻的暖米白紙色、局部乾墨、紙張露白、油墨深淺差異、細微顆粒、少量磨損、輕微套色錯位及少量刮痕。
瑕疵必須自然不均，不要在全圖覆蓋一致數位噪點。

【場景文字】
大型招牌只有在是辨識地點的必要元素，而且文字能準確重現時才保留。未提供正確文字的小型招牌應簡化成無字色塊，不要生成假日文或無意義文字。

【下方排版】
第一層：目的地英文名稱
使用我提供的目的地英文名稱，全部轉為大寫，以粗重幾何復古無襯線字排版。字體接近滿寬但保留安全邊界，優先使用朱紅色。
第二層：英文副標題
放在主標題下方，使用小型大寫無襯線字、加寬字距及深海軍藍。
第三層：年份及編號
年份放在左下，編號放在右下，以較小字級和寬鬆字距形成平衡。
第四層：當地語言名稱
若有提供，可小型垂直排列在主標題右側或資訊區右上角。未提供則省略，不要自行翻譯。

【文字準確性】
所有文字必須拼字、大小寫及標點正確，完整顯示、不重複、不變形、不裁切、不受其他圖形遮擋。
只顯示目的地英文名稱、英文副標題、當地語言名稱、年份及編號。不要加入觀光口號、品牌、鐵路公司、路線、額外地名或裝飾文字。

【避免事項】
不要生成照片濾鏡效果、不同場景、原照不存在的鐵道或日本地標、制式日本符號、錯誤地名、錯誤招牌、假日文、現代數位插畫、平滑向量 Logo、漫畫、動畫、商業卡通、3D、塑膠材質、攝影寫實、柔和漸層、霓虹色、過多顏色、過度細節、繁忙版面、浮水印、社群介面、拼貼、郵票齒孔、貼紙或火漆印章。

【最終輸出】
每張照片分別輸出一張 3：4 直式復古旅行海報。上方是忠於原照地標、場景與透視的幾何平面插畫；下方是清楚克制的目的地名稱、副標題、年份及編號。

直接輸出完成圖片。` },

{ id:'mt-vintage-poster-en', img:'https://image-cdn.learnin.tw/bnextmedia/image/album/2026-09/gi7t-1788775199.png?w=600&output=webp', ico:'🚄', title:'復古日本觀光海報（英文原版）', cat:'threads', source:'經理人',
  desc:'英文原版 Prompt，1960～1970年代日本鐵道觀光海報風格，深藍／米白／金黃／朱紅配色。',
  note:'把 [LOCATION]、[SUBTITLE] 換成你的目的地英文名稱與副標題。',
  prompt:`Transform the uploaded photograph into a sophisticated vintage Japanese travel poster illustration while faithfully preserving the original scene, composition, perspective, architecture, vehicles, landmarks, and key recognizable details.

Reinterpret the photograph using bold geometric shapes, simplified architectural forms, clean hard-edged silhouettes, strong perspective lines, and elegant flat graphic design.

Style inspired by mid-century Japanese railway tourism posters, 1960s–1970s graphic design, retro Shinkansen advertising, and classic screen-printed travel posters.

Reduce photographic details into carefully designed graphic shapes without losing the identity of the original location. Preserve distinctive elements from the source photo rather than inventing a completely different scene.

Use a restrained vintage color palette dominated by deep navy blue, warm ivory / aged paper cream, muted golden yellow, and vermilion red accents. Avoid gradients, glossy effects, neon colors, and modern digital illustration aesthetics.

Add subtle screen-print texture, slightly uneven ink coverage, fine paper grain, and gentle vintage print imperfections. The result should feel authentically printed rather than digitally filtered.

Emphasize dramatic perspective and architectural geometry. Simplify people into elegant minimal silhouettes when present. Vehicles, trains, buildings, streets, signs, and structural elements should become clean graphic forms.

Leave a generous typographic area near the bottom of the composition.

Add a large bold uppercase destination title: "[LOCATION]"
Below it, add a small widely spaced subtitle: "[SUBTITLE]"
At the bottom, include subtle editorial details such as: "2026" on the left and "No.01" on the right.

Typography should feel like a refined vintage Japanese tourism publication: bold geometric sans-serif headline, generous letter spacing, carefully balanced hierarchy.

Vertical poster composition, approximately 3:4 ratio. Premium editorial design, minimalist, collectible travel print, sophisticated and timeless.

Important: Do not simply apply a poster filter to the photograph. Reconstruct the photograph as an intentional graphic illustration while maintaining the visual identity and perspective of the original scene.` },
{ id:'td20260919-photobook-1980s-portrait', img:'', ico:'📼', title:'80年代復古寫真感', cat:'photobook', source:'Threads（經 NOWnews／自由時報3C 轉載）',
  desc:'上傳一張清楚的人像照，AI把你重生成宛如1980年代拍立得攝影棚的復古寫真照，蓬鬆髮型、墊肩西裝、底片顆粒感一次到位。',
  note:'免費版ChatGPT也能用，但每天生成張數有限；先丟中文短版試試效果即可。',
  url:'https://www.nownews.com/news/6876332',
  prompt:`如果我活在80年代 會是什麼樣子？

(英文版) Using my uploaded photo, show me what I would have looked like around 1980.` },
{ id:'td20260919-physiognomy-guide-card', img:'', ico:'🔮', title:'面相分析指南資訊圖卡', cat:'physiognomy', source:'Threads @billy_nien',
  desc:'上傳一張人像照，AI生成一張雜誌感的「面相分析指南」資訊圖卡，五官逐一標註加氣質解讀，很適合發限動炫耀。',
  note:'這是Threads上原始流傳的版本；想要更完整的雷達圖或氣質評語，可以自己在後面加一句「請再加上整體氣質評語與五官能量雷達圖」。',
  url:'https://www.threads.com/@billy_nien/post/DXgiMiDlA8R',
  prompt:`請根據我上傳的人像照片，製作一張高質感中文「面相分析指南」資訊圖表。

要求：保留原人物真實五官、臉型與辨識度，不要過度修圖。整體風格乾淨、時尚、專業，像高端雜誌專欄或社群精品圖文。版面以人物肖像為主視覺，搭配細緻線條標註五官區域。

圖片內容包含：
1. 標題：「面相分析指南」
2. 副標：「從五官與輪廓看性格、氣質與發展潛力」
3. 人物臉部重點標註（額頭、眉毛、眼睛、鼻子、嘴巴、下巴、臉型，搭配簡短中文解析）` },
{ id:'td20260919-outfit-color-analysis-card', img:'', ico:'🎨', title:'個人色彩分析穿搭圖卡', cat:'outfit', source:'Threads @aiposthub',
  desc:'上傳人像照，AI幫你排出哪些服裝顏色顯氣色、哪些不適合，左右對比一目了然，像專業形象顧問報告。',
  url:'https://www.threads.com/@aiposthub/post/DXo2fRSAU0U/',
  prompt:`請根據我上傳的人像照片，製作一張高質感個人色彩分析圖卡。保留主角原本五官、膚色與臉型，透過左右或並排對比方式，展示不同服裝顏色穿在主角身上的效果，清楚區分「適合色」與「不適合色」。版面需乾淨時尚、像專業形象顧問報告，以視覺呈現為主，僅使用簡短標籤（如：推薦／普通／避免），高解析度、適合社群分享。` },
];
