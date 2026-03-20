const STORAGE_KEY = 'echo-premium-prototype-v2';

const chapters = [
  {
    id: 1,
    title: 'Warm-Up',
    subtitle: 'Core travel phrases and soft confidence wins.',
    lessons: 3,
    reward: 'Starter Crest',
    color: 'cyan',
    exercises: [
      {
        type: 'Vocabulary',
        prompt: 'Choose the best translation for “ticket desk”.',
        support: 'Start with practical travel language.',
        answers: [
          { text: 'Information counter', correct: true },
          { text: 'Bus engine', correct: false },
          { text: 'Window glass', correct: false },
        ],
        impact: { vocabulary: 3, reactivity: 1, xp: 28 },
      },
      {
        type: 'Listening',
        prompt: '“The train leaves from platform four.”',
        support: 'What detail matters most?',
        answers: [
          { text: 'The train is cancelled.', correct: false },
          { text: 'The platform number is four.', correct: true },
          { text: 'The speaker missed the train.', correct: false },
        ],
        impact: { listening: 3, retention: 2, xp: 32 },
      },
      {
        type: 'Speaking',
        prompt: 'You want to ask politely where the station is.',
        support: 'Pick the answer that sounds most natural.',
        answers: [
          { text: 'Excuse me, where is the station?', correct: true },
          { text: 'Station where please now?', correct: false },
          { text: 'I asking station in there?', correct: false },
        ],
        impact: { speaking: 3, confidence: 4, xp: 36 },
      },
    ],
  },
  {
    id: 2,
    title: 'Routines',
    subtitle: 'Daily habits, time language, and sentence flow.',
    lessons: 3,
    reward: 'Routine Glow',
    color: 'sage',
    exercises: [
      {
        type: 'Grammar',
        prompt: 'Choose the best sentence.',
        support: 'Focus on natural routine language.',
        answers: [
          { text: 'I usually study at night.', correct: true },
          { text: 'Usually I study in the night every.', correct: false },
          { text: 'I study usually in nights always.', correct: false },
        ],
        impact: { grammar: 4, vocabulary: 1, xp: 32 },
      },
      {
        type: 'Listening',
        prompt: '“I always grab coffee before class.”',
        support: 'What happens first?',
        answers: [
          { text: 'They sleep before class.', correct: false },
          { text: 'They drink coffee before class.', correct: true },
          { text: 'They skip class.', correct: false },
        ],
        impact: { listening: 2, retention: 2, xp: 30 },
      },
      {
        type: 'Speaking',
        prompt: 'Answer: “What do you do after work?”',
        support: 'Choose the clearest answer.',
        answers: [
          { text: 'I usually go home and read for a while.', correct: true },
          { text: 'Usually after work home maybe and read.', correct: false },
          { text: 'Read while a home work after.', correct: false },
        ],
        impact: { speaking: 3, confidence: 3, xp: 38 },
      },
    ],
  },
  {
    id: 3,
    title: 'City Voices',
    subtitle: 'Real-world dialogue, confidence, and listening nuance.',
    lessons: 3,
    reward: 'Voice Badge',
    color: 'lavender',
    exercises: [
      {
        type: 'Listening',
        prompt: '“I’m running a bit late, but I’ll be there in ten minutes.”',
        support: 'Tap the answer that captures the intention.',
        answers: [
          { text: 'They have arrived already.', correct: false },
          { text: 'They will arrive soon.', correct: true },
          { text: 'They want to cancel.', correct: false },
        ],
        impact: { listening: 4, confidence: 2, xp: 36 },
      },
      {
        type: 'Sentence Builder',
        prompt: 'You want to suggest meeting tomorrow afternoon.',
        support: 'Pick the most natural sentence.',
        answers: [
          { text: 'Can we meet tomorrow afternoon?', correct: true },
          { text: 'Tomorrow afternoon we meeting can?', correct: false },
          { text: 'Can meeting we tomorrow maybe?', correct: false },
        ],
        impact: { grammar: 3, vocabulary: 2, xp: 34 },
      },
      {
        type: 'Speaking',
        prompt: '“Would you like something to drink?”',
        support: 'Choose the strongest spoken answer.',
        answers: [
          { text: 'Yes, I’d love some water, please.', correct: true },
          { text: 'Water yes like maybe.', correct: false },
          { text: 'No drink yesterday later.', correct: false },
        ],
        impact: { speaking: 4, confidence: 4, xp: 42 },
      },
    ],
  },
  {
    id: 4,
    title: 'Work & Study',
    subtitle: 'Professional clarity and academic expression.',
    lessons: 3,
    reward: 'Focus Ribbon',
    color: 'amber',
    exercises: [
      {
        type: 'Vocabulary',
        prompt: 'Choose the word closest to “deadline”.',
        support: 'Professional vocabulary matters.',
        answers: [
          { text: 'Final due date', correct: true },
          { text: 'Office chair', correct: false },
          { text: 'Daily meeting', correct: false },
        ],
        impact: { vocabulary: 3, retention: 2, xp: 34 },
      },
      {
        type: 'Grammar',
        prompt: 'Pick the most professional sentence.',
        support: 'A polished answer helps in work contexts.',
        answers: [
          { text: 'I will send the report by Friday afternoon.', correct: true },
          { text: 'I send report in Friday maybe.', correct: false },
          { text: 'By Friday afternoon report I will maybe.', correct: false },
        ],
        impact: { grammar: 4, confidence: 2, xp: 36 },
      },
      {
        type: 'Listening',
        prompt: '“Let’s reschedule for next Tuesday at noon.”',
        support: 'What changed?',
        answers: [
          { text: 'The meeting was confirmed for today.', correct: false },
          { text: 'The meeting moved to next Tuesday at noon.', correct: true },
          { text: 'The meeting was cancelled forever.', correct: false },
        ],
        impact: { listening: 3, reactivity: 2, xp: 38 },
      },
    ],
  },
  {
    id: 5,
    title: 'Confidence Lab',
    subtitle: 'Speaking ease, emotional fluency, and rhythm.',
    lessons: 3,
    reward: 'Speaking Bloom',
    color: 'coral',
    exercises: [
      {
        type: 'Speaking',
        prompt: 'React to: “Thanks for helping me.”',
        support: 'Pick the warmest natural answer.',
        answers: [
          { text: 'Of course, I’m happy to help.', correct: true },
          { text: 'Help yes because thanks maybe.', correct: false },
          { text: 'No maybe helping before yesterday.', correct: false },
        ],
        impact: { speaking: 5, confidence: 5, xp: 40 },
      },
      {
        type: 'Listening',
        prompt: '“You can take your time, there’s no rush.”',
        support: 'How does the speaker feel?',
        answers: [
          { text: 'They are being patient.', correct: true },
          { text: 'They are angry.', correct: false },
          { text: 'They are leaving now.', correct: false },
        ],
        impact: { listening: 3, confidence: 2, xp: 34 },
      },
      {
        type: 'Reflection',
        prompt: 'Choose the most confident response to a new opportunity.',
        support: 'Tone matters as much as correctness.',
        answers: [
          { text: 'I’d like to try — it sounds interesting.', correct: true },
          { text: 'Maybe no because maybe difficult maybe.', correct: false },
          { text: 'I trying because no yes difficult.', correct: false },
        ],
        impact: { confidence: 5, reactivity: 2, xp: 42 },
      },
    ],
  },
  {
    id: 6,
    title: 'Final Challenge',
    subtitle: 'A mixed challenge that brings all skills together.',
    lessons: 3,
    reward: 'Moonlit Master',
    color: 'cyan',
    exercises: [
      {
        type: 'Mixed',
        prompt: 'You are late for a meeting and need to update your teammate.',
        support: 'Choose the clearest message.',
        answers: [
          { text: 'I’m running late, but I’ll join in five minutes.', correct: true },
          { text: 'Late I am and maybe meeting no.', correct: false },
          { text: 'Five minutes meeting maybe late no.', correct: false },
        ],
        impact: { grammar: 3, speaking: 3, confidence: 3, xp: 48 },
      },
      {
        type: 'Listening',
        prompt: '“Could you walk me through the main idea once more?”',
        support: 'What is the speaker asking for?',
        answers: [
          { text: 'A clearer explanation.', correct: true },
          { text: 'A refund.', correct: false },
          { text: 'A quick goodbye.', correct: false },
        ],
        impact: { listening: 4, retention: 2, xp: 44 },
      },
      {
        type: 'Confidence',
        prompt: 'Choose the most composed final response.',
        support: 'Finish strong, calm, and clear.',
        answers: [
          { text: 'Thanks — I understand now and I’m ready to continue.', correct: true },
          { text: 'Understand maybe now and continue maybe.', correct: false },
          { text: 'Ready because now continue no maybe.', correct: false },
        ],
        impact: { confidence: 6, speaking: 3, xp: 50 },
      },
    ],
  },
];

