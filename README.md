# 프로젝트 소개

로또 번호 추천 프로그램

##  :scroll: 기술스택
React, JS, TS, MUI, React-router, Lodash, kakao-map

## :hammer: 기능

### 로또 번호 추천기능
현재까지 당첨된 로또 번호 중 가장 많이 나온 숫자의 확률을 높게 할당해 랜덤 숫자를 생성한다.(가중치가 적용된 랜덤 값 추출 알고리즘 사용)
* 랜덤 모드: 당첨 로또 번호를 기준으로 확률이 가장 높은 번호를 우선 배치해서 로또 숫자를 생성한다. 
* 꿈 모드: 꿈에 나온 단어에 매칭되는 번호의 가충치를 높여 로또 숫자를 생성한다.
* 사주 모드: 생년월일을 기준으로 로또 숫자를 생성한다.

### 로또 명당
* 전국, 서울, 경기, 인천, 경북, 경남, 전북, 전남, 강원, 제주 지역별 로또 명당을 소개한다.
* TOP 5 정보
  * 상호명
  * 주소
  * 로또 당첨 횟수
### 통계
* 생성한 로또번호에 대한 정확도 체크를 확인한다.
* 1~5등이 나온 번호, 로또 프로그램을 통해 번호를 생성한 날짜 정보 출력한다.
> 로또 번호 생성시 번호 정보는 웹브라우저의 local storage에 저장된다. 
> 통계 기능 사용시 local stroage에 저장된 지금까지 생성된 로또 정보 데이터를 가져와 통계 값을 계산한다.
### 시각화
* TOP5 로또 번호와 1-45번 까지 당첨된 횟수를 그래프로 보여줌

## :bookmark_tabs: 사용방법

### 로또번호 추천기능
* '로또번호' 버튼을 클릭한다.
* 출력하고 싶은 로또 줄 수를 선택한다(5, 10, 20)
* 랜덤/꿈/사주 모드를 클릭한다
* 각 모드에 맞는 정보를 입력한다.
* 생성 버튼 클릭시 로또번호가 생성된다.
### 로또 명당
* '로또 명당' 버튼을 클릭한다.
* 전체지역, 각 지역별 TOP10 로또명소를 확인할 수 있다.
### 통계 기능
* '결과통계' 버튼을 클릭한다.
* 토요일마다 실제 당첨 로또번호가 나오는데 이를 textField에 placeHolder의 형식대로 입력한다.
* 입력한 값이 유효한 로또 값이라면 지금까지 프로그램을 통해 생성한 로또번호와 실제 로또번호의 매칭 확율과 1~5등까지 당첨됐던 번호 정보를 화면에 보여준다.

## :computer: 화면
### 로또 번호

<img src="https://user-images.githubusercontent.com/7992888/184054443-045495c8-d0fc-49ca-a838-a788be483be9.png" width='400px' height='800px'/>

### 로또 명당 자리 
<img src="https://user-images.githubusercontent.com/7992888/184054778-06f04e2a-c28c-4731-af8c-7abc61a0e887.png" width='400px' height='800px'/>

### 통계 데이터
<img src="https://user-images.githubusercontent.com/7992888/184297258-a4635cba-0a09-44f5-875a-ecdd3297b2b2.png" width='400px' height='800px'/>

### 시각화
![image](https://user-images.githubusercontent.com/7992888/200165936-de4fab2d-3c6b-4658-9a29-0613952b13c1.png)

## 기타

* 가중치 랜덤 로직 관련 설명: https://blog.naver.com/ey920911/222797490814
