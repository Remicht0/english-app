const state = {
  currentScreen: 'home',
  streak: 18,
  winStreak: 7,
  xp: 1240,
  level: 12,
  chapter: 'City Voices',
  tasksDone: {
    vocab: false,
    listening: false,
    speaking: false,
  },
  metrics: {
    accuracy: 87,
    speed: 1.8,
    retention: 79,
    consistency: 91,
  },
  profile: {
    vocabulary: 72,
    listening: 86,
    speaking: 58,
    grammar: 68,
    confidence: 60,
    consistency: 91,
    retention: 79,
    reactivity: 74,
  },
  exercises: [
    {
      type: 'Listening choice',
      question: 'What did the speaker mean?',
      prompt: '“I’m running a bit late, but I’ll be there in ten minutes.”',
      support: 'Tap the answer that captures the intention.',
      answers: [
        { text: 'They have arrived already.', correct: false },
        { text: 'They will arrive soon.', correct: true },
        { text: 'They want to cancel.', correct: false },
      ],
      success: {
        title: 'Good catch.',
        text: 'Your listening confidence improved and Echo detected faster interpretation.',
      },
      fail: {
        title: 'Almost there.',
        text: 'You understood the situation tone, but the timing detail needs one more pass.',
      },
      reward: { xp: 35, listening: 3, confidence: 2, retention: 1 },
      task: 'listening',
    },
    {
      type: 'Sentence builder',
      question: 'Choose the most natural sentence.',
      prompt: 'You want to suggest meeting tomorrow afternoon.',
      support: 'Pick the option that sounds clear and natural.',
      answers: [
        { text: 'Can we meet tomorrow afternoon?', correct: true },
        { text: 'We meet tomorrow maybe afternoon?', correct: false },
        { text: 'Tomorrow afternoon can be meeting?', correct: false },
      ],
      success: {
        title: 'Nicely built.',
        text: 'Grammar and fluency both moved up, which strengthens your Builder signal.',
      },
      fail: {
        title: 'Good instinct.',
        text: 'The idea was correct, but Echo recommends one more grammar-focused micro exercise.',
      },
      reward: { xp: 40, grammar: 3, vocabulary: 1, reactivity: 1 },
      task: 'vocab',
    },
    {
      type: 'Speaking confidence',
      question: 'How would you answer out loud?',
      prompt: '“Would you like something to drink?”',
      support: 'Simulate a calm response by choosing the strongest spoken answer.',
      answers: [
        { text: 'Yes, I like water, please.', correct: true },
        { text: 'Water maybe yes like.', correct: false },
        { text: 'No drink because later yesterday.', correct: false },
      ],
      success: {
        title: 'That sounds natural.',
        text: 'Your confidence score rose. Echo is ready to unlock a new speaking-themed reward.',
      },
      fail: {
        title: 'Keep the tone simple.',
        text: 'A shorter spoken pattern will help you sound clearer and more confident.',
      },
      reward: { xp: 45, speaking: 4, confidence: 4, consistency: 1 },
      task: 'speaking',
    },
  ],
  exerciseIndex: 0,
  answeredCurrent: false,
};

const navItems = document.querySelectorAll('.nav-item');
const screens = document.querySelectorAll('.screen');
const answerButtonsContainer = document.getElementById('answerButtons');
const feedbackTitle = document.getElementById('feedbackTitle');
const feedbackText = document.getElementById('feedbackText');
const nextExerciseButton = document.getElementById('nextExerciseButton');
const missionChecklist = document.getElementById('missionChecklist');
const globalInsight = document.getElementById('globalInsight');
const homeInsight = document.getElementById('homeInsight');
const openChapterButton = document.getElementById('openChapterButton');
const startSessionButton = document.getElementById('startSessionButton');

function updateScreen(target) {
  state.currentScreen = target;
  screens.forEach((screen) => {
    screen.classList.toggle('active', screen.id === `screen-${target}`);
  });
  navItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.target === target);
  });
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
}

function xpPercent() {
  return Math.min(100, 20 + (state.xp % 1000) / 10);
}

function renderHeader() {
  setText('dayStreak', state.streak);
  setText('winStreak', state.winStreak);
  setText('xpValue', state.xp);
  setText('statusLevel', `Lvl ${state.level}`);
  document.getElementById('xpBar').style.width = `${xpPercent()}%`;
}