const onboardingSlides = [
  {
    title: 'Welcome to Echo.',
    text: 'Learn English through calm micro-sessions, adaptive support, and a profile that grows with you.',
    tags: ['3-minute lessons', 'soft guidance', 'premium dark mode'],
  },
  {
    title: 'Your progress is alive.',
    text: 'Echo tracks how you answer, how fast you react, what you remember, and where confidence starts to bloom.',
    tags: ['living profile', 'radar growth', 'behavior-based insight'],
  },
  {
    title: 'Game mechanics, without the noise.',
    text: 'Unlock levels, claim rewards, keep your streak, and build identity — all in a calmer, more elegant rhythm.',
    tags: ['campaign map', 'XP and badges', 'quiet motivation'],
  },
];

const defaultState = {
  currentScreen: 'home',
  onboardingSeen: false,
  onboardingStep: 0,
  xp: 1240,
  level: 12,
  streak: 18,
  winStreak: 7,
  currentChapterId: 3,
  currentExerciseIndex: 0,
  sessionAnswered: false,
  statsRange: 'week',
  sessionsToday: 3,
  completedChapters: [1, 2],
  unlockedRewards: ['Starter Crest', 'Routine Glow', 'Voice Badge', 'Moonlit Theme'],
  claimedRewards: ['Starter Crest'],
  missions: {
    lesson: false,
    listening: false,
    speaking: false,
    review: false,
  },
  profile: {
    vocabulary: 73,
    listening: 84,
    speaking: 61,
    grammar: 69,
    confidence: 64,
    consistency: 91,
    retention: 80,
    reactivity: 75,
  },
  stats: {
    week: [58, 64, 71, 68, 77, 82, 86],
    month: [44, 48, 52, 55, 60, 62, 68, 70, 73, 76, 78, 82],
  },
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved) {
      return { ...defaultState, ...saved, profile: { ...defaultState.profile, ...saved.profile }, missions: { ...defaultState.missions, ...saved.missions }, stats: { ...defaultState.stats, ...saved.stats } };
    }
  } catch (error) {
    console.warn('Unable to load saved state', error);
  }
  return structuredClone(defaultState);
}

