// 다국어 번역 데이터
const translations = {
    ko: {
        nav: {
            home: '홈',
            about: '소개',
            skills: '기술',
            projects: '프로젝트',
            contact: '연락처'
        },
        hero: {
            title: '안녕하세요,<br>저는 <span class="highlight">이동욱</span>입니다',
            subtitle: '창의적인 웹 솔루션을 만드는 것을 좋아합니다',
            cta: '연락하기'
        },
        about: {
            title: '소개',
            text1: '열정적인 개발자로서, 사용자 중심의 웹 애플리케이션을 만드는 것을 즐깁니다. 깔끔한 코드와 직관적인 사용자 경험을 중요하게 생각합니다.',
            text2: '지속적인 학습과 성장을 통해 최신 기술 트렌드를 따라가며, 실용적이고 혁신적인 솔루션을 제공하는 것이 목표입니다.'
        },
        skills: {
            title: '기술 스택',
            frontend: '프론트엔드',
            backend: '백엔드',
            design: '디자인',
            tools: '도구'
        },
        projects: {
            title: '프로젝트',
            projectTitle: '커피 AI 추천 시스템',
            elevatorPitch: '사용자의 취향 데이터를 학습해, 로스팅·산지·풍미 프로파일 기반으로 개인 맞춤형 커피를 추천하는 AI 커피 큐레이션 앱',
            problemTitle: '1️⃣ 문제 정의',
            problem1: '커피 선택 기준이 전문적이고 복잡함\n로스팅, 산지, 프로세싱, 향미 노트 등 다양한 요소로 인해 초보자·중급자 모두 "내 취향에 맞는 커피를 고르기 어렵다"는 문제',
            problem2: '기존 추천의 한계\n단순 인기순이나 전문가 기준 중심으로 개인 취향 반영 부족',
            solutionTitle: '2️⃣ 해결 방안',
            solution1: '사용자의 선호 데이터를 구조화',
            solution2: '커피 데이터를 객관적 지표로 벡터화',
            solution3: 'AI 알고리즘을 통해 취향 기반 맞춤 추천 시스템 제공',
            solutionHighlight: '👉 결과적으로 "커피를 공부하지 않아도, 취향에 맞는 커피를 발견할 수 있는 경험"을 제공',
            featuresTitle: '3️⃣ 핵심 기능',
            feature1Title: '① 사용자 취향 수집',
            feature1_1: '선호 로스팅 단계',
            feature1_2: '좋아하는 풍미(산미/단맛/바디감 등)',
            feature1_3: '이전 커피 평가(별점, 피드백)',
            feature2Title: '② 커피 데이터베이스',
            feature2_1: '로스팅 정도',
            feature2_2: '생산지·품종',
            feature2_3: '프로세싱 방식',
            feature2_4: '향미 프로파일',
            feature3Title: '③ AI 추천 로직',
            feature3_1: '협업 필터링 + 콘텐츠 기반 추천 혼합',
            feature3_2: '사용자 취향과 커피 특성 간 유사도 분석',
            feature3_3: '사용 이력에 따라 추천 결과 지속 학습',
            feature4Title: '④ 추천 결과 제공',
            feature4_1: '"당신과 87% 유사한 커피"',
            feature4_2: '추천 이유 시각화 (ex. 산미 선호 + 에티오피아 내추럴)',
            techTitle: '4️⃣ 기술적 접근 방식',
            tech1Title: '빅데이터 분석',
            tech1_1: '커피 속성 데이터 정규화',
            tech1_2: '사용자 행동 데이터 축적',
            tech2Title: 'AI / ML',
            tech2_1: '취향 벡터화',
            tech2_2: '추천 알고리즘 적용',
            tech3Title: '확장성 고려',
            tech3_1: '신규 커피·로스터리 데이터 추가 가능',
            tech3_2: '추천 정확도 지속 개선',
            techHighlight: '👉 "단순 추천 앱이 아니라 학습하는 시스템"이라는 점을 강조',
            valueTitle: '5️⃣ 기대 효과',
            value1Title: '사용자 관점',
            value1_1: '실패 없는 커피 선택',
            value1_2: '취향의 언어화 → 커피 이해도 상승',
            value2Title: '산업 관점',
            value2_1: '로스터리·카페와의 연계 가능',
            value2_2: '개인화 기반 커피 마케팅 플랫폼으로 확장'
        },
        contact: {
            title: '연락처',
            description: '프로젝트 협업이나 문의사항이 있으시면 언제든지 연락해주세요.',
            email: '이메일',
            phone: '연락처',
            scroll: '스크롤'
        },
        footer: {
            copyright: '© 2024 포트폴리오. All rights reserved.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            title: 'Hello,<br>I\'m <span class="highlight">Dongwook Lee</span>',
            subtitle: 'I love creating creative web solutions',
            cta: 'Contact Me'
        },
        about: {
            title: 'About',
            text1: 'As a passionate developer, I enjoy creating user-centered web applications. I value clean code and intuitive user experiences.',
            text2: 'Through continuous learning and growth, I aim to keep up with the latest technology trends and provide practical and innovative solutions.'
        },
        skills: {
            title: 'Skills',
            frontend: 'Frontend',
            backend: 'Backend',
            design: 'Design',
            tools: 'Tools'
        },
        projects: {
            title: 'Projects',
            projectTitle: 'Coffee AI Recommendation System',
            elevatorPitch: 'An AI coffee curation app that learns user preference data and recommends personalized coffee based on roasting, origin, and flavor profiles',
            problemTitle: '1️⃣ Problem Statement',
            problem1: 'Coffee selection criteria are professional and complex\nDue to various factors such as roasting, origin, processing, and flavor notes, both beginners and intermediates have difficulty finding coffee that matches their taste',
            problem2: 'Limitations of existing recommendations\nLack of personal taste reflection, relying mainly on popularity or expert standards',
            solutionTitle: '2️⃣ Solution',
            solution1: 'Structure user preference data',
            solution2: 'Vectorize coffee data into objective indicators',
            solution3: 'Provide taste-based personalized recommendation system through AI algorithms',
            solutionHighlight: '👉 As a result, providing an experience where "you can discover coffee that matches your taste without studying coffee"',
            featuresTitle: '3️⃣ Core Features',
            feature1Title: '① User Preference Collection',
            feature1_1: 'Preferred roasting level',
            feature1_2: 'Preferred flavors (acidity/sweetness/body, etc.)',
            feature1_3: 'Previous coffee ratings (stars, feedback)',
            feature2Title: '② Coffee Database',
            feature2_1: 'Roasting level',
            feature2_2: 'Origin and variety',
            feature2_3: 'Processing method',
            feature2_4: 'Flavor profile',
            feature3Title: '③ AI Recommendation Logic',
            feature3_1: 'Hybrid of collaborative filtering + content-based recommendation',
            feature3_2: 'Similarity analysis between user preferences and coffee characteristics',
            feature3_3: 'Continuous learning of recommendation results based on usage history',
            feature4Title: '④ Recommendation Results',
            feature4_1: '"Coffee 87% similar to you"',
            feature4_2: 'Visualization of recommendation reasons (ex. acidity preference + Ethiopian natural)',
            techTitle: '4️⃣ Technical Approach',
            tech1Title: 'Big Data Analysis',
            tech1_1: 'Normalization of coffee attribute data',
            tech1_2: 'Accumulation of user behavior data',
            tech2Title: 'AI / ML',
            tech2_1: 'Preference vectorization',
            tech2_2: 'Application of recommendation algorithms',
            tech3Title: 'Scalability',
            tech3_1: 'Ability to add new coffee and roastery data',
            tech3_2: 'Continuous improvement of recommendation accuracy',
            techHighlight: '👉 Emphasizing that it is "not just a recommendation app, but a learning system"',
            valueTitle: '5️⃣ Expected Effects',
            value1Title: 'User Perspective',
            value1_1: 'No-fail coffee selection',
            value1_2: 'Linguisticization of taste → Increased coffee understanding',
            value2Title: 'Industry Perspective',
            value2_1: 'Possible connection with roasteries and cafes',
            value2_2: 'Expansion to personalized coffee marketing platform'
        },
        contact: {
            title: 'Contact',
            description: 'Please feel free to contact me for project collaboration or inquiries.',
            email: 'Email',
            phone: 'Phone',
            scroll: 'Scroll'
        },
        footer: {
            copyright: '© 2024 Portfolio. All rights reserved.'
        }
    },
    ja: {
        nav: {
            home: 'ホーム',
            about: '自己紹介',
            skills: 'スキル',
            projects: 'プロジェクト',
            contact: 'お問い合わせ'
        },
        hero: {
            title: 'こんにちは、<br>私は<span class="highlight">李東旭</span>です',
            subtitle: '創造的なウェブソリューションを作ることが好きです',
            cta: 'お問い合わせ'
        },
        about: {
            title: '自己紹介',
            text1: '情熱的な開発者として、ユーザー中心のウェブアプリケーションを作ることを楽しんでいます。クリーンなコードと直感的なユーザー体験を大切に考えています。',
            text2: '継続的な学習と成長を通じて、最新の技術トレンドに追随し、実用的で革新的なソリューションを提供することを目指しています。'
        },
        skills: {
            title: 'スキル',
            frontend: 'フロントエンド',
            backend: 'バックエンド',
            design: 'デザイン',
            tools: 'ツール'
        },
        projects: {
            title: 'プロジェクト',
            projectTitle: 'コーヒーAI推薦システム',
            elevatorPitch: 'ユーザーの好みデータを学習し、ロースト・産地・風味プロファイルに基づいて個人向けコーヒーを推薦するAIコーヒーキュレーションアプリ',
            problemTitle: '1️⃣ 問題定義',
            problem1: 'コーヒー選択基準が専門的で複雑\nロースト、産地、処理方法、香味ノートなど多様な要素により、初心者・中級者ともに「自分の好みに合うコーヒーを選ぶのが難しい」という問題',
            problem2: '既存推薦の限界\n単純な人気順や専門家基準中心で、個人の好み反映不足',
            solutionTitle: '2️⃣ 解決策',
            solution1: 'ユーザーの好みデータを構造化',
            solution2: 'コーヒーデータを客観的指標でベクトル化',
            solution3: 'AIアルゴリズムを通じて好みベースのカスタム推薦システムを提供',
            solutionHighlight: '👉 結果として、「コーヒーを勉強しなくても、好みに合うコーヒーを発見できる体験」を提供',
            featuresTitle: '3️⃣ 核心機能',
            feature1Title: '① ユーザー好み収集',
            feature1_1: '好みのロースト段階',
            feature1_2: '好みの風味（酸味/甘味/ボディ感など）',
            feature1_3: '以前のコーヒー評価（星評価、フィードバック）',
            feature2Title: '② コーヒーデータベース',
            feature2_1: 'ロースト度',
            feature2_2: '生産地・品種',
            feature2_3: '処理方法',
            feature2_4: '香味プロファイル',
            feature3Title: '③ AI推薦ロジック',
            feature3_1: '協調フィルタリング + コンテンツベース推薦の混合',
            feature3_2: 'ユーザー好みとコーヒー特性間の類似度分析',
            feature3_3: '使用履歴に応じた推薦結果の継続学習',
            feature4Title: '④ 推薦結果提供',
            feature4_1: '「あなたと87%類似したコーヒー」',
            feature4_2: '推薦理由の可視化（例：酸味好み + エチオピアナチュラル）',
            techTitle: '4️⃣ 技術的アプローチ',
            tech1Title: 'ビッグデータ分析',
            tech1_1: 'コーヒー属性データの正規化',
            tech1_2: 'ユーザー行動データの蓄積',
            tech2Title: 'AI / ML',
            tech2_1: '好みのベクトル化',
            tech2_2: '推薦アルゴリズムの適用',
            tech3Title: '拡張性考慮',
            tech3_1: '新規コーヒー・ロースターリーデータの追加可能',
            tech3_2: '推薦精度の継続的改善',
            techHighlight: '👉 「単純な推薦アプリではなく、学習するシステム」という点を強調',
            valueTitle: '5️⃣ 期待効果',
            value1Title: 'ユーザー観点',
            value1_1: '失敗のないコーヒー選択',
            value1_2: '好みの言語化 → コーヒー理解度向上',
            value2Title: '産業観点',
            value2_1: 'ロースターリー・カフェとの連携可能',
            value2_2: 'パーソナライゼーションベースのコーヒーマーケティングプラットフォームへの拡張'
        },
        contact: {
            title: 'お問い合わせ',
            description: 'プロジェクト協業やお問い合わせがございましたら、いつでもご連絡ください。',
            email: 'メール',
            phone: '連絡先',
            scroll: 'スクロール'
        },
        footer: {
            copyright: '© 2024 ポートフォリオ。全著作権所有。'
        }
    }
};

