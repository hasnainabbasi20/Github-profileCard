
var getOuter_box=document.querySelector('#outer_box')
var getProfile = document.querySelector('#profile')

function showProfile(){
    fetch(`https://api.github.com/users/${getProfile.value}`)

.then (function(data){
    return data.json()
})

.then(function(data){
    console.log(data)

                          
                 
             
                          getOuter_box.innerHTML=`<img src=" ${data.avatar_url}" alt="" class="image"></img>
                                                  <h5 class="name">${data.name}</h5>
                                                  <p class="bio"> ${data.bio}</p>
                                                  <div class="icon">
                                                        <a href="${data.html_url}"><img src="assest/images/github.png" class="github_img"></a>
                                                        <a href="${data.followers_url}"><img src="assest/images/follower.png" class="github_img"></a>
                                                        <a href="${data.following_url}"><img src="assest/images/following.png" class="github_img"></a>
                                                    </div> 
                                                  `
           getProfile.value=''                                       
                                           
})

.then(function(error){
    console.log(error)
})
}