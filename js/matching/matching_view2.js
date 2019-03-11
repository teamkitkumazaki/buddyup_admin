var app = new Vue({
  el: '#app',
  data: {
    flow:[
      {state: false, title: 'ユーザーを選ぶ'},
      {state: true, title: 'マッチング方法<br>を選ぶ'},
      {state: false, title: '確認する'},
      {state: false, title: '案内を送る'},
    ],
    selectItem:[
      { value: 'state1', name: '近い'},
      { value: 'state2', name: 'バラバラ'},
    ],
    setPeopleNum: true,
    searchNum: null, // 検索条件 人数
    searchInterest: false,
    interestState: 'interest0', // 検索条件 興味関心
    searchArea: false,
    areaState: 'area0', // 検索条件 活動範囲
    searchAge: false,
    ageState: 'age0', // 検索条件 年齢
    searchSubmit: false, // 検索結果の表示・非表示
    chartList:[
      {
        interest: 'デザイン',
        place: '品川',
        kanji: 'FUJITSU TARO',
        members: ['FUJITSU TARO', 'FUJITSU JIRO', 'FUJITSU SABURO']
      },
      {
        interest: 'VR',
        place: '浜松町',
        kanji: 'FUJITSU SHIRO',
        members: ['FUJITSU GORO', 'FUJITSU HANAKO', 'FUJITSU YUKO']
      },
      {
        interest: 'デザイン',
        place: '品川',
        kanji: 'FUJITSU TARO',
        members: ['FUJITSU TARO', 'FUJITSU JIRO', 'FUJITSU SABURO']
      },
      {
        interest: 'VR',
        place: '浜松町',
        kanji: 'FUJITSU SHIRO',
        members: ['FUJITSU GORO', 'FUJITSU HANAKO', 'FUJITSU YUKO']
      },
      {
        interest: 'デザイン',
        place: '品川',
        kanji: 'FUJITSU TARO',
        members: ['FUJITSU TARO', 'FUJITSU JIRO', 'FUJITSU SABURO']
      },
      {
        interest: 'VR',
        place: '浜松町',
        kanji: 'FUJITSU SHIRO',
        members: ['FUJITSU GORO', 'FUJITSU HANAKO', 'FUJITSU YUKO']
      },
    ]
  },
  methods:{
    searchClick(){
      if(this.searchNum && this.searchNum >= 3){
        this.searchSubmit = true
      }else if(!this.searchNum){
        alert('マッチング人数を選択してください！');
      }else if(this.searchNum <= 3){
        alert('マッチングは3人以上で行ってください！');

      }
    }
  },
  computed: {
  }
})