// 현재 언어 가져오기
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'ko';
}

// 언어 설정하기
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updateContent(lang);
}

// 콘텐츠 업데이트
function updateContent(lang) {
    const t = translations[lang];
    
    // 네비게이션
    document.querySelectorAll('[data-i18n="nav.home"]').forEach(el => el.textContent = t.nav.home);
    document.querySelectorAll('[data-i18n="nav.about"]').forEach(el => el.textContent = t.nav.about);
    document.querySelectorAll('[data-i18n="nav.skills"]').forEach(el => el.textContent = t.nav.skills);
    document.querySelectorAll('[data-i18n="nav.projects"]').forEach(el => el.textContent = t.nav.projects);
    document.querySelectorAll('[data-i18n="nav.contact"]').forEach(el => el.textContent = t.nav.contact);
    
    // Hero 섹션
    document.querySelectorAll('[data-i18n="hero.title"]').forEach(el => el.innerHTML = t.hero.title);
    document.querySelectorAll('[data-i18n="hero.subtitle"]').forEach(el => el.textContent = t.hero.subtitle);
    document.querySelectorAll('[data-i18n="hero.cta"]').forEach(el => el.textContent = t.hero.cta);
    document.querySelectorAll('[data-i18n="contact.scroll"]').forEach(el => el.textContent = t.contact.scroll);
    
    // About 섹션
    document.querySelectorAll('[data-i18n="about.title"]').forEach(el => el.textContent = t.about.title);
    document.querySelectorAll('[data-i18n="about.text1"]').forEach(el => el.textContent = t.about.text1);
    document.querySelectorAll('[data-i18n="about.text2"]').forEach(el => el.textContent = t.about.text2);
    
    // Skills 섹션
    document.querySelectorAll('[data-i18n="skills.title"]').forEach(el => el.textContent = t.skills.title);
    document.querySelectorAll('[data-i18n="skills.frontend"]').forEach(el => el.textContent = t.skills.frontend);
    document.querySelectorAll('[data-i18n="skills.backend"]').forEach(el => el.textContent = t.skills.backend);
    document.querySelectorAll('[data-i18n="skills.design"]').forEach(el => el.textContent = t.skills.design);
    document.querySelectorAll('[data-i18n="skills.tools"]').forEach(el => el.textContent = t.skills.tools);
    
    // Contact 섹션
    document.querySelectorAll('[data-i18n="contact.title"]').forEach(el => el.textContent = t.contact.title);
    document.querySelectorAll('[data-i18n="contact.description"]').forEach(el => el.textContent = t.contact.description);
    document.querySelectorAll('[data-i18n="contact.email"]').forEach(el => el.textContent = t.contact.email);
    document.querySelectorAll('[data-i18n="contact.phone"]').forEach(el => el.textContent = t.contact.phone);
    
    // Footer
    document.querySelectorAll('[data-i18n="footer.copyright"]').forEach(el => el.textContent = t.footer.copyright);
    
    // 프로젝트 섹션은 복잡하므로 별도 함수로 처리
    updateProjectContent(lang);
}