const state = loadState();

const dom = {
  screens: document.querySelectorAll('.app-screen'),
  navButtons: document.querySelectorAll('.nav-btn'),
  home: document.getElementById('home-screen'),
  campaign: document.getElementById('campaign-screen'),
  session: document.getElementById('session-screen'),
  stats: document.getElementById('stats-screen'),
  profile: document.getElementById('profile-screen'),
  rewards: document.getElementById('rewards-screen'),
  toast: document.getElementById('toast'),
  topLevelText: document.getElementById('topLevelText'),
  railPulseTitle: document.getElementById('railPulseTitle'),
  railPulseText: document.getElementById('railPulseText'),
  railSessions: document.getElementById('railSessions'),
  railPlan: document.getElementById('railPlan'),
  onboardingModal: document.getElementById('onboardingModal'),
  onboardingStepLabel: document.getElementById('onboardingStepLabel'),
  onboardingTitle: document.getElementById('onboardingTitle'),
  onboardingText: document.getElementById('onboardingText'),
  onboardingTags: document.getElementById('onboardingTags'),
  skipOnboardingButton: document.getElementById('skipOnboardingButton'),
  nextOnboardingButton: document.getElementById('nextOnboardingButton'),
};

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.remove('hidden');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => dom.toast.classList.add('hidden'), 2200);
}

function getChapterById(id) {
  return chapters.find((chapter) => chapter.id === id);
}

function isChapterUnlocked(id) {
  return id <= state.completedChapters.length + 1;
}

function chapterProgressPercent(chapterId) {
  if (state.completedChapters.includes(chapterId)) {
    return 100;
  }
  if (state.currentChapterId === chapterId) {
    return Math.round((state.currentExerciseIndex / getChapterById(chapterId).lessons) * 100);
  }
  return 0;
}

function completedMissionCount() {
  return Object.values(state.missions).filter(Boolean).length;
}

function missionText() {
  return `${4 - completedMissionCount()} task${4 - completedMissionCount() === 1 ? '' : 's'} left today`;
}

function radarPolygon(profile) {
  return `polygon(50% ${100 - profile.vocabulary * 0.72}%, ${50 + profile.listening * 0.38}% ${50 - profile.listening * 0.32}%, ${50 + profile.speaking * 0.42}% 50%, ${50 + profile.grammar * 0.25}% ${50 + profile.grammar * 0.32}%, 50% ${50 + profile.confidence * 0.38}%, ${50 - profile.consistency * 0.28}% ${50 + profile.consistency * 0.32}%, ${50 - profile.retention * 0.4}% 50%, ${50 - profile.reactivity * 0.26}% ${50 - profile.reactivity * 0.32}%)`;
}

function currentExercise() {
  const chapter = getChapterById(state.currentChapterId);
  return chapter.exercises[state.currentExerciseIndex] || chapter.exercises[0];
}

