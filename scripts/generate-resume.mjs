import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const outputPath = fileURLToPath(new URL('../public/resume.pdf', import.meta.url));
const pageWidth = 595.28;
const pageHeight = 841.89;
const left = 48;
const right = 48;
const contentWidth = pageWidth - left - right;
const bottom = 48;
const colors = {
  ink: [0.12, 0.17, 0.25],
  muted: [0.37, 0.43, 0.52],
  accent: [0.23, 0.38, 0.68],
  rule: [0.83, 0.87, 0.92],
  white: [1, 1, 1],
};
const links = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/suguresh-a-y-57675b22b/' },
  { label: 'GitHub', url: 'https://github.com/Suguresh7128' },
  { label: 'Portfolio', url: 'https://helpful-pithivier-0787ec.netlify.app/' },
];
const cp1252 = new Map([
  ['€', 0x80], ['‚', 0x82], ['ƒ', 0x83], ['„', 0x84], ['…', 0x85],
  ['†', 0x86], ['‡', 0x87], ['ˆ', 0x88], ['‰', 0x89], ['Š', 0x8a],
  ['‹', 0x8b], ['Œ', 0x8c], ['Ž', 0x8e], ['‘', 0x91], ['’', 0x92],
  ['“', 0x93], ['”', 0x94], ['•', 0x95], ['–', 0x96], ['—', 0x97],
  ['˜', 0x98], ['™', 0x99], ['š', 0x9a], ['›', 0x9b], ['œ', 0x9c],
  ['ž', 0x9e], ['Ÿ', 0x9f],
]);
const pages = [];

function pdfLiteral(value) {
  return [...value]
    .map((character) => {
      const code = cp1252.get(character) ?? character.codePointAt(0);
      if (code > 255) {
        throw new Error(`Unsupported character in resume: ${character}`);
      }
      if (code < 32 || code > 126) {
        return `\\${code.toString(8).padStart(3, '0')}`;
      }
      if (character === '\\' || character === '(' || character === ')') {
        return `\\${character}`;
      }
      return character;
    })
    .join('');
}

function textWidth(value, size, font) {
  let units = 0;
  for (const character of value) {
    if ('il.,:;!|'.includes(character)) units += 0.25;
    else if ('mwMW@%&'.includes(character)) units += 0.78;
    else if ('frt()[]'.includes(character)) units += 0.34;
    else if (character === ' ') units += 0.28;
    else units += font === 2 ? 0.55 : 0.51;
  }
  return units * size;
}

