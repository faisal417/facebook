// get elements

const postAddform=document.getElementById('postAddform');
const msg= document.querySelector('.msg');
const allPosts= document.querySelector('.allPosts');


// get all post
const getAllPost=()=>{

    let post = readlsData('fb-post');
    let list='';

    post.reverse().map((data)=>{
        list +=`
        <div class="card shadow-sm my-3">
        <div class="card-body">
            <div class="postAuthArea">
                <div class="userInfo">
                    <img src="${data.aphoto}" alt="">
                    <div class="userDetails">
                        <span class="userName d-block">${data.aname}</span>
                        <span>Just Now</span>
                        . <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh cyypbtt7 fwizqjfa" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                    </div>
                </div>
                <div class="dropdown">
                    <a class="dropdown-toggle" data-bs-toggle="dropdown" href="#">
                        <i class="fas fa-ellipsis-h"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item edit" href="#">Edit</a></li>
                        <li><a class="dropdown-item delete" href="#">Delete</a></li>
                      </ul>
                   
                </div>
            </div>

            <div class="postContentArea my-3">
                <div class="postContent">
                    <p>${data.pcontent}</p>
                </div>
            </div>

        </div>
            <div class="postImage">
                <img src="${data.pphoto}" alt="">
            </div>

            <div class="card-footer">
                <div class="contentButton">
                    <hr class="firstHr">
                    <div class="reaction">
                        <div class="like reactionButton">
                            <span><i class="fas fa-thumbs-up"></i></span>
                            <span>Like</span>
                        </div>
                        <div class="comment reactionButton">
                            <span><i class="bi bi-chat-square"></i></svg>
                            </span>
                            <span>Comment</span>
                        </div>
                        <div class="share reactionButton">
                            <span><i class="fas fa-share"></i></span>
                            <span>Share</span>
                        </div>
                    </div>
                    <hr class="lastHr">
                </div>
            </div>
        </div>
        `
    });

    allPosts.innerHTML=list;

}
getAllPost();



// post form submit
postAddform.onsubmit=(e)=>{
    e.preventDefault();

// get form data
    let formData= new FormData(e.target);
    let data= Object.fromEntries(formData.entries());
    let {aname, aphoto, pcontent, pphoto}= Object.fromEntries(formData.entries());

//form validation

if( !aname || !aphoto || !pcontent ){
    msg.innerHTML=setAlert('All fields are required')
}else{
    createLsData('fb-post', data);
    e.target.reset();
    getAllPost();
};
    
}