function updateTopMeta() {
  dom.topLevelText.textContent = `Lvl ${state.level}`;
  dom.railSessions.textContent = `${state.sessionsToday} session${state.sessionsToday > 1 ? 's' : ''}`;
  if (state.profile.speaking >= 72) {
    dom.railPulseTitle.textContent = 'Speaking confidence is catching up beautifully.';
    dom.railPulseText.textContent = 'Recent choices show a calmer, more natural response style.';
    dom.railPlan.textContent = 'Speaking + Confidence';
  } else {
    dom.railPulseTitle.textContent = 'Listening is leading your progress.';
    dom.railPulseText.textContent = 'Short dialogue exercises are increasing both retention and confidence.';
    dom.railPlan.textContent = 'Listening + Speaking';
  }
}

function setActiveScreen(screenName) {
  state.currentScreen = screenName;
  dom.screens.forEach((screen) => {
    screen.classList.toggle('active', screen.id === `${screenName}-screen`);
  });
  dom.navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.screen === screenName);
  });
  saveState();
}

function renderHome() {
  const currentChapter = getChapterById(state.currentChapterId);
  const completed = completedMissionCount();
  const xpProgress = Math.min(100, 20 + ((state.xp % 1000) / 1000) * 100);

  dom.home.innerHTML = `
    <article class="card hero-card">
      <span class="mini-label">Good evening, Maya</span>
      <h2 class="hero-title">Your English rhythm is steady, elegant, and getting sharper.</h2>
      <p class="muted">Echo is guiding you toward more confident speaking without losing your listening edge.</p>
      <div class="home-stats">
        <div class="stat-chip"><span class="section-label">Day streak</span><strong>${state.streak}</strong></div>
        <div class="stat-chip"><span class="section-label">Win streak</span><strong>${state.winStreak}</strong></div>
        <div class="stat-chip"><span class="section-label">XP</span><strong>${state.xp}</strong></div>
      </div>
      <div class="progress-track"><span style="width:${xpProgress}%"></span></div>
    </article>

    <div class="section-stack">
      <article class="card mission-card">
        <div class="row-between">
          <div>
            <span class="mini-label">Daily mission</span>
            <h3>${missionText()}</h3>
          </div>
          <span class="pill">${completed}/4 done</span>
        </div>
        <p>Complete a session, finish one listening win, one speaking win, and review your living profile.</p>
        <div class="tag-row" id="homeMissionTasks">
          ${[
            ['lesson', 'Session'],
            ['listening', 'Listening'],
            ['speaking', 'Speaking'],
            ['review', 'Profile'],
          ].map(([key, label]) => `<button class="mission-task ${state.missions[key] ? 'done' : ''}" data-mission-jump="${key}">${label}</button>`).join('')}
        </div>
        <div class="mission-actions">
          <button class="primary-btn" id="continueLearningButton">Continue learning</button>
          <button class="secondary-btn" id="reviewProfileButton">Open profile</button>
        </div>
      </article>

      <div class="duo-grid">
        <article class="progress-card">
          <span class="mini-label">Current chapter</span>
          <h3>${currentChapter.title}</h3>
          <p>${currentChapter.subtitle}</p>
          <div class="progress-track small"><span style="width:${chapterProgressPercent(currentChapter.id)}%"></span></div>
          <div class="mission-actions">
            <button class="chapter-action" id="openCurrentChapterButton">Open chapter</button>
          </div>
        </article>

        <article class="progress-card">
          <span class="mini-label">Adaptive insight</span>
          <h3>${state.profile.listening >= state.profile.speaking ? 'Listening still leads.' : 'Speaking is rising fast.'}</h3>
          <p>${state.profile.listening >= state.profile.speaking ? 'Echo suggests one more speaking challenge to balance your profile.' : 'Your replies are sounding more natural and emotionally steady.'}</p>
          <div class="tag-row">
            <span class="pill">Retention ${state.profile.retention}</span>
            <span class="pill">Confidence ${state.profile.confidence}</span>
          </div>
        </article>
      </div>
    </div>
  `;
}

function renderCampaign() {
  const currentChapter = getChapterById(state.currentChapterId);

  dom.campaign.innerHTML = `
    <article class="card">
      <span class="mini-label">Campaign</span>
      <h2 class="profile-title">Everyday Momentum</h2>
      <p>Unlock levels one by one, complete all lessons, and earn rewards that change your learning identity.</p>
      <div class="level-grid">
        ${chapters.map((chapter) => {
          const unlocked = isChapterUnlocked(chapter.id);
          const completed = state.completedChapters.includes(chapter.id);
          return `
            <button class="level-btn ${chapter.id === state.currentChapterId ? 'current' : ''} ${completed ? 'completed' : ''} ${!unlocked ? 'locked' : ''}" data-chapter-id="${chapter.id}">
              <div class="level-topline">
                <span class="mini-label">Level ${chapter.id}</span>
                <span class="chapter-badge">${completed ? 'Completed' : unlocked ? 'Playable' : 'Locked'}</span>
              </div>
              <h3>${chapter.title}</h3>
              <p>${chapter.subtitle}</p>
              <div class="progress-track small"><span style="width:${chapterProgressPercent(chapter.id)}%"></span></div>
            </button>
          `;
        }).join('')}
      </div>
    </article>

    <article class="chapter-card">
      <div class="reward-head">
        <div>
          <span class="mini-label">Selected level</span>
          <h3>${currentChapter.title}</h3>
        </div>
        <span class="pill">Reward: ${currentChapter.reward}</span>
      </div>
      <p>${currentChapter.subtitle}</p>
      <div class="chapter-meta">
        <span class="pill">${currentChapter.lessons} lessons</span>
        <span class="pill">Progress ${chapterProgressPercent(currentChapter.id)}%</span>
      </div>
      <div class="mission-actions">
        <button class="primary-btn" id="playSelectedLevelButton">Play this level</button>
      </div>
    </article>
  `;
}

