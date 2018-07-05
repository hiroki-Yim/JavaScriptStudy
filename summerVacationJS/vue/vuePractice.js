//  클라이언트 사이드 언어
//  {{}} 출력문
//  먼저 vue와 태그를 연결 해야함
Vue.config.devtools = true;

var app = new Vue({
  el: '#app-3', //태그 속성을 나타냄  Vue태그를 어느기준으로 만들것인가
  data: {
    seen : true,  //or false
    title : 'This is Title',
    message: 'Hello Vue!',
    thisis : 'Nice Language'
  }
});
app.seen = true;
app.message = " 楽しい～ ";

var app2 = new Vue({
  el: '#app-2',
  data:{
    message: 'Hi~!',
    thisis : 'spectacle Language'
  }
});

var app4 = new Vue({
  el: '#app-4',
  data:{
    todos : [
      {text : 'vue'},
        {text : '에서의'},
          {text : 'for'},
            {text : 'in'},
              {text : '문 사용법'}
            ],  //vue에서의 객체배열 for문
    objects : [
      {obj : 'yeah'},
      {obj : 'very'},
      {obj : 'well'}
    ]
  }
});

app4.objects.push({obj:'push'});

var app5 = new Vue({
  el:'#app-5',
  data:{ message:'HELLOW Korea uhla' },
  methods:{
  reverseMessage:function(){
    this.message = this.message.split('').reverse().join('');
    }
  }
});

var app6 = new Vue({
  el:'#app-6',
  data:{ message:'HELLOW Korea uhla' }

});

Vue.component('my-tag',{
  template : '<div><p>mytag1</p><p>mytag2</p></div>'
});
var app7 = new Vue({  //객체와 연결시켜 줘야 사용가능
  el:'#app-7',
});
