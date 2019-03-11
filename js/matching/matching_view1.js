var app = new Vue({
  el: '#app',
  data: {
    flow:[
      {state: true, title: 'ユーザーを選ぶ'},
      {state: false, title: 'マッチング方法<br>を選ぶ'},
      {state: false, title: '確認する'},
      {state: false, title: '案内を送る'},
      //ページ上部のフロー図の項目
    ],
    radioItem01:[
      { value: 'export1', name: 'Buddy Up!'},
      { value: 'export2', name: 'CSV'},
      //エクスポートの形式の選択肢
    ],
    exportState: '', // エクスポートの形式の選択状態
    tabState: 1, // タブの切り替え制御
    searchSubmit: false, // 検索結果の表示・非表示
    selectedTab:[], //検索条件として選択しているタグが入る配列
    searchTagInput: '',
    searchTagMode: false,
    showall: false,
    tagList:[
      {id:1, name: "システムエンジニア"},
      {id:2, name: "セールスエンジニア"},
      {id:3, name: "セキュリティエンジニア"},
      {id:4, name: "ネットワークエンジニア"},
      {id:5, name: "アプリケーションエンジニア"},
      {id:6, name: "カスタマーエンジニア"},
      {id:7, name: "サービスエンジニア"},
      {id:8, name: "サポートエンジニア"},
      {id:9, name: "AIエンジニア"},
      {id:10, name: "ブロックチェーンエンジニア"},
      {id:11, name: "プログラマー"},
      {id:12, name: "データベースサーチャー"},
      {id:13, name: "システムコンサルタント"},
      {id:14, name: "システムアナリスト"},
      {id:15, name: "システムアドミニストレータ"},
      {id:16, name: "カスタマーサポート"},
      {id:17, name: "ITコーディネーター"},
      {id:18, name: "OAインストラクター"},
      {id:19, name: "OAオペレーター"},
      {id:20, name: "PCインストラクター"},
      {id:21, name: "ネットワーク管理者"},
      {id:22, name: "インダストリアルデザイナー", cat:2, },
      {id:23, name: "インダストリアルエンジニア", cat:2, },
      {id:24, name: "機械設計士", cat:2, },
      {id:25, name: "ロボット設計技術者", cat:2, },
      {id:26, name: "WEBプロデューサー", cat:3, },
      {id:27, name: "WEBディレクター", cat:3, },
      {id:28, name: "WEBコンテンツプランナー", cat:3, },
      {id:29, name: "WEBデザイナー", cat:3, },
      {id:30, name: "WEBエンジニア", cat:3, },
      {id:31, name: "コーダー", cat:3, },
      {id:32, name: "WEBマーケティング", cat:3, },
      {id:33, name: "WEBライター", cat:3, },
      {id:34, name: "ゲームプランナー", cat:4, },
      {id:35, name: "ゲームクリエイター", cat:4, },
      {id:36, name: "ゲームサウンドクリエイター", cat:4, },
      {id:37, name: "ゲームシナリオライター", cat:4, },
      {id:38, name: "ゲームディレクター", cat:4, },
      {id:39, name: "ゲームデザイナー", cat:4, },
      {id:40, name: "ゲームプログラマー", cat:4, },
      {id:41, name: "ゲームプロデューサー", cat:4, },
      {id:42, name: "デジタルフォトグラファー", cat:4, },
      {id:43, name: "画像処理エンジニア", cat:4, },
      {id:44, name: "CGクリエーター", cat:4, },
      {id:45, name: "ＣＧエンジニア", cat:4, },
      {id:46, name: "ゲームグラフィックデザイナー", cat:4, },
      {id:47, name: "漫画原作者", cat:4, },
      {id:48, name: "アニメーター", cat:4, },
      {id:49, name: "デジタル［コンピュータ］アニメーション", cat:4, },
      {id:50, name: "漫画家", cat:4, },
      {id:51, name: "カメラマン", cat:5, },
      {id:52, name: "アートキュレーター", cat:5, },
      {id:53, name: "アートコーディネーター", cat:5, },
      {id:54, name: "ギャラリスト", cat:5, },
      {id:55, name: "学芸員", cat:5, },
      {id:56, name: "アートナビゲーター", cat:5, },
      {id:57, name: "デコレーター", cat:5, },
      {id:58, name: "画家", cat:5, },
      {id:59, name: "フレーマー", cat:5, },
      {id:60, name: "彫金師", cat:5, },
      {id:61, name: "彫刻家", cat:5, },
      {id:62, name: "陶芸家", cat:5, },
      {id:63, name: "版画家", cat:5, },
      {id:64, name: "美術鑑定士", cat:5, },
      {id:65, name: "美術修復家", cat:5, },
      {id:66, name: "書道家", cat:5, },
      {id:67, name: "人形作家", cat:5, },
      {id:68, name: "絵画修復師", cat:5, },
      {id:69, name: "研ぎ師", cat:5, },
      {id:70, name: "写真現像技術者", cat:5, },
      {id:71, name: "彫師", cat:5, },
      {id:72, name: "イラストレーター", cat:6, },
      {id:73, name: "エディトリアルデザイナー", cat:6, },
      {id:74, name: "グラフィックデザイナー", cat:6, },
      {id:75, name: "キャラクターデザイン", cat:6, },
      {id:76, name: "アートディレクター", cat:6, },
      {id:77, name: "絵付師", cat:6, },
      {id:78, name: "刺青師", cat:6, },
      {id:79, name: "筆耕", cat:6, },
      {id:80, name: "プロダクトデザイナー", cat:7, },
      {id:81, name: "パッケージデザイナー", cat:7, },
      {id:82, name: "雑貨デザイナー", cat:7, },
      {id:83, name: "照明デザイナー・照明コンサルタント", cat:7, },
      {id:84, name: "エディター(編集者)", cat:8, },
      {id:85, name: "コピーライター", cat:8, },
      {id:86, name: "ライター", cat:8, },
      {id:87, name: "DTPオペレーター", cat:8, },
      {id:88, name: "DTPディレクター", cat:8, },
      {id:89, name: "DTPデザイナー", cat:8, },
      {id:90, name: "POPライター", cat:8, },
      {id:91, name: "テープリライター", cat:8, },
      {id:92, name: "ジャーナリスト", cat:8, },
      {id:93, name: "新聞記者", cat:8, },
      {id:94, name: "装丁家［ブックデザイナー］", cat:8, },
      {id:95, name: "校正者", cat:8, },
      {id:96, name: "速記者", cat:8, },
      {id:97, name: "ルポライター", cat:8, },
      {id:98, name: "印刷技術者", cat:8, },
      {id:99, name: "雑誌記者", cat:8, },
      {id:100, name: "小説作家", cat:8, },
    ],
    searchPlaceInput: '',
    selectedPlace:[],
    searchPlaceMode: false,
    placeList:[
      { id:1, name: "池袋"},
      { id:2, name: "大塚"},
      { id:3, name: "巣鴨"},
      { id:4, name: "駒込"},
      { id:5, name: "田端"},
      { id:6, name: "西日暮里"},
      { id:7, name: "日暮里"},
      { id:8, name: "鶯谷"},
      { id:9, name: "上野"},
      { id:10, name: "御徒町"},
      { id:11, name: "秋葉原"},
      { id:12, name: "神田"},
      { id:13, name: "東京"},
      { id:14, name: "有楽町"},
      { id:15, name: "浜松町"},
      { id:16, name: "田町"},
      { id:17, name: "品川"},
      { id:18, name: "大崎"},
      { id:19, name: "五反田"},
      { id:20, name: "恵比寿"},
      { id:21, name: "渋谷"},
      { id:22, name: "原宿"},
      { id:23, name: "代々木"},
      { id:24, name: "新宿"},
      { id:25, name: "新大久保"},
      { id:26, name: "高田馬場"},
      { id:27, name: "目白"},
    ],
    chartList:[
      {
        name: 'FUJITSU TARO',
        tags: ['エンジニア', 'デザイン', 'UI/UX'],
        place: ['渋谷', '品川'],
      },
      {
        name: 'FUJITSU ZIRO',
        tags: ['雑誌記者', 'ジャーナリスト'],
        place: ['渋谷', '浜松町'],
      },
      {
        name: 'FUJITSU TARO',
        tags: ['エンジニア', 'デザイン', 'UI/UX'],
        place: ['渋谷', '品川'],
      },
      {
        name: 'FUJITSU ZIRO',
        tags: ['雑誌記者', 'ジャーナリスト'],
        place: ['渋谷', '浜松町'],
      },
      {
        name: 'FUJITSU TARO',
        tags: ['エンジニア', 'デザイン', 'UI/UX'],
        place: ['渋谷', '品川'],
      },
      {
        name: 'FUJITSU ZIRO',
        tags: ['雑誌記者', 'ジャーナリスト'],
        place: ['渋谷', '浜松町'],
      },
    ]
  },
  methods:{
    searchTags(e) {
      setTimeout(function () {
        if (this.searchTagInput.length > 0) {
          this.searchTagMode = true;
        }else{
          this.searchTagMode = false;
        }
      }.bind(this), 300);
    },
    removeTags(num){
      this.selectedTab.splice( num , 1 );
    },
    searchTagSubmit(){
      if(this.selectedTab.length > 0){
        this.searchSubmit = true
      }else{
        alert('1つ以上のタグを選択してください！');
      }
    },
    searchPlace(e) {
      setTimeout(function () {
        if (this.searchPlaceInput.length > 0) {
          console.log(this.searchTagInput);
          this.searchPlaceMode = true;
        }else{
          this.searchPlaceMode = false;
        }
      }.bind(this), 300);
    },
    removePlace(num){
      this.selectedPlace.splice( num , 1 );
    },
    searchPlaceSubmit(){
      if(this.selectedPlace.length > 0){
        this.searchSubmit = true
      }else{
        alert('1つ以上のエリアを選択してください！');
      }
    },
  },
  computed: {
    filteredTags: function() {
      query = this.searchTagInput; // テキストフィールドの値を変数に格納
      return this.tagList.filter( function( tags ) {
        return tags.name.indexOf( query ) !== -1
      })
    },
    filteredPlace: function() {
      query = this.searchPlaceInput; // テキストフィールドの値を変数に格納
      return this.placeList.filter( function( place ) {
        return place.name.indexOf( query ) !== -1
      })
    },
  }
})
