function ItemMaker(author, url, title, utc){
     this.title = title;
     this.description = 'LOREM IPSUM DORSET AMEST LOREM IPSUM DORSET AMEST LOREM IPSUM DORSET AMEST LOREM IPSUM DORSET AMEST LOREM IPSUM DORSET AMEST';
     this.url = url;
     this.author = author;
     this.date_utc = utc;
}

var arr = []
var arr2 = [];

function fill(data) {
    for(var key in data) {
        if(key === 'data') {
            for(var prop in data[key]){
                if(prop === 'title'){
                    arr.push(data[key][prop]);
                } else if(prop === 'author') {
                    arr.push(data[key][prop]);
                } else if (prop === 'created_utc') {
                    arr.push(data[key][prop]);
                } else if(prop === 'preview'){
                    arr.push(data[key][prop]['images'][0]['resolutions'][0]['url']);
                }
            }
        }
    }
   var a = new ItemMaker(arr[0], arr[1], arr[2], arr[3]);
   arr2.push(a);
}

data.forEach(function(item) {
    fill(item);
})