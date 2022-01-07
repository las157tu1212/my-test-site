let cardList=[]; //カードリスト
let cardNum=[];//カードナンバー
  for(i=1; i<14;i++){
    cardNum.push(i);
    cardNum.push(i);
    cardNum.push(i);
    cardNum.push(i);
  };

var img = ["club_","diamond_","heart_","spade_"]; //トランプ絵柄
  for(i=0;i<cardNum.length;i++){
    for(m=0; m<48; m++){
    var x=img[m];
    img.push(x);
  }break;
  };

var randomArr = []; //乱数52個
let number; //めくったカードの数字
var flip = 0;//めくったかどうか
var flipA =""; //一枚目
var flipB =""; //二枚目
var card; //HTMLのcard
var cardA;//一枚目に引いたカードの場所
var card_back;//裏面
var numberA;//カードの数字
var numberB;//絵柄



 //カード裏を表示
function loadFunc(){
  for(num = 0; num < 52 ; num++){
    var card_back = document.getElementsByClassName("back");
    card_back[num].innerHTML = '<img src="card/back.png">';
    card_back[num].addEventListener ('click',{name: num,handleEvent: clickFunc});
  }
};


function clickFunc(placeNum){    //クリックしたら
  flip++
  var placeNum = this.name;
  card_back = document.getElementsByClassName("back");
  numberA = cardNum[randomArr[placeNum]];//カード番号
  numberB = img[randomArr[placeNum]];//絵柄

  if(card_back[placeNum].classList.contains('card')){ //cardが含まれたら
    return flip--;
  };
   switch (flip) {
     case 1:
       imgFunc(placeNum,numberB,numberA);//カードを表向ける
       card = document.getElementsByClassName("card");
        flipA = numberA; //カードの数字を記憶
        cardA = placeNum; //引いた場所を記憶
      break;

      case 2:
        imgFunc(placeNum,numberB,numberA);
        flipB = numberA;
        if(cardA != placeNum){
        if(flipA == flipB){
          setTimeout(timerA,700,cardA,placeNum);

          break;}
        }else{
          setTimeout(timer,700,cardA,placeNum);

          break;};
        setTimeout(timer,700,cardA,placeNum);
        break;

      default:
      break;
      
   }
  };


while(randomArr.length < 52){ //配列作成
   var ran = randomFunc();
  if(!randomArr.includes(ran)){
   randomArr.push(ran);
}
};

function randomFunc(){ //乱数を作って返す
  return Math.floor(Math.random()*52);
}

function imgFunc(num,x,y){ //カードを表向ける
  card_back[num].classList.add("card");
  card_back[num].innerHTML = '<img src="card/' + x + y +'.png">';
};

var timerA = function removeFunc(cardA,placeNum){
  flip = 0;
  card_back[cardA].innerHTML = "";
  card_back[placeNum].innerHTML = "";
};

var timer = function clearFunc(fA,fB){
  card = document.getElementsByClassName("card");
  card_back[fA].classList.remove("card");
  card_back[fB].classList.remove("card");

  card_back[fA].innerHTML = '<img src="card/back.png">';
  card_back[fB].innerHTML = '<img src="card/back.png">';
  flip=0;
  flipA,flipB="";
};