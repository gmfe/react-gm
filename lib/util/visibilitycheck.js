export default function(dom) {

    var topInRange = false;
    var leftInRange = false;

    // dom各边距离 窗口顶边、左边的距离
    var BCR = dom.getBoundingClientRect();

    if ( BCR.top < window.innerHeight && BCR.bottom > 0 )
        topInRange = true;

    if ( BCR.left < window.innerHeight && BCR.right > 0 )
        leftInRange = true;

    return topInRange && leftInRange;
}