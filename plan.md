# plan.md — Portfolio Website 개발 계획서
> Jaejeong Park | 버전: v2.1 | 최종 수정: 2026-03-10

---

## 1. 프로젝트 목표

채용담당자가 열었을 때 **"이 사람은 다르다"** 는 첫인상을 주는 포트폴리오.

- 광통신 → AI/로보틱스 커리어 전환의 **의도성과 일관성** 부각
- UCI PhD 연구 경험 + 제1저자 논문으로 **학문적 깊이** 증명
- Pablo Air / Hancom / Dextech의 **실전 드론 프로젝트** 경험을 영상/이미지로 구체화
- 채용담당자 타깃: AI/Robotics/UAM/자율주행 분야 기업

---

## 2. 디자인 방향 (v2.0 업데이트)

### 콘셉트: "Clean Dark Professional"
v1의 화려한 Terminal/Aerospace 테마에서 일부 수정.
**절제된 고급 다크 디자인** — 선명한 타이포그래피와 여백이 콘텐츠를 부각.
레퍼런스 톤: Linear, Vercel, Resend 계열의 clean dark.

### v1 → v2 변경 사항

| 항목 | v1 | v2 |
|------|----|----|
| 스캔라인 오버레이 | ✅ 있음 | ❌ 제거 |
| HUD 프레임 (모서리 브래킷) | ✅ 있음 | ❌ 제거 |
| 글리치 hover 효과 | ✅ 있음 | ❌ 제거 |
| 커스텀 십자선 커서 | ✅ 있음 | ❌ 제거 |
| Education log 스타일 | ✅ 있음 | ✅ **유지** |
| Skills 프로그레스 바 스타일 | ✅ 있음 | ✅ **유지** |
| EXPERIENCE + PROJECTS 섹션 (별도) | ✅ 있음 | ❌ 통합 → WORK 섹션 |
| 프로젝트 상세 페이지 | ❌ 없음 | ✅ 신규 추가 |
| 프로젝트 카드 hover 영상 재생 | ❌ 없음 | ✅ 신규 추가 |

### 유지되는 인터랙션
- 타이핑 애니메이션 (히어로)
- KO/EN 언어 토글
- 스크롤 스파이 nav
- fade-in 등장 애니메이션 (Intersection Observer)
- Skills 프로그레스 바 애니메이션 (v1 스타일 그대로)
- Education log 디자인 (v1 스타일 그대로)

### 신규 인터랙션
- 프로젝트 카드 hover → 영상 자동 재생 (음소거, loop)
- 프로젝트 카드 클릭 → 해당 프로젝트 상세 페이지로 이동
- hover 해제 → 영상 정지 및 썸네일 복원

---

## 3. 사이트 구조 (v2.0)

```
index.html (SPA)
├── NAV          — 고정 네비게이션
├── HERO         — 타이핑 애니메이션, 정체성 선언
├── ABOUT        — 프로필 + 커리어 전환 스토리
├── WORK         — 경력 + 프로젝트 통합 섹션 (신규, v1의 EXPERIENCE+PROJECTS 대체)
├── SKILLS       — 기술 스택 시각화 (v1 스타일 유지)
├── EDUCATION    — Education log (v1 스타일 유지)
├── PUBLICATIONS — 논문 카드
└── CONTACT      — 연락처

projects/                      — 프로젝트 상세 페이지 (신규)
├── uam-motion-planning.html
├── maritime-delivery.html
├── inspection-drone.html
├── precision-landing.html
├── mpc-gp-pathplanning.html
└── visual-navigation.html
```

---

## 4. 섹션별 콘텐츠 계획

### 4.1 HERO (v1과 동일)
- 상단 레이블: `// SYSTEM ONLINE — AI AUTONOMY RESEARCHER & ENGINEER`
- 대형 이름: JAEJEONG / PARK
- 타이핑 효과 (역할 문구 순환)
- 태그: [ Motion Planning ] [ eVTOL / UAM ] [ Visual Navigation ] [ Certified ML ]
- CTA: VIEW RESEARCH / DOWNLOAD CV
- 스크롤 힌트

---

### 4.2 ABOUT (v1과 동일)
- 프로필 사진 + 상태 카드 (STATUS: ACTIVE, LOCATION, CONTACT)
- 커리어 전환 스토리 텍스트 (2~3문단)
- 스토리라인 한 줄 요약

