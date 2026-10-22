const STORAGE_KEYS = {
  tasks: "daylight.tasks",
  links: "daylight.links",
  name: "daylight.name",
  theme: "daylight.theme",
  language: "daylight.language"
};

const DEFAULT_LINKS = [
  { id: "google", name: "Google", url: "https://www.google.com/" },
  { id: "youtube", name: "YouTube", url: "https://www.youtube.com/" },
  { id: "spotify", name: "Spotify", url: "https://open.spotify.com/" }
];

const QUOTE_API_URL = "https://quotes.liupurnomo.com/api/quotes/random";
const QUOTE_STORAGE_KEY = "daylight.quoteOfTheDay";
const TRANSLATIONS = {
  en: {
    pageTitle: "Daylight — your daily dashboard",
    brandHome: "Daylight home",
    dashboard: "Daily dashboard",
    switchLanguage: "Switch language to Indonesian",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    friend: "friend",
    welcomeMessage: "A little progress each day adds up.",
    yourName: "Your name",
    focusEyebrow: "MAKE SPACE TO THINK",
    focusTitle: "Focus session",
    oneThing: "One thing at a time.",
    startFocus: "Start focus",
    stopSession: "Stop session",
    reset: "Reset",
    sessionLength: "Session length",
    minutes: "min",
    set: "Set",
    tasksEyebrow: "CLEAR YOUR MIND",
    tasksTitle: "Today's tasks",
    sortTasks: "Sort tasks",
    myOrder: "My order",
    todoFirst: "To-do first",
    alphabetical: "A to Z",
    addTask: "Add a task",
    taskPlaceholder: "What needs doing?",
    yourTasks: "Your tasks",
    emptyTasks: "Your list is clear. Add a task to get started.",
    favoritesEyebrow: "YOUR FAVORITES",
    quickLinks: "Quick links",
    favoriteWebsites: "Favorite websites",
    addFavorite: "Add a favorite",
    linkNamePlaceholder: "Name (e.g. YouTube)",
    addLink: "Add link",
    quoteOfDay: "Quote of the day",
    storageNote: "Your data stays on this device.",
    footer: "Crafted with coffee & code by Wannn21-ai",
    loadingQuote: "Loading today's quote…",
    fallbackQuote: "Small steps still move you forward.",
    savedReadError: "Saved data could not be read. Changes may not persist.",
    savedWriteError: "Could not save changes. Check your browser storage settings.",
    markNotDone: "Mark as not done",
    markDone: "Mark as done",
    edit: "Edit",
    delete: "Delete",
    editTask: "Edit task",
    emptyTaskError: "A task can't be empty.",
    duplicateTask: "That task is already on your list.",
    openInNewTab: "Open {name} in a new tab",
    removeLink: "Remove {name}",
    invalidUrl: "Enter a valid website address.",
    invalidProtocol: "Links must use http or https.",
    duplicateLink: "That website is already saved.",
    startAgain: "Stopped. Start again when you're ready.",
    timerRunning: "You're doing great. Stay with it.",
    timerComplete: "Session complete. Take a well-earned break.",
    focusCompleteToast: "Focus session complete. Nice work!",
    durationError: "Choose a session length from 1 to 180 minutes."
  },
  id: {
    pageTitle: "Daylight — dasbor harianmu",
    brandHome: "Beranda Daylight",
    dashboard: "Dasbor harian",
    switchLanguage: "Ganti bahasa ke Inggris",
    switchToDark: "Ganti ke mode gelap",
    switchToLight: "Ganti ke mode terang",
    morning: "Selamat pagi",
    afternoon: "Selamat siang",
    evening: "Selamat malam",
    friend: "teman",
    welcomeMessage: "Sedikit kemajuan setiap hari akan berarti.",
    yourName: "Namamu",
    focusEyebrow: "SISAKAN RUANG UNTUK BERPIKIR",
    focusTitle: "Sesi fokus",
    oneThing: "Satu hal pada satu waktu.",
    startFocus: "Mulai fokus",
    stopSession: "Hentikan sesi",
    reset: "Atur ulang",
    sessionLength: "Durasi sesi",
    minutes: "mnt",
    set: "Atur",
    tasksEyebrow: "JERNIHKAN PIKIRANMU",
    tasksTitle: "Tugas hari ini",
    sortTasks: "Urutkan tugas",
    myOrder: "Urutan saya",
    todoFirst: "Belum selesai dulu",
    alphabetical: "A sampai Z",
    addTask: "Tambah tugas",
    taskPlaceholder: "Apa yang perlu dilakukan?",
    yourTasks: "Daftar tugasmu",
    emptyTasks: "Daftarmu masih kosong. Tambahkan tugas untuk memulai.",
    favoritesEyebrow: "FAVORITMU",
    quickLinks: "Tautan cepat",
    favoriteWebsites: "Situs favorit",
    addFavorite: "Tambah favorit",
    linkNamePlaceholder: "Nama (mis. YouTube)",
    addLink: "Tambah tautan",
    quoteOfDay: "Kutipan hari ini",
    storageNote: "Datamu tersimpan di perangkat ini.",
    footer: "Hasil racikan kopi & Kode oleh Wannn21-ai",
    loadingQuote: "Memuat kutipan hari ini…",
    fallbackQuote: "Langkah kecil tetap membawamu maju.",
    savedReadError: "Data tersimpan tidak dapat dibaca. Perubahan mungkin tidak tersimpan.",
    savedWriteError: "Perubahan tidak dapat disimpan. Periksa pengaturan penyimpanan browser.",
    markNotDone: "Tandai belum selesai",
    markDone: "Tandai selesai",
    edit: "Edit",
    delete: "Hapus",
    editTask: "Edit tugas",
    emptyTaskError: "Tugas tidak boleh kosong.",
    duplicateTask: "Tugas itu sudah ada di daftarmu.",
    openInNewTab: "Buka {name} di tab baru",
    removeLink: "Hapus tautan {name}",
    invalidUrl: "Masukkan alamat situs yang valid.",
    invalidProtocol: "Tautan harus menggunakan http atau https.",
    duplicateLink: "Situs itu sudah disimpan.",
    startAgain: "Dihentikan. Mulai lagi saat kamu siap.",
    timerRunning: "Kamu hebat. Teruskan fokusmu.",
    timerComplete: "Sesi selesai. Saatnya beristirahat sejenak.",
    focusCompleteToast: "Sesi fokus selesai. Kerja bagus!",
    durationError: "Pilih durasi sesi antara 1 sampai 180 menit."
  }
};

