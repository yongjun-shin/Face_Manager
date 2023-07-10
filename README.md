# Face Manager

### KT Aivle School 빅프로젝트 ( 23. 05. 30 ~ 23. 07. 06 )
<br/><br/>
### 😊 프로젝트 개요

---

![KakaoTalk_20230705_140254051](https://github.com/yongjun-shin/Face_Manager/assets/73512218/58791f2e-7937-4824-b7a1-29430925bf4a)


- 현대사회에서 자기관리는 중요한 요소 중 하나로 인식됩니다. 특히, 화장에 대한 관심이 높아지면서 많은 사람들이 화장법과 화장품에 대한 정보를 찾고 있습니다.
- 그러나 각자의 얼굴형과 피부 톤에 따라 어울리는 화장법과 화장품이 달라지기 때문에, 개인 맞춤형 조언을 받기 어렵다는 문제점이 있습니다.
- 이에 얼굴 인식 AI를 활용하여 개인의 얼굴 특징을 분석하고, 그에 따라 적합한 화장법과 화장품을 추천하는 사이트를 만들고자 합니다.

[기대 효과]

- 개인 맞춤화된 화장 법 제공
- 효율적인 화장품 추천
- 피부 관리 및 변화 추적
<br/><br /><br /><br />
### 🎢 과정

---

1. 서비스 기획
2. UI/UX 설계
3. 서버 구축
4. 데이터베이스 구축
5. 웹 구현
6. 데이터 수집 및 전처리
7. 웹, AI 모델 결합
8. 테스팅 및 수정
9. 문서 작성 및 프로젝트 마무리
<br/><br /><br /><br />
### 🛠 서비스 기능

---

1. 화장법 추천
    - 얼굴 특징 추출
        - 이목구비 특징
            - 얼굴 사진을 입력 받아 Dlib 라이브러리의 얼굴 랜드마크 좌표값을 사용해 추출
            - 좌표값의 각도, 길이 등을 통해 황금비율(이상적인 비율)과 비교하여 특징 정의
        - 얼굴형
            - EfficientNetB6를 fine tuning하여 계란형, 둥근형, 각진형, 역삼각형, 긴형으로 구분
        - 쌍커풀 유무, 피부타입
            - 사용자에게 라디오버튼을 통해 입력받음
    - 화장법 추천
        - 활동 중인 메이크업 아티스트에게 자문을 구해 이목구비, 얼굴형 특징별 화장법 정리
        - 화장법 내용 DB에 사전 저장
        - ‘얼굴 특징 추출’ 결과에 맞는 화장법 DB에서 불러와 Text로 추천
2. AI 이미지 생성
    - 화장법 추천받은 결과를 바탕으로 AI 이미지 생성.
        - 추천하는 화장법에 대해 레퍼런스 이미지를 자체 제작
        - BeautyGAN 모델을 이용하여 원본 이미지에 레퍼런스 이미지의 색조 화장을 입혀줌
        - 화장이 적용된 이미지에 Stable Diffusion 사용하여 눈썹과 입술을 제외한 부분을 Mask로 고정 시킨 후 텍스트 명령에 맞춰 이미지 변경
3. 화장품 추천
    - 4가지의 피부타입(유수분 밸런스, 피부 민감도, 멜라닌 색소 활성도, 피부 탄력도 및 주름)을 입력받아 결정되는 16가지의 바우만 피부타입에 기반하여 화장품 추천
<br/><br /><br /><br />
### 💪 역할

---

- frontend 개발
    - Nav, footer, buttons 구현 및 웹 서비스 틀 구현
    - 페이지 :
        
        About 페이지, Pricing 페이지, 회원정보 페이지, AI 이미지 생성 페이지, History 페이지, 회원가입 페이지 구현
        
    - 컴포넌트 :
        
        애니메이션, swiper, modal 구현
        
<br/><br /><br /><br />

### 📘 Stacks

---

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" />
    <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
    <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white" />
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white" />
    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white" />
    <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=Tensorflow&logoColor=white" />
</div>
<br/><br /><br /><br />

### 📈 구현 결과 및 평가

---

![Snipaste_2023-07-10_16-16-05](https://github.com/yongjun-shin/Face_Manager/assets/73512218/dc7ba205-c10f-4c84-b8e0-cfec784826f7)


![KakaoTalk_20230705_141330040](https://github.com/yongjun-shin/Face_Manager/assets/73512218/e09abd15-ff5b-4035-b93e-c6499d9b2d6c)


- B2C
    - 자신의 얼굴 특징을 알 수 있다.
    - 자신 얼굴 특징에 맞는 화장법, 화장품에 대한 정보를 얻을 수 있다.
    - 추천 받은 화장법을 얼굴에 입혀보고 평가할 수 있다.
- B2B
    - 미용실, 메이크업 샵 등에서 이용하여 고객에게 객관적인 정보를 기반으로 서비스할 수 있다.
    - 화장품 매장에서 이용하여 고객에게 얼굴 특징을 기반으로 제품을 추천할 수 있다.