function renderMission() {
  const tasks = missionChecklist.querySelectorAll('.task-chip');
  const doneCount = Object.values(state.tasksDone).filter(Boolean).length;
  tasks.forEach((chip) => {
    chip.classList.toggle('done', state.tasksDone[chip.dataset.task]);
  });

  if (doneCount === 3) {
    setText('missionTitle', 'Daily mission complete');
    setText('missionText', 'Beautiful work. Echo updated your profile and unlocked a speaking reward.');
  } else {
    setText('missionTitle', `Finish ${3 - doneCount} more micro-lesson${3 - doneCount > 1 ? 's' : ''}`);
    setText('missionText', 'Vocabulary recall · listening choice · one low-pressure speaking prompt.');
  }
}

function renderCampaign() {
  setText('currentChapterName', state.chapter);
  setText('campaignChapterTitle', state.chapter);

  const chapterSummary = {
    'Warm-Up': 'Foundational phrases, tone recognition, and easy confidence wins.',
    Routines: 'Daily habits, time language, and sentence rhythm.',
    'City Voices': '7 lesson nodes · 1 review gate · final dialogue challenge.',
    'Final Challenge': 'Locked until City Voices is complete.',
  };

  const rewards = {
    'Warm-Up': 'Starter crest',
    Routines: 'Routine glow',
    'City Voices': 'Voice badge',
    'Final Challenge': 'Master title',
  };

  setText('chapterSummary', chapterSummary[state.chapter]);
  setText('campaignReward', rewards[state.chapter]);
  setText('campaignDescription', chapterSummary[state.chapter]);
  document.getElementById('chapterBar').style.width = state.chapter === 'City Voices' ? '68%' : state.chapter === 'Routines' ? '100%' : '34%';
}

function renderStats() {
  setText('accuracyValue', `${state.metrics.accuracy}%`);
  setText('speedValue', `${state.metrics.speed.toFixed(1)}s`);
  setText('retentionValue', `${state.metrics.retention}%`);
  setText('consistencyValue', `${state.metrics.consistency}%`);
}

function profilePolygon() {
  const p = state.profile;
  return `polygon(50% ${100 - p.vocabulary * 0.7}%, ${50 + p.listening * 0.38}% ${50 - p.listening * 0.32}%, ${50 + p.speaking * 0.42}% 50%, ${50 + p.grammar * 0.25}% ${50 + p.grammar * 0.32}%, 50% ${50 + p.confidence * 0.38}%, ${50 - p.consistency * 0.28}% ${50 + p.consistency * 0.32}%, ${50 - p.retention * 0.4}% 50%, ${50 - p.reactivity * 0.26}% ${50 - p.reactivity * 0.32}%)`;
}

function renderProfile() {
  document.getElementById('radarShape').style.clipPath = profilePolygon();

  const archetype = state.profile.listening >= 84
    ? 'The Listener'
    : state.profile.speaking >= 80
      ? 'The Speaker'
      : 'The Builder';
  setText('archetypeName', archetype);

  if (state.profile.speaking >= 64) {
    setText('strengthTitle', 'Listening clarity');
    setText('strengthText', 'You understand natural dialogue well and now carry more confidence into spoken replies.');
    setText('growthTitle', 'Grammar polish');
    setText('growthText', 'You are ready for more advanced sentence shaping in fast contexts.');
    setText('homeInsight', 'Your confidence is catching up with your listening ability.');
    setText('globalInsight', 'Echo sees a stronger balance between listening skill and spoken confidence.');
  } else {
    setText('strengthTitle', 'Listening clarity');
    setText('strengthText', 'You process natural dialogue quickly and retain nuance well.');
    setText('growthTitle', 'Speaking confidence');
    setText('growthText', 'Short voice prompts after listening tasks can increase comfort by 9%.');
    setText('homeInsight', 'You sound more confident after listening tasks.');
    setText('globalInsight', 'You are improving in Listening because you answer audio prompts with less hesitation.');
  }
}

