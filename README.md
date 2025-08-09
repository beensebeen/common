# 커몬학습 Salesforce CRM 구축 프로젝트
🏆 세일즈포스코리아 청년 CRM101 4기 프로젝트 우수상 🏆

<img width="1280" height="406" alt="Image" src="https://github.com/user-attachments/assets/20b06872-54be-44a7-ae36-4c5f0d9085c1" />

---

## ✅ 프로젝트 개요

- **프로젝트 기간:** 2024.06.18 ~ 2024.07.29 (6주)
- **프로젝트 설명:** '구몬학습' 비즈니스 모델 기반 가상 교육 기업 '커몬학습'의 수기 중심 업무 프로세스를 Salesforce 플랫폼으로 디지털 전환
- **핵심 목표:** 고객 유입부터 계약, 학습, CS까지 전 과정을 자동화하여 데이터 기반의 운영 효율 최적화 및 확장성 확보

---

## ✅ 도입 배경

'커몬학습'은 '디지털 학습 도입'을 통한 비즈니스 확장을 준비하고 있었으나, 비효율적인 내부 운영 방식으로 직원들의 업무 피로도가 증가하고, 정보 연계 부족이 고객 응대 품질을 낮추는 점이 확장에 걸림돌이 되고 있는 상황입니다.

--- 

## ✅ 문제 정의 및 해결 방안

### 신규 및 기존 고객 관리
- 내부 규율에 따른 교사 배정 및 잠재고객 자율 수락 시스템 도입으로 업무 공정성 확보
- 고객 유입부터 계약까지 원클릭으로 효율적인 고객 관리   

### 방문교사 업무 비효율성
- 표준화된 스케줄링 및 학습 아동별 학습 일지 관리
- 방문교사용 Agentforce 비서로 효율적인 업무 처리

### 데이터 일원화 및 응대 속도 향상
- 고객 데이터 통합으로 지사별 데이터 투명성 및 인사이트 확보 
- Agentforce 기반 아동 학습 요약일지 실시간 조회 및 학습 추천
- 고객 360 기반 방문교사 재구독 유도 시스템 마련

---

