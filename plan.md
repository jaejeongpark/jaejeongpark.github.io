# plan.md — Portfolio Website 개발 계획서
> Jaejeong Park | 버전: v1.0 | 작성일: 2026-03-09

---

## 1. 프로젝트 목표

채용담당자가 열었을 때 **"이 사람은 다르다"** 는 첫인상을 주는 포트폴리오.

- 광통신 → AI/로보틱스 커리어 전환의 **의도성과 일관성** 부각
- UCI PhD 연구 경험 + 제1저자 논문으로 **학문적 깊이** 증명
- Pablo Air / Hancom / Dextech의 **실전 드론 프로젝트** 경험 구체화
- 채용담당자 타깃: AI/Robotics/UAM/자율주행 분야 기업

---

## 2. 포지셔닝 전략

### 핵심 정체성
```
"AI-Driven Autonomy Researcher & Engineer"
광통신 하드웨어 엔지니어 → 자기주도 전환 → 드론/로보틱스 실전 →
UCI PhD 연구(논문 1편) → 산업계 복귀
```

### 강점 삼각형
```
       [학문적 깊이]
      UCI PhD + 논문
           ▲
          / \
         /   \
[실전 경험] ─── [전환 의지]
Pablo/Hancom     자기주도학습
```

### PhD 중단 → 강점으로 전환하는 논리
- 박사과정에서 제1저자 논문 게재 → 연구 역량 입증 완료
- GPA 3.93/4.0 → 학문적 성실성 증명
- **"연구 역량이 충분히 검증된 후 산업 현장에서 직접 적용하기 위해 복귀"**
- 단, 웹사이트에서는 이 설명을 길게 쓰지 않고 사실(경력, 논문)만으로 보여준다

---

## 3. 섹션별 콘텐츠 계획

### 3.1 HERO 섹션
```
// SYSTEM ONLINE — AI AUTONOMY RESEARCHER & ENGINEER

JAEJEONG
PARK

[ Motion Planning ]  [ eVTOL / UAM ]  [ Visual Navigation ]  [ Certified ML ]

▶ VIEW RESEARCH        ▷ DOWNLOAD CV
```
- 타이핑 효과: `"AI Autonomy Researcher & Engineer"` 타이핑
- 이전 "Navigation & Control Engineer" → UAM 연구까지 반영한 업그레이드

---

### 3.2 ABOUT 섹션
```
SYSTEM ID: JP-1991
STATUS: ● ACTIVE — Seeking AI/Robotics/UAM Position
LOCATION: Republic of Korea
CONTACT: jaejeonp@uci.edu

// PROFILE
Electrical Engineer with a rare trajectory:
hardware roots in optical communications,
self-driven pivot to AI & robotics,
industry research at the forefront of drone autonomy,
and doctoral research on certified ML for Urban Air Mobility.

Now returning to industry — bringing both depth and execution.
```

- 커리어 전환 스토리를 2~3줄로 압축
- 개인적 취미/관심사 등 사적 내용 일체 배제 — 직업적 역량과 경력만 표시

---

### 3.3 EXPERIENCE 타임라인

**표시 방식**: 세로 타임라인, Licomm에서 커리어 피벗 구분선 삽입

| 기간 | 회사 | 직책 | 포커스 |
|------|------|------|--------|
| Oct 2023 – Jan 2026 | **University of California, Irvine** | Doctoral Researcher | Noise-aware motion planning for UAM, Certified ML, monotonic NN |
| Jun 2022 – Mar 2023 | **Pablo Air Co., Ltd.** | Research Engineer | Drone maritime delivery, ship detection (YOLO+CSRT), visual odometry, precision landing |
| Jan 2022 – Jun 2022 | **Dextech Co., Ltd.** (w/ Pablo Air) | Joint Project Executor | Inspection drone, 3D point cloud, SIFT-based visual odometry |
| Feb 2021 – Dec 2021 | **Hancom InSpace Co., Ltd.** | Assistant Researcher | MPC+GP path planning, navigation robot maintenance |
| ── CAREER PIVOT: Optical Comm → AI & Robotics ── | | | |
| Feb 2016 – Jul 2019 | **Licomm Co., Ltd.** | Research Engineer | SFP transceiver design, R-ONU, analog/digital circuitry (간략 표시) |
| May 2015 – Jul 2015 | **Fottu Co., Ltd.** | Intern | BOSA temperature stress test (한 줄 최소 표시) |
| Jun 2011 – Aug 2014 | **Opticis Co., Ltd.** | Intern | Fiber optic extension quality testing (한 줄 최소 표시) |

