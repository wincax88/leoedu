/**
 * Created by michael on 16/4/27.
 */
window.onload = function(){
    $.getJSON('/book/get_anonymous_user', {}, function(result){
        WKIT.init({
            uid: result['userid'],
            appkey: result['appkey'],
            credential: result['password'],
            touid: result['touid'],
            sendMsgToCustomService: true,
            groupId: result['groupid'],

            // autoMsg: 'Hi~',
            welcomeMsg: '<p class="big"><span class="blue">理优1对1</span>是专业中小学在线1对1辅导机构。</p><p>汇聚来自全国的1500位金字塔顶尖的理科教研员名师，为全国中小学生提供最优质的教学服务！</p><p class="big red">理优1对1，理科提分王，为满分努力！</p><p>咨询热线：400-169-3070</p><p class="big"><span class="red">[</span>资深教研员专业指导<span class="red">]</span></p><p>小学1-6年级：奥数英语培优，冲刺重点初中<br>初中1-3年级：全科目全程跟踪，中考志愿合理化建议<br>高中1-3年级：把握学科重点，冲刺重点院校<br>详情咨询在线客服老师<br>家长您好！ 我是理优1对1的王老师，很高兴为您服务! <br>请问您想要咨询：</p><p class="red">1. 免费获取学习资料</br>2. 暑期免费十节衔接课</br>3. 试听1对1冲刺课程</br>4. 三节精品1对1冲刺课程（9.9元）</br>5. 参加测评</p>'

        });
    });
}