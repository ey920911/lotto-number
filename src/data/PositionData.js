const ALL_DATA = {
  부일카서비스: {
    prizeNum: 38,
    location: '부산 동구 범일동 830-195',
    position: [35.1400577, 129.0630673],
  },
  스파: {
    prizeNum: 38,
    location: '서울 노원구 상계동 666 주공 10단지 종합상가 111',
    position: [37.6629991, 127.05545],
  },
  쿨복권방: {
    prizeNum: 27,
    location: '대구 달서구 본리동 1-10번지',
    position: [35.8420831, 128.5366476],
  },
  '인테넷 복권판매사이트': {
    prizeNum: 25,
    location: '서울 서초구 서초3동 1449-6 4층 동행복권본사',
    position: [37.4817993, 127.0154326],
  },
  로또휴게실: {
    prizeNum: 20,
    location: '경기 용인시 기흥구 하갈동 171-1',
    position: [37.4817993, 127.0154326],
  },
  세진전자통신: {
    prizeNum: 18,
    location: '대구 서구 평리동 1094-4',
    position: [35.871901, 128.5552024],
  },
  로또명당인주점: {
    prizeNum: 15,
    location: '충남 아산시 인주면 신성리 신성리 188-8',
    position: [36.8778269, 126.8982918],
  },
  목화휴게소: {
    prizeNum: 15,
    location: '경남 사천시 용현면 주문리 5-3',
    position: [35.0019545, 128.0541785],
  },
  잠실매점: {
    prizeNum: 14,
    location: '서울 송파구 신천동 7-18호',
    position: [37.5188609, 127.0992536],
  },
  GS25양산문성: {
    prizeNum: 13,
    location: '경남 양산시 평산동 31-5',
    position: [35.384916, 129.1550752],
  },
};

const SEOUL_DATA = {
  스파: {
    prizeNum: 38,
    location: '서울 노원구 상계동 666 주공 10단지 종합상가 111',
    position: [37.6629991, 127.05545],
  },
  잠실매점: {
    prizeNum: 14,
    location: '서울 송파구 신천동 7-18호',
    position: [37.5188609, 127.0992536],
  },
  버스판매소: {
    prizeNum: 13,
    location: '서울 영등포구 영등포동4가 441-10',
    position: [37.5171639, 126.9031758],
  },
  제이복권방: {
    prizeNum: 11,
    location: '서울 서초구 종료5가 58번지 평창빌딩 1층 103호',
    position: [37.5712128, 127.0028866],
  },
  인터넷복권판매사이트: {
    prizeNum: 10,
    location: '서울 서초3동 1449-6 4층 동행복권본사',
    position: [37.4817993, 127.0154326],
  },
  묵동식품: {
    prizeNum: 9,
    location: '서울 중랑구 묵동 238-11',
    position: [37.6124311, 127.0770497],
  },
  갈렙분식한식: {
    prizeNum: 9,
    location: '서울 장랑구 망우동 490-13',
    position: [37.5981602, 127.0952748],
  },
  월드24시: {
    prizeNum: 8,
    location: '서울 은평구 갈현1동 398-1',
    position: [37.619209, 126.9197683],
  },
  가판점: {
    prizeNum: 8,
    location: '서울 영등포구 당산동6가 331-1',
    position: [37.5344336, 126.901288],
  },
  양광정보통신: {
    prizeNum: 8,
    location: '서울 성북구 하월곡동 37-18',
    position: [37.6018682, 127.0417682],
  },
};