const BRAND_ICONS = {
  google: '<svg viewBox="0 0 48 48" focusable="false"><path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15z"/><path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20 20 0 0 0 24 44z"/><path fill="#FBBC05" d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.2H5.8a20 20 0 0 0 0 17.6z"/><path fill="#EA4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6 29.5 4 24 4A20 20 0 0 0 5.8 15.2l6.8 5.2C14.2 15.6 18.7 12 24 12z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" focusable="false"><path fill="#FF0033" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z"/><path fill="#fff" d="m9.6 15.8 6.2-3.8-6.2-3.8z"/></svg>',
  spotify: '<svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M5.2 9c4.8-1.5 10.5-1 14.1 1.2M6.1 12.1c4-1.2 8.7-.8 11.8 1.1m-10.8 2c3.3-1 6.9-.6 9.5.9" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5"/></svg>'
};

const $ = (selector) => document.querySelector(selector);
const taskList = $("#taskList");
const linkList = $("#linkList");
const toast = $("#toast");

let currentLanguage = "en";
let tasks = readStorage(STORAGE_KEYS.tasks, []);
let links = readStorage(STORAGE_KEYS.links, DEFAULT_LINKS);
let toastTimeout;
let timerInterval = null;
let timerDuration = 25 * 60;
let timerRemaining = timerDuration;
let timerEndAt = null;
let timerStatusKey = "oneThing";

function t(key, replacements = {}) {
  let text = TRANSLATIONS[currentLanguage][key];
  Object.entries(replacements).forEach(([name, value]) => {
    text = text.replace(`{${name}}`, value);
  });
  return text;
}

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored);
  } catch (error) {
    console.error(`Could not read ${key} from local storage.`, error);
    showToast(t("savedReadError"));
    return fallback;
  }
}

function readStorageItem(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`Could not read ${key} from local storage.`, error);
    showToast(t("savedReadError"));
    return null;
  }
}

