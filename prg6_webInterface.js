
const list_movies=[]
function putData(){
    var movie_data={}
    var casts={}
    movie_data.id=document.getElementById('id').value;
    movie_data.name=document.getElementById('name').value;
    casts.hero=document.getElementById('hero').value;
    casts.heroine=document.getElementById('heroine').value;
    casts.villian=document.getElementById('villian').value;
    movie_data.casts=casts;
list_movies.push(movie_data)
console.log(list_movies)
}

function getData(){
    for (let i=0;i<list_movies.length;i++){
        var m_name=document.getElementById('get_name').value;
        console.log(m_name)
        if(list_movies[i].name==m_name){
            console.log(list_movies[i])
          // let e=JSON.stringify(list_movies[i])
            document.getElementById('output').value="movie_id: "
            document.getElementById('output').value+=list_movies[i].id;
            console.log(list_movies[i].id,"heyy")
            document.getElementById('output').value+="\n"
            document.getElementById('output').value+="movie_name: "
            document.getElementById('output').value+=list_movies[i].name;
            document.getElementById('output').value+="\n"
            document.getElementById('output').value+="movie_hero: "
            document.getElementById('output').value+=list_movies[i].casts.hero;
            document.getElementById('output').value+="\n"
            document.getElementById('output').value+="movie_heroine: "
            document.getElementById('output').value+=list_movies[i].casts.heroine;
            document.getElementById('output').value+="\n"
            document.getElementById('output').value+="movie_villian: "
            document.getElementById('output').value+=list_movies[i].casts.villian;

        }
        // else{
        //     document.getElementById('output').value="no such element present :("
        //     console.log("no such element present :(")
        // }
    }
}