function wrapText(value, maxWidth, size, font) {
  const words = value.trim().split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && textWidth(candidate, size, font) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function colorCommand(color) {
  return color.map((channel) => channel.toFixed(3)).join(' ');
}

function addText(page, value, x, y, size, font = 1, color = colors.ink) {
  page.commands.push(
    `BT /F${font} ${size} Tf ${colorCommand(color)} rg 1 0 0 1 ${x.toFixed(2)} ${y.toFixed(2)} Tm (${pdfLiteral(value)}) Tj ET`,
  );
}

function addRect(page, x, y, width, height, color) {
  page.commands.push(
    `${colorCommand(color)} rg ${x.toFixed(2)} ${y.toFixed(2)} ${width.toFixed(2)} ${height.toFixed(2)} re f`,
  );
}

function addRule(page, y, color = colors.rule, width = contentWidth) {
  page.commands.push(
    `${colorCommand(color)} RG 0.7 w ${left} ${y.toFixed(2)} m ${(left + width).toFixed(2)} ${y.toFixed(2)} l S`,
  );
}

function createPage(firstPage = false) {
  const page = { commands: [], annotations: [] };
  pages.push(page);
  const headerHeight = firstPage ? 128 : 62;
  addRect(page, 0, pageHeight - headerHeight, pageWidth, headerHeight, colors.ink);

  if (firstPage) {
    addText(page, 'Suguresh A Y', left, 782, 27, 2, colors.white);
    addText(
      page,
      'Bengaluru, India  |  +91-9480639134  |  sugureshay8@gmail.com',
      left,
      758,
      9,
      1,
      [0.88, 0.91, 0.96],
    );
    let x = left;
    for (const [index, link] of links.entries()) {
      addText(page, link.label, x, 734, 9, 2, colors.white);
      const width = textWidth(link.label, 9, 2);
      page.annotations.push({
        x,
        y: 732,
        width,
        height: 13,
        url: link.url,
      });
      x += width + 18;
      if (index < links.length - 1) {
        addText(page, '|', x - 10, 734, 9, 1, [0.65, 0.72, 0.83]);
      }
    }
    page.y = 699;
  } else {
    addText(page, 'Suguresh A Y', left, 811, 13, 2, colors.white);
    addText(page, 'SOFTWARE ENGINEER  |  BENGALURU, INDIA', left, 790, 8, 1, [0.88, 0.91, 0.96]);
    page.y = 765;
  }
  return page;
}

let page = createPage(true);

function ensureSpace(height) {
  if (page.y - height < bottom) {
    page = createPage();
  }
}

function addSection(title) {
  ensureSpace(28);
  page.y -= 3;
  addText(page, title, left, page.y, 11, 2, colors.accent);
  page.y -= 5;
  addRule(page, page.y);
  page.y -= 14;
}

function addParagraph(value, options = {}) {
  const {
    size = 8.6,
    lineHeight = 11.4,
    font = 1,
    color = colors.ink,
    indent = 0,
    gapAfter = 4,
  } = options;
  const lines = wrapText(value, contentWidth - indent, size, font);
  const height = lines.length * lineHeight + gapAfter;
  ensureSpace(height);
  for (const line of lines) {
    addText(page, line, left + indent, page.y, size, font, color);
    page.y -= lineHeight;
  }
  page.y -= gapAfter;
}

function addBullet(value, options = {}) {
  const size = options.size ?? 8.2;
  const lineHeight = options.lineHeight ?? 10.7;
  const indent = 12;
  const lines = wrapText(value, contentWidth - indent, size, 1);
  const height = lines.length * lineHeight + 2;
  ensureSpace(height);
  addText(page, '•', left + 1, page.y, size, 1, colors.accent);
  for (const line of lines) {
    addText(page, line, left + indent, page.y, size, 1);
    page.y -= lineHeight;
  }
  page.y -= 2;
}

function addEntry({ name, detail, date, location, bullets = [], technologies }) {
  const block = [];
  block.push({ value: name, size: 9, font: 2, lineHeight: 12 });
  if (date) block.push({ value: date, size: 8, font: 2, lineHeight: 11 });
  if (detail) block.push({ value: detail, size: 8.2, font: 3, lineHeight: 11 });
  if (location) block.push({ value: location, size: 7.8, font: 1, lineHeight: 10, color: colors.muted });
  if (technologies) {
    for (const line of wrapText(technologies, contentWidth, 7.6, 1)) {
      block.push({ value: line, size: 7.6, font: 1, lineHeight: 10, color: colors.muted });
    }
  }
  const bulletLines = bullets.map((bullet) => wrapText(bullet, contentWidth - 12, 8.1, 1));
  const estimatedHeight = block.reduce((sum, line) => sum + line.lineHeight, 0)
    + bulletLines.reduce((sum, lines) => sum + lines.length * 10.3 + 2, 0)
    + 7;
  ensureSpace(estimatedHeight);

  for (const line of block) {
    addText(page, line.value, left, page.y, line.size, line.font, line.color ?? colors.ink);
    page.y -= line.lineHeight;
  }
  for (const [index, lines] of bulletLines.entries()) {
    addText(page, '•', left + 1, page.y, 8.1, 1, colors.accent);
    for (const line of lines) {
      addText(page, line, left + 12, page.y, 8.1, 1);
      page.y -= 10.3;
    }
    page.y -= 2;
    if (index < bulletLines.length - 1 && page.y < bottom) {
      page = createPage();
    }
  }
  page.y -= 7;
}

addSection('Professional Summary');
addParagraph(
  'Software Engineer with hands-on experience in full-stack development, backend/API development, AI/LLM integration, databases, cloud and DevOps. Experienced with Python, Java, C++, JavaScript, TypeScript, React, Node.js, FastAPI, Flask, SQL, PostgreSQL, MongoDB and Docker. Built AI-powered applications, REST APIs, real-time systems and database-driven platforms. Strong foundation in OOP, DSA, DBMS, Operating Systems, Computer Networks, software testing, debugging and CI/CD.',
  { size: 8.7, lineHeight: 12, gapAfter: 6 },
);

addSection('Technical Skills');
for (const skill of [
  'Languages: Python, Java, C, C++, JavaScript, TypeScript, SQL',
  'Frontend: HTML, CSS, React.js, Next.js, React Native, TailwindCSS, Redux, Zustand, Vite',
  'Backend: FastAPI, Flask, Node.js, Express.js, REST APIs, JSON, JWT, Async Programming',
  'Databases: PostgreSQL, MySQL, MongoDB, SQL, Joins, Subqueries, Aggregations, Database Design',
  'AI/ML: OpenAI API, LLM Integration, Prompt Engineering, AI Agents, NLP, spaCy, TensorFlow, TF-IDF, Cosine Similarity',
  'Cloud/DevOps: Docker, Git, GitHub, GitHub Actions, CI/CD, Linux, OCI, AWS Basics, Azure Basics',
  'Core: OOP, DSA, DBMS, Operating Systems, Computer Networks, SDLC, STLC, Software Testing, Debugging, Agile',
]) {
  const [label, ...rest] = skill.split(': ');
  addParagraph(`${label}: ${rest.join(': ')}`, {
    size: 8,
    lineHeight: 10.2,
    font: 1,
    gapAfter: 2,
  });
}

addSection('Experience');
addEntry({
  name: 'Zidio Development',
  detail: 'Web Development Intern',
  date: 'Apr 2025 - Jul 2025',
  location: 'Bengaluru, India',
  bullets: [
    'Developed MERN-stack web applications with secure authentication, REST APIs, database integration and Cloudinary-based file/image uploads.',
    'Built an admin dashboard and implemented validation, debugging and testing workflows for application functionality.',
    'Developed an Excel analytics application with interactive 2D/3D visualizations and AI-generated insights.',
  ],
});
addEntry({
  name: 'Rooman Technologies',
  detail: 'AI-DevOps Engineer Intern',
  date: 'Oct 2024 - Mar 2025',
  location: 'Bengaluru, India',
  bullets: [
    'Worked with Python, Flask, TensorFlow, Git and Docker for AI/ML application development and deployment workflows.',
    'Supported CI/CD automation and containerized development workflows using Git and Docker.',
    'Performed debugging, validation and testing of application and machine-learning workflows in Linux environments.',
  ],
});
addEntry({
  name: 'Bharat Intern',
  detail: 'Front-End Development Intern',
  date: 'Aug 2023 - Nov 2023',
  bullets: [
    'Developed responsive web pages using HTML, CSS and JavaScript with focus on usability and cross-device layouts.',
    'Collaborated with designers and assisted other interns with front-end development tasks.',
  ],
});

page = createPage();
addSection('Projects');
addEntry({
  name: 'SmartBasket - Grocery Price Comparison Platform',
  date: 'Remote',
  technologies: 'Next.js, React Native, Node.js, Express.js, MongoDB, Docker',
  bullets: [
    'Built a grocery comparison platform covering 9+ stores with product, outlet, pincode, pricing and availability workflows.',
    'Implemented JWT/Google authentication, bill OCR, purchase history, price optimization, alerts and analytics features.',
    'Developed web and mobile applications with a Node.js/Express backend and MongoDB database, using Docker for deployment workflows.',
  ],
});
addEntry({
  name: 'AI Brand Intelligence Agent',
  technologies: 'FastAPI, PostgreSQL, OpenAI Agent API',
  bullets: [
    'Developed an AI-agent based application using FastAPI, PostgreSQL and OpenAI Agent API.',
    'Implemented backend APIs and database integration for AI-driven application functionality.',
  ],
});
addEntry({
  name: 'AI College Admission Enquiry Chatbot',
  technologies: 'Python, Flask, spaCy, MySQL, NLP',
  bullets: [
    'Built an NLP-based admission enquiry chatbot using Python, Flask, spaCy and MySQL.',
    'Applied NLP and machine-learning techniques to automate admission-related responses; achieved 95% reported accuracy.',
  ],
});
addEntry({
  name: 'LiveLingo - Real-Time Chat Application',
  technologies: 'MERN, Socket.IO, JWT, WebSockets',
  bullets: [
    'Developed a real-time chat application using MERN with Socket.IO/WebSockets and JWT authentication.',
  ],
});

addSection('Additional Projects');
addParagraph(
  'Imagify - AI Text-to-Image SaaS: MERN, OpenAI API, authentication, image generation, gallery and REST APIs.',
  { size: 8, lineHeight: 10.5, gapAfter: 3 },
);
addParagraph(
  'Resume Screening Agent: Streamlit application using TF-IDF, cosine similarity and Groq LLM for AI-assisted resume matching.',
  { size: 8, lineHeight: 10.5, gapAfter: 3 },
);
addParagraph(
  'Smart Expense Tracker: API-based application with Swagger/OpenAPI documentation and automated Jest testing.',
  { size: 8, lineHeight: 10.5, gapAfter: 4 },
);

addSection('Education');
addEntry({
  name: 'Sir M. Visvesvaraya Institute of Technology',
  detail: 'Bachelor of Engineering - Computer Science and Engineering',
  date: '2025',
  location: 'Bengaluru, India  |  CGPA: 7.3/10',
});

addSection('Certifications');
addParagraph(
  'Oracle Generative AI Professional 2025 - Oracle Cloud Infrastructure 2025 - AWS Solutions Architecture Job Simulation 2025 - Deloitte Data Analytics Job Simulation 2025 - Tata Data Visualisation Job Simulation 2025 - Rooman AI-DevOps 2025',
  { size: 8.1, lineHeight: 11, gapAfter: 0 },
);

for (const [index, currentPage] of pages.entries()) {
  addRule(currentPage, 34);
  addText(currentPage, 'SUGURESH A Y  |  SOFTWARE ENGINEER', left, 22, 7, 2, colors.muted);
  const pageLabel = `PAGE ${index + 1} OF ${pages.length}`;
  addText(
    currentPage,
    pageLabel,
    pageWidth - right - textWidth(pageLabel, 7, 1),
    22,
    7,
    1,
    colors.muted,
  );
}

function makePdf() {
  const objects = [null];
  const addObject = (contents) => {
    objects.push(Buffer.isBuffer(contents) ? contents : Buffer.from(contents, 'ascii'));
    return objects.length - 1;
  };

  const catalogId = addObject('');
  const pagesId = addObject('');
  const regularFontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
  const boldFontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
  const italicFontId = addObject('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>');
  const pageIds = [];

  for (const currentPage of pages) {
    const stream = Buffer.from(`${currentPage.commands.join('\n')}\n`, 'ascii');
    const contentId = addObject(Buffer.concat([
      Buffer.from(`<< /Length ${stream.length} >>\nstream\n`, 'ascii'),
      stream,
      Buffer.from('endstream', 'ascii'),
    ]));
    const annotations = currentPage.annotations.map(({ x, y, width, height, url }) => (
      `<< /Type /Annot /Subtype /Link /Rect [${x.toFixed(2)} ${y.toFixed(2)} ${(x + width).toFixed(2)} ${(y + height).toFixed(2)}] /Border [0 0 0] /A << /S /URI /URI (${pdfLiteral(url)}) >> >>`
    )).join(' ');
    const annotsEntry = annotations ? ` /Annots [${annotations}]` : '';
    pageIds.push(addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${regularFontId} 0 R /F2 ${boldFontId} 0 R /F3 ${italicFontId} 0 R >> >> /Contents ${contentId} 0 R${annotsEntry} >>`,
    ));
  }

  objects[catalogId] = Buffer.from(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`, 'ascii');
  objects[pagesId] = Buffer.from(
    `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`,
    'ascii',
  );

  const chunks = [Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n', 'binary')];
  const offsets = [0];
  let fileOffset = chunks[0].length;
  for (let index = 1; index < objects.length; index += 1) {
    offsets.push(fileOffset);
    const objectBuffer = Buffer.concat([
      Buffer.from(`${index} 0 obj\n`, 'ascii'),
      objects[index],
      Buffer.from('\nendobj\n', 'ascii'),
    ]);
    chunks.push(objectBuffer);
    fileOffset += objectBuffer.length;
  }

  const xrefOffset = fileOffset;
  const xref = [
    `xref\n0 ${objects.length}\n`,
    '0000000000 65535 f \n',
    ...offsets.slice(1).map((offset) => `${String(offset).padStart(10, '0')} 00000 n \n`),
    `trailer\n<< /Size ${objects.length} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`,
  ].join('');
  chunks.push(Buffer.from(xref, 'ascii'));
  return Buffer.concat(chunks);
}

if (pages.length > 3) {
  throw new Error(`Resume content unexpectedly overflowed to ${pages.length} pages.`);
}

await writeFile(outputPath, makePdf());
console.log(`Generated ${pages.length}-page resume at ${outputPath}`);