---

### 4.3 WORK — 경력 + 프로젝트 통합 (핵심 신규 섹션)

**레이아웃 개요:**
```
┌────────────────────────────────────────────────────────────────┐
│                      WORK  섹션                                 │
├──────────────────────────┬─────────────────────────────────────┤
│  [회사 / 기간 / 역할]    │  [프로젝트 카드 1]  [프로젝트 카드 2] │
│  ─ bullet descriptions   │                                     │
│  ─ tech tags             │  hover → 영상 재생                  │
│                          │  click → 상세 페이지                 │
└──────────────────────────┴─────────────────────────────────────┘
```
- 왼쪽 (약 40%): 회사명, 기간, 역할, 설명, 태그
- 오른쪽 (약 60%): 프로젝트 카드 1~2개 나란히

**프로젝트 카드 디자인:**
```
┌──────────────────────────┐
│  [영상 썸네일 or 이미지]  │  ← hover시 video.play()
│  16:9 비율               │
├──────────────────────────┤
│  프로젝트명               │
│  한 줄 설명               │
│  [ TAG ] [ TAG ]         │
│                   →  상세│
└──────────────────────────┘
```

**경력별 프로젝트 매핑 및 미디어:**

| 회사 | 기간 | 프로젝트 카드 | 카드 대표 미디어 |
|------|------|--------------|----------------|
| UC Irvine | 2023–2026 | Noise-Aware UAM Motion Planning | 영상 없음 → arXiv 논문 링크 카드 |
| Pablo Air | 2022–2023 | Maritime Ship Autonomous Delivery | `선용품_small.mp4` |
| Dextech | 2022 | Inspection Drone | `inspection drone project.mp4` |
| Dextech | 2022 | Precision Landing | `01 - gazebo시점_small.mp4` |
| Hancom InSpace | 2021 | MPC + GP Path Planning | `04 - 주행테스트.mp4` |
| Hancom InSpace | 2021 | Visual Navigation | `07 - visual navigation.mp4` |

> **Licomm / Fottu / Opticis**: 프로젝트 카드 없이 경력 텍스트만 (dimmed 처리 유지, 기존과 동일)

---

### 4.4 SKILLS (v1 스타일 그대로 유지)
프로그레스 바 스타일, 카테고리 구성, 퍼센트 값 모두 v1과 동일.
- Autonomy & Motion Planning
- Vision & AI
- Machine Learning
- Robotics Stack
- Hardware (Background)
- Languages & Tools

---

### 4.5 EDUCATION (v1 Education log 스타일 그대로 유지)
`EDUCATION LOG` 상단 탭 레이블, mono font 박스, 구분선 스타일 모두 v1과 동일.
- UCI Doctoral Researcher (GPA 3.93) + arXiv 논문 링크
- UB MS EE (GPA 3.83)
- UB BS EE (GPA 3.61, Magna Cum Laude)

---

### 4.6 PUBLICATIONS (v1과 동일)
- arXiv:2509.20306 카드
- 제1저자 강조 배지, 논문 요약, 키워드, 링크 버튼

---

### 4.7 CONTACT (v1과 동일)
- 이메일, 전화, 위치
- LinkedIn / GitHub / CV 다운로드 버튼
- 터미널 스타일 우측 패널

---

## 5. 프로젝트 상세 페이지 (projects/*.html)

index.html과 동일한 nav 공유.
Back 버튼 → `../index.html#work` 앵커로 복귀.

### 공통 페이지 레이아웃:
```
NAV (공통)
├── HERO 영역         — 프로젝트명 + 회사/기간 + 한 줄 요약 + Back 버튼
├── OVERVIEW          — 프로젝트 배경, 목표, 본인 역할
├── MEDIA GALLERY     — 영상(들) + 이미지 그리드
├── TECH DETAILS      — 사용 기술 / 접근 방법 상세
├── KEY RESULTS       — 주요 결과 / 성과
└── FOOTER (공통)
```

### 페이지별 미디어 자산 목록:

**01. uam-motion-planning.html** (UC Irvine, 2023–2025)
- 미디어: 없음 → arXiv 논문 임베드 및 링크 강조
- 내용: Abstract, 핵심 기여 (MNN, RRT*, noise constraint), 아키텍처 설명