// 프로젝트 콘텐츠 업데이트
function updateProjectContent(lang) {
    const t = translations[lang].projects;
    
    document.querySelectorAll('[data-i18n="projects.title"]').forEach(el => el.textContent = t.title);
    document.querySelectorAll('[data-i18n="projects.projectTitle"]').forEach(el => el.textContent = t.projectTitle);
    document.querySelectorAll('[data-i18n="projects.elevatorPitch"]').forEach(el => el.textContent = t.elevatorPitch);
    document.querySelectorAll('[data-i18n="projects.problemTitle"]').forEach(el => el.textContent = t.problemTitle);
    document.querySelectorAll('[data-i18n="projects.problem1"]').forEach(el => el.innerHTML = t.problem1.replace(/\n/g, '<br>'));
    document.querySelectorAll('[data-i18n="projects.problem2"]').forEach(el => el.innerHTML = t.problem2.replace(/\n/g, '<br>'));
    document.querySelectorAll('[data-i18n="projects.solutionTitle"]').forEach(el => el.textContent = t.solutionTitle);
    document.querySelectorAll('[data-i18n="projects.solution1"]').forEach(el => el.textContent = t.solution1);
    document.querySelectorAll('[data-i18n="projects.solution2"]').forEach(el => el.textContent = t.solution2);
    document.querySelectorAll('[data-i18n="projects.solution3"]').forEach(el => el.textContent = t.solution3);
    document.querySelectorAll('[data-i18n="projects.solutionHighlight"]').forEach(el => el.innerHTML = t.solutionHighlight);
    document.querySelectorAll('[data-i18n="projects.featuresTitle"]').forEach(el => el.textContent = t.featuresTitle);
    document.querySelectorAll('[data-i18n="projects.feature1Title"]').forEach(el => el.textContent = t.feature1Title);
    document.querySelectorAll('[data-i18n="projects.feature1_1"]').forEach(el => el.textContent = t.feature1_1);
    document.querySelectorAll('[data-i18n="projects.feature1_2"]').forEach(el => el.textContent = t.feature1_2);
    document.querySelectorAll('[data-i18n="projects.feature1_3"]').forEach(el => el.textContent = t.feature1_3);
    document.querySelectorAll('[data-i18n="projects.feature2Title"]').forEach(el => el.textContent = t.feature2Title);
    document.querySelectorAll('[data-i18n="projects.feature2_1"]').forEach(el => el.textContent = t.feature2_1);
    document.querySelectorAll('[data-i18n="projects.feature2_2"]').forEach(el => el.textContent = t.feature2_2);
    document.querySelectorAll('[data-i18n="projects.feature2_3"]').forEach(el => el.textContent = t.feature2_3);
    document.querySelectorAll('[data-i18n="projects.feature2_4"]').forEach(el => el.textContent = t.feature2_4);
    document.querySelectorAll('[data-i18n="projects.feature3Title"]').forEach(el => el.textContent = t.feature3Title);
    document.querySelectorAll('[data-i18n="projects.feature3_1"]').forEach(el => el.textContent = t.feature3_1);
    document.querySelectorAll('[data-i18n="projects.feature3_2"]').forEach(el => el.textContent = t.feature3_2);
    document.querySelectorAll('[data-i18n="projects.feature3_3"]').forEach(el => el.textContent = t.feature3_3);
    document.querySelectorAll('[data-i18n="projects.feature4Title"]').forEach(el => el.textContent = t.feature4Title);
    document.querySelectorAll('[data-i18n="projects.feature4_1"]').forEach(el => el.textContent = t.feature4_1);
    document.querySelectorAll('[data-i18n="projects.feature4_2"]').forEach(el => el.textContent = t.feature4_2);
    document.querySelectorAll('[data-i18n="projects.techTitle"]').forEach(el => el.textContent = t.techTitle);
    document.querySelectorAll('[data-i18n="projects.tech1Title"]').forEach(el => el.textContent = t.tech1Title);
    document.querySelectorAll('[data-i18n="projects.tech1_1"]').forEach(el => el.textContent = t.tech1_1);
    document.querySelectorAll('[data-i18n="projects.tech1_2"]').forEach(el => el.textContent = t.tech1_2);
    document.querySelectorAll('[data-i18n="projects.tech2Title"]').forEach(el => el.textContent = t.tech2Title);
    document.querySelectorAll('[data-i18n="projects.tech2_1"]').forEach(el => el.textContent = t.tech2_1);
    document.querySelectorAll('[data-i18n="projects.tech2_2"]').forEach(el => el.textContent = t.tech2_2);
    document.querySelectorAll('[data-i18n="projects.tech3Title"]').forEach(el => el.textContent = t.tech3Title);
    document.querySelectorAll('[data-i18n="projects.tech3_1"]').forEach(el => el.textContent = t.tech3_1);
    document.querySelectorAll('[data-i18n="projects.tech3_2"]').forEach(el => el.textContent = t.tech3_2);
    document.querySelectorAll('[data-i18n="projects.techHighlight"]').forEach(el => el.innerHTML = t.techHighlight);
    document.querySelectorAll('[data-i18n="projects.valueTitle"]').forEach(el => el.textContent = t.valueTitle);
    document.querySelectorAll('[data-i18n="projects.value1Title"]').forEach(el => el.textContent = t.value1Title);
    document.querySelectorAll('[data-i18n="projects.value1_1"]').forEach(el => el.textContent = t.value1_1);
    document.querySelectorAll('[data-i18n="projects.value1_2"]').forEach(el => el.textContent = t.value1_2);
    document.querySelectorAll('[data-i18n="projects.value2Title"]').forEach(el => el.textContent = t.value2Title);
    document.querySelectorAll('[data-i18n="projects.value2_1"]').forEach(el => el.textContent = t.value2_1);
    document.querySelectorAll('[data-i18n="projects.value2_2"]').forEach(el => el.textContent = t.value2_2);
}

// 페이지 로드 시 언어 적용
function initLanguage() {
    const currentLang = getCurrentLanguage();
    setLanguage(currentLang);
}

// DOMContentLoaded 또는 이미 로드된 경우 즉시 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    // 이미 로드된 경우
    initLanguage();
}

// 전역으로 export (다른 스크립트에서 사용 가능)
if (typeof window !== 'undefined') {
    window.i18n = {
        setLanguage,
        getCurrentLanguage,
        translations
    };
}