const KYEONG_GI_DATA = {
  로또휴게실: {
    prizeNum: 20,
    location: '경기 용인시 기흥구 하갈동 171-1',
    position: [37.2548679, 127.1048682],
  },
  행운복권방: {
    prizeNum: 10,
    location: '경기 포천시 소흘읍 송우리 127-6',
    position: [37.8288254, 127.1474496],
  },
  올인: {
    prizeNum: 9,
    location: '경기 화성시 향남면 장짐리 273-3',
    position: [37.1352679, 126.9106117],
  },
  마두역상행선가판대: {
    prizeNum: 8,
    location: '경기 고양시 일산동구 장항동 896-1번지 마두역상행선가판대',
    position: [37.6507778, 126.7779231],
  },
  행복충전소: {
    prizeNum: 8,
    location: '경기 평택시 지산동 755-1',
    position: [37.0818082, 127.0564079],
  },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
};
const INCHEON_DATA = {
  라이프마트: {
    prizeNum: 9,
    location: '인천 중구 항동7가 58',
    position: [37.4524637, 126.6042389],
  },
  대박천하마트: {
    prizeNum: 7,
    location: '인천 부평구 갈산동 367번지',
    position: [37.5116118, 126.7262821],
  },
  복권전문점: {
    prizeNum: 7,
    location: '인천 부평구 청천동 236-20 1층 점포',
    position: [37.5037948, 126.7151051],
  },
  노다지복권방: {
    prizeNum: 7,
    location: '인천 남구 학익동 264-6외7필지125 126호',
    position: [37.4432201, 126.6647073],
  },
  GS25계산동경: {
    prizeNum: 7,
    location: '인천 계양구 계산동 1076-7번지 도쿄프라자 1층 2호',
    position: [37.5357287, 126.7362718],
  },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
};
const KEONG_BUCK_DATA = {
  로또복권황성점: {
    prizeNum: 8,
    location: '경북 경주시 황오동 175-5 훼미리마트 경주역점',
    position: [35.843676, 129.2168109],
  },
  세방매점: {
    prizeNum: 7,
    location: '경북 경주시 용강동 753-1',
    position: [35.8765823, 129.2266403],
  },
  NG24: {
    prizeNum: 6,
    location: '경북 칠곡군 석적읍 중리 86-8',
    position: [36.0798033, 128.4118396],
  },
  행운의집: {
    prizeNum: 6,
    location: '경북 안동시 북문동 23-7',
    position: [36.5668903, 128.7294184],
  },
  왕대박복권방: {
    prizeNum: 6,
    location: '경북 문경시 모전동 81-89',
    position: [36.5881029, 128.1929588],
  },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
};
const KYEONG_NAM_DATA = {
  목화휴게소: {
    prizeNum: 15,
    location: '경남 사천시 용현면 주문리 5-3',
    position: [35.0019545, 128.0541785],
  },
  GS25양산문성: {
    prizeNum: 13,
    location: '경남 양산시 평산동 31-5',
    position: [35.384916, 129.1550752],
  },
  북마산복권전문점: {
    prizeNum: 9,
    location: '경남 마산시 상남동 39-4',
    position: [35.2158006, 128.5708622],
  },
  천하명당복권방: {
    prizeNum: 6,
    location: '경남 거제시 옥포1동 582',
    position: [34.8916743, 128.6948838],
  },
  로또복권하대점: {
    prizeNum: 6,
    location: '경남 진주시 하대동 126-17',
    position: [35.1870207, 128.122468],
  },
};
const JEUN_BUCK_DATA = {
  또또복권방: {
    prizeNum: 9,
    location: '전북 익산시 영등동 827-3',
    position: [35.9597664, 126.9717064],
  },
  행운복권방보생당건강원: {
    prizeNum: 8,
    location: '전북 익산시 부송동 216-17',
    position: [35.9603309, 126.9972962],
  },
  팡팡복권마트잡화슈퍼: {
    prizeNum: 6,
    location: '전북 전주시 덕진구 금암동 460-11',
    position: [35.8343875, 127.1333902],
  },
  부자복권방: {
    prizeNum: 4,
    location: '전북 군산시 대명동 138-12번지',
    position: [35.9804526, 126.7202412],
  },
  렛츠고복권유통: {
    prizeNum: 4,
    location: '전북 덕진구 인후동1가 904-1',
    position: [35.8281522, 127.1647006],
  },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
  // :{
  //   prizeNum: ,
  //   location: '',
  //   position: [, ],
  // },
};
const JEUN_NAM_DATA = {
  알리바이: {
    prizeNum: 9,
    location: '전남 나주시 금성동 18-1',
    position: [35.0312594, 126.7169237],
  },
  대광복권방: {
    prizeNum: 6,
    location: '전남 화순군 화순읍 대리 97-3 1층109호',
    position: [35.0554433, 126.9770369],
  },
  종합자동차매매상사: {
    prizeNum: 6,
    location: '전남 해남군 해남읍 해리 178',
    position: [34.5711747, 126.6118124],
  },
  도깨비방망이: {
    prizeNum: 5,
    location: '전남 완도군 완도읍 구내리 1248-21',
    position: [,],
  },
  복권나라: {
    prizeNum: 4,
    location: '전남 여수시 교동 448-1번지 1층',
    position: [34.3160559, 126.7492492],
  },
};
const JEJU_DATA = {
  행운복권방: {
    prizeNum: 2,
    location: '제주 제주시 노형동 759-6번지 1층내',
    position: [33.476515, 126.4792244],
  },
  로또복권: {
    prizeNum: 2,
    location: '제주 제주시 노형동 759-6번지 1층내',
    position: [33.476515, 126.4792244],
  },
  성자점빵: {
    prizeNum: 2,
    location: '제주 제주시 이도이동 1080-9 1층',
    position: [33.4923304, 126.5368132],
  },
  GS25서쥐중문: {
    prizeNum: 2,
    location: '제주 서귀포시 중문동 1964-4',
    position: [,],
  },
  로또명당목련: {
    prizeNum: 2,
    location: '제주 제주시 연동 291-40',
    position: [33.2514592, 126.4270264],
  },
};
const GANG_WON_DATA = {
  황금로또: {
    prizeNum: 6,
    location: '강원 원주시 태장2동 1390-16번지',
    position: [37.3819545, 127.9503291],
  },
  복권방: {
    prizeNum: 5,
    location: '강원 원주시 관설동 1702-1',
    position: [37.3187399, 127.9650304],
  },
  LO삼성: {
    prizeNum: 5,
    location: '강원 원주시 단계동 841',
    position: [37.3477044, 127.9322281],
  },
  화천복권방: {
    prizeNum: 5,
    location: '강원 화천군 화천읍 하리 43-33',
    position: [38.1045785, 127.7046461],
  },
  행운복권방: {
    prizeNum: 5,
    location: '강원 인제군 북면 원통리 681-5 1층',
    position: [38.1224116, 128.2068675],
  },
};
const PLACE_DATA = {
  all: ALL_DATA,
  seoul: SEOUL_DATA,
  kyeong_gi: KYEONG_GI_DATA,
  incheon: INCHEON_DATA,
  kyeong_buck: KEONG_BUCK_DATA,
  kyeong_nam: KYEONG_NAM_DATA,
  jeun_buck: JEUN_BUCK_DATA,
  jeun_nam: JEUN_NAM_DATA,
  jeju: JEJU_DATA,
  gang_won: GANG_WON_DATA,
};

export { PLACE_DATA };
