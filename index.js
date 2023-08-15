const posts = [];

const TITLE_VALIDATION_LIMIT = 100;
const TEXT_VALIDATION_LIMIT = 200;

const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.getElementById('validationMessage');


newPostBtnNode.addEventListener('click', function() {

  const PostFromUser = getPostFromUser();

  addPost(PostFromUser);

  renderPosts();
});



postTitleInputNode.addEventListener('input', validation);

postTextInputNode.addEventListener('input',validation);


function validation() {
  const titleLen = postTitleInputNode.value.length;
  const textLen = postTextInputNode.value.length;

  if (titleLen > TITLE_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длинна заголовка не должна привышать ${TITLE_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove("validationMessage_hidden");
    return;
  }

  if (textLen > TEXT_VALIDATION_LIMIT) {
    validationMessage.innerText = `Длинна текста не должна привышать ${TEXT_VALIDATION_LIMIT} символов`;
    validationMessage.classList.remove("validationMessage_hidden");
    return;
  }
    validationMessage.classList.add("validationMessage_hidden");

}

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
      title: title,
      text: text
    };
}

function addPost({ title, text }) {
    const currentDate = new Date();
    const dt = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    posts.push({
        dt,
        title,
        text,
    });
}

function getPosts() {
    return posts;
}

function renderPosts(){
    const posts = getPosts();

    let postsHTML = '';

    posts.forEach(post => {
      postsHTML +=  `
        <div class='post'>
          <p class='post__date'>${post.dt}</p>  
          <p class='post__title'>${post.title}</p>  
          <p class='post__text'>${post.text}</p>  
        </div>
      `
    });

    postsNode.innerHTML = postsHTML;
}