## ✅  팀원 소개
| **이름** | **역할** | **GitHub** |
|--------|---------|------------|
| 박예진 | Admin (PM) | [GitHub](https://github.com/) |
| 장연우 | Admin | [GitHub](https://github.com/) |
| 김세빈 | Developer (PL) | [GitHub](https://github.com/) |
| 정시헌 | Developer | [GitHub](https://github.com/) |
| 김성준 | Developer | [GitHub](https://github.com/) |

---

## ✅ 산출물

### 📌 ERD
<img width="1766" height="1100" alt="Image" src="https://github.com/user-attachments/assets/e80bd973-6dde-4a28-9fe7-8bd17710bf1b" />

### 📌 시스템 아키텍처
<img width="2514" height="1726" alt="Image" src="https://github.com/user-attachments/assets/a051a3ab-cf46-462b-99cd-298fc33059e5" />

### 📌 기능별 요구사항
<img width="1399" height="1005" alt="Image" src="https://github.com/user-attachments/assets/1668ec19-3bf0-4f8e-9053-ed741787f6c9" />

### 📌 오브젝트 구조
<img width="937" height="328" alt="Image" src="https://github.com/user-attachments/assets/a2353f62-21e6-4900-97b9-f624e460bc1d" />

---

## ✅ 주요 기능 구현 (SCENE 기반 설명)

### 🎯 SCENE 1. 공정하고 신속한 Lead 자동 분배 시스템

> 고객 접수부터 담당교사 배정까지의 프로세스를 자동화하고, Apex 기반 스코어링 + Omni-Channel Queue를 통해 공정한 기회 분배와 리드 응대 시간 단축을 실현했습니다.

#### 🧩 문제 정의
- 지사 담당자 주관에 의한 교사 배정 → 형평성 및 속도 저하
- 평균 리드 처리 시간 2~3일 → 고객 이탈률 상승

#### 🛠️ 구현 방식
![Image](https://github.com/user-attachments/assets/0ede927b-b7aa-4c80-931c-362b4fa23434)
- **Web-to-Lead:** 상담 신청 시 자동 리드 생성 
- **Apex 스코어링 로직:** 지역, 과목, 담당 교사의 현재 리드 수, 입사일 등 복합 조건 기반 점수화
- **Omni-Channel Queue:** 스코어링 결과에 따라 최적의 교사에게 실시간 자동 배정 
- **실시간 수락 및 조회:** 데스크톱 알림 및 모바일 뷰 연동

#### ✅ 기대 효과
- **공정한 배정:** 내부 불만 감소 및 교사 간 형평성 확보
- **응대 시간 단축:** 평균 2~3일 → 24시간 이내 처리  
- **확장성 확보:** 스코어링 조건 추가에 유연하게 대응 가능

#### ⚙️ 기술적 의사결정
> 초기에는 Lead Assignment Rule → Omni-Channel → Apex+Task 구조로 전환  
> 리드 배정 공평성, 교사 상황 미반영, 고객 맞춤, 중복 방지 등 문제 해결을 위해, Apex와 Omni-Channel을 결합하여 비즈니스 요구사항에 맞는 동적이고 유연한 분배 시스템을 구축했습니다.

---

### 🎯 SCENE 2. 방문교사 업무 효율 증대

> 방문교사의 과도한 행정 업무를 모바일 앱 하나로 통합하여, 업무 시간을 획기적으로 단축하고 데이터 기반의 실시간 운영 환경을 구축했습니다.

#### 🧩 문제 정의
- 수업 후 사무실로 복귀해 계약서 작성 및 수기로 정리한 내용 전달  
- 일정 및 학습 내용 관리가 표준화되어 있지 않아 정보 누수 및 전달 지연  
- 교사마다 사용하는 툴이 달라 데이터 품질 및 정확도 저하 → 업무 피로도 증가

#### 🛠️ 구현 흐름

##### 📍 1. 리드 정보 확인
![Image](https://github.com/user-attachments/assets/6f782791-2a88-4139-b9cd-5d731ca57747)
- Salesforce 모바일 앱을 통해 실시간 리드 정보 조회 가능
- 학부모가 구독을 결정하면 리드 전환 버튼을 통해 학부모와 아동 정보를 고객으로 전환
  

##### 📍 2. 계약 생성
![Image](https://github.com/user-attachments/assets/2f5164c5-7406-4da8-bcd2-ccdf431976d4)
- 구독내역을 바탕으로 계약을 생성 → 컴포넌트 상에서 원클릭으로 계약 정보 연동
- 계약서, 구독내역, 계약 정보를 기반으로 구독 요약 이메일 자동 전송


##### 📍 3. 방문 일정 등록
![Image](https://github.com/user-attachments/assets/8ea66ba7-8171-49c9-ba90-83846c73c993)
- 아동 정보와 구독 내역을 바탕으로 별도 앱 없이 일정 등록 가능  
- 주 1회 30분 기준 수업에 맞춰 반복 설정 없이 빠르게 일정 추가 (반복 종료일 설정 가능)
- 등록된 일정은 세일즈포스 캘린더 내에서 내가 관리하고 있는 아동들의 방문일정들을 손쉽게 확인할 수 있으며, 스케줄에 따른학습 준비를 손쉽게 할 수 있음


##### 📍 4. 학습 일정 확인 (Agentforce)
![Image](https://github.com/user-attachments/assets/53747241-ec3a-4236-88ba-a76690381b34)
- 저장된 일정은 Agentforce를 통해 확인 가능  
- 교사는 여러 페이지를 거치지 않고, 하루 일정과 아동 상세 정보를 요약 조회 가능


##### 📍 5. 학습일지 작성
![Image](https://github.com/user-attachments/assets/fdd6546d-ec95-4e2d-aeb3-beda386e92dc)
- 방문수업 종료 후 학습일지는 LWC 기반 컴포넌트에서 입력  
- 교사 의견 외 항목은 모두 Picklist 구성 → 오기입 방지  
- 아동별 구독 과목 기반으로 자동 연동  
- 작성된 학습일지는 Agentforce 기반 응답의 데이터 소스로 활용되며, 학부모 요청 시 학습 요약 이메일로 전송 가능

#### ✅ 기대 효과(방문교사 관점)
- 계약 프로세스 자동화 → 작성 오류율 0% 근접
- 표준화된 스케줄링 및 학습 아동별 일지 관리
- 방문교사 Agentforce 비서 → 업무 효율 증가

---

### 👩‍💼 지사 담당자의 운영 모니터링
![Image](https://github.com/user-attachments/assets/5126a20d-7039-44be-9747-5c08bac50975)
- 지사 담당자는 교사의 보고를 기다릴 필요 없이 실시간 계약 현황 및 스케줄 확인 가능  
- 계약 현황, 학습 일정, 커뮤니케이션 상태를 포함한 주요 데이터를 즉시 확인할 수 있어, 현장과 사무실 간의 단절 없이 운영의 실시간성과 투명성 확보

#### ✅ 기대 효과 (지사 담당자 관점)
- 교사별 매출 관리, 월별 성과 자동 리포트 → 실시간 분석 가능
- 지역별 방문교사 관리 추적 → 공정한 성과분석
- 대시보드(BI) 실시간 분석 → 비즈니스 인사이트 도출

--- 

### 🎯 SCENE 3. C360 기반 AI 상담사 (Agentforce)

학부모가 시간 제약 없이 자녀의 학습 현황을 확인하고, 개인화된 피드백을 받을 수 있는 AI 상담사를 구현했습니다.

#### 🧩 문제 정의
- 교사 근무시간 외 고객 응대 불가 및 피드백 품질 편차 
- 학부모의 단순, 반복적인 질문에 대한 즉각적인 해결책 부재

#### 🛠️ 구현 방식
![Image](https://github.com/user-attachments/assets/3e39e18e-0795-4476-8b77-dce2d0d28e27)
- 개인화 응대: 학부모 정보 입력 시 연결된 자녀 정보를 자동으로 인식
- AI 기반 요약: Agentforce가 학습일지 데이터를 분석하여 최근/전체 학습 현황을 실시간 요약 및 응답
- 프로세스 자동화: 상담 내용은 Case로 자동 생성되어 내부 담당자에게 전달
- 정교한 Prompt 설계: Instruction과 Prompt를 통해 응답의 기준, 주제, 제약사항을 지정하여 응답 품질 제어

#### ✅ 기대 효과
- **긍정적 고객 경험:** 4시간 실시간 응대로 고객 만족도 향상
- **Up-sell 기회 발굴:** 추천 학습 유형에 대한 문의 이력을 기반으로 추가 학습 권장 가능
- **확장성 확보:** 향후 고객 정서 분석, 추천 기능, 외부 학습 플랫폼 연동 확장 가능

---

## ✅ 프로젝트에서 사용된 주요 기술 스택 

### 💻 Backend 
- ![Apex](https://img.shields.io/badge/Apex-0055CC?style=flat&logo=salesforce&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
- ![SFDX](https://img.shields.io/badge/SFDX-00A1E0?style=flat&logo=salesforce&logoColor=white)

### 🎨 Frontend 
- ![LWC](https://img.shields.io/badge/LWC-0070D2?style=flat&logo=salesforce&logoColor=white)
- ![html](https://img.shields.io/badge/html-3366CC?logo=htmx&logoColor=white&labelColor=3366CC)

### 🗄 Database 
- ![SOQL](https://img.shields.io/badge/SOQL-00A1E0?style=flat&logo=salesforce&logoColor=white)

### 🛠 협업 툴 
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
- ![Jira](https://img.shields.io/badge/Jira-0052CC?style=flat&logo=jira&logoColor=white)
- ![Notion](https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white)
- ![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white&labelColor=F24E1E)
- ![Sheets](https://img.shields.io/badge/Sheets-34A853?logo=googlesheets&logoColor=white&labelColor=34A853)
=======
# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
>>>>>>> c97ea92 (first commit)
