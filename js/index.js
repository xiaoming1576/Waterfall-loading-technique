/**
 * Created by Administrator on 2018/2/24.
 */
//alert($);
var i=0;//做循环变量
//定义一个数组来保存图片的路径
var arr = [
    {src:"images/1.png"},
    {src:"images/2.jpg"},
    {src:"images/3.jpg"},
    {src:"images/4.jpg"},
    {src:"images/5.jpg"},
    {src:"images/6.jpg"},
    {src:"images/7.jpg"},
    {src:"images/8.jpg"},
    {src:"images/9.jpg"},
    {src:"images/10.jpg"},
    {src:"images/11.jpg"},
    {src:"images/12.jpg"}
];
//create();//执行这个功能
function create(){//封装一个函数来动态的添加图片
    var oImg = new Image();//新建一个图片对象 用一个自定义的变量oImg保存
    //  0/12=0 余0 , 1/12=0 余1  ， 2/12=0 余2  ，12/12=1 余0  ，13/12=1 余1
    oImg.src=arr[i%arr.length].src;//把数组里面的图片路径赋值给图片对象
    oImg.style.cssText="opacity:0;transform:scale(0)";//给图片对象添加css3变换缩放属性
    //把生成的这个图片对象添加到高度最小的li里面
    getList().append(oImg);//获取高度最小的li的功能
    //延迟改变缩放值
    setTimeout(function(){
        oImg.style.cssText="opacity:1;transform:scale(1)";
    },100);
}
//console.log(getList());
function getList(){
    var oLi =$("#box ul li");//选择到所有的li
    var h = Infinity;//无限高
    var list;//定义一个变量来保存判断成功的li
    for(var i=0;i<oLi.length;i++){
        //oLi.eq(i)选择到具体的某一个li
        if(oLi.eq(i).height() < h){//比较判断出高度最小的li
            h=oLi.eq(i).height();//比较出高度小的元素 用h保存值
            list = oLi.eq(i);//保存高度最小的li
        }
    }
    return list;//让函数输出元素
}
//动态添加图片
var sum;
function upload(){//定义一个功能函数来加载图片
    if(i<12){
        for(;i<12;i++){
            create();//执行这个功能
        }
    }else{
        sum=i;
        for(;i<sum+3;i++){
            create();
        }
    }
    i++;//i=i+1
}
upload();
//和浏览器的滚动条关联
var h;//保存文档高度
var t;//保存滚动条高度
var H=$(window).height();//获取浏览器窗口可视区域的高度
$(window).scroll(function(){
    h=$(document).height();
    t=$(window).scrollTop();
    if(t+H+50>h){
        upload();
    }
});