currentLanguage = readStorage(STORAGE_KEYS.language, "en") === "id" ? "id" : "en";

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Could not save ${key} to local storage.`, error);
    showToast(t("savedWriteError"));
    return false;
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  $("#languageToggle").textContent = currentLanguage === "en" ? "ID" : "EN";
  $("#languageToggle").setAttribute("aria-label", t("switchLanguage"));
  themeToggle.setAttribute("aria-label", document.body.classList.contains("dark")
    ? t("switchToLight")
    : t("switchToDark"));
  renderTasks();
  renderLinks();
  renderTimer();
  updateClock();
  if ($("#quote-author").textContent === "— Daylight") {
    renderQuote(getFallbackQuote());
  }
}

function getFallbackQuote() {
  return {
    quote: t("fallbackQuote"),
    author: "Daylight"
  };
}

function safeTasks(value) {
  return Array.isArray(value)
    ? value.filter((task) =>
      task &&
      typeof task.id === "string" &&
      typeof task.title === "string" &&
      typeof task.done === "boolean" &&
      Number.isFinite(task.createdAt)
    )
    : [];
}

function safeLinks(value) {
  if (!Array.isArray(value)) return DEFAULT_LINKS;

  return value.filter((link) => {
    if (!link || typeof link.id !== "string" || typeof link.name !== "string" || typeof link.url !== "string") {
      return false;
    }

    try {
      const parsed = new URL(link.url);
      return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
      return false;
    }
  });
}

tasks = safeTasks(tasks);
links = safeLinks(links);

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = t(hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening");
  const name = readStorageItem(STORAGE_KEYS.name)?.trim() || t("friend");
  const locale = currentLanguage === "id" ? "id-ID" : "en-US";

  $("#greeting").firstChild.textContent = greeting;
  $("#greetingName").textContent = name;
  $("#currentDate").textContent = new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(now);
  $("#currentTime").textContent = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit"
  }).format(now);
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function renderQuote(quote) {
  $("#quote-text").textContent = quote.quote;
  $("#quote-author").textContent = `— ${quote.author}`;
}

$("#quote-text").textContent = t("loadingQuote");

function parseQuoteResponse(payload) {
  const responseData = payload?.data ?? payload;
  const result = Array.isArray(responseData) ? responseData[0] : responseData;
  const quote = result?.quote ?? result?.text ?? result?.content;
  const author = result?.author ?? result?.by;

  if (typeof quote !== "string" || !quote.trim() || typeof author !== "string" || !author.trim()) {
    throw new Error("Quote API returned an unsupported response.");
  }

  return { quote: quote.trim(), author: author.trim() };
}

async function loadDailyQuote() {
  const today = getLocalDateKey();
  const cached = readStorage(QUOTE_STORAGE_KEY, null);

  if (cached?.date === today) {
    const quote = typeof cached.quote === "string" && typeof cached.author === "string"
      ? { quote: cached.quote, author: cached.author }
      : getFallbackQuote();
    renderQuote(quote.author === "Daylight" ? getFallbackQuote() : quote);
    return;
  }

  let quote;
  try {
    const response = await fetch(QUOTE_API_URL, {
      headers: { Accept: "application/json" },
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error(`Quote API request failed with status ${response.status}.`);
    }
    quote = parseQuoteResponse(await response.json());
  } catch (error) {
    console.error("Could not load today's quote.", error);
    quote = getFallbackQuote();
  }

  renderQuote(quote);
  saveStorage(QUOTE_STORAGE_KEY, {
    date: today,
    quote: quote.quote,
    author: quote.author
  });
}

const nameInput = $("#nameInput");
nameInput.value = readStorageItem(STORAGE_KEYS.name) || "";
nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim().slice(0, 32);
  if (saveStorage(STORAGE_KEYS.name, name)) updateClock();
});

updateClock();
window.setInterval(updateClock, 30_000);
document.addEventListener("DOMContentLoaded", loadDailyQuote, { once: true });

function updateTaskCount() {
  const remaining = tasks.filter((task) => !task.done).length;
  $("#taskCount").textContent = String(remaining);
}

function renderTasks() {
  const sortMode = $("#taskSort").value;
  const sortedTasks = [...tasks];

  if (sortMode === "active") {
    sortedTasks.sort((a, b) => Number(a.done) - Number(b.done) || a.createdAt - b.createdAt);
  } else if (sortMode === "alphabetical") {
    sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    sortedTasks.sort((a, b) => a.createdAt - b.createdAt);
  }

  taskList.replaceChildren();
  $("#emptyTasks").hidden = sortedTasks.length > 0;
  $("#emptyTasks").textContent = t("emptyTasks");
  sortedTasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-row${task.done ? " is-done" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-check";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", `${t(task.done ? "markNotDone" : "markDone")}: ${task.title}`);
    checkbox.addEventListener("change", () => {
      tasks = tasks.map((entry) => entry.id === task.id ? { ...entry, done: checkbox.checked } : entry);
      persistTasks();
    });

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title;

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.className = "task-action";
    editButton.textContent = "✎";
    editButton.setAttribute("aria-label", `${t("edit")} ${task.title}`);
    editButton.addEventListener("click", () => startEditingTask(item, task));

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "task-action";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", `${t("delete")} ${task.title}`);
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter((entry) => entry.id !== task.id);
      persistTasks();
    });

    actions.append(editButton, deleteButton);
    item.append(checkbox, title, actions);
    taskList.append(item);
  });

  updateTaskCount();
}

function startEditingTask(item, task) {
  const title = item.querySelector(".task-title");
  const actions = item.querySelector(".task-actions");
  const input = document.createElement("input");
  input.className = "task-edit-input";
  input.type = "text";
  input.maxLength = 120;
  input.value = task.title;
  input.setAttribute("aria-label", t("editTask"));

  let resolved = false;
  const finishEditing = (shouldSave) => {
    if (resolved) return;

    if (!shouldSave) {
      resolved = true;
      renderTasks();
      return;
    }

    const nextTitle = input.value.trim();
    if (!nextTitle) {
      showToast(t("emptyTaskError"));
      resolved = true;
      renderTasks();
      return;
    }

    if (tasks.some((entry) => entry.id !== task.id && entry.title.toLocaleLowerCase() === nextTitle.toLocaleLowerCase())) {
      showToast(t("duplicateTask"));
      resolved = true;
      renderTasks();
      return;
    }

    resolved = true;
    tasks = tasks.map((entry) => entry.id === task.id ? { ...entry, title: nextTitle } : entry);
    persistTasks();
  };

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finishEditing(true);
    }
    if (event.key === "Escape") finishEditing(false);
  });
  input.addEventListener("blur", () => finishEditing(true), { once: true });

  title.replaceWith(input);
  actions.replaceChildren();
  input.focus();
  input.select();
}

function persistTasks() {
  saveStorage(STORAGE_KEYS.tasks, tasks);
  renderTasks();
}

$("#taskForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#taskInput");
  const title = input.value.trim();
  if (!title) return;

  if (tasks.some((task) => task.title.toLocaleLowerCase() === title.toLocaleLowerCase())) {
    $("#taskMessage").textContent = t("duplicateTask");
    input.focus();
    return;
  }

  $("#taskMessage").textContent = "";
  tasks.push({
    id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    done: false,
    createdAt: Date.now()
  });
  persistTasks();
  input.value = "";
  input.focus();
});

$("#taskSort").addEventListener("change", renderTasks);
renderTasks();

function renderLinks() {
  linkList.replaceChildren();
  links.forEach((link) => {
    const item = document.createElement("li");
    item.className = "link-item";

    const anchor = document.createElement("a");
    anchor.className = "link-open";
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.setAttribute("aria-label", t("openInNewTab", { name: link.name }));

    const icon = document.createElement("span");
    icon.className = "link-dot";
    icon.setAttribute("aria-hidden", "true");
    const host = new URL(link.url).hostname.toLowerCase().replace(/^www\./, "");
    const brand = host === "google.com" || host.endsWith(".google.com")
      ? "google"
      : host === "youtube.com" || host === "youtu.be" || host.endsWith(".youtube.com")
        ? "youtube"
        : host === "spotify.com" || host.endsWith(".spotify.com")
          ? "spotify"
          : null;

    if (brand) {
      icon.classList.add("brand-logo", `brand-${brand}`);
      icon.innerHTML = BRAND_ICONS[brand];
    } else {
      const fallback = link.name.trim().charAt(0).toUpperCase();
      const favicon = document.createElement("img");
      favicon.className = "link-favicon";
      favicon.src = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`;
      favicon.alt = "";
      favicon.loading = "lazy";
      favicon.referrerPolicy = "no-referrer";
      favicon.addEventListener("error", () => {
        icon.classList.remove("brand-logo");
        icon.textContent = fallback;
      }, { once: true });
      icon.classList.add("brand-logo");
      icon.append(favicon);
    }

    const name = document.createElement("span");
    name.className = "link-name";
    name.textContent = link.name;
    anchor.append(icon, name);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "link-delete";
    remove.textContent = "×";
    remove.setAttribute("aria-label", t("removeLink", { name: link.name }));
    remove.addEventListener("click", () => {
      links = links.filter((entry) => entry.id !== link.id);
      persistLinks();
    });

    item.append(anchor, remove);
    linkList.append(item);
  });
}

