window.addEventListener('load',function(){
    // 获取元素
    let arrow_l = this.document.querySelector('.arrow-l');
    let arrow_r = this.document.querySelector('.arrow-r');
    let focus = this.document.querySelector('.focus');
    let focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        // 鼠标经过隐藏
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function(){
        // 鼠标经过隐藏
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function(){
            // 手动调用点击事件
            arrow_r.click();
        },5000)

    });

    // 动态生成小圆圈
    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('.circle');
    // console.log(ul.children.length)
    for(let i = 0; i < ul.children.length; i++){
        // 创建一个小li
        let li = document.createElement('li');
        // 记录当前小圆圈的索引号
        li.setAttribute('index',i);
        // 把小li插入ol里面
        ol.appendChild(li);
        // 直接绑定
        li.addEventListener('click',function(){
            for(let i = 0; i < ol.children.length; i++ ){
                ol.children[i].className = '';
            }
            this.className = 'current'
            // 点击小圆圈 移动图片 移动的是ul
            // ul的移动距离是小圆圈的索引号 乘以 图片的宽度
        //    点击 li 某个li 就能拿到索引号
            let index = this.getAttribute('index');
            // 当点击某个li 就要把这个li 的索引号给num
            num = index;
            // 当点击某个li 就要把这个li 的索引号给circle
            circle = index;
             console.log(focusWidth);
             console.log(index)
            animate(ul,-index*focusWidth);
        })
    }
    // 把ol里面的第一个li设置类名为current
    ol.children[0].className = 'current';
    // 6.克隆第一张图片
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first)
    // 7.点击右侧按钮 图片滚动一张
    let num = 0;
    // circle 控制小圆圈
    let circle = 0;
    arrow_r.addEventListener('click',function(){
        // 
        if(num == ul.children.length - 1){
            ul.style.left = 0;
            num = 0;
        }
       num++;
       animate(ul, -num * focusWidth);
    //    8.在声明一个变量控制小圆圈
    circle++;
    if(circle ==  ol.children.length){
        circle = 0;
    }
    circleChange();
    });
// 9.左侧按钮
    arrow_l.addEventListener('click',function(){
        // 
        if(num == 0){
            num = ul.children.length - 1;
            ul.style.left = -num  * focusWidth + 'px';
        }
       num--;
       animate(ul, -num * focusWidth);
    //    8.在声明一个变量控制小圆圈
    circle--;

    if(circle < 0){
        circle = ol.children.length - 1;
    }
    // 调用函数
    circleChange();
   
    });
    function circleChange(){
         // 先清除其他小圆圈
    for(let i = 0; i < ol.children.length; i++ ){
        ol.children[i].className = '';
    }
    ol.children[circle].className = 'current';
    }
    // 10自动播放
    let timer = this.setInterval(function(){
        // 手动调用点击事件
        arrow_r.click();
    },5000)



    let  keyword=document.getElementById("keyword");
    keyword.onfocus=function(){
      if(this. placeholder=="音乐/视频/电台/用户"){
        this. placeholder="";
        this.style.outline = 'none';
      } 
    }
    keyword.onblur=function(){
      if(this. placeholder==""){
        this. placeholder="音乐/视频/电台/用户";
      } 
    }

})


