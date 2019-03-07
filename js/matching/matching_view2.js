var app = new Vue({
  el: '#app',
  data: {
    flow:[
      {state: false, title: 'ユーザーを選ぶ'},
      {state: true, title: 'マッチング方法<br>を選ぶ'},
      {state: false, title: '確認する'},
      {state: false, title: '案内を送る'},
    ],
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
  },
  computed: {
  }
})