function persistLinks() {
  saveStorage(STORAGE_KEYS.links, links);
  renderLinks();
}

$("#linkForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = $("#linkName");
  const urlInput = $("#linkUrl");
  const name = nameInput.value.trim();
  const message = $("#linkMessage");
  let url;

  try {
    url = new URL(urlInput.value.trim());
  } catch {
    message.textContent = t("invalidUrl");
    return;
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    message.textContent = t("invalidProtocol");
    return;
  }

  if (links.some((link) => link.url.toLowerCase() === url.href.toLowerCase())) {
    message.textContent = t("duplicateLink");
    return;
  }

  message.textContent = "";
  links.push({
    id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    url: url.href
  });
  persistLinks();
  nameInput.value = "";
  urlInput.value = "";
  nameInput.focus();
});

renderLinks();
if (readStorageItem(STORAGE_KEYS.links) === null) {
  saveStorage(STORAGE_KEYS.links, links);
}

function formatTimer(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function renderTimer() {
  $("#timer").textContent = formatTimer(timerRemaining);
  $("#timerToggle").textContent = t(timerInterval ? "stopSession" : "startFocus");
  $("#timerStatus").textContent = t(timerStatusKey);
}

function stopTimer() {
  if (timerInterval !== null) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }
}

function tickTimer() {
  timerRemaining = Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000));
  renderTimer();

  if (timerRemaining === 0) {
    stopTimer();
    timerEndAt = null;
    timerStatusKey = "timerComplete";
    showToast(t("focusCompleteToast"));
    renderTimer();
  }
}

