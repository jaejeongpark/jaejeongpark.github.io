# CLAUDE.md — Jaejeong Park Portfolio Website

> 이 파일은 Claude Code가 이 프로젝트 작업 시 항상 참조해야 하는 핵심 지침서입니다.

---

## 1. 프로젝트 컨텍스트

**대상자**: Jaejeong Park (박재정)
**목적**: 취업 포트폴리오 웹사이트 — 채용담당자 타깃, AI/Robotics/UAM 분야 구직
**현재 상태**: 2026년 1월 한국 귀국, 적극 구직 중
**GitHub**: https://github.com/jaejeongpark/jaejeongpark.github.io
**배포 URL**: https://jaejeongpark.github.io

---

## 2. 핵심 내러티브 (절대 이탈 금지)

### 2.1 커리어 스토리라인
박재정의 스토리는 단순한 이직이 아니라 **"엔지니어의 의도적 진화"**다.

```
[1단계] 광통신 엔지니어 (Licomm까지)
  → 회로 설계, 광학 트랜시버, 아날로그/디지털 하드웨어

[전환점] 자기주도 학습 (2019~2020)
  → FastCampus Deep Learning, Visual SLAM 강의 수강
  → 독학으로 AI/로보틱스 기술 습득

[2단계] AI/드론 연구 엔지니어 (Hancom → Dextech → Pablo Air)
  → ROS, YOLO, Visual Odometry, MPC, 드론 시스템

[3단계] 박사 연구 @ UC Irvine (2023–2026)
  → GPA 3.93/4.0, 제1저자 논문 arXiv 게재
  → 전문성이 충분히 입증되어 산업계 복귀 결정

[현재] 산업계 재진입 준비 (2026~)
  → 학문적 깊이 + 실전 경험의 융합
```

### 2.2 PhD 중단 프레이밍 (매우 중요)
- **절대 사용 금지**: "dropped out", "포기", "중단", "그만뒀다"
- **사용할 표현**: "Doctoral Researcher", "Transitioned to Industry", "Applied research expertise to industry"
- **포지셔닝**: 논문 1편 제1저자 게재 + GPA 3.93 + 연구 완성 후 **전략적 산업계 복귀**
- 학위 없이도 PhD 레벨의 연구 역량을 보유한 엔지니어로 포지셔닝
- EDUCATION 섹션에는 "Doctoral Researcher (Oct 2023 – Jan 2026)" 또는 "Ph.D. Candidate" 표기

### 2.3 광통신 시절 경력 처리
- 광통신 경력(Licomm, Fottu, Opticis)은 완전히 삭제하지 않고 타임라인에 **약하게 유지**
- Licomm: 간략한 업무 설명 한 줄 수준으로 표시 (커리어 전환점 강조)
- Fottu, Opticis 인턴십: 한 줄 최소 표시로 커리어 출발 맥락만 제공
- 메인 포커스: **Hancom InSpace → Dextech → Pablo Air → UC Irvine PhD**

### 2.4 콘텐츠 원칙
- **이직 목적에만 집중**: 취미, 음악, 개인적 관심사 등 사적 내용 일체 배제
- 모든 콘텐츠는 직업적 역량, 기술, 경력, 연구 성과로만 구성

---

## 3. 핵심 인물 정보

| 항목 | 내용 |
|------|------|
| 이름 | Jaejeong Park (박재정) |
| 이메일 | jaejeonp@uci.edu |
| 전화번호 | +82-10-8688-2773 |
| LinkedIn | https://www.linkedin.com/in/jaejeong-park-81ba5ba4/ |
| 위치 | Republic of Korea |
| 학위 | BS/MS EE @ University at Buffalo (Magna Cum Laude) |
| PhD | UC Irvine EE, Doctoral Researcher (GPA 3.93), 2023–2026 |

---

## 4. 논문 정보 (반드시 반영)

