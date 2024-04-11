function handleClick (event){
    const hostPath = window.location.protocol +"//"+ window.location.host;
    const iconMinus =  hostPath+"/assets/images/icon-minus.svg";
    const iconPlus = hostPath+"/assets/images/icon-plus.svg";

    if(event.src == iconPlus) event.src = iconMinus;
    else event.src = iconPlus;
    const item =  event.parentElement.parentElement;
    const detail = item.lastElementChild;
    detail.classList
}