function renderSession() {
  const chapter = getChapterById(state.currentChapterId);
  const exercise = currentExercise();
  const progress = ((state.currentExerciseIndex + 1) / chapter.exercises.length) * 100;

  dom.session.innerHTML = `
    <article class="exercise-card">
      <div class="session-header">
        <div>
          <span class="mini-label">${chapter.title}</span>
          <h3>${exercise.type}</h3>
        </div>
        <span class="pill">Lesson ${state.currentExerciseIndex + 1}/${chapter.exercises.length}</span>
      </div>
      <div class="progress-track small"><span style="width:${progress}%"></span></div>
      <p class="quote">${exercise.prompt}</p>
      <p>${exercise.support}</p>
      <div class="answer-list">
        ${exercise.answers.map((answer, index) => `
          <button class="answer-btn" data-answer-index="${index}">${answer.text}</button>
        `).join('')}
      </div>
    </article>

    <article class="card feedback-card" id="feedbackCard">
      <span class="mini-label">Elegant feedback</span>
      <h3>${state.sessionAnswered ? 'Ready for the next step.' : 'Choose an answer to continue.'}</h3>
      <p>${state.sessionAnswered ? 'Echo has updated your profile and session data.' : 'Your result will update XP, confidence, retention, and your adaptive plan.'}</p>
      <div class="mission-actions">
        <button class="secondary-btn" id="skipExerciseButton">Skip</button>
        <button class="primary-btn" id="nextExerciseButton">Next lesson</button>
      </div>
    </article>
  `;
}

function renderStats() {
  const data = state.stats[state.statsRange];
  const labels = state.statsRange === 'week' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'];
  const primaryPath = data.map((value, index) => `${(index / (data.length - 1)) * 100}% ${100 - value}%`).join(', ');
  const secondaryData = data.map((value, index) => Math.max(18, value - (index % 2 === 0 ? 12 : 18)));
  const secondaryPath = secondaryData.map((value, index) => `${(index / (secondaryData.length - 1)) * 100}% ${100 - value}%`).join(', ');

  dom.stats.innerHTML = `
    <article class="card">
      <div class="row-between">
        <div>
          <span class="mini-label">Statistics</span>
          <h2 class="profile-title">Readable progress, not intimidating analytics.</h2>
        </div>
        <div class="filter-row">
          <button class="filter-chip" data-range="week">Week</button>
          <button class="filter-chip" data-range="month">Month</button>
        </div>
      </div>
      <div class="metric-grid" style="margin-top:18px;">
        <article class="metric-card"><span class="section-label">Accuracy</span><strong>${Math.min(99, Math.round((state.profile.vocabulary + state.profile.grammar + state.profile.listening) / 3))}%</strong><p>Balanced by behavior and consistency.</p></article>
        <article class="metric-card"><span class="section-label">Response speed</span><strong>${Math.max(1.1, (2.7 - state.profile.reactivity / 50)).toFixed(1)}s</strong><p>Sharper on familiar prompts.</p></article>
        <article class="metric-card"><span class="section-label">Retention</span><strong>${state.profile.retention}%</strong><p>Memory is improving through review rhythm.</p></article>
        <article class="metric-card"><span class="section-label">Consistency</span><strong>${state.profile.consistency}%</strong><p>Streak and session regularity remain strong.</p></article>
      </div>
    </article>

    <article class="card chart-card" style="margin-top:16px;">
      <div class="chart-grid"></div>
      <div class="chart-fill primary" style="clip-path: polygon(0 100%, ${primaryPath}, 100% 100%);"></div>
      <div class="chart-fill secondary" style="clip-path: polygon(0 100%, ${secondaryPath}, 100% 100%);"></div>
      <div class="chart-labels">${labels.map((label) => `<span>${label}</span>`).join('')}</div>
    </article>

    <article class="progress-card" style="margin-top:16px;">
      <span class="mini-label">Recurring pattern</span>
      <h3>${state.profile.grammar < 75 ? 'Grammar still needs polish in fast contexts.' : 'Your weak spots are becoming more specific.'}</h3>
      <p>${state.profile.speaking < 70 ? 'Echo recommends one speaking challenge and one grammar builder next.' : 'You are ready for more mixed difficulty sessions.'}</p>
    </article>
  `;

  dom.stats.querySelectorAll('[data-range]').forEach((button) => {
    button.classList.toggle('pill', button.dataset.range === state.statsRange);
  });
}