function renderRewards() {
  const rewardCard = document.getElementById('nextRewardCard');
  const rewardText = document.getElementById('nextRewardText');

  if (state.tasksDone.speaking) {
    rewardCard.classList.add('unlocked');
    rewardText.textContent = 'Unlocked: your speaking confidence win earned the Speaking Bloom title.';
  } else {
    rewardCard.classList.remove('unlocked');
    rewardText.textContent = 'Complete one more speaking confidence win to unlock this title.';
  }
}

function renderExercise() {
  const exercise = state.exercises[state.exerciseIndex];
  state.answeredCurrent = false;

  setText('exerciseType', exercise.type);
  setText('exerciseQuestion', exercise.question);
  setText('exercisePrompt', exercise.prompt);
  setText('exerciseSupport', exercise.support);
  document.getElementById('sessionProgress').style.width = `${((state.exerciseIndex + 1) / state.exercises.length) * 100}%`;

  answerButtonsContainer.innerHTML = '';
  exercise.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.className = 'answer-button';
    button.textContent = answer.text;
    button.dataset.correct = String(answer.correct);
    button.addEventListener('click', () => answerExercise(button, answer.correct));
    answerButtonsContainer.appendChild(button);
  });

  setText('feedbackTitle', 'Ready when you are.');
  setText('feedbackText', 'Choose an answer to see how Echo interprets your performance.');
}

function answerExercise(button, isCorrect) {
  if (state.answeredCurrent) {
    return;
  }

  state.answeredCurrent = true;
  const exercise = state.exercises[state.exerciseIndex];
  const buttons = answerButtonsContainer.querySelectorAll('.answer-button');

  buttons.forEach((item) => {
    const correct = item.dataset.correct === 'true';
    item.classList.add('disabled');
    if (correct) {
      item.classList.add('correct');
    }
  });

  if (!isCorrect) {
    button.classList.add('wrong');
    state.winStreak = 0;
    setText('feedbackTitle', exercise.fail.title);
    setText('feedbackText', exercise.fail.text);
    setText('statsPatternTitle', 'Speaking and timing need a gentle retry');
    setText('statsPatternText', 'Echo will propose a calmer review sequence after one incorrect answer.');
  } else {
    state.xp += exercise.reward.xp;
    state.winStreak += 1;
    state.metrics.accuracy = Math.min(99, state.metrics.accuracy + 1);
    state.metrics.speed = Math.max(1.2, Number((state.metrics.speed - 0.1).toFixed(1)));
    Object.entries(exercise.reward).forEach(([key, value]) => {
      if (key !== 'xp' && state.profile[key] !== undefined) {
        state.profile[key] = Math.min(96, state.profile[key] + value);
      }
    });
    state.tasksDone[exercise.task] = true;
    setText('feedbackTitle', exercise.success.title);
    setText('feedbackText', exercise.success.text);
  }

  if (Object.values(state.tasksDone).filter(Boolean).length === 3) {
    state.streak += 1;
    state.level = 13;
  }

  renderAll();
}

function nextExercise() {
  state.exerciseIndex = (state.exerciseIndex + 1) % state.exercises.length;
  renderExercise();
}

function renderAll() {
  renderHeader();
  renderMission();
  renderCampaign();
  renderStats();
  renderProfile();
  renderRewards();
}

navItems.forEach((item) => {
  item.addEventListener('click', () => updateScreen(item.dataset.target));
});

missionChecklist.querySelectorAll('.task-chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    const targetMap = {
      vocab: 1,
      listening: 0,
      speaking: 2,
    };
    state.exerciseIndex = targetMap[chip.dataset.task];
    renderExercise();
    updateScreen('session');
  });
});

document.querySelectorAll('.chapter-node').forEach((node) => {
  node.addEventListener('click', () => {
    if (node.classList.contains('locked')) {
      setText('campaignDescription', 'This chapter unlocks after completing City Voices with one speaking win.');
      return;
    }
    state.chapter = node.dataset.chapter;
    document.querySelectorAll('.chapter-node').forEach((item) => item.classList.remove('current'));
    node.classList.add('current');
    renderCampaign();
  });
});

openChapterButton.addEventListener('click', () => {
  updateScreen('session');
});

startSessionButton.addEventListener('click', () => {
  updateScreen('session');
});

nextExerciseButton.addEventListener('click', nextExercise);

renderExercise();
renderAll();
updateScreen('home');