> 광통신 시절(Licomm 포함) 경력은 완전히 삭제하지 않고 타임라인에 약하게 유지.
> Licomm 이전 인턴십은 한 줄로 최소화하여 커리어 출발점만 표시.

---

### 3.4 EDUCATION 섹션

```
┌─────────────────────────────────────────────────────────┐
│  EDUCATION LOG                                          │
│  ───────────────────────────────────────────────────    │
│  ■ University of California, Irvine                     │
│    Doctoral Researcher, Electrical Engineering          │
│    Oct 2023 – Jan 2026  |  GPA: 3.93/4.0               │
│    → Published: arXiv:2509.20306 (First Author)        │
│                                                         │
│  ■ University at Buffalo, SUNY                          │
│    Master of Science, Electrical Engineering            │
│    Sep 2014 – Dec 2015  |  GPA: 3.83/4.0               │
│                                                         │
│  ■ University at Buffalo, SUNY                          │
│    Bachelor of Science, Electrical Engineering          │
│    Sep 2010 – Sep 2014  |  GPA: 3.61/4.0               │
│    Magna Cum Laude · High Distinction                   │
└─────────────────────────────────────────────────────────┘
```

---

### 3.5 PUBLICATIONS 섹션

```
[2025]  Certified Learning-Enabled Noise-Aware Motion Planning
        for Urban Air Mobility
        arXiv:2509.20306v1 [eess.SY] — September 24, 2025
        Authors: Jaejeong Park*, Mahmoud Elfar, Cody Fleming, Yasser Shoukry
        (* First Author)
        Keywords: Motion Planning · Urban Air Mobility · Certified ML · Monotonic NN · RRT*
        [ READ PAPER ↗ ]  [ arXiv ↗ ]
```

- 논문 요약 (1~2줄): eVTOL 소음 규제를 준수하는 UAM 경로 계획 프레임워크
- 제1저자 강조 배지

---

### 3.6 SKILLS 섹션

**카테고리 재구성** (PhD 연구까지 반영):

```
AUTONOMY & MOTION PLANNING
██████████████  Motion Planning (RRT*, MPC)
████████████░░  Path Optimization
██████████░░░░  Certified ML / Formal Verification

VISION & AI
████████████░░  Object Detection (YOLO)
███████████░░░  Visual Odometry / SLAM
█████████░░░░░  3D Point Cloud Processing
██████████░░░░  Feature Matching (SIFT/ORB)

MACHINE LEARNING
████████████░░  Python / PyTorch / Keras
██████████░░░░  Neural Network Design
████████░░░░░░  Gaussian Process

ROBOTICS STACK
█████████████░  ROS (Fluent)
████████████░░  Gazebo (Fluent)
██████████░░░░  PX4 / Drone Systems
█████████░░░░░  IMU / GNSS / Sensor Fusion

HARDWARE (Background)
████████░░░░░░  Circuit Design (SFP, R-ONU)
███████░░░░░░░  PCB / RF Tuning
```

---

### 3.7 PROJECTS 섹션

| # | 프로젝트명 | 핵심 기술 | 기간 | 상태 |
|---|-----------|-----------|------|------|
| 01 | Noise-Aware UAM Motion Planning | Certified ML, Monotonic NN, RRT*, eVTOL | 2023–2025 | PUBLISHED |
| 02 | Maritime Ship Autonomous Delivery | YOLO, CSRT, Visual Odometry, PX4 | 2022–2023 | COMPLETE |
| 03 | Inspection Drone | 3D Point Cloud, SIFT, PnP | 2022 | COMPLETE |
| 04 | MPC + GP Race Car Path Planning | Model Predictive Control, Gaussian Process | 2021 | COMPLETE |
| 05 | Precision Landing | YOLO Detection, Image Tracker, Marker | 2022 | COMPLETE |
| 06 | Lunar Surface Navigation (On-Orbit) | TRN, Sensor Fusion (Camera+Lidar+Radar) | 2022–2023 | RESEARCH |

