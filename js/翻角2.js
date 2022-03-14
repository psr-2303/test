var canvas = document.querySelector('.myCanvas');
    var ctx = canvas.getContext('2d');
    var cw = 200;
    var ch = 200;
    var percent = 0;
    var points = {
        x1: 100,
        y1: 0,
        x2: 100,
        y2: 0
    }
    var speed = 1;
    var aSpeed = 0.1;
    ctx.moveTo(0, 0);
    ctx.strokeStyle = 'black';
    ctx.strokeWidth = 1;
    ctx.save();
    var deg = Math.PI / 180;

    function start(type) {
        if (type === 'show') {
            points = {
                x1: 80,
                y1: 0,
                x2: 0,
                y2: 0
            }
            aSpeed = .1;
            speed = 1;
        } else {
            // 		绘画的那个展开位置
            points = {
                x1: 100,
                y1: 0,
                x2: 0,
                y2: 0
            }
            aSpeed = -.1;
            speed = -1;
        }
        draw(points, type);
    }

    function draw(points, type) {
        var disX = Math.floor(points.x2 - points.x1);
        var disY = Math.floor(points.y2 - points.y1);
        if (disY < 0 && type == 'hide') {
            //console.log('改展开动画了');
            ctx.clearRect(0, 0, cw, ch);
            setTimeout(function () {
                start('show');
            }, 2000)
            return;
        } else if (disY > 50 && type == 'show') {
            //console.log('改收起动画了');
            setTimeout(function () {
                start('hide');
            }, 2000)
            return;
        }
        ctx.clearRect(0, 0, cw, ch);
        drawPageCorShow(points, disX, disY);
        drawPageCor(points, disX, disY);
        window.requestAnimationFrame(function () {
            draw(points, type);
        })
    }

    function drawPageCorShow(points, disX, disY) {
        ctx.save();
        ctx.beginPath();
        //闭合三角形
        ctx.moveTo(points.x1, points.y1);
        ctx.lineTo(points.x2, points.y1);
        ctx.lineTo(points.x2, points.y2);

        ctx.lineTo(points.x1, points.y1);
        ctx.closePath();
        ctx.strokeStyle = "#080";
        ctx.stroke();
        ctx.fillStyle = '#';
        ctx.fill();
        //重叠模式
        ctx.globalCompositeOperation = 'source-atop';
        // 	ctx.globalCompositeOperation = 'destination-atop';
        ctx.beginPath();
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.translate(18, 15);
        ctx.rotate(-20 * deg);
        ctx.fillStyle = '#fff';
        ctx.fillText('筷子社', 0, 0);
        ctx.closePath();
        ctx.restore();
    }

    function drawPageCor(points, disX, disY) {
        ctx.save();
        ctx.beginPath();
        //移動到位置 左上
        // 	ctx.moveTo(points.x1, points.y1);
        //画第一个曲线
        // 	ctx.quadraticCurveTo(points.x1 + (disX / 10), points.y1 + disY / 10, (points.x1 + disX / 10), points.y1 + disY / 2);
        //直线向下
        // 	ctx.lineTo(points.x1 + disX / 10, points.y2 - (disY / 5));
        //半圆向右
        // 	ctx.arc(points.x1 + disX / 5, points.y2 - (disY / 5), disY / 10, deg * 180, deg * 90, true);
        // 直线向右
        ctx.lineTo(points.x2 - disX / 2, points.y1 - (disX / 2))
        //曲线向右
        ctx.quadraticCurveTo(points.x2 - disX / 10, points.y2 - (disY / 10), points.x2, points.y2);
        //闭合图形
        ctx.lineTo(points.x1, points.y1);
        ctx.closePath();
        // 	核心

        
        var gradient = ctx.createLinearGradient(points.x1, points.y2, points.x2 + (disX / 2), points.y1 + disY / 2);
        // 			线性渐变效果
        	gradient.addColorStop(0, '#BBDEFB');
        	gradient.addColorStop(0.7, '#fff');
        gradient.addColorStop(1, '#000');
        ctx.fillStyle = gradient;
        // 		ctx.fillStyle = pat;
        ctx.fill();
        ctx.restore();
        //更新速度位置
        points.x2 -= speed;
        points.y2 += speed;
        speed += aSpeed;
    }
    start('show');