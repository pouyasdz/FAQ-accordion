function handleClick (event){
    if(event.classList.contains("plus"))
    {
        event.classList.remove("plus");
        event.classList.add("minus");
    }
    else{
        event.classList.remove("minus");
        event.classList.add("plus");
    }

    const item =  event.parentElement.parentElement;
    const detail = item.lastElementChild;
    detail.classList.contains("hidden") ? detail.classList.remove("hidden") : detail.classList.add("hidden");
}