**02. maritime-delivery.html** (Pablo Air, 2022–2023)
- 영상: `선용품_small.mp4`, `Pathplanning vid.mp4`, `pg_2.mp4`, `pg_3.mp4`
- 이미지: `pg_1.png`, `pg_3.png`, `pg_4.png`, `Ship_detection.png`, `Pathplanning.gif`
- 카드 대표: `선용품_small.mp4`

**03. inspection-drone.html** (Dextech, 2022)
- 영상: `inspection drone project.mp4`
- 이미지: `2D_3D Mapping_3.png`, `keypoint extraction.png`, `keypoint matching_2.png`,
          `Plane_Drone_model.png`, `Plane Scanning.png`, `Simulation_Gazebo_5.png`,
          `Simulation Result_6.png`, `Simulation Result.png`, `Whole View_4.png`
- 카드 대표: `inspection drone project.mp4`

**04. precision-landing.html** (Dextech, 2022)
- 영상: `01 - gazebo시점_small.mp4`, `02 - 드론시점_small.mp4`, `03 - ship_recognition small.mkv`
- 이미지: `landing_target.png`
- 카드 대표: `01 - gazebo시점_small.mp4`

**05. mpc-gp-pathplanning.html** (Hancom InSpace, 2021)
- 영상: `04 - 주행테스트.mp4`, `05 - simulation 결과.mp4`
- 이미지: `step_1.png`, `step_2.png`, `step_3.png`, `step_4.png`, `track.jpg`
- 카드 대표: `04 - 주행테스트.mp4`

**06. visual-navigation.html** (Hancom InSpace, 2021)
- 영상: `07 - visual navigation.mp4`, `01 - pointcloud2_trim_small.mp4`,
        `02 - PointCloud_small.mp4`, `03 - disparity_heatmap_small.mp4`,
        `04 - Image_rect_small.mp4`, `05 - Stereo_img.mp4`, `08 - octomap_누적.webm`
- 이미지: `camera.png`
- 카드 대표: `07 - visual navigation.mp4`

---

## 6. 파일 구조 (v2.0)

```
profile-website/
├── index.html
├── projects/
│   ├── uam-motion-planning.html
│   ├── maritime-delivery.html
│   ├── inspection-drone.html
│   ├── precision-landing.html
│   ├── mpc-gp-pathplanning.html
│   └── visual-navigation.html
├── assets/
│   ├── css/
│   │   ├── main.css          — 디자인 시스템 (v2: 스캔라인/HUD/글리치/커서 제거, Education+Skills 유지)
│   │   ├── animations.css    — fade-in, 타이핑만 유지 (글리치/스캔라인 제거)
│   │   └── responsive.css    — 모바일 반응형 (768px, 1024px)
│   ├── js/
│   │   ├── main.js           — 스크롤 스파이, Intersection Observer, KO/EN 토글, 영상 hover
│   │   └── typewriter.js     — 타이핑 효과 (유지)
│   │   [cursor.js 삭제]
│   ├── images/
│   │   └── profile.jpg
│   └── projects/
│       ├── maritime/         — Pablo Air 프로젝트 미디어
│       ├── inspection/       — Dextech 점검 드론 미디어
│       ├── precision-landing/— Dextech 정밀 착륙 미디어
│       ├── mpc-gp/           — Hancom MPC+GP 미디어
│       └── visual-nav/       — Hancom 비주얼 내비게이션 미디어
├── cv/
│   └── jaejeong_park_cv.pdf
├── ref/           — 참고 파일 (.gitignore 처리)
├── plan.md
├── CLAUDE.md
└── .gitignore
```

---

## 7. 개발 단계 (v2.0 STEP-BY-STEP)

### STEP 1 — 기존 파일 정리 및 미디어 복사
- [x] `cursor.js` 삭제
- [x] `assets/projects/` 폴더 생성 및 ref에서 미디어 복사

### STEP 2 — CSS 수정 (main.css, animations.css)
- [x] 스캔라인 오버레이 제거 (`body::before`, `body::after`)
- [x] HUD 프레임 스타일 제거 (`.hud-frame`)
- [x] 글리치 효과 제거 (`.glitch`, `@keyframes glitch-anim-*`)
- [x] 커서 관련 CSS 제거 (`#cursor`, `.cursor-dot`, `body.cursor-hover`)
- [x] `body { cursor: none }` → `cursor: default` 복원
- [x] Education log / Skills 관련 CSS는 **건드리지 않음**

