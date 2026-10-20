/* 實用腳本區：可直接複製使用的小程式（Google Apps Script／瀏覽器書籤／Python／試算表公式）
   全部為自行撰寫的短程式，只用平台內建功能（Python 縮圖範例需另裝 Pillow）。
   每筆：id, ico, title, cat, tool(執行環境), desc, note(重點步驟), code(程式碼；用 String.raw 保留反斜線)
   index.html 會依 cat 補上通用的「使用方式」提醒。 */
window.SCRIPTS = [

/* ========== Google 表單／試算表（Apps Script）========== */
{ id:'sc-gas-bulk-mail', ico:'✉️', title:'依名單批次寄送個人化信件', cat:'script_gas', tool:'Google Apps Script（綁定試算表）',
  desc:'從試算表讀姓名、Email、信件內容，一封一封寄出，寄完自動在 D 欄標「已寄出」，中斷後重跑不會重複寄。',
  note:'試算表格式：A 欄姓名、B 欄 Email、C 欄信件內容、D 欄留空（程式填寫狀態），第 1 列是標題。改掉程式最上面的主旨。一般 Gmail 帳號每天寄信量有上限（約 100 封），名單多的話分天寄。',
  code:String.raw`function sendPersonalizedEmails() {
  const SUBJECT = '【通知】請改成你的信件主旨';
  const sheet = SpreadsheetApp.getActiveSheet();
  const rows = sheet.getDataRange().getValues();
  let sent = 0;
  for (let i = 1; i < rows.length; i++) {
    const name = rows[i][0], email = rows[i][1], message = rows[i][2], status = rows[i][3];
    if (!email || status === '已寄出') continue;
    try {
      MailApp.sendEmail({
        to: email,
        subject: SUBJECT,
        body: name + ' 您好：\n\n' + message + '\n\n以上，謝謝。'
      });
      sheet.getRange(i + 1, 4).setValue('已寄出');
      sent++;
    } catch (e) {
      sheet.getRange(i + 1, 4).setValue('失敗：' + e.message);
    }
  }
  try { SpreadsheetApp.getUi().alert('完成，本次寄出 ' + sent + ' 封'); }
  catch (e) { Logger.log('完成，本次寄出 ' + sent + ' 封'); }
}` },
{ id:'sc-gas-form-confirm', ico:'📨', title:'表單送出後自動寄確認信', cat:'script_gas', tool:'Google Apps Script（表單回覆試算表）',
  desc:'有人填完 Google 表單，馬上自動寄一封「已收到」的確認信給對方，報名、請假、訂購都能用。',
  note:'表單要有一題叫「姓名」、一題叫「Email」（題目文字要和程式裡一致，可自行修改）。貼上後到 Apps Script 左側「觸發條件」新增：函式選 onFormSubmit、事件來源選「試算表」、事件類型選「提交表單時」。',
  code:String.raw`function onFormSubmit(e) {
  const answers = e.namedValues;   // 例：{ '姓名': ['王小明'], 'Email': ['a@b.com'] }
  const name = (answers['姓名'] || [''])[0];
  const email = (answers['Email'] || [''])[0];
  if (!email) return;
  MailApp.sendEmail({
    to: email,
    subject: '已收到你的報名／回覆',
    body: name + ' 您好：\n\n我們已收到你的表單，會盡快處理。\n\n（此為系統自動寄出，請勿直接回覆）'
  });
}` },
{ id:'sc-gas-dup-highlight', ico:'🟨', title:'標示重複資料（黃色底色）', cat:'script_gas', tool:'Google Apps Script（綁定試算表）',
  desc:'把某一欄裡重複出現的內容（重複報名、重複學號、重複 Email）自動標成黃色，一眼找出來。',
  note:'預設檢查 B 欄，要改欄位就改 COL（A=1、B=2、C=3…）。只標色、不會刪資料，可放心執行；想清除顏色手動把儲存格填回無色即可。',
  code:String.raw`function highlightDuplicates() {
  const COL = 2;   // 要檢查的欄位：A=1、B=2、C=3…
  const sheet = SpreadsheetApp.getActiveSheet();
  const last = sheet.getLastRow();
  if (last < 2) return;
  const range = sheet.getRange(2, COL, last - 1, 1);
  const values = range.getValues().map(function (r) { return String(r[0]).trim(); });
  const count = {};
  values.forEach(function (v) { if (v) count[v] = (count[v] || 0) + 1; });
  const colors = values.map(function (v) { return [v && count[v] > 1 ? '#fff2a8' : null]; });
  range.setBackgrounds(colors);
}` },
{ id:'sc-gas-random-groups', ico:'🎲', title:'名單隨機分組', cat:'script_gas', tool:'Google Apps Script（綁定試算表）',
  desc:'把 A 欄名單隨機洗牌後分組，組別與姓名寫到 C、D 欄；人數不整除時各組人數會自動盡量平均，不會剩下一個人落單。',
  note:'A 欄第 1 列是標題、第 2 列起放姓名。改 GROUP_SIZE 決定每組大約幾人。每次執行都會重新抽籤並覆蓋 C、D 欄。',
  code:String.raw`function randomGroups() {
  const GROUP_SIZE = 4;   // 每組大約幾人
  const sheet = SpreadsheetApp.getActiveSheet();
  const last = sheet.getLastRow();
  if (last < 2) return;
  const names = sheet.getRange(2, 1, last - 1, 1).getValues()
    .map(function (r) { return r[0]; }).filter(String);
  for (let i = names.length - 1; i > 0; i--) {   // Fisher-Yates 洗牌
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = names[i]; names[i] = names[j]; names[j] = tmp;
  }
  const groupCount = Math.max(1, Math.round(names.length / GROUP_SIZE));
  const out = names.map(function (n, i) { return [i % groupCount + 1, n]; });
  out.sort(function (a, b) { return a[0] - b[0]; });
  const rows = out.map(function (r) { return ['第 ' + r[0] + ' 組', r[1]]; });
  sheet.getRange(1, 3, 1, 2).setValues([['組別', '姓名']]);
  sheet.getRange(2, 3, Math.max(sheet.getMaxRows() - 1, 1), 2).clearContent();
  sheet.getRange(2, 3, rows.length, 2).setValues(rows);
}` },
{ id:'sc-gas-student-folders', ico:'📁', title:'依名單一次建立學生資料夾', cat:'script_gas', tool:'Google Apps Script（綁定試算表）',
  desc:'讀 A 欄名單，在 Google 雲端硬碟自動建立「學生作業資料夾」，裡面每個人一個子資料夾；已存在的不會重複建立。',
  note:'A 欄第 1 列是標題、第 2 列起放姓名。第一次執行會要求雲端硬碟授權。資料夾名稱可改 PARENT_FOLDER_NAME。之後可用共用設定把各資料夾分享給對應的人。',
  code:String.raw`function createFolders() {
  const PARENT_FOLDER_NAME = '學生作業資料夾';
  const sheet = SpreadsheetApp.getActiveSheet();
  const last = sheet.getLastRow();
  if (last < 2) return;
  const names = sheet.getRange(2, 1, last - 1, 1).getValues()
    .map(function (r) { return String(r[0]).trim(); }).filter(String);
  const found = DriveApp.getFoldersByName(PARENT_FOLDER_NAME);
  const parent = found.hasNext() ? found.next() : DriveApp.createFolder(PARENT_FOLDER_NAME);
  let created = 0;
  names.forEach(function (name) {
    if (!parent.getFoldersByName(name).hasNext()) {
      parent.createFolder(name);
      created++;
    }
  });
  Logger.log('新增 ' + created + ' 個資料夾（共 ' + names.length + ' 位）');
}` },

/* ========== 瀏覽器書籤小工具 ========== */
{ id:'sc-bm-wordcount', ico:'🔢', title:'一鍵統計字數（選取範圍或整頁）', cat:'script_web', tool:'瀏覽器書籤（Chrome／Safari／Edge）',
  desc:'在任何網頁點一下書籤，就跳出中文字數、英文單字數與總字元數；有先反白選取文字就只算選取的部分。',
  note:'整段（包含最前面的 javascript:）都要複製。適合檢查作文、文章、貼文長度。',
  code:String.raw`javascript:(function(){var sel=String(window.getSelection());var t=sel||document.body.innerText;var cjk=(t.match(/[一-鿿㐀-䶿]/g)||[]).length;var words=(t.replace(/[一-鿿㐀-䶿]/g,' ').match(/[A-Za-z0-9'’-]+/g)||[]).length;alert((sel?'選取範圍':'整個頁面')+'\n中文字：'+cjk+'\n英文單字：'+words+'\n總字元（含空白）：'+t.length);})();` },
{ id:'sc-bm-reader', ico:'📖', title:'一鍵護眼閱讀模式（再點一次還原）', cat:'script_web', tool:'瀏覽器書籤（Chrome／Safari／Edge）',
  desc:'把雜亂的網頁變成米色底、大字、窄欄寬的閱讀版面，並隱藏側欄與廣告區；再點一次就恢復原樣。',
  note:'是用樣式覆蓋的簡易做法，不同網站效果不同；遇到版面怪掉，再點一次書籤就還原。',
  code:String.raw`javascript:(function(){var s=document.getElementById('__readmode');if(s){s.remove();return;}s=document.createElement('style');s.id='__readmode';s.textContent='body{background:#f6f0e1!important;color:#2b2b2b!important;max-width:760px!important;margin:0 auto!important;padding:24px!important;font-size:20px!important;line-height:1.9!important}body *{background-color:transparent!important;color:inherit!important;max-width:100%!important}img,video{max-width:100%!important;height:auto!important}nav,aside,footer,header,[class*=sidebar],[class*=banner],[class*=ad-]{display:none!important}';document.head.appendChild(s);})();` },
{ id:'sc-bm-links', ico:'🔗', title:'一鍵複製網頁所有連結（標題＋網址）', cat:'script_web', tool:'瀏覽器書籤（Chrome／Safari／Edge）',
  desc:'把目前網頁上所有外部連結整理成「標題 Tab 網址」，一鍵放進剪貼簿，直接貼到試算表就是兩欄，蒐集教學資源或參考文章很方便。',
  note:'會自動去掉重複網址。若瀏覽器不允許寫入剪貼簿，會改跳出視窗讓你手動複製。',
  code:String.raw`javascript:(function(){var seen={},out=[];document.querySelectorAll('a[href^=http]').forEach(function(a){var u=a.href,t=(a.textContent||'').trim().replace(/\s+/g,' ');if(t&&!seen[u]){seen[u]=1;out.push(t+'\t'+u);}});var s=out.join('\n');(navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).then(function(){alert('已複製 '+out.length+' 個連結（可直接貼到試算表）')}).catch(function(){prompt('複製失敗，請手動全選複製：',s.slice(0,5000))});})();` },

/* ========== 電腦檔案批次處理（Python）========== */
{ id:'sc-py-rename', ico:'🏷️', title:'批次重新命名檔案（預設只預覽）', cat:'script_py', tool:'Python 3（終端機）',
  desc:'把資料夾裡的檔案依序改成「前綴_001、前綴_002…」，保留副檔名。預設只列出會怎麼改名，確認沒問題才加 --run 真的執行。',
  note:'用法：python rename.py 資料夾路徑 前綴；確認預覽正確後再加 --run。不會處理子資料夾，也會略過隱藏檔。',
  code:String.raw`"""批次重新命名：把資料夾內的檔案改成「前綴_001.副檔名」。
用法：python rename.py 資料夾路徑 前綴          （只預覽，不會真的改名）
      python rename.py 資料夾路徑 前綴 --run    （確認沒問題後才加 --run）
"""
import sys
from pathlib import Path


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        return
    folder, prefix = Path(sys.argv[1]), sys.argv[2]
    run = '--run' in sys.argv
    files = sorted(p for p in folder.iterdir() if p.is_file() and not p.name.startswith('.'))
    plan = [(p, p.with_name(prefix + '_' + format(i, '03d') + p.suffix.lower()))
            for i, p in enumerate(files, 1)]
    for old, new in plan:
        print(old.name + '  ->  ' + new.name)
    if not run:
        print('\n以上只是預覽。確認沒問題後加上 --run 才會真的改名。')
        return
    olds = [o for o, _ in plan]
    if any(new.exists() and new not in olds for _, new in plan):
        print('有目標檔名已存在（不在這次要改名的檔案裡），已停止。')
        return
    tmp = []   # 先改成暫時檔名，避免新舊名稱互相衝突
    for old, new in plan:
        t = old.with_name(old.name + '.tmp_rename')
        old.rename(t)
        tmp.append((t, new))
    for t, new in tmp:
        t.rename(new)
    print('完成，共改名 ' + str(len(plan)) + ' 個檔案。')


main()` },
{ id:'sc-py-merge-csv', ico:'🧩', title:'合併資料夾內所有 CSV 成一個檔', cat:'script_py', tool:'Python 3（終端機）',
  desc:'把資料夾裡欄位相同的多個 CSV（例如各班成績、各月銷售）合併成 merged.csv，並多一欄記錄每列來自哪個檔案。',
  note:'用法：python merge_csv.py 資料夾路徑。欄位和第一個檔案不同的檔案會略過並提示。輸出檔用 UTF-8（含 BOM），Excel 直接開不會亂碼。',
  code:String.raw`"""合併資料夾內所有 CSV（欄位需相同）成 merged.csv，並多加一欄「來源檔名」。
用法：python merge_csv.py 資料夾路徑
"""
import csv
import sys
from pathlib import Path

folder = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('.')
files = sorted(p for p in folder.glob('*.csv') if p.name != 'merged.csv')
if not files:
    sys.exit('資料夾內找不到 CSV 檔')

header = None
rows_out = []
for f in files:
    with open(f, newline='', encoding='utf-8-sig') as fh:
        reader = csv.reader(fh)
        head = next(reader, None)
        if head is None:
            continue
        if header is None:
            header = head
        elif head != header:
            print('略過 ' + f.name + '：欄位和第一個檔案不同')
            continue
        rows_out.extend(r + [f.name] for r in reader)

if header is None:
    sys.exit('沒有可以合併的資料')
with open(folder / 'merged.csv', 'w', newline='', encoding='utf-8-sig') as out:
    w = csv.writer(out)
    w.writerow(header + ['來源檔名'])
    w.writerows(rows_out)
print('完成：合併 ' + str(len(rows_out)) + ' 列 -> ' + str(folder / 'merged.csv'))` },
{ id:'sc-py-resize-images', ico:'🖼️', title:'批次縮小圖片（作業照片／商品圖）', cat:'script_py', tool:'Python 3＋Pillow（需先 pip install pillow）',
  desc:'把整個資料夾的照片等比例縮小並壓縮，存到 resized 子資料夾，原圖不動；手機拍的照片會依拍攝方向自動轉正。',
  note:'用法：python resize_images.py 圖片資料夾 [最長邊像素，預設 1600] [品質，預設 85]。支援 jpg／png／webp，webp 會轉成 jpg 輸出。同名不同副檔名的圖會互相覆蓋，請先確認檔名不重複。',
  code:String.raw`"""批次縮小圖片。需先安裝：pip install pillow
用法：python resize_images.py 圖片資料夾 [最長邊像素=1600] [品質=85]
結果存到「圖片資料夾/resized」，不會動到原圖。
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps

folder = Path(sys.argv[1])
max_side = int(sys.argv[2]) if len(sys.argv) > 2 else 1600
quality = int(sys.argv[3]) if len(sys.argv) > 3 else 85
out_dir = folder / 'resized'
out_dir.mkdir(exist_ok=True)

count = 0
for p in sorted(folder.iterdir()):
    if p.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'}:
        continue
    with Image.open(p) as im:
        im = ImageOps.exif_transpose(im)     # 依拍攝方向轉正
        im.thumbnail((max_side, max_side))   # 等比例縮小，不會放大
        if p.suffix.lower() == '.png':
            im.save(out_dir / (p.stem + '.png'), optimize=True)
        else:
            im.convert('RGB').save(out_dir / (p.stem + '.jpg'), quality=quality, optimize=True)
    count += 1
print('完成：處理 ' + str(count) + ' 張 -> ' + str(out_dir))` },

/* ========== 試算表公式（Excel／Google 試算表通用）========== */
{ id:'sc-xls-grade', ico:'💯', title:'成績等第、排名與統計公式', cat:'script_xls', tool:'Excel／Google 試算表',
  desc:'分數欄一貼就能算：等第、班級排名、百分等級，以及平均、最高、最低、及格人數。',
  note:'假設分數在 B2:B50。貼到各欄第 2 列後往下拖曳複製。等第的分界（90/80/70/60）可自行修改。IFS 需要 Excel 2019 以上或 Google 試算表。',
  code:String.raw`【等第】（C2，往下複製）
=IF(B2="","",IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",B2>=60,"D",TRUE,"不及格"))

【班級排名】（D2，分數越高名次越前面）
=IF(B2="","",RANK(B2,$B$2:$B$50,0))

【百分等級：贏過百分之幾的同學】（E2）
=IF(B2="","",ROUND(PERCENTRANK($B$2:$B$50,B2)*100,0))

【統計】（任一空白儲存格）
平均：=AVERAGE(B2:B50)
最高：=MAX(B2:B50)
最低：=MIN(B2:B50)
及格人數：=COUNTIF(B2:B50,">=60")
不及格人數：=COUNTIF(B2:B50,"<60")` },
{ id:'sc-xls-clean', ico:'🧹', title:'名單資料整理常用公式', cat:'script_xls', tool:'Excel／Google 試算表',
  desc:'清空白、標重複、檢查 Email、依姓名查分數、每 4 人一組編號——整理報名表與名單最常用的幾條公式。',
  note:'欄位位置請換成你自己的。標重複的公式只會標「第二次以後」出現的那一筆，第一筆不標，方便你保留第一筆、刪掉後面的。',
  code:String.raw`【清掉前後與多餘空白】
=TRIM(A2)

【標示重複（第二次以後出現才標）】
=IF(COUNTIF($A$2:A2,A2)>1,"重複","")

【Email 簡單檢查】
=IF(ISNUMBER(SEARCH("@",A2)),IF(ISNUMBER(SEARCH(".",A2,SEARCH("@",A2))),"OK","缺少網域"),"缺少@")

【依姓名查出分數】（姓名在 E2，對照表在 A2:B100）
=IFERROR(VLOOKUP(E2,$A$2:$B$100,2,FALSE),"查無資料")

【每 4 人一組的組別編號】（資料從第 2 列開始）
=ROUNDUP((ROW()-1)/4,0)` }
];