function renderProfile() {
  const archetype = state.profile.listening >= 84 ? 'The Listener' : state.profile.speaking >= 78 ? 'The Speaker' : 'The Builder';
  const strength = state.profile.listening >= state.profile.speaking ? 'Listening clarity' : 'Speaking confidence';
  const growth = state.profile.speaking < 74 ? 'Speaking confidence' : 'Advanced grammar polish';

  dom.profile.innerHTML = `
    <article class="card">
      <div class="profile-header">
        <div>
          <span class="mini-label">Learning archetype</span>
          <h2 class="profile-title">${archetype}</h2>
        </div>
        <span class="pill">Lvl ${state.level}</span>
      </div>
      <div class="radar-shell" style="margin-top:18px;">
        <div class="radar-ring outer"></div>
        <div class="radar-ring middle"></div>
        <div class="radar-ring inner"></div>
        <div class="radar-line a"></div>
        <div class="radar-line b"></div>
        <div class="radar-line c"></div>
        <div class="radar-line d"></div>
        <div class="radar-shape" style="clip-path:${radarPolygon(state.profile)}"></div>
        <div class="radar-core"></div>
        <span class="radar-text t">Vocabulary</span>
        <span class="radar-text ur">Listening</span>
        <span class="radar-text r">Speaking</span>
        <span class="radar-text lr">Grammar</span>
        <span class="radar-text b">Confidence</span>
        <span class="radar-text ll">Consistency</span>
        <span class="radar-text l">Retention</span>
        <span class="radar-text ul">Reactivity</span>
      </div>
    </article>

    <div class="profile-grid" style="margin-top:16px;">
      <article class="profile-card">
        <span class="mini-label">Strength</span>
        <h3>${strength}</h3>
        <p>${strength === 'Listening clarity' ? 'You understand natural dialogue quickly and keep its nuance.' : 'You are sounding calmer and more natural in spoken replies.'}</p>
      </article>
      <article class="profile-card">
        <span class="mini-label">Growth edge</span>
        <h3>${growth}</h3>
        <p>${growth === 'Speaking confidence' ? 'One more low-pressure speaking path would improve your balance.' : 'Your next step is cleaner sentence control in faster contexts.'}</p>
      </article>
    </div>

    <article class="card" style="margin-top:16px;">
      <span class="mini-label">Skill evolution</span>
      <div class="section-stack">
        ${Object.entries(state.profile).map(([key, value]) => `
          <div>
            <div class="row-between"><strong>${key[0].toUpperCase() + key.slice(1)}</strong><span class="muted">${value}</span></div>
            <div class="skill-bar"><span style="width:${value}%"></span></div>
          </div>
        `).join('')}
      </div>
      <div class="mission-actions">
        <button class="secondary-btn" id="markProfileReviewedButton">Mark profile reviewed</button>
      </div>
    </article>
  `;
}

