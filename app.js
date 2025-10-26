const vocabSets = [
  {
    id: 'intro-greetings',
    title: 'Saludos y Presentaciones',
    description: 'Say hi, trade names, and lay down the basics.',
    vibe: 'Neon handshake mix',
    items: [
      {
        id: 'hola-que-tal',
        prompt: '¡Hola! ¿Qué tal?',
        answer: 'Hi! How are things?',
        hint: 'Greeting plus check-in question.',
        notes: 'Useful anytime you meet someone.'
      },
      {
        id: 'soy-magnus',
        prompt: 'Soy Magnus.',
        answer: 'I am Magnus.',
        hint: 'Introduce yourself with the verb “ser”.',
        notes: 'Swap the name to present someone else.'
      },
      {
        id: 'como-te-llamas',
        prompt: '¿Cómo te llamas?',
        answer: 'What is your name?',
        hint: 'Literally “How do you call yourself?”.',
        notes: 'Follow up with “Me llamo…” when you reply.'
      },
      {
        id: 'mucho-gusto',
        prompt: 'Mucho gusto.',
        answer: 'Nice to meet you.',
        hint: 'Handshake moment.',
        notes: 'Formal or informal.'
      },
      {
        id: 'de-donde-eres',
        prompt: '¿De dónde eres?',
        answer: 'Where are you from?',
        hint: 'Great for meeting new classmates.',
        notes: 'Answer with “Soy de + place”.'
      },
      {
        id: 'soy-de-londres',
        prompt: 'Soy de Londres.',
        answer: "I am from London.",
        hint: 'Swap in Magnus’ hometown.',
        notes: 'Practice other cities for fun.'
      },
      {
        id: 'hasta-luego',
        prompt: 'Hasta luego.',
        answer: 'See you later.',
        hint: 'A casual goodbye.',
        notes: 'Pair with a wave and a smile.'
      },
      {
        id: 'buenos-dias',
        prompt: '¡Buenos días!',
        answer: 'Good morning!',
        hint: 'Use until lunchtime.',
        notes: 'Switch to “Buenas tardes” after lunch.'
      },
      {
        id: 'nos-vemos-manana',
        prompt: 'Nos vemos mañana.',
        answer: 'See you tomorrow.',
        hint: 'Future plans, simple style.',
        notes: 'Great for ending class on a plan.'
      },
      {
        id: 'que-pasa',
        prompt: '¿Qué pasa?',
        answer: 'What’s up?',
        hint: 'Informal check-in.',
        notes: 'Answer with “Nada” or what’s new.'
      }
    ]
  },
  {
    id: 'classroom-commands',
    title: 'En el Aula',
    description: 'Talk like you’re running the classroom DJ booth.',
    vibe: 'Boom bap classroom beats',
    items: [
      {
        id: 'puedo-ir-bano',
        prompt: '¿Puedo ir al baño?',
        answer: 'Can I go to the bathroom?',
        hint: 'Permission request.',
        notes: 'Classic school ask.'
      },
      {
        id: 'no-entiendo',
        prompt: 'No entiendo, ¿puedes repetir?',
        answer: 'I don’t understand, can you repeat?',
        hint: 'Ask for clarification.',
        notes: 'Swap “puedes” for “puede” with teachers.'
      },
      {
        id: 'que-significa',
        prompt: '¿Qué significa “deberes”?',
        answer: 'What does “homework” mean?',
        hint: 'Use to decode new words.',
        notes: 'Replace “deberes” with any vocab.'
      },
      {
        id: 'necesito-ayuda',
        prompt: 'Necesito ayuda con esto.',
        answer: 'I need help with this.',
        hint: 'Ask for support.',
        notes: 'Add pointing gestures for emphasis.'
      },
      {
        id: 'vamos-a-empezar',
        prompt: 'Vamos a empezar la actividad.',
        answer: 'We are going to start the activity.',
        hint: 'Teacher voice activated.',
        notes: 'Change “actividad” to anything you’re starting.'
      },
      {
        id: 'abre-tu-cuaderno',
        prompt: 'Abre tu cuaderno en la página diez.',
        answer: 'Open your notebook to page ten.',
        hint: 'Command form (tú).',
        notes: 'Swap the number to match the page.'
      },
      {
        id: 'trabaja-pareja',
        prompt: 'Trabaja con tu pareja por cinco minutos.',
        answer: 'Work with your partner for five minutes.',
        hint: 'Imperative + time expression.',
        notes: 'Try different time lengths.'
      },
      {
        id: 'termina-tarea',
        prompt: 'Termina la tarea para mañana.',
        answer: 'Finish the homework for tomorrow.',
        hint: 'Another command phrase.',
        notes: 'Swap “mañana” for specific days.'
      },
      {
        id: 'guarda-libros',
        prompt: 'Guarda tus libros y prepara la mochila.',
        answer: 'Put away your books and get your backpack ready.',
        hint: 'Two connected commands.',
        notes: 'Helps tidy the classroom.'
      },
      {
        id: 'repite-conmigo',
        prompt: 'Repite conmigo: “¡Vamos!”',
        answer: 'Repeat after me: “Let’s go!”',
        hint: 'Chant it with the class.',
        notes: 'Swap in any key phrase to repeat.'
      }
    ]
  },
  {
    id: 'after-school',
    title: 'Después de Clases',
    description: 'Make after-school plans and talk hobbies.',
    vibe: 'Skate ramp session',
    items: [
      {
        id: 'quieres-jugar',
        prompt: '¿Quieres jugar al baloncesto después de clase?',
        answer: 'Do you want to play basketball after class?',
        hint: 'Invite a friend to do something.',
        notes: 'Swap activities or times.'
      },
      {
        id: 'voy-biblioteca',
        prompt: 'Voy a la biblioteca para estudiar español.',
        answer: 'I am going to the library to study Spanish.',
        hint: 'Use “para” for purpose.',
        notes: 'Change destination for new plans.'
      },
      {
        id: 'me-gusta-musica',
        prompt: 'Me gusta escuchar música de los ochenta.',
        answer: 'I like listening to music from the eighties.',
        hint: 'Express likes with “Me gusta…”.',
        notes: 'Swap genres or decades.'
      },
      {
        id: 'vamos-cine',
        prompt: 'Vamos al cine el sábado.',
        answer: 'Let’s go to the cinema on Saturday.',
        hint: 'Plan a group outing.',
        notes: 'Change the day or activity.'
      },
      {
        id: 'tengo-que-estudiar',
        prompt: 'Tengo que estudiar para el examen.',
        answer: 'I have to study for the test.',
        hint: 'Express obligation.',
        notes: 'Swap “examen” for another task.'
      },
      {
        id: 'prefiero-videojuegos',
        prompt: 'Prefiero jugar a los videojuegos esta tarde.',
        answer: 'I prefer to play video games this afternoon.',
        hint: 'Talk about preferences.',
        notes: 'Change the time to practice different moments.'
      },
      {
        id: 'vamos-parque',
        prompt: '¿Vamos al parque en bicicleta?',
        answer: 'Shall we go to the park by bike?',
        hint: 'Suggest a way to travel.',
        notes: 'Swap the place or transport.'
      },
      {
        id: 'quedo-amigos',
        prompt: 'Quedo con mis amigos a las cuatro.',
        answer: 'I meet up with my friends at four.',
        hint: 'Set a meeting time.',
        notes: 'Change the hour to practice numbers.'
      },
      {
        id: 'despues-deberes',
        prompt: 'Después de hacer los deberes, veo la tele.',
        answer: 'After doing homework, I watch TV.',
        hint: 'Sequence actions with “después de…”.',
        notes: 'Replace the second action with another hobby.'
      },
      {
        id: 'nos-habla',
        prompt: 'Mi madre nos habla en español en casa.',
        answer: 'My mum speaks to us in Spanish at home.',
        hint: 'Great sentence for family practice.',
        notes: 'Swap the family member or language.'
      }
    ]
  }
];