### STEP 3 — index.html 수정
- [x] `<link>` 에서 cursor.js 제거
- [x] `#cursor`, `.cursor-dot` 요소 제거
- [x] EXPERIENCE 섹션 → WORK 섹션으로 교체
  - 2-column 레이아웃 구현
  - 프로젝트 카드 컴포넌트 (video + 썸네일)
  - UCI 카드: 논문 링크 카드 처리
- [x] PROJECTS 섹션 제거 (WORK로 통합)
- [x] nav 링크: `experience` → `work`, `projects` 제거

### STEP 4 — 영상 hover 재생
- [x] 프로젝트 카드 mouseenter: `video.play()` (muted, loop)
- [x] 프로젝트 카드 mouseleave: `video.pause()`, `currentTime` 복원
- [x] `data-start` 속성으로 영상별 시작 지점 개별 설정 가능
  - inspection drone: `data-start="2.5"` (초반 fade-in black 구간 스킵)

### STEP 5 — 프로젝트 상세 페이지 (projects/*.html)
- [x] 공통 레이아웃 템플릿 확립 (maritime-delivery.html 기준)
- [x] maritime-delivery.html — 완료 (Pablo Air)
- [x] inspection-drone.html — 완료 (Dextech, 6섹션: Overview/SIFT추출/매칭/2D-3D매핑/아키텍처/Gazebo결과)
- [x] precision-landing.html — 완료 (Dextech, 4섹션: Overview/드론시점/YOLO탐지/착륙타겟+PnP)
- [ ] uam-motion-planning.html — 미완료
- [ ] mpc-gp-pathplanning.html — 미완료
- [ ] visual-navigation.html — 미완료
- 참고: Back 버튼은 `../index.html#projects`로 구현됨 (plan의 `#work`와 다름)

### STEP 6 — 반응형 조정 (responsive.css)
- [x] WORK 섹션: 모바일에서 2-column → 1-column (경력 위, 카드 아래)
- [x] 프로젝트 카드: 태블릿에서 1개씩 표시

### STEP 7 — 검토 및 배포
- [ ] 크로스 브라우저 확인
- [ ] 미디어 파일 크기 점검
- [ ] GitHub Pages 배포

---

## 8. 확인 필요 사항

- [x] 프로필 사진: `ref/정장사진_edited_...jpg` 확정
- [x] 이메일: jaejeonp@uci.edu
- [x] 전화번호: +82-10-8688-2773
- [x] 사이트 언어: KO/EN 토글
- [x] 미디어 자산: `ref/past_projects/` 확인 완료
- [ ] CV PDF: 추후 업데이트 예정
- [ ] 커스텀 도메인: 추후 구매 예정

---

---

## 9. 실제 구현 현황 (2026-03-10 기준)

### 완료된 항목
- index.html (SPA): HERO, ABOUT, WORK, SKILLS, EDUCATION, PUBLICATIONS, CONTACT 전 섹션 완료
- KO/EN 토글, 타이핑 애니메이션, 스크롤 스파이, fade-in 애니메이션 작동 중
- 프로젝트 카드 hover 영상 재생 구현 완료 (inline script, `data-start` 속성 지원)
- projects/maritime-delivery.html — 완료
- projects/inspection-drone.html — 완료
- projects/precision-landing.html — 완료
- assets/projects/maritime/, inspection/, precision-landing/ 미디어 복사 완료

### 미완료 항목
- projects/uam-motion-planning.html
- projects/mpc-gp-pathplanning.html
- projects/visual-navigation.html
- assets/projects/mpc-gp/, visual-nav/ 미디어 복사
- CV PDF (cv/jaejeong_park_cv.pdf)
- 커스텀 도메인 설정
- GitHub Pages 배포

### 실제 구현과 plan 간 차이점
| 항목 | plan | 실제 구현 |
|------|------|---------|
| Back 버튼 앵커 | `#work` | `#projects` |
| hover JS 위치 | main.js | index.html 인라인 script |
| inspection drone 시작 시점 | 0초 | 2.5초 (`data-start="2.5"`) |

*plan.md v2.1 | 2026-03-10*