function renderRewards() {
  const rewards = [
    { name: 'Starter Crest', description: 'Unlocked by finishing Warm-Up.', unlocked: state.unlockedRewards.includes('Starter Crest') },
    { name: 'Routine Glow', description: 'Unlocked by completing Routines.', unlocked: state.unlockedRewards.includes('Routine Glow') },
    { name: 'Voice Badge', description: 'Unlocked by finishing City Voices.', unlocked: state.unlockedRewards.includes('Voice Badge') },
    { name: 'Moonlit Theme', description: 'Unlocked by keeping your streak alive.', unlocked: state.unlockedRewards.includes('Moonlit Theme') },
    { name: 'Speaking Bloom', description: 'Unlocked by clearing Confidence Lab.', unlocked: state.unlockedRewards.includes('Speaking Bloom') },
    { name: 'Moonlit Master', description: 'Unlocked by beating the Final Challenge.', unlocked: state.unlockedRewards.includes('Moonlit Master') },
  ];

  dom.rewards.innerHTML = `
    <article class="card">
      <span class="mini-label">Rewards</span>
      <h2 class="profile-title">Refined motivation with real progression.</h2>
      <p>Claimable rewards are connected to completed levels, streaks, and your evolving learner identity.</p>
    </article>

    <div class="reward-grid" style="margin-top:16px;">
      ${rewards.map((reward) => {
        const claimed = state.claimedRewards.includes(reward.name);
        return `
          <article class="reward-card ${reward.unlocked ? '' : 'locked'}">
            <div class="reward-head">
              <div>
                <span class="mini-label">Reward</span>
                <h3>${reward.name}</h3>
              </div>
              <span class="pill">${reward.unlocked ? 'Unlocked' : 'Locked'}</span>
            </div>
            <p>${reward.description}</p>
            <button class="claim-btn ${claimed ? 'claimed' : ''}" data-claim-reward="${reward.name}" ${!reward.unlocked ? 'disabled' : ''}>${claimed ? 'Claimed' : reward.unlocked ? 'Claim reward' : 'Locked'}</button>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

function renderOnboarding() {
  const slide = onboardingSlides[state.onboardingStep];
  dom.onboardingStepLabel.textContent = `Step ${state.onboardingStep + 1} of ${onboardingSlides.length}`;
  dom.onboardingTitle.textContent = slide.title;
  dom.onboardingText.textContent = slide.text;
  dom.onboardingTags.innerHTML = slide.tags.map((tag) => `<span class="pill">${tag}</span>`).join('');
  dom.nextOnboardingButton.textContent = state.onboardingStep === onboardingSlides.length - 1 ? 'Start Echo' : 'Next';
  dom.onboardingModal.classList.toggle('hidden', state.onboardingSeen);
}

function renderAll() {
  renderHome();
  renderCampaign();
  renderSession();
  renderStats();
  renderProfile();
  renderRewards();
  renderOnboarding();
  updateTopMeta();
  setActiveScreen(state.currentScreen);
}

function applyImpact(impact) {
  Object.entries(impact).forEach(([key, value]) => {
    if (key === 'xp') {
      state.xp += value;
      return;
    }
    if (state.profile[key] !== undefined) {
      state.profile[key] = Math.min(98, state.profile[key] + value);
    }
  });

  state.sessionsToday += 1;
  state.winStreak += 1;
  state.level = Math.max(state.level, 1 + Math.floor(state.xp / 120));
  state.profile.consistency = Math.min(98, state.profile.consistency + 1);
}

function completeExercise(type) {
  state.missions.lesson = true;
  if (type.toLowerCase().includes('listening')) {
    state.missions.listening = true;
  }
  if (type.toLowerCase().includes('speaking') || type.toLowerCase().includes('confidence')) {
    state.missions.speaking = true;
  }
}

function completeChapterIfNeeded() {
  const chapter = getChapterById(state.currentChapterId);
  if (state.currentExerciseIndex >= chapter.exercises.length) {
    if (!state.completedChapters.includes(chapter.id)) {
      state.completedChapters.push(chapter.id);
      state.unlockedRewards = Array.from(new Set([
        ...state.unlockedRewards,
        chapter.reward,
        ...(chapter.id === 5 ? ['Speaking Bloom'] : []),
        ...(chapter.id === 6 ? ['Moonlit Master'] : []),
      ]));
      state.streak += 1;
      showToast(`${chapter.title} completed — ${chapter.reward} unlocked.`);
    }

    const nextChapter = chapters.find((item) => item.id === chapter.id + 1);
    if (nextChapter) {
      state.currentChapterId = nextChapter.id;
      state.currentExerciseIndex = 0;
      state.sessionAnswered = false;
      setActiveScreen('campaign');
    } else {
      state.currentExerciseIndex = chapter.exercises.length - 1;
      setActiveScreen('rewards');
    }
  }
}

function answerCurrentExercise(answerIndex) {
  if (state.sessionAnswered) {
    return;
  }

  const exercise = currentExercise();
  const isCorrect = exercise.answers[answerIndex].correct;
  const buttons = dom.session.querySelectorAll('.answer-btn');

  buttons.forEach((button, index) => {
    button.classList.add('dimmed');
    if (exercise.answers[index].correct) {
      button.classList.add('correct');
    }
  });

  state.sessionAnswered = true;

  if (!isCorrect) {
    buttons[answerIndex].classList.add('wrong');
    state.winStreak = 0;
    showToast('Not quite — Echo will guide you with a cleaner pattern next.');
  } else {
    applyImpact(exercise.impact);
    completeExercise(exercise.type);
    showToast(`Nice work. +${exercise.impact.xp} XP`);
  }

  saveState();
  renderAll();
}

function nextExercise() {
  const chapter = getChapterById(state.currentChapterId);
  if (!state.sessionAnswered) {
    showToast('Answer or skip the lesson before moving on.');
    return;
  }

  state.currentExerciseIndex += 1;
  state.sessionAnswered = false;
  completeChapterIfNeeded();
  saveState();
  renderAll();
}

function skipExercise() {
  state.sessionAnswered = true;
  showToast('Lesson skipped. No XP awarded.');
  saveState();
  renderAll();
}

function openChapter(chapterId) {
  if (!isChapterUnlocked(chapterId)) {
    showToast('This level is locked. Finish the previous one first.');
    return;
  }

  state.currentChapterId = chapterId;
  state.currentExerciseIndex = 0;
  state.sessionAnswered = false;
  saveState();
  renderAll();
  setActiveScreen('session');
}

function claimReward(name) {
  if (!state.unlockedRewards.includes(name)) {
    showToast('This reward is still locked.');
    return;
  }
  if (!state.claimedRewards.includes(name)) {
    state.claimedRewards.push(name);
    if (name === 'Moonlit Theme') {
      state.profile.confidence = Math.min(98, state.profile.confidence + 2);
    }
    showToast(`${name} claimed.`);
    saveState();
    renderAll();
  }
}

function handleHomeMissionJump(missionKey) {
  if (missionKey === 'review') {
    setActiveScreen('profile');
    return;
  }

  const targetByMission = {
    lesson: state.currentChapterId,
    listening: chapters.find((chapter) => isChapterUnlocked(chapter.id) && chapter.exercises.some((exercise) => exercise.type.toLowerCase().includes('listening')))?.id ?? state.currentChapterId,
    speaking: chapters.find((chapter) => isChapterUnlocked(chapter.id) && chapter.exercises.some((exercise) => exercise.type.toLowerCase().includes('speaking') || exercise.type.toLowerCase().includes('confidence')))?.id ?? state.currentChapterId,
  };

  state.currentChapterId = targetByMission[missionKey] || state.currentChapterId;
  state.currentExerciseIndex = 0;
  state.sessionAnswered = false;
  saveState();
  renderAll();
  setActiveScreen('session');
}

function markProfileReviewed() {
  state.missions.review = true;
  state.profile.retention = Math.min(98, state.profile.retention + 1);
  showToast('Profile reviewed. Adaptive plan updated.');
  saveState();
  renderAll();
}

function resetOnboarding() {
  state.onboardingSeen = false;
  state.onboardingStep = 0;
  renderOnboarding();
}

function bindEvents() {
  dom.navButtons.forEach((button) => {
    button.addEventListener('click', () => setActiveScreen(button.dataset.screen));
  });

  dom.skipOnboardingButton.addEventListener('click', () => {
    state.onboardingSeen = true;
    saveState();
    renderOnboarding();
  });

  dom.nextOnboardingButton.addEventListener('click', () => {
    if (state.onboardingStep < onboardingSlides.length - 1) {
      state.onboardingStep += 1;
    } else {
      state.onboardingSeen = true;
    }
    saveState();
    renderOnboarding();
  });

  document.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('#continueLearningButton')) {
      state.sessionAnswered = false;
      saveState();
      renderAll();
      setActiveScreen('session');
    }

    if (target.closest('#reviewProfileButton')) {
      setActiveScreen('profile');
    }

    if (target.closest('#openCurrentChapterButton')) {
      setActiveScreen('campaign');
    }

    const missionButton = target.closest('[data-mission-jump]');
    if (missionButton) {
      handleHomeMissionJump(missionButton.dataset.missionJump);
    }

    const chapterButton = target.closest('[data-chapter-id]');
    if (chapterButton) {
      const chapterId = Number(chapterButton.dataset.chapterId);
      if (isChapterUnlocked(chapterId)) {
        state.currentChapterId = chapterId;
        state.currentExerciseIndex = 0;
        state.sessionAnswered = false;
        saveState();
        renderAll();
      } else {
        showToast('Finish the previous level to unlock this one.');
      }
    }

    if (target.closest('#playSelectedLevelButton')) {
      openChapter(state.currentChapterId);
    }

    const answerButton = target.closest('[data-answer-index]');
    if (answerButton) {
      answerCurrentExercise(Number(answerButton.dataset.answerIndex));
    }

    if (target.closest('#nextExerciseButton')) {
      nextExercise();
    }

    if (target.closest('#skipExerciseButton')) {
      skipExercise();
    }

    const rangeButton = target.closest('[data-range]');
    if (rangeButton) {
      state.statsRange = rangeButton.dataset.range;
      saveState();
      renderAll();
    }

    if (target.closest('#markProfileReviewedButton')) {
      markProfileReviewed();
    }

    const claimButton = target.closest('[data-claim-reward]');
    if (claimButton) {
      claimReward(claimButton.dataset.claimReward);
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'r' && event.altKey) {
      localStorage.removeItem(STORAGE_KEY);
      Object.assign(state, structuredClone(defaultState));
      showToast('Prototype reset.');
      renderAll();
      resetOnboarding();
    }
  });
}

bindEvents();
renderAll();
