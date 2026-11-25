const fs = require('fs'), zlib = require('zlib');
const buf = fs.readFileSync('Reference proposal.pdf');
const s = buf.toString('latin1');
const re = /stream\r?\n/g;
let m;
const pages = [];
function decode(str) {
  // decode PDF literal string escapes
  return str.replace(/\\(\d{1,3})/g, (_, o) => String.fromCharCode(parseInt(o, 8)))
    .replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t')
    .replace(/\\(.)/g, (_, c) => c);
}
while ((m = re.exec(s))) {
  const start = m.index + m[0].length;
  const end = s.indexOf('endstream', start);
  if (end < 0) continue;
  let d;
  try { d = zlib.inflateSync(buf.subarray(start, end)).toString('latin1'); } catch (e) { continue; }
  if (!/BT[\s\S]*?ET/.test(d)) continue;
  let text = '';
  const tok = /\((?:\\.|[^\\()])*\)|<[0-9A-Fa-f\s]*>|\[|\]|TJ|Tj|T\*|TD|Td|Tf/g;
  let t;
  while ((t = tok.exec(d))) {
    const v = t[0];
    if (v[0] === '(') text += decode(v.slice(1, -1));
    else if (v[0] === '<') {
      const hex = v.slice(1, -1).replace(/\s/g, '');
      for (let i = 0; i + 3 < hex.length + 1; i += 4) {
        const code = parseInt(hex.substr(i, 4), 16);
        text += String.fromCharCode(code);
      }
    } else if (v === 'T*' || v === 'Td' || v === 'TD') text += '\n';
  }
  if (text.trim()) pages.push(text);
}
console.log(pages.join('\n===PAGE===\n').slice(0, 6000));
