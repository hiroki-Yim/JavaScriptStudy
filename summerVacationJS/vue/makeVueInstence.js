//el에 id값 전달 -> 알고싶을 때 $el로 접근가능 ->결과값으로 getElementById의 dom객체가 리턴됨
//watch 메서드 -> 값이 바뀌면 실행

var app = new Vue({
  el:'#app',
  data:{
    rawHtml : '<span style = "color:red">This should be red.</span> '
  }
});

var app2 = new Vue({
  el:'#app2',
  data:{
    message : '바뀔 메세지'
  //reversedMessage: '지세메 뀔바' 처럼 저장됨
  },
  computed:{
    reversedMessage : function(){
      return this.message.split('').reverse().join('');
    } //저장되어 다음에 나올 때 빠르게 나옴
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    message: 'hi',
    now : Date.now(),
    now2 : Date.now()
  },
  methods: {
    getDate : function() {
      this.now2 = Date.now();
    }
  }
  // computed:{
  // //  now : function(){return Date.now();}//저장된 값 계속 불러오는 형식
  // },
});