$("#timerToggle").addEventListener("click", () => {
  if (timerInterval !== null) {
    timerRemaining = Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000));
    stopTimer();
    timerEndAt = null;
    timerStatusKey = "startAgain";
    renderTimer();
    return;
  }

  if (timerRemaining === 0) timerRemaining = timerDuration;
  timerEndAt = Date.now() + timerRemaining * 1000;
  timerStatusKey = "timerRunning";
  timerInterval = window.setInterval(tickTimer, 250);
  renderTimer();
});

$("#timerReset").addEventListener("click", () => {
  stopTimer();
  timerEndAt = null;
  timerRemaining = timerDuration;
  timerStatusKey = "oneThing";
  renderTimer();
});

$("#durationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = Number($("#durationInput").value);
  if (!Number.isInteger(value) || value < 1 || value > 180) {
    showToast(t("durationError"));
    $("#durationInput").focus();
    return;
  }

  stopTimer();
  timerEndAt = null;
  timerDuration = value * 60;
  timerRemaining = timerDuration;
  timerStatusKey = "oneThing";
  renderTimer();
});

const themeToggle = $("#themeToggle");
function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark", dark);
  themeToggle.innerHTML = `<span aria-hidden="true">${dark ? "☀" : "☾"}</span>`;
  themeToggle.setAttribute("aria-label", t(dark ? "switchToLight" : "switchToDark"));
}

applyTheme(readStorageItem(STORAGE_KEYS.theme) || "light");
themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  if (saveStorage(STORAGE_KEYS.theme, nextTheme)) applyTheme(nextTheme);
});

$("#languageToggle").addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "id" : "en";
  if (saveStorage(STORAGE_KEYS.language, nextLanguage)) {
    currentLanguage = nextLanguage;
    applyTranslations();
  }
});

applyTranslations();

// Register service worker for PWA offline support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Service worker registration failed.", error);
    });
  });
}