const localStorageKey = 'magnusSpanishProgressV1';

const defaultCardState = () => ({
  efactor: 2.5,
  interval: 0,
  repetition: 0,
  due: new Date().toISOString(),
  lastReviewed: null,
  totalReviews: 0,
  history: []
});

function loadProgress() {
  const stored = localStorage.getItem(localStorageKey);
  if (!stored) {
    return {};
  }
  try {
    const parsed = JSON.parse(stored);
    return parsed || {};
  } catch (error) {
    console.warn('Progress data corrupted, resetting.', error);
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(localStorageKey, JSON.stringify(progress));
}

function getCardState(progress, setId, itemId) {
  const key = `${setId}::${itemId}`;
  if (!progress[key]) {
    progress[key] = { ...defaultCardState(), setId, itemId };
  }
  return progress[key];
}

function updateCardState(state, quality) {
  const now = new Date();
  if (quality < 3) {
    state.repetition = 0;
    state.interval = 1;
  } else {
    if (state.repetition === 0) {
      state.interval = 1;
    } else if (state.repetition === 1) {
      state.interval = 6;
    } else {
      state.interval = Math.round(state.interval * state.efactor);
    }
    state.repetition += 1;
  }

  state.efactor = Math.max(
    1.3,
    state.efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  state.due = new Date(now.getTime() + state.interval * 24 * 60 * 60 * 1000).toISOString();
  state.lastReviewed = now.toISOString();
  state.totalReviews = (state.totalReviews || 0) + 1;
  state.history.push({ quality, date: state.lastReviewed, interval: state.interval });

  return state;
}

function calculateStats(progress) {
  const now = new Date();
  let totalReviews = 0;
  let dueNow = 0;
  const sessions = [];
  let streak = 0;

  const reviewDates = new Set();

  Object.values(progress).forEach((state) => {
    if (!state || !state.lastReviewed) return;
    totalReviews += state.totalReviews || 0;

    const dueDate = new Date(state.due);
    if (dueDate <= now) {
      dueNow += 1;
    }

    const dayKey = new Date(state.lastReviewed).toDateString();
    reviewDates.add(dayKey);

    if (state.history && state.history.length) {
      const latest = state.history[state.history.length - 1];
      sessions.push({
        itemId: state.itemId,
        setId: state.setId,
        date: latest.date,
        quality: latest.quality
      });
    }
  });

  const sortedDays = Array.from(reviewDates)
    .map((d) => new Date(d))
    .sort((a, b) => b - a);

  if (sortedDays.length) {
    streak = 1;
    for (let i = 1; i < sortedDays.length; i += 1) {
      const diff = Math.round((sortedDays[i - 1] - sortedDays[i]) / (24 * 60 * 60 * 1000));
      if (diff === 1) {
        streak += 1;
      } else {
        break;
      }
    }
  }

  sessions.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    totalReviews,
    dueNow,
    streak,
    sessions: sessions.slice(0, 6)
  };
}

function buildTopicCard(set, progress) {
  const totalItems = set.items.length;
  const mastered = set.items.filter((item) => {
    const state = getCardState(progress, set.id, item.id);
    return state.repetition >= 3;
  }).length;

  const card = document.createElement('article');
  card.className = 'topic-card';
  card.innerHTML = `
    <h3>${set.title}</h3>
    <p>${set.description}</p>
    <p><strong>Vibe:</strong> ${set.vibe}</p>
    <progress value="${mastered}" max="${totalItems}"></progress>
    <p>${mastered} / ${totalItems} locked in.</p>
    <button class="btn btn--primary" data-set="${set.id}">Start / Continue</button>
  `;
  return card;
}

const state = {
  activeSet: null,
  queue: [],
  currentCard: null,
  reveal: false,
  progress: loadProgress()
};

function refreshDashboard() {
  const stats = calculateStats(state.progress);
  document.getElementById('statReviewed').textContent = stats.totalReviews;
  document.getElementById('statDueNow').textContent = stats.dueNow;
  document.getElementById('statStreak').textContent = stats.streak;

  const historyList = document.getElementById('sessionHistory');
  historyList.innerHTML = '';

  if (!stats.sessions.length) {
    const empty = document.createElement('li');
    empty.textContent = 'No sessions yet. Grab a topic and start rocking!';
    historyList.appendChild(empty);
    return;
  }

  stats.sessions.forEach((session) => {
    const { setId, itemId, date, quality } = session;
    const setInfo = vocabSets.find((v) => v.id === setId);
    const itemInfo = setInfo?.items.find((i) => i.id === itemId);

    const li = document.createElement('li');
    const dateLabel = new Date(date).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    li.innerHTML = `
      <span>${dateLabel}</span>
      <strong>${setInfo?.title || setId}</strong>
      <em>${itemInfo?.prompt || ''}</em>
      <span>Score: ${quality}</span>
    `;
    historyList.appendChild(li);
  });
}

function renderTopics() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = '';
  vocabSets.forEach((set) => {
    const card = buildTopicCard(set, state.progress);
    grid.appendChild(card);
  });
}