- PROJECT 01 (논문)은 카드 상단 강조 배지 "PUBLISHED @ arXiv"

---

### 3.8 CONTACT 섹션

```
// ESTABLISH CONNECTION

jaejeonp@uci.edu
+82-10-8688-2773
Republic of Korea

[ LinkedIn ↗ ]    [ GitHub ↗ ]    [ Download CV ↗ ]

©2026 JAEJEONG PARK. Built with precision.
```

---

## 4. 파일 구조

```
profile-website/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css          — 전체 스타일, CSS Variables
│   │   ├── animations.css    — 애니메이션 (스캔라인, 타이핑, 글리치)
│   │   └── responsive.css    — 모바일 반응형 (768px, 1024px)
│   ├── js/
│   │   ├── main.js           — 스크롤 스파이, Intersection Observer
│   │   ├── typewriter.js     — 타이핑 효과
│   │   └── cursor.js         — 커스텀 커서
│   └── images/
│       ├── profile.jpg       — [TODO: 프로필 사진]
│       └── projects/         — 프로젝트 썸네일
├── cv/
│   └── jaejeong_park_cv.pdf  — [TODO: 업데이트된 CV]
├── ref/                      — 참고 파일 (배포 제외, .gitignore)
├── plan.md
├── CLAUDE.md
└── README.md
```

---

## 5. 개발 단계 (STEP-BY-STEP)

### STEP 1 — 프로젝트 초기화
- [ ] 파일 구조 생성
- [ ] Google Fonts CDN 세팅
- [ ] CSS Variables / Reset 정의

### STEP 2 — HTML 뼈대
- [ ] index.html 시맨틱 구조
- [ ] 모든 섹션 id 설정
- [ ] NAV 앵커 연결

### STEP 3 — 디자인 시스템 (CSS)
- [ ] 컬러/타이포/스페이싱 토큰 적용
- [ ] 스캔라인 오버레이
- [ ] HUD 프레임 컴포넌트

### STEP 4 — 섹션별 스타일링
- [ ] Hero → About → Experience → Skills
- [ ] Education → Publications → Projects → Contact

### STEP 5 — 인터랙션 (JS)
- [ ] 커스텀 커서
- [ ] 타이핑 애니메이션
- [ ] 스크롤 스파이
- [ ] Intersection Observer (등장 애니메이션)
- [ ] Skills 프로그레스 바 애니메이션

### STEP 6 — 반응형
- [ ] 모바일 (< 768px)
- [ ] 태블릿 (768px ~ 1024px)

### STEP 7 — 콘텐츠 파인튜닝
- [ ] 프로필 사진 교체
- [ ] CV PDF 연결
- [ ] 연락처 정보 확인 및 업데이트
- [ ] 논문 arXiv 링크 확인

### STEP 8 — 배포
- [ ] GitHub Pages 활성화 (Settings → Pages → main branch)
- [ ] 최종 성능/접근성 점검

---

## 6. 개발 시작 전 사용자 확인 필요 항목

> 아래 항목들을 준비해주시면 개발을 시작합니다.

- [x] **프로필 사진**: `ref/정장사진_edited_...jpg` 사용 확정
- [x] **이메일**: jaejeonp@uci.edu 확정
- [x] **전화번호**: +82-10-8688-2773 확정
- [x] **GitHub 계정 주소**: jaejeongpark 확정
- [x] **사이트 언어**: 한영 병기 + 우측 상단 언어 토글 버튼 (KO / EN)
- [ ] **CV PDF**: 웹사이트 완성 후 업데이트 예정 — 일단 현재 CV로 진행
- [ ] **커스텀 도메인**: 추후 구매 예정

---

*plan.md v1.0 | 2026-03-09*