```
Title  : Certified Learning-Enabled Noise-Aware Motion Planning for Urban Air Mobility
Authors: Jaejeong Park, Mahmoud Elfar, Cody Fleming, Yasser Shoukry
Venue  : arXiv:2509.20306v1 [eess.SY], September 24, 2025
Affil. : University of California, Irvine (Park, Elfar, Shoukry) & Iowa State University (Fleming)
Topic  : eVTOL noise-aware motion planning, Certified ML, Monotonic NN, RRT*
```

- 웹사이트 PUBLICATIONS 섹션에 반드시 포함
- arXiv 링크 연결 (https://arxiv.org/abs/2509.20306)
- 제1저자임을 강조

---

## 5. 기술 스택 (웹사이트 구현)

- **Vanilla HTML5 / CSS3 / JavaScript** — 프레임워크 없음
- **외부 CDN**: Google Fonts만 허용 (Bebas Neue, JetBrains Mono, Barlow)
- **배포**: GitHub Pages — https://jaejeongpark.github.io
- **단일 페이지 애플리케이션 (SPA)**
- **다국어**: 한영 병기, JS로 구현한 KO/EN 토글 (data-ko / data-en 속성 방식)

---

## 6. 디자인 시스템

### 콘셉트: "Terminal meets Aerospace"
드론/UAM 연구자의 정체성을 담은 다크 테크 포트폴리오

### 컬러
```css
--bg-primary:    #040810;   /* 심우주 블랙 */
--bg-secondary:  #070e1a;
--bg-card:       #0a1525;
--cyan:          #00D4FF;   /* 주 액센트 */
--amber:         #FFB300;   /* 강조 포인트 */
--green:         #00FF88;   /* 상태 표시 */
--text-primary:  #E8F4F8;
--text-secondary:#6B8FA8;
--border:        rgba(0, 212, 255, 0.2);
```

### 타이포그래피
- Display: `Bebas Neue` — 섹션 헤더, 히어로 타이틀
- Mono: `JetBrains Mono` — 코드, 레이블, 메타정보
- Body: `Barlow` — 본문, 설명

### 시그니처 UI
- 스캔라인 오버레이 (CRT 스타일)
- HUD 프레임 (모서리 브래킷)
- 타이핑 애니메이션 (히어로)
- 커스텀 커서 (십자선)
- 글리치 hover 효과

---

## 7. 사이트 구조

```
index.html (SPA)
├── NAV       — 고정 네비게이션
├── HERO      — 타이핑 애니메이션, 정체성 선언
├── ABOUT     — 프로필 + 커리어 전환 스토리
├── EXPERIENCE — 타임라인 (Licomm 이후 집중)
├── SKILLS    — 기술 스택 시각화
├── EDUCATION — UB BS/MS + UCI PhD Researcher
├── PUBLICATIONS — 논문 카드
├── PROJECTS  — 프로젝트 갤러리
└── CONTACT   — 연락처
```

---

## 8. 개발 규칙

1. **개발 시작 전 반드시 plan.md 확인**
2. **내러티브 일관성**: 모든 텍스트는 섹션 2의 스토리라인에 부합해야 함
3. **PhD 표현 주의**: 섹션 2.2의 금지 표현 엄수
4. **모바일 반응형 필수**: 768px, 1024px 브레이크포인트
5. **커밋 전 git push**는 사용자 확인 후 진행
6. **placeholder**: 미확정 정보는 `[TODO: 내용]` 형태로 표시
7. ref/ 폴더의 파일들은 참고용이며 배포 파일에 포함하지 않음

---

## 9. 미확인 정보 (개발 전 사용자 확인 필요)

- [x] 프로필 사진: `ref/정장사진_edited_edited_edited_edited_edited_edited_edited.jpg` 확정
- [x] 이메일: jaejeonp@uci.edu 확정
- [x] 전화번호: +82-10-8688-2773 확정
- [x] 사이트 언어: 한영 병기, 우측 상단 KO/EN 토글 버튼
- [ ] 커스텀 도메인: 추후 구매 예정
- [ ] CV PDF: 웹사이트 완성 후 별도 업데이트 예정