function hydrateQueue(setId) {
  const now = new Date();
  const set = vocabSets.find((s) => s.id === setId);
  if (!set) return;

  const dueCards = [];
  const newCards = [];

  set.items.forEach((item) => {
    const cardState = getCardState(state.progress, set.id, item.id);
    const dueDate = new Date(cardState.due);
    if (cardState.totalReviews === 0) {
      newCards.push(item);
    } else if (dueDate <= now) {
      dueCards.push(item);
    }
  });

  dueCards.sort((a, b) => {
    const stateA = getCardState(state.progress, set.id, a.id);
    const stateB = getCardState(state.progress, set.id, b.id);
    return new Date(stateA.due) - new Date(stateB.due);
  });

  state.queue = [...dueCards, ...newCards];
  state.currentCard = null;
}

function showStudyPanel(show) {
  const studySection = document.getElementById('study');
  const topicsSection = document.getElementById('topics');
  if (show) {
    studySection.removeAttribute('hidden');
    topicsSection.setAttribute('hidden', 'true');
  } else {
    studySection.setAttribute('hidden', 'true');
    topicsSection.removeAttribute('hidden');
  }
}

function updateRemainingLabel() {
  const label = document.getElementById('remainingCount');
  label.textContent = `${state.queue.length + (state.currentCard ? 1 : 0)} cards remaining in this round.`;
}

