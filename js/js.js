

var imgs = document.getElementsByClassName("img-item");
var lightBoxContainer = document.getElementById("lightBoxContainer");
var temp = '<i id="close" class="fas fa-2x fa-window-close"></i><div id="lightBoxItem" class="px-1 d-flex justify-content-between align-items-center"><i id="prev" class="fas fa-2x fa-arrow-alt-circle-left"></i><i id="next" class="fas fa-2x fa-arrow-alt-circle-right"></i></div>';
var imgArray = [];
var nom = 0;


for (var i = 0 ; i < imgs.length ; i++)
    {
        
        imgArray[i]=imgs[i];
        imgs[i].addEventListener("click" , function(e){
            
            lightBoxContainer.classList.add("lightbox-container");
            
            var imgSrc = e.target.src;
            lightBoxContainer.innerHTML = (temp);

            
            var lightBoxItem = document.getElementById("lightBoxItem");

            lightBoxItem.classList.add("lightbox-item");
            
            lightBoxItem.style.backgroundImage ="url("+imgSrc+")"; 

            nom = imgArray.indexOf(e.target);
            nextSlide();
            prevSlide();
            closeSlide();

        })
    }


    
function nextSlide()
{
    var next = document.getElementById("next");
    next.addEventListener("click" , function(){

        nom++;
        
        if (nom == imgArray.length)
        {
            nom = 0;
        }
        lightBoxItem.style.backgroundImage ="url("+imgArray[nom].src+")"; 
    })

}

function prevSlide()
{
    var prev = document.getElementById("prev");
    prev.addEventListener("click" , function(){

        nom--;
        if (nom == -1)
        {
            nom = imgArray.length - 1;
        }
        lightBoxItem.style.backgroundImage ="url("+imgArray[nom].src+")"; 

    })

}

function closeSlide()
{
    var closeWindow = document.getElementById("close");
    closeWindow.addEventListener("click" , function(){

        close();
        closeWindow.style.display = "none";
        next.style.display = "none";
        prev.style.display = "none";
    })
}

function close()
{
    lightBoxContainer.classList.remove("lightbox-container");
    lightBoxItem.classList.remove("lightbox-item");


}

document.addEventListener("keydown" , function(e){

    if(e.keyCode == 27)
    {
        var closeWindow = document.getElementById("close");
        close();
        closeWindow.style.display = "none";
        next.style.display = "none";
        prev.style.display = "none";
    }

    else if(e.keyCode == 39)
    {
        nom++;
    
        if (nom == imgArray.length)
        {
            nom = 0;
        }
        lightBoxItem.style.backgroundImage ="url("+imgArray[nom].src+")";
    }

    else if(e.keyCode == 37)
    {
        nom--;
        if (nom == -1)
        {
            nom = imgArray.length - 1;
        }
        lightBoxItem.style.backgroundImage ="url("+imgArray[nom].src+")"; 

    }


})