/**
 * Created by michael on 4/23/16.
 */


$(function(){
    //tab栏
    $('.l_con_le li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.l_con_r .r_list').eq($(this).index()).show().siblings().hide();
    });
})

window.onload=function(){
    var oDiv1=document.getElementById('left');
    var oDiv2=document.getElementById('right');
    var aHeight1=oDiv1.offsetHeight;
    var aHeight2=oDiv2.offsetHeight;
    oDiv2.style.height=aHeight1-66+'px';

}