function presentNextCard() {
  if (!state.queue.length) {
    state.currentCard = null;
    document.getElementById('cardPrompt').textContent = 'All caught up!';
    document.getElementById('cardHint').textContent = 'Pick another set or add new vocab soon.';
    document.getElementById('revealBtn').setAttribute('disabled', 'true');
    document.getElementById('cardBack').setAttribute('hidden', 'true');
    document.getElementById('cardAnswer').textContent = '';
    document.getElementById('cardNotes').innerHTML = '';
    updateRemainingLabel();
    return;
  }

  state.currentCard = state.queue.shift();
  state.reveal = false;

  document.getElementById('studyTitle').textContent = vocabSets.find((s) => s.id === state.activeSet)?.title || 'Study Session';
  document.getElementById('cardPrompt').textContent = state.currentCard.prompt;
  document.getElementById('cardHint').textContent = state.currentCard.hint || '';
  document.getElementById('cardAnswer').textContent = '';
  document.getElementById('cardNotes').innerHTML = '';
  document.getElementById('revealBtn').removeAttribute('disabled');
  document.getElementById('cardBack').setAttribute('hidden', 'true');
  updateRemainingLabel();
}

function revealCard() {
  if (!state.currentCard) return;
  const setState = getCardState(state.progress, state.activeSet, state.currentCard.id);
  document.getElementById('cardAnswer').textContent = state.currentCard.answer;
  const noteLines = [state.currentCard.notes];
  if (!setState.totalReviews) {
    noteLines.push('Take a breath and speak it out loud!');
  }
  document.getElementById('cardNotes').innerHTML = noteLines.filter(Boolean).join('<br>');
  document.getElementById('cardBack').removeAttribute('hidden');
  document.getElementById('revealBtn').setAttribute('disabled', 'true');
  state.reveal = true;
  updateRemainingLabel();
}

function handleRating(event) {
  const button = event.target.closest('button[data-quality]');
  if (!button || !state.currentCard || !state.reveal) return;

  const quality = Number(button.dataset.quality);
  const cardState = getCardState(state.progress, state.activeSet, state.currentCard.id);
  updateCardState(cardState, quality);
  saveProgress(state.progress);
  refreshDashboard();

  if (quality < 4) {
    // Toss it back later in the queue
    state.queue.splice(2, 0, state.currentCard);
  }

  state.currentCard = null;
  presentNextCard();
}

function startSet(setId) {
  state.activeSet = setId;
  hydrateQueue(setId);
  showStudyPanel(true);
  presentNextCard();
}

function setupEventListeners() {
  document.getElementById('topicsGrid').addEventListener('click', (event) => {
    const button = event.target.closest('button[data-set]');
    if (!button) return;
    startSet(button.dataset.set);
  });

  document.getElementById('startSession').addEventListener('click', () => {
    const firstSet = vocabSets[0];
    if (firstSet) {
      startSet(firstSet.id);
    }
  });

  document.getElementById('backToTopics').addEventListener('click', () => {
    showStudyPanel(false);
    state.activeSet = null;
    state.queue = [];
    state.currentCard = null;
    renderTopics();
  });

  document.getElementById('revealBtn').addEventListener('click', revealCard);

  document.querySelectorAll('.ratings button').forEach((button) => {
    button.addEventListener('click', handleRating);
  });
}

function init() {
  renderTopics();
  refreshDashboard();
  setupEventListeners();
}

document.addEventListener('DOMContentLoaded', init);
