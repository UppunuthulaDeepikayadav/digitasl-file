var num=0;
var imageArr=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8jpg","9.jpg"]
var headerTag=document.querySelector("header")
function autoSlide()
{
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else{
        num=0;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    setTimeout(autoSlide,5000)
}
autoSlide()
function SliderRight()
{
    num++;
    if(num<=imageArr.lenght-1)
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else{
        num=0;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
}
function SliderLeft()
{
    num--;
    if(num<0)
    {
        num=imageArr.lenght-1;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
}