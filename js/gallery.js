var photoListElement = document.querySelector("#photos");

var photoList = [//リストの中に写真を追加
    {src: "img/200705.png", title: "7月"},
    {src: "img/200806.png", title: "8月"},
    {src: "img/走る大根.jpg", title: "大根2"},
	{src: "img/200902.png", title: "9月"},
	{src: "img/201008.png", title: "もう1回8月"},
    {src: "img/front.png", title: "前"},
    {src:	"img/side.png", title: "横"},
    {src: "img/side2.png", title: "大根"}
];

var isReady = function(){
    return photoListElement != null &&
        photoList != null &&
        photoList.length > 0;
};

var renderPhoto = function(index){
    var photo = photoList[index];
    var elm = document.createElement("img");
    elm.setAttribute("src", photo.src);
    elm.setAttribute("title", photo.title);
    return elm;
};

var showPhotos = function(){
    if(isReady()){
        var index = 0;
        while(index < photoList.length){//リストを増やした分だけlenghtも増えたから正常に表示される
            var elm = renderPhoto(index);
            photoListElement.appendChild(elm);
            index = index + 1;
        }
    }
};

var initApp = function(){
    var btn = document.querySelector("#startButton");
    btn.addEventListener("click", showPhotos);
};

initApp();
