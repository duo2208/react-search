[만들면서 학습하는 리액트]

### 개인 학습
- 🏃‍♀️ 검색용 데이터는 elasticSearch 색인을 사용한다.
- 🏃‍♀️ typescript 를 사용하도록 리팩토링 한다.

### 폴더 구성
- 1-vanilla: 1편에서 만든 어플리케이션 (자바스크립트만 사용)
- 2-react: 2편에서 다시 만든 어플리케이션 (리액트 사용)
- 3-component: 3편에서 다시 만든 어플리케이션 (리액트 컴포넌트 사용)
- 🏃‍♀️ 4-typescript: 타입스크립트를 적용한 어플리케이션 (타입스크립트 사용)


### 요구 사항
- [x] 검색폼 구현
  - [x] 검색 상품명 입력 폼이 위치한다.
  - [x] 검색어를 입력하면 x버튼이 보이고 없으면 x버튼을 숨긴다.
  - [x] 엔터를 입력하면 검색 결과가 보인다.
  - [x] x 버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제한다.

- [x] 검색 결과 구현
  - [x] 검색 결과가 검색폼 아래 위치한다. 검색 결과가 없을 경우와 있을 경우를 구분한다.
  - [x] x버튼을 클릭하면 검색폼이 초기화 되고, 검색 결과가 사라진다.

- [x] 탭 구현
  - [x] 추천 검색어, 최근 검색어 탭이 검색폼 아래 위치한다.
  - [x] 기본으로 추천 검색어 탭을 선택한다.
  - [x] 각 탭을 클릭하면 탭 아래 내용이 변경된다.

- [x] 🏃‍♀️ 추천 검색어 구현
  - [x] 번호, 추천 검색어 이름이 목록 형태로 탭 아래 위치한다.
  - [x] 목록에서 검색어를 클릭하면 선택된 검색어의 검색 결과 화면으로 이동한다.

- [x] 🏃‍♀️ 최근 검색어 구현
  - [x] 최근 검색어, 이름, 검색일자, 삭제 버튼이 목록 형태로 탭 아리 위치한다. (추천 검색어와 비슷)
  - [x] 목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동한다. (추천 검색어와 같음)
  - [x] 목록에서 x버튼을 클릭하면 선택된 검색어가 목록에서 삭제된다.
  - [x] 검색시마다 최근 검색어 목록에 추가된다.

- [x] 🏃‍♀️ 자동 완성 구현
