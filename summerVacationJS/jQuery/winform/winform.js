/*  javascript code for winform  */
//  function WinForm(){}

var MenuItem = function(settings){
  settings = settings || {};        //없으면 빈객체
  this.text = settings.text || '';  //없으면 빈값
  this.onclick = settings.onclick || function(){return false;};  //없으면 아무것도 안함
  this.$el = $('<li class = "app_main_menu_item">' + this.text + '</li>');  //처음 this 는 li의 domElement가 되기에->text라는 element가 없기에
  this.$el.click(this.onclick.bind(this));  //  undefind가 떠서 bind로 제대로 부름 어째서? -> this라고 하는 키워드의 주체(대상)을 바꿈 MenuItem이 this로 가르키게...
  
};


var MainMenuBar = function(){ //mainmenubar를
    this.menuList = [];
    this.$el = $('<ul class = "app_main_menu_bar"></ul>'); //mainmenubar tag inject
};

MainMenuBar.prototype.hide = function(hide){
    hide ? this.$el.fadeOut(3000) : this.$el.fadeIn(3000);
};
MainMenuBar.prototype.addMainMenu = function(menuItem){
  this.menuList.push(menuItem);
  this.$el.append(menuItem.$el);
};
var WinForm = function(tagId){
  tagId = tagId || '';
  if(tagId == ''){
    throw new Error('need a tag id');
  } //end of if
  this.$el = $(tagId);    //jQuery객체 라는것을 인지하기위해 $를 붙여줌
  this.mainMenuBar = new MainMenuBar();
  this.$el.append(this.mainMenuBar.$el);
  this.$el.css('user-select','none'); //마우스로 눌러도 선택이 안되게 해줌
};

//public method를 만드는 방법
//WinForm.setBackgroundColor = function(color){}   //1
WinForm.prototype.backgroundColor = function () {  //2
  if(arguments.length == 0){
    return this.$el.css('backgroundColor');
  } //end of if
  this.$el.css('backgroundColor' ,arguments[0]);
};
//1,2의 차이점 = 1은 인스턴스를 또 만들면 만든 인스턴스에 만든 메서드들이 또 만들어짐
//              2는 인스턴스 객체를 또 만들어도 기존에 있던 메서드들을 사용하기 때문에 메모리 효율이 좋음
//              == 같은 메서드를 공용으로 사용할 경우 prototype으로 만들어 주는게 용량이 훨씬 적